---
title: 每日天气预报
tag: [guide, android, weather, daily]
ref: 2-sdk-android-weather-daily-forecast
---

提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、降水概率、露点温度、紫外线强度、能见度等。

| 接口代码| 接口说明               | 数据类           |
| ---------------- | ------------- | ---------------- |
| getWeather3D| 3天预报天气数据    | WeatherDailyBean |
| getWeather7D| 7天预报天气数据    | WeatherDailyBean |
| getWeather10D| 10天预报天气数据  | WeatherDailyBean |
| getWeather15D| 15天预报天气数据  | WeatherDailyBean |

### 接口参数说明

{% include params.html p="location-android lang-sdk unit-sdk" %}

### 示例代码

```java
/**
 * 获取3天预报数据
 */
QWeather.getWeather3D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener) ;

QWeather.getWeather3D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * 获取7天预报数据
 */
QWeather.getWeather7D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener) ;

QWeather.getWeather7D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * 获取10天预报数据
 */
QWeather.getWeather10D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener) ;

QWeather.getWeather10D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * 获取15天预报数据
 */
QWeather.getWeather15D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener) ;

QWeather.getWeather15D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);
```

### WeatherDailyBean属性

| 属性     | 说明                       | 示例值                |
| -------- | -------------------------- | --------------------- |
| getCode  | 接口状态                   | [Status Code](/docs/resource/status-code/)   |
| getDaily | DailyBean 逐天天气         | List&lt;DailyBean&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer                 |
| getBasic | Basic 基础信息             | Basic                 |

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

**DailyBean 天气预报**

| 属性              | 说明                | 示例值     |
| ----------------- | ------------------- | ---------- |
| getFxDate         | 预报日期            | 2013-12-30 |
| getSunrise        | 日出时间            | 07:36      |
| getSunset         | 日落时间            | 16:58      |
| getMoonRise       | 月升时间            | 04:47      |
| getMoonSet        | 月落时间            | 14:59      |
| getMoonPhase      | 月相名称            | 满月       |
| getMoonPhaseIcon      | 月相图标代码，图标可通过[天气状况和图标](/docs/resource/icons/)下载            | 804    |
| getTempMax        | 最高温度            | 4          |
| getTempMin        | 最低温度            | -5         |
| getIconDay        | 白天天气状况代码    | 100        |
| getIconNight      | 晚间天气状况代码    | 100        |
| getTextDay        | 白天天气状况描述    | 晴         |
| getTextNight      | 晚间天气状况描述    | 晴         |
| getWind360Day     | 白天风向360角度     | 310        |
| getWind360Night   | 夜间风向360角度     | 310        |
| getWindDirDay     | 白天风向            | 西北风     |
| getWindDirNight   | 夜间风向            | 西北风     |
| getWindScaleDay   | 白天风力            | 1-2        |
| getWindScaleNight | 夜间风力            | 1-2        |
| getWindSpeedDay   | 白天风速，公里/小时 | 14         |
| getWindSpeedNight | 夜间风速，公里/小时 | 14         |
| getHumidity       | 相对湿度            | 37         |
| getPrecip         | 降水量              | 0          |
| getPressure       | 大气压强            | 1018       |
| getCloud          | 当天云量            | 23         |
| getUvIndex        | 紫外线强度指数      | 3          |
| getVis            | 能见度，单位：公里  | 10         |
