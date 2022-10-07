---
title: 错误状态码
tag: resource
toc: false
description: 和风天气数据状态码和错误码，出现错误的时候，请先参考此表格。
redirect_from: /docs/start/status-code/
ref: res-status-code
---

通过API接口中的`code`字段，可以获取到当前请求的状态，判断请求是否成功或出现错误。

| 代码 | 说明                            |
| ---- | -------------------------------- |
|200|请求成功|
|204|请求成功，但你查询的地区暂时没有你需要的数据。|
| 400 | 请求错误，可能包含错误的请求参数或缺少必选的请求参数。   |
| 401  | 认证失败，可能使用了错误的KEY、[数字签名](/docs/resource/signature-auth/)错误、KEY的类型错误（如使用SDK的KEY去访问Web API）。    |
| 402   | 超过访问次数或余额不足以支持继续访问服务，你可以充值、升级访问量或等待访问量重置。 |
| 403  | 无访问权限，可能是绑定的PackageName、BundleID、域名IP地址不一致，或者是需要额外付费的数据。        |
|404| 查询的数据或地区不存在。  |
| 429   | 超过限定的QPM（每分钟访问次数），请参考[QPM说明](/docs/resource/glossary/#qpm)   |
| 500  | 无响应或超时，接口服务异常请[联系我们](https://www.qweather.com/contact)                                                                             |

最新的状态码与S6版本API不兼容，请参考[S6版本的状态码](/docs/legacy/api/s6/#status-code)