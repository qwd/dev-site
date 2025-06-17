---
title: API 配置
tag: [config, api]
ref: config-api
---

了解如何发送一个API请求。

现在，我们假设你已经创建了[项目和凭据](/docs/configuration/project-and-key/)，准备开始创建一个完整的API请求吧。

## 请求URL {#request-url}

通常来讲，一个完整的API请求URL由scheme，host，path，path parameters和query parameters组成：

```
https://abcxyz.qweatherapi.com/airquality/v1/station/{LocationID}?lang=en
\___/   \____________________/\____________________/\___________/\______/
scheme           host                  path              path      query
                                                        params     params 
```

- **scheme:** 仅支持HTTPS协议。
- **host:** 开发者的[API Host](/docs/configuration/api-host/)，请在[控制台-设置](https://console.qweather.com/setting)中查看。
- **path:** API的请求路径（或称之为API端点、Endpoint）。
- **path params:** 路径参数均为必选参数。
- **query params:** 查询参数，包括必选和可选参数，多个查询参数使用`&`分割。

> **提示：**参数中如果包含了特殊字符，则必须进行URL encoding。


## 添加身份认证 {#add-authentication}

我们在上一步创建了一个API请求URL，现在需要为它添加身份认证以便服务器可以识别我们的身份。了解[身份认证](/docs/configuration/authentication/)。

#### JWT

在请求标头中添加如下内容：

```
Authorization: Bearer eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA
```

#### API KEY

在请求标头中添加如下内容：

```
X-QW-Api-Key: ABCD1234EFGH
```

## Gzip

请注意，和风天气开发服务的API均使用Gzip进行了压缩，这将极大的减少网络流量，加快请求。因此，当你在开发过程中，需要对返回的数据进行解压。请参考[最佳实践-Gzip](/docs/best-practices/gzip/)。

## 构建完整的API请求 {#build-a-complete-api-request}

你可以用熟悉的开发语言构建最终的API请求，这里使用curl获取北京实时天气为例：

```bash
# 将下列占位符替换为你的实际值:
# abcxyz.qweatherapi.com → 你的 API Host
# 1234.ABCD.5678 → 你生成的 JWT
# ABCD1234EFGH → 你的 API KEY

# JWT 身份认证

curl --compressed \
-H 'Authorization: Bearer 1234.ABCD.5678' \
'https://abcxyz.qweatherapi.com/v7/weather/now?location=101010100'

# API KEY 身份认证

curl --compressed \
-H "X-QW-Api-Key: ABCD1234EFGH" \
'https://abcxyz.qweatherapi.com/v7/weather/now?location=101010100'
```

对于大部分开发者来说，构建一个API URL并非难事，但我们仍然强烈建议你阅读[最佳实践-优化请求](/docs/best-practices/optimize-requests/)文档，了解发送API请求的一些常见问题和经验。
