---
title: 逐小时天气预报
tag: [guide, android, weather, hourly]
ref: 3-sdk-android-weather-hourly-forecast
---

逐小时天气预报Android SDK，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

| 接口代码| 接口说明                   | 数据类            |
| ------------------- | -------------- | ----------------- |
| getWeather24H| 24小时预报天气数据    | WeatherHourlyBean |
| getWeather72H| 72小时预报天气数据    | WeatherHourlyBean |
| getWeather168H| 168小时预报天气数据  | WeatherHourlyBean |

### 接口参数说明

{% include params.html p="location-android lang-sdk unit-sdk" %}

### 示例代码

```java
/**
 * 获取24小时预报数据
 */
QWeather.getWeather24Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener);

QWeather.getWeather24Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

/**
 * 获取72小时预报数据
 */
QWeather.getWeather72Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener) ;

QWeather.getWeather72Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

/**
 * 获取168小时预报数据
 */
QWeather.getWeather168Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener) ;

QWeather.getWeather168Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

```

### WeatherHourlyBean属性

| 属性      | 说明                       | 示例值                 |
| --------- | -------------------------- | ---------------------- |
| getCode   | 接口状态                   | [Status Code](/docs/resource/status-code/)  |
| getHourly | HourlyBean 逐小时天气      | List&lt;HourlyBean&gt; |
| getRefer  | Refer 数据来源以及数据授权 | Refer                  |
| getBasic  | Basic 基础信息             | Basic                  |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**HourlyBean 逐小时天气**

| 属性         | 说明                                     | 示例值           |
| ------------ | ---------------------------------------- | ---------------- |
| getFxTime    | 预报时间，格式yyyy-MM-dd HH:mm           | 2013-12-30T13:00+08:00 |
| getTemp      | 温度                                     | 2                |
| getIcon      | 天气状况代码                             | 101              |
| getText      | 天气状况代码                             | 多云             |
| getWind360   | [风向](/docs/resource/wind-info/#wind-direction)360角度                              | 290              |
| getWindDir   | [风向](/docs/resource/wind-info/#wind-direction)                                     | 西北             |
| getWindScale | [风力等级](/docs/resource/wind-info/#wind-scale)                                     | 3-4              |
| getWindSpeed | [风速](/docs/resource/wind-info/#wind-speed)，公里/小时                          | 15               |
| getHumidity  | 相对湿度                                 | 30               |
| getPrecip    | 逐小时预报降水量，默认单位：毫米         | 1.2              |
| getPop       | 逐小时预报降水概率，百分比数值，可能为空 | 5                |
| getPressure  | 大气压强                                 | 1030             |
| getDew       | 露点温度                                 | 5                |
| getCloud     | 云量，百分比                             | 15               |
