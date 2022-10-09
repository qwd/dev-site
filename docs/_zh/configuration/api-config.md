---
title: API配置
tag: [config, api]
ref: config-api
---

在开始使用和风天气API服务之前，你需要进行一些简单的配置和准备工作。

## 创建项目和KEY

请确保已经创建了项目和Web API KEY，否则请参考[项目和KEY](/docs/configuration/project-and-key/)。

## 了解API地址和参数

通常来讲，一个完整的API请求URL由scheme，host，port，path和query parameters组成。（当然，在不同程序中可能叫法不一样，我们仅以[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986)为参考）

```
https://api.qweather.com/v7/weather/now?location=xxx&key=xxx
\___/   \______________/\______________/\__________________/
scheme        host   (port)   path        query parameters 
```

- scheme: https
- host: api.qweather.com
- port: 443 （在和风天气开发服务中，所有端口均为443）
- path: /v7/weather/7d?
- query parameters: location=xxx&key=xxx （在和风天气开发服务中，多个参数使用`&`分割）

对于不同的订阅和数据，API host会有所不同，请以开发文档中的说明为准。

> **注意：**如果你使用的是免费订阅，必须使用免费订阅的API host: `devapi.qweather.com`。但地理信息服务除外，无论免费订阅还是付费订阅，都使用`geoapi.qweather.com`。
{:.bqwarning}

对于大部分开发者来说，构建一个API URL并非难事，但我们仍然强烈建议你阅读[最佳实践-优化请求](/docs/best-practices/optimize-requests/)文档，了解发送API请求的一些常见问题和经验。

## Gzip解压

请注意，和风天气开发服务的API均使用Gzip进行了压缩，这将极大的减少网络流量，加快请求。因此，当你在开发过程中，需要对返回的数据进行解压。请参考[最佳实践-Gzip](/docs/best-practices/gzip/)。

## 尝试一下

请复制并粘贴下列链接到你的浏览器中，看看返回了哪些内容。注意链接最后的参数`key`要换成你自己的KEY。

- 如果你使用的是标准订阅，请复制下列链接：
```
https://api.qweather.com/v7/weather/3d?location=101010100&key=这里替换成你的key
```

- 如果你使用的是免费订阅，请复制下列链接：
```
https://devapi.qweather.com/v7/weather/3d?location=101010100&key=这里替换成你的key
```

如果一切正常，我们打开终端再试一下，请复制并粘贴下列命令到你的终端中。注意代码最后的参数`key`要换成你自己的KEY。

- 如果你使用的是标准订阅，请复制下列代码：
```bash
curl -L -X GET --compressed 'https://api.qweather.com/v7/weather/3d?location=101010100&key=这里替换成你的key'
```
- 如果你使用的是免费订阅，请复制下列代码：
```bash
curl -L -X GET --compressed 'https://devapi.qweather.com/v7/weather/3d?location=101010100&key=这里替换成你的key'
```

好了，到此为止，API的配置和调试基本完成了，下一步请参考[开发文档](/docs/api/)，[实用资料](/docs/resource/)和[最佳实践](/docs/best-practices/)开始你的开发之旅吧！