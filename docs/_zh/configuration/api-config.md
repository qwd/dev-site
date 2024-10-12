---
title: API 配置
tag: [config, api]
ref: config-api
---

在开始使用和风天气API服务之前，你需要进行一些简单的配置和准备工作。

## 创建项目和凭据 {#create-project-and-credential}

请确保已经创建了项目和凭据，请参考[项目和凭据](/docs/configuration/project-and-key/)和[身份认证](/docs/authentication/)。

## 了解API地址和参数 {#understanding-api-url}

通常来讲，一个完整的API请求URL由scheme，host，port，path，path parameters和query parameters组成。

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

## Gzip

请注意，和风天气开发服务的API均使用Gzip进行了压缩，这将极大的减少网络流量，加快请求。因此，当你在开发过程中，需要对返回的数据进行解压。请参考[最佳实践-Gzip](/docs/best-practices/gzip/)。

好了，到此为止，API的配置和调试基本完成了，下一步请参考[开发文档](/docs/api/)，[实用资料](/docs/resource/)和[最佳实践](/docs/best-practices/)开始你的开发之旅吧！