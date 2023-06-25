---
title: 潮汐
tag: [guide, android, ocean, tide]
ref: 1-sdk-android-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getOceanTide| 潮汐数据  | TideBean |

### 接口参数说明

{% include params.html p="location-p2 date10" %}

### 示例代码

```java
QWeather.getOceanTide(Context context, String location, String date, OnResultOceanTideListener listener);
```

### TideBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200       |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getTideHourlyList | 潮汐小时数据 | List\<TideHourlyBase> |
| getTideTable | 满潮或干潮数据 | List\<TideTableBase> |

**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 当前数据的响应式页面，便于嵌入网站或应用  | https://www.qweather.com |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | QWeather Developers License |


**TideTableBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 满潮或干潮时间                                 | 2017-10-25T04:34+08:00|
| getHeight        | 海水高度，单位：米                                       | 1.23            |
| getType       | 满潮（H）或干潮（L）                              |    H    |

**TideHourlyBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 逐小时预报时间                                 | 2017-10-25T04:34+08:00|
| getHeight        | 海水高度，单位：米                                       | 1.23            |

