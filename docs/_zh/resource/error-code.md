---
title: 错误码
tag: resource
description: 和风天气API的错误码和错误信息说明，出现错误的时候，请先参考此文档。
redirect_from: 
    - /docs/start/status-code/
    - /docs/resource/status-code/
ref: res-status-code
---

当出现错误时，你会收到对应的错误码，本文档将介绍和风天气API的错误码和错误信息。

> **提示：**目前同时存在两种版本的错误码，我们将陆续从v1迁移到v2版本，在此期间根据API和错误类型可能返回不同版本的错误码。如果你希望立即迁移到v2版本，请发送工单。

> **注意：**你应该妥善的处理遇到的错误，当错误发生时，请暂停请求并进行排查。你不应该放任错误的继续发生，否则这些错误的请求看起来是一种DDoS攻击，极端情况下，我们的安全策略可能冻结你的帐号。
{:.bqdanger}

## 错误码v2 {#error-code-v2}

v2版本将错误进行了细分和更加详细的描述，以便用户可以更容易了解错误的原因，同时也将HTTP Status Code与错误码保持了一致。

错误码包括以下类型：

### INVALID PARAMETER

`HTTP response status code: 400`

错误的参数，一般指的是传入了错误的参数值，具体错误的参数请参考响应中的`error.invalidParams`。

### MISSING PARAMETER

`HTTP response status code: 400`

缺失参数，当一些必选参数没有传递时将报错，具体缺失的参数请参考响应中的`error.invalidParams`。

### NO SUCH LOCATION

`HTTP response status code: 400`

没有查询到地点信息或不支持的位置，例如查询一个不存在的城市或者一个错误的Location ID，此时你应该检查并更改查询的内容。

### DATA NOT AVAILABLE

`HTTP response status code: 400`

数据暂时不可用。当你查询的数据超过我们支持的范围后将收到此错误码，例如查询一个地点的空气质量，而我们还不支持这个地点的空气质量，请尝试其他地点进行查询。

### UNAUTHORIZED

`HTTP response status code: 401`

身份认证失败，你需要检查你的KEY或Token，考虑到安全因素，我们不会返回具体错误的原因。

### NO CREDIT

`HTTP response status code: 403`

你的帐号内没有足够的可用额度、节省计划或其他额度，请求被拒绝。你需要先增加可用额度或购买其他额度之后再继续请求数据。

### OVERDUE

`HTTP response status code: 403`

由于你帐号内有逾期未支付的账单，请求被拒绝。你需要先完成逾期账单的支付再继续请求数据。

### SECURITY RESTRICTION

`HTTP response status code: 403`

当前请求违反了你设置的请求限制，请求被拒绝，考虑到安全因素，我们不会返回具体违反了哪些请求限制。请检查：

- 该请求是否与你的请求限制有冲突
- 你的请求限制是否合理
- 如果请求不是你发送的，请考虑你的凭据可能已经泄露

### INVALID HOST

`HTTP response status code: 403`

使用了错误的API Host，请求被拒绝。请在[控制台设置](https://console.qweather.com/setting/)中查看自己的API Host。了解[如何创建API请求](/docs/configuration/api-config/)。

### ACCOUNT SUSPENSION

`HTTP response status code: 403`

由于用户帐号被冻结，请求被拒绝。了解[帐号冻结](/docs/account/suspension/)。

### FORBIDDEN

`HTTP response status code: 403`

你暂时无权限请求这个数据。你可以提交工单向我们了解详情。

### NOT FOUND

`HTTP response status code: 404`

输入了错误的路径或错误的路径参数，无法找到该资源。

### METHOD NOT ALLOWED

`HTTP response status code: 405`

使用了GET以外的方法请求API。

### TOO MANY REQUESTS

`HTTP response status code: 429`

短时间内请求过多，超过了QPM限制或累积了大量错误请求。你必须等待一段时间或修复错误后再进行重试，否则持续的429状态可能会被认为是滥用服务资源或DDoS攻击，这将导致你的账号被冻结。关于如何设置重试时间，请参考[指数退避算法](/docs/best-practices/optimize-requests/#using-exponential-backoff-to-handle-errors)。

### OVER MONTHLY LIMIT

`HTTP response status code: 429`

对于包年包月订阅用户，当本月请求量超过限额后将收到此错误码，请等待至下个月再试，或者联系你的商务经理升级订阅方案。

### UNKNOWN ERROR

`HTTP response status code: 500`

我们的服务发生了未知故障，请[提交工单](https://console.qweather.com/support/ticket/new)与我们联系。

### 响应 {#response}

```
HTTP/2 400
Content-Type: application/problem+json

{
  "error": {
      "status": 400,
      "type": "https://dev.qweather.com/docs/resource/error-code/#invalid-parameters",
      "title": "Invalid Parameters",
      "detail": "Invalid parameters, please check your request.",
      "invalidParams": [
          "lang"
      ]
  }
}
```

- `error.status` 对应这个错误的HTTP status code
- `error.type` 这是一个URL用于标识错误类型
- `error.title` 对错误的简短描述 
- `error.detail` 对错误的详细描述
- `error.invalidParams` 标识错误或缺失的参数

*`404` 和 `405`不会返回response body。*

## 错误码v1 {#error-code-v1}

通过API接口中的`code`字段，可以获取到当前请求的状态，判断请求是否成功或出现错误。

| 代码 | 说明                            |
| ---- | -------------------------------- |
|200|请求成功|
|204|请求成功，但你查询的地区暂时没有你需要的数据。|
| 400 | 请求错误，可能包含错误的请求参数或缺少必选的请求参数。   |
| 401  | 认证失败，可能使用了错误的KEY、KEY的类型错误（如使用SDK的KEY去访问Web API）。    |
| 402   | 超过访问次数或余额不足以支持继续访问服务，你可以充值、升级访问量或等待访问量重置。 |
| 403  | 无访问权限，可能是绑定的PackageName、BundleID、域名IP地址不一致，或者是需要额外付费的数据。        |
|404| 查询的数据或地区不存在。  |
| 429   | 超过限定的QPM（每分钟访问次数），请参考[QPM说明](/docs/resource/glossary/#qpm)   |
| 500  | 无响应或超时，接口服务异常请[提交工单](https://console.qweather.com/support/ticket/new)与我们联系。                                                                             |

### 响应 {#response}

```
HTTP/2 200
content-type: application/json

{
  "code": "401"
}
```

## 1 vs 2 

你可以简单参考下表了解v1和v2的差异，并快速的进行迁移。但是请注意，在我们完全迁移到v2之前，你还需要对v1进行兼容性设计。

||v1|v2|
|---|---|---|
|HTTP Status Code|200|根据不同错误响应对应的HTTP Status Code|
|错误分类|❌|✅|
|错误描述|❌|✅|
|识别错误参数|❌|✅|