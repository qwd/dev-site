# 和风天气开发者网站

这是和风天气开发者服务网站的源代码仓库，大多数情况你只需要直接访问 <https://dev.qweather.com> 即可。

## 改进文档

欢迎帮助我们改进文档质量，你可以直接修改下列文件并向我们提交 PR。感谢～

- API 文档由一个 OpenAPI 3.0 规格的文件生成，位于 `assets/openapi/qweather-apis-{lang}.yml`
- 其他文档位于 `content` 目录

## 本地运行

1.克隆

```
git clone https://github.com/qwd/dev-site.git
```

2.安装 [Node.js 22+](https://nodejs.org/en/download) 和 `.hugo-version` 中指定的 Hugo Extended。

3.安装依赖并启动本地服务：

```bash
cd repo_folder
npm install
npm start
```

4.浏览器访问 `http://localhost:1313/`

## 许可证

版权所有 © 和风天气

代码遵循 [MIT](https://github.com/qwd/docs/blob/master/LICENSE)，内容遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hans)



# QWeather Developers website

This is the source code repository for the QWeather Developer Services website. In most cases, you can just simply visit <https://dev.qweather.com>

## Improve documentation

You are welcome to help us improve the quality of this documentation. Please edit the following files directly and submit a PR to us. Thank you in advance.

- All API documentation is generated from an OpenAPI 3.0 specification file located at `assets/openapi/qweather-apis-{lang}.yml`.
- Other documentation is located in the `content` directory.

### Running locally

1.Clone this repo

```
git clone https://github.com/qwd/dev-site.git
```

2.Install [Node.js 22+](https://nodejs.org/en/download) and the Hugo Extended version specified in `.hugo-version`.

3.Install dependencies and start the local development server:

```bash
cd repo_folder
npm install
npm start
```

4.Open `http://localhost:1313/`

## License

Copyright © QWeather

[MIT](https://github.com/qwd/docs/blob/master/LICENSE) for code, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) for content.
