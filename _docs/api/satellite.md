---
title: 卫星云图
tag: [api, b]
data: imagery
version: v7
description: 和风天气提供全球卫星云图的API接口，包括中国风云4号卫星云图、美国GEOS卫星云图、日本向日葵8号卫星云图。
---

全球卫星云图，包括中国风云4号卫星云图、美国GEOS卫星云图、日本向日葵8号卫星云图，所获取的图片均为当前请求时间最新的图片。如需要批量下载或指定时间，请[与我们联系](https://www.heweather.com/contact)。

> - 所获取的云图均为当前请求时间最新的图片，如需要批量下载或指定时间，请[与我们联系](https://www.heweather.com/contact)。
> - 云图均为full disk规格。

## 请求URL

```html
# 商业版
https://api.heweather.net/v7/satellite?{parameters}
```

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

### sat

选择卫星。例如`sat=fy4`

- `fy4` 风云四号
- `h8` 向日葵8号
- `g16` GOES-16 (GOES-West)
- `g17` GOES-17 (GOES-Eest)
- `ms11` EUMETSAT第二代地球同步轨道气象卫星，位于0度经度
- `msiodc` EUMETSAT第二代地球同步轨道气象卫星，位于印度洋上

### type

选择卫星云图的图片类型。目前仅支持各类彩色渲染的云图类型。例如`type=color`

- `color` 彩色云图

### range

选择卫星云图表现的范围区域，不同卫星可选择不同的范围区域，默认为full disk格式，支持全部卫星。例如`range=china`

- `china` 中国范围，支持风云四号卫星
  
### key

用户认证key，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式进行认证，推荐使用。

## 返回数据

| 参数          | 描述             |示例
| :------------ | :--------------- |
| status | API状态码，具体含义请参考[状态码](/docs/start/status-code) | 200  |
| downloadUrl | 返回请求图片的下载链接。**该链接有效期为5分钟**，你可以在有效期内下载多次，但超过5分钟你不能再使用这个链接下载图片，需要重新访问API获取新的下载连接。 | https://cdn.heweather.com/xxx |
| pubTime | 该图片的发布时间，时区均为UTC 0点时区 |2019-12-30T20:30Z|
| fxLink | 所查询卫星云图对应的网页，自适应PC和移动端，便于嵌入你的网站或应用。 | http://hfx.link/ae45 |
| sources | 数据许可证 | weather china |


## 请求和返回示例

{% include api-response.html %}


