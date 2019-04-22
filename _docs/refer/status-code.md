---
book: 参考资料
version: 6.1
data: weather, air
service: api, sdk
title: 状态码和错误码
description: 和风天气数据状态码和错误码，出现错误的时候，请先参考此表格。
---

当你发现接口返回的数据和平时不一样了，那么请注意一下在接口返回的数据中， status 字段是表明数据的状态，目前有以下几种状态：

| 代码 | 说明 |
| --- | --- |
| ok | 数据正常 |
| invalid key | 无效的key，请检查你的key是否输入以及是否输入有误 |
| invalid key type | 你输入的key不适用于当前获取数据的方式，即SDK的KEY不能用于Web API或通过接口直接访问，反之亦然。[参考](https://www.heweather.com/support/setup-app-key) |
| invalid param | 无效的参数，请检查你传递的参数是否正确、完整 |
| bad bind | 错误的绑定，例如绑定的package name、bundle id或IP地址不一致的时候 |
| no data for this location | 该城市/地区没有你所请求的数据 |
| no more requests | 超过访问次数，需要等到当月最后一天24点（免费用户为当天24点）后进行访问次数的重置或升级你的访问量 |
|  no balance  | 没有余额，你的按量计费产品由于余额不足或欠费而不能访问，请尽快充值 |
|  too fast  | 超过限定的QPM，请参考[QPM说明](/docs/refer/qpm "QPM说明") |
|  dead  | 无响应或超时，接口服务异常请[联系我们](https://www.heweather.com/contact) |
| permission denied | 无访问权限，你没有购买你所访问的这部分服务 |
|  sign error  | 签名错误，请参考[签名算法](/docs/refer/sercet-authorization) |