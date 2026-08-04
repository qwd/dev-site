---
title: 错误码
description: 和风天气API的错误码和错误信息说明，出现错误的时候，请先参考此文档。
aliases:
- "/docs/start/status-code/"
- "/docs/resource/status-code/"
translationKey: res-status-code
---

当请求 API 出现错误时，你会收到对应的错误信息，本文档将介绍和风天气API的错误码和错误信息。

> **注意：** 你应该妥善的处理遇到的错误，当错误发生时，请暂停请求并进行排查。你不应该放任错误的继续发生，否则这些错误的请求看起来是一种DDoS攻击，极端情况下，我们的安全策略可能冻结你的帐号。


错误信息看起来是这个样子：

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

## INVALID PARAMETER

`HTTP response status code: 400`

错误的参数，一般指的是传入了错误的参数值，具体错误的参数请参考响应中的`error.invalidParams`。

## MISSING PARAMETER

`HTTP response status code: 400`

缺失参数，当一些必选参数没有传递时将报错，具体缺失的参数请参考响应中的`error.invalidParams`。

## NO SUCH LOCATION

`HTTP response status code: 400`

没有查询到地点信息或不支持的位置，例如查询一个不存在的城市或者一个错误的Location ID，此时你应该检查并更改查询的内容。

## DATA NOT AVAILABLE

`HTTP response status code: 400`

数据暂时不可用。当你查询的数据超过我们支持的范围后将收到此错误码，例如查询一个地点的空气质量，而我们还不支持这个地点的空气质量，请尝试其他地点进行查询。

## UNAUTHORIZED

`HTTP response status code: 401`

身份认证失败，你需要检查你的KEY或Token，考虑到安全因素，我们不会返回具体错误的原因。

## NO CREDIT

`HTTP response status code: 403`

你的帐号内没有足够的可用额度、节省计划或其他额度，请求被拒绝。你需要先增加可用额度或购买其他额度之后再继续请求数据。

## OVERDUE

`HTTP response status code: 403`

由于你帐号内有逾期未支付的账单，请求被拒绝。你需要先完成逾期账单的支付再继续请求数据。

## SECURITY RESTRICTION

`HTTP response status code: 403`

当前请求违反了你设置的请求限制，请求被拒绝，考虑到安全因素，我们不会返回具体违反了哪些请求限制。请检查：

- 该请求是否与你的请求限制有冲突
- 你的请求限制是否合理
- 如果请求不是你发送的，请考虑你的凭据可能已经泄露

## INVALID HOST

`HTTP response status code: 403`

使用了错误的API Host，请求被拒绝。请在[控制台设置](https://console.qweather.com/setting/)中查看自己的API Host。了解[如何创建API请求](/docs/configuration/api-config/)。

## ACCOUNT SUSPENSION

`HTTP response status code: 403`

由于用户帐号被冻结，请求被拒绝。了解[帐号冻结](/docs/account/suspension/)。

## DEPRECATED

`HTTP response status code: 403`

当前你请求的 API 已经弃用且，请在[开发文档](https://dev.qweather.com/docs/)中查找并使用最新版本。

## FORBIDDEN

`HTTP response status code: 403`

你暂时无权限请求这个数据。你可以提交工单向我们了解详情。

## NOT FOUND

`HTTP response status code: 404`

输入了错误的路径或错误的路径参数，无法找到该资源。

## METHOD NOT ALLOWED

`HTTP response status code: 405`

使用了GET以外的方法请求API。

## TOO MANY REQUESTS

`HTTP response status code: 429`

短时间内请求过多，超过了QPM限制或累积了大量错误请求。你必须等待一段时间或修复错误后再进行重试，否则持续的429状态可能会被认为是滥用服务资源或DDoS攻击，这将导致你的账号被冻结。关于如何设置重试时间，请参考[指数退避算法](/docs/best-practices/optimize-requests/#using-exponential-backoff-to-handle-errors)。

## OVER MONTHLY LIMIT

`HTTP response status code: 429`

对于包年包月订阅用户，当本月请求量超过限额后将收到此错误码，请等待至下个月再试，或者联系你的商务经理升级订阅方案。

## UNKNOWN ERROR

`HTTP response status code: 500`

我们的服务发生了未知故障，请[提交工单](https://console.qweather.com/support/ticket/new)与我们联系。

