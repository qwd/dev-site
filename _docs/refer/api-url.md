---
title: API URL
book: 参考资料
version: 1.0
data: weather
service: [sdk, api]
description: 和风天气数据的全球数据节点的接口地址
---

| 地区/节点  |  付费/免费  | 接口地址  |
| --- | --- | --- |
| 中国和全球   | 付费   |  `https://api.heweather.net`  |
| 中国   | 免费   |  `https://free-api.heweather.net`  |
| 美国西部   | 付费   |  `https://us1-api.heweather.net` |
| 欧洲西部（英国）   | 付费   |  `https://eu1-api.heweather.net` |
| 欧洲中部（德国）   | 付费   |  `https://eu2-api.heweather.net` |
| 欧洲东部（俄罗斯）   | 付费   |  `https://eu3-api.heweather.net` |
| 亚太东南（新加坡）   | 付费   |  `https://ap1-api.heweather.net` |
| 亚太东北（日本）   | 付费   |  `https://ap2-api.heweather.net` |
| 澳洲（澳大利亚）   | 付费   |  `https://ap3-api.heweather.net` |
| 非洲（南非）  | 付费   |  `https://af-api.heweather.net` |
| 南美（巴西）   | 付费   |  `https://sa-api.heweather.net` |

* 付费用户支持自动就近访问和风天气全球10大数据节点，例如用户在美国访问产品，则自动路由到美国节点获取数据。（前提是已经购买了美国节点的服务，否则还是由中国节点返回数据）
* 付费用户也可以直接使用对应的节点地址，确保所有访问都通过该节点获取数据，以便加速访问效率 [教我选择](/support/node)
* 免费用户仅从中国节点获取数据
* x3版本接口不支持海外节点
