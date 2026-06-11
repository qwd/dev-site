# 和风天气开发平台网站

[和风天气开发平台](https://dev.qweather.com)的网站使用 [Hugo](https://gohugo.io/) 构建。

> 大多数情况你只需要直接访问 <https://dev.qweather.com>

## 如何本地运行dev.qweather.com

1.克隆

```
git clone https://github.com/qwd/dev-site.git
```

2. 安装 Node.js 22 和 `.hugo-version` 中指定的 Hugo Extended。

3. 安装依赖并启动本地服务：

```bash
cd repo_folder
npm install
npm run dev
```

4. 浏览器访问 `http://localhost:1313/`。

修改 OpenAPI YAML 或 `assets/openapi/examples` 下的 JSON 时，中间模型和 Hugo 页面会自动重新生成。

## 许可证

代码遵循[MIT](https://github.com/qwd/docs/blob/master/LICENSE)，内容遵循[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)

# QWeather Developers website

[dev.qweather.com](https://dev.qweather.com/en/) is built with [Hugo](https://gohugo.io/).

### Running locally

1.Clone this repo

```
git clone https://github.com/qwd/dev-site.git
```

2. Install Node.js 22 and the Hugo Extended version specified in `.hugo-version`.

3. Install dependencies and start the local development server:

```bash
cd repo_folder
npm install
npm run dev
```

4. Open `http://localhost:1313/`.

Changes to the OpenAPI YAML documents or JSON files under
`assets/openapi/examples` automatically regenerate the intermediate model and
reload the Hugo pages.

## License

[MIT](https://github.com/qwd/docs/blob/master/LICENSE) for code, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) for content.
