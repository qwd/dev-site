---
title: 实时天气
tag: [guide, android, weather, now]
ref: 1-sdk-android-weather-now
---

获取中国3000+市县区和海外20万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等。

> **注意：**实况数据均为近实时数据，相比真实的物理世界有5-20分钟的延迟，请根据实况数据中的`obsTime`确定数据对应的准确时间。

| 接口代码| 接口           | 数据类         |
| ------------ | ------------- | -------------- |
| weatherNow| 实况天气  | WeatherNowResponse |

## 参数

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## 示例代码

```java
public void weatherNow(WeatherParameter parameter, Callback<WeatherNowResponse> callback);
```

## 返回数据
 
**WeatherNowResponse**

{% include api-response.html group="weather" type="now" prefix="now" %}

<!-- | 属性     | 说明                       | 示例值      |
| -------- | -------------------------- | ----------- |
| getCode  | 参考[状态码](/docs/resource/status-code/)      | 200  |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/weather/beijing-101010100.html |
| getNow   | WeatherNow 实况天气      | WeatherNow |
| getRefer | Refer 数据来源以及数据授权 | Refer       |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

**WeatherNow**

| 属性         | 说明                       | 示例值           |
| ------------ | -------------------------- | ---------------- |
| getObsTime   | 实况观测时间               | 2013-12-30T13:14+08:00 |
| getFeelsLike | 体感温度，默认单位：摄氏度 | 23               |
| getTemp      | 温度，默认单位：摄氏度     | 21               |
| getIcon      | 天气状况的[图标代码](/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)           | 100              |
| getText      | 天气状况的文字描述，包括阴晴雨雪等天气状态的描述           | 晴               |
| getWind360   | [风向](/docs/resource/wind-info/#wind-direction)360角度                | 305              |
| getWindDir   | [风向](/docs/resource/wind-info/#wind-direction)                       | 西北             |
| getWindScale | [风力等级](/docs/resource/wind-info/#wind-scale)                       | 3-4              |
| getWindSpeed | [风速](/docs/resource/wind-info/#wind-speed)，公里/小时            | 15               |
| getHumidity  | 相对湿度                   | 40               |
| getPrecip    | 降水量                     | 0                |
| getPressure  | 大气压强                   | 1020             |
| getVis       | 能见度，默认单位：公里     | 10               |
| getCloud     | 云量                       | 23               |
| getDew       | 露点温度                   | -1               | -->

