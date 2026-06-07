#!/usr/bin/env ruby

require "fileutils"
require "date"
require "yaml"

ROOT = File.expand_path("..", __dir__)
PLATFORMS = {
  "android" => {
    target: "/android-sdk-redirection/",
    repository: "https://github.com/qwd/qweather-android-sdk",
    title: "Android SDK 文档已迁移至 GitHub",
    description: "和风天气 Android SDK 文档已迁移至 GitHub 仓库，旧文档 URL 将跳转至此通知页。",
    heading_en: "Android SDK documentation has moved to GitHub"
  },
  "ios" => {
    target: "/ios-sdk-redirection/",
    repository: "https://github.com/qwd/qweather-ios-sdk",
    title: "iOS SDK 文档已迁移至 GitHub",
    description: "和风天气 iOS SDK 文档已迁移至 GitHub 仓库，旧文档 URL 将跳转至此通知页。",
    heading_en: "iOS SDK documentation has moved to GitHub"
  }
}.freeze

def front_matter(path)
  source = File.read(path).gsub("\r\n", "\n")
  match = source.match(/\A---\s*\n(.*?)\n---\s*(?:\n|\z)/m)
  raise "Missing front matter: #{path}" unless match

  YAML.safe_load(match[1], permitted_classes: [Date], aliases: true)
end

def deprecated_urls(platform)
  patterns = %W[
    docs/_zh/#{platform}-sdk/**/*.md
    docs/_en/#{platform}-sdk/**/*.md
  ]

  patterns.flat_map { |pattern| Dir.glob(File.join(ROOT, pattern)) }
    .map do |path|
      metadata = front_matter(path)
      if metadata.key?("permalink")
        permalink = metadata.fetch("permalink")
        next "/#{permalink.delete_prefix("/")}"
      end

      relative = path.delete_prefix(File.join(ROOT, "docs/")).sub(/\.md\z/, "")
      language, content_path = relative.split("/", 2)
      prefix = language == "_en" ? "/en/docs/" : "/docs/"
      "#{prefix}#{content_path}/"
    end
    .uniq
    .sort
end

def notice_page(platform, config, aliases)
  metadata = {
    "title" => config.fetch(:title),
    "description" => config.fetch(:description),
    "seoType" => "WebPage",
    "aliases" => aliases
  }
  heading_en = config.fetch(:heading_en)
  repository = config.fetch(:repository)

  <<~MARKDOWN
    ---
    #{YAML.dump(metadata).sub(/\A---\s*\n/, "").sub(/\n\.\.\.\s*\n\z/, "")}---

    旧版 #{platform == "ios" ? "iOS" : "Android"} SDK 文档已从开发者网站迁移至 GitHub。请访问以下仓库获取最新文档、示例代码、版本和问题追踪：

    [前往 #{platform == "ios" ? "iOS" : "Android"} SDK GitHub 仓库](#{repository})

    ## #{heading_en}

    The legacy #{platform == "ios" ? "iOS" : "Android"} SDK documentation has moved from the developer website to GitHub. Visit the repository below for current documentation, examples, releases, and issue tracking:

    [Open the #{platform == "ios" ? "iOS" : "Android"} SDK GitHub repository](#{repository})
  MARKDOWN
end

redirect_lines = []
mapping = {}

PLATFORMS.each do |platform, config|
  urls = deprecated_urls(platform)
  raise "Expected 74 #{platform} SDK URLs, found #{urls.length}" unless urls.length == 74

  mapping[platform] = { "target" => config.fetch(:target), "urls" => urls }
  redirect_lines.concat(urls.map { |url| "#{url} #{config.fetch(:target)} 301!" })

  output = File.join(ROOT, "content/zh/#{platform}-sdk-redirection.md")
  File.write(output, notice_page(platform, config, urls))
end

FileUtils.mkdir_p(File.join(ROOT, "data"))
File.write(File.join(ROOT, "data/sdk-redirects.yaml"), YAML.dump(mapping))

FileUtils.mkdir_p(File.join(ROOT, "static"))
File.write(File.join(ROOT, "static/_redirects"), redirect_lines.sort.join("\n") + "\n")

puts "Generated #{redirect_lines.length} SDK redirects."
