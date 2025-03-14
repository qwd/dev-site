<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 17:13:16
 * @FilePath: /dev-site/docs/_zh/android-sdk/astronomy/android-sunrise-sunset.md
-->
---
title: 日出日落
tag: [guide, android, astronomy, sun]
ref: 1-sdk-android-sun
---

获取未来60天全球任意地点日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

| 接口代码| 接口说明          | 数据类      |
| -------------- | ---------- | ----------- |
| astronomySun| 日出日落  | AstronomySunBaseResponse |

### 接口参数说明

{% include params.html p="location-def date60" %}

### 示例代码

```java
public void astronomySun(AstronomySunParameter parameter, Callback<AstronomySunBaseResponse> callback);                             
```

### AstronomySunBaseResponse 属性

| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 参考[状态码](/docs/resource/status-code/)                    | 200       |
| getUpdateTime | [数据最近更新时间](/docs/resource/glossary/#update-time)             | 2017-10-25T04:34+08:00   |
| getFxLink     | 当前数据的响应式页面，便于嵌入网站或应用 | https://www.qweather.com/weather/beijing-101010100.html |
| getSunrise           | [日出时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**                   | 2017-10-25T06:01+08:00           |
| getSunset            | [日落时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**                   | 2017-10-25T18:01+08:00           |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

