---
title: 单位
tag: resource
toc: false
description: 和风天气默认采用公制单位，例如：公里、摄氏度等，如需要采用英制单位，可以通过在接口中增加参数`unit=i`（英制）或`unit=m`（公制）进行单位的选择。
redirect_from: /docs/start/unit/
ref: res-unit
---

和风天气默认采用公制单位，例如：公里、摄氏度等，如需要采用英制单位，可以通过添加对应的参数进行设置。

## 单位参数 {#unit-parameters}

| 单位     | API请求参数 | iOS常量属性 | Android常量属性 |
| -------- | ------- | ----------- | --------------- |
| 公制单位 | m       | UNIT_TYPE_M | METRIC          |
| 英制单位 | i       | UNIT_TYPE_I | IMPERIAL        |

## 单位列表 {#unit-information}

> 有一些数据项不存在英制单位的，统一使用公制单位。
 
| 数据项   | 公制单位                     | 英制单位                     |
| -------- | ---------------------------- | ---------------------------- |
| 温度     | 摄氏度                       | 华氏度                       |
| 风速     | 公里/小时 km/h               | 英里/小时 mile/h             |
| 能见度   | 公里 km                      | 英里 mile                    |
| 大气压强 | 百帕 hPa                     | 百帕 hPa                     |
| 降水量   | 毫米 mm                      | 毫米 mm                      |
| PM2.5    | 微克/立方米 μg/m<sup>3</sup> | 微克/立方米 μg/m<sup>3</sup> |
| PM10     | 微克/立方米 μg/m<sup>3</sup> | 微克/立方米 μg/m<sup>3</sup> |
| O3       | 微克/立方米 μg/m<sup>3</sup> | 微克/立方米 μg/m<sup>3</sup> |
| SO2      | 微克/立方米 μg/m<sup>3</sup> | 微克/立方米 μg/m<sup>3</sup> |
| CO       | 毫克/立方米 mg/m<sup>3</sup> | 毫克/立方米 mg/m<sup>3</sup> |
| NO2      | 微克/立方米 μg/m<sup>3</sup> | 微克/立方米 μg/m<sup>3</sup> |