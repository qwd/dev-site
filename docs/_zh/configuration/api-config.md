---
title: API 配置
tag: [config, api]
ref: config-api
---

了解如何发送一个API请求。

现在，我们假设你已经创建了[项目和凭据](/docs/configuration/project-and-key/)，准备开始创建一个完整的API请求吧。

## API Host

为了提高了API的安全等级，我们为每个开发者提供了独立的、数据隔离的API Host，即API地址或API的域名。API Host可以在[控制台-设置](https://console.qweather.com/setting)中查看，看起来像是：

```
abc.xyz.qweatherapi.com
```

你需要API Host与API路径、参数拼接在一起，或者在使用SDK时将API Host填写到配置项中。

## API URL和参数 {#api-url-and-parameters}

通常来讲，一个完整的API请求URL由scheme，host，path，path parameters和query parameters组成：

```
https://abc.xyz.qweatherapi.com/airquality/v1/station/{LocationID}?lang=en
\___/   \_____________________/\____________________/\___________/\______/
scheme           host                  path              path      query
                                                        params     params 
```

- scheme: https
- host: 开发者的API Host，请在[控制台设置](https://console.qweather.com/setting)中查看。
- path: /airquality/v1/station
- path params: location ID
- query params: lang=en 如有多个参数使用`&`分割。

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

你可以用熟悉的开发语言构建最终的API请求，这里以curl为例：

```bash
curl --compressed \
-H 'Authorization: Bearer eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA' \
'https://api.qweather.com/v7/weather/now?location=101010100'
```

对于大部分开发者来说，构建一个API URL并非难事，但我们仍然强烈建议你阅读[最佳实践-优化请求](/docs/best-practices/optimize-requests/)文档，了解发送API请求的一些常见问题和经验。