---
book: API
service: api
data: map
version: 6.1
title: 彩色卫星云图
description: 风云二号卫星每小时更新的全国彩色卫星云图
---

## 数据介绍
风云二号卫星每小时更新的全国彩色卫星云图

## 请求URL
**商业版：**
```
https://api.heweather.net/s6/map/cloudmap?{parameters}
```

`parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

> 请注意，在替换`{parameters}`对应值的时候，URL中不要包含大括号`{}`

## 请求参数

|参数|描述|选择|示例值|
|---|---|---|---|
|key|用户认证key，请参考[如何获取你的KEY](https://www.heweather.com/support/setup-app-key)<br>支持[数字签名](/docs/refer/sercet-authorization)方式进行认证，推荐使用|必选|key=xxxxxxxxxxxxxx|


## 返回参数和数值说明
本接口直接返回当前时间最新的一张卫星云图，图片格式为jpg
![风云二号彩色卫星云图](/assets/images/cloudmap680.jpg)
