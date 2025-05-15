---
title: 每日天气预报
tag: [guide, android, weather, daily]
ref: 2-sdk-android-weather-daily-forecast
---

每日天气预报Android SDK，提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、露点温度、紫外线强度、能见度等。

| 接口代码| 接口               | 数据类           |
| ---------------- | ------------- | ---------------- |
| weather3d| 3天预报天气数据    | WeatherDailyResponse |
| weather7d| 7天预报天气数据    | WeatherDailyResponse |
| weather10d| 10天预报天气数据  | WeatherDailyResponse |
| weather15d| 15天预报天气数据  | WeatherDailyResponse |
| weather30d| 30天预报天气数据  | WeatherDailyResponse |

## 参数

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## 示例代码

```java
WeatherParameter parameter = new WeatherParameter("101010100");
/**
 * 获取3天预报数据
 */
public void weather3d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * 获取7天预报数据
 */
public void weather7d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * 获取10天预报数据
 */
public void weather10d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * 获取15天预报数据
 */
public void weather15d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);
/**
 * 获取30天预报数据
 */
public void weather30d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);
```

## 返回数据

**WeatherDailyResponse**

{% include api-response.html group="weather" type="daily" prefix="daily" %}

<!-- | 属性     | 说明                       | 示例值                |
| -------- | -------------------------- | --------------------- |
| getCode  | 参考[状态码](/docs/resource/status-code/)                    | 200  |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/weather/beijing-101010100.html |
| getDaily | WeatherDaily 逐天天气         | List&lt;WeatherDaily&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer                 |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

**WeatherDaily**

| 属性              | 说明                | 示例值     |
| ----------------- | ------------------- | ---------- |
| getFxDate         | 预报日期            | 2013-12-30 |
| getSunrise        | [日出时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**     | 07:36      |
| getSunset         | [日落时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**    | 16:58      |
| getMoonRise       | 当天[月升时间](/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空**            | 04:47      |
| getMoonSet        | 当天[月落时间](/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空**            | 14:59      |
| getMoonPhase      | [月相名称](/docs/resource/sun-moon-info/#moon-phase)            | 满月       |
| getMoonPhaseIcon  | 月相[图标代码](/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)            | 804    |
| getTempMax        | 最高温度            | 4          |
| getTempMin        | 最低温度            | -5         |
| getIconDay        | 白天天气状况的[图标代码](/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)    | 100        |
| getIconNight      | 夜间天气状况的[图标代码](/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)    | 150        |
| getTextDay        | 白天天气状况文字描述，包括阴晴雨雪等    | 晴         |
| getTextNight      | 晚间天气状况文字描述，包括阴晴雨雪等    | 晴         |
| getWind360Day     | 白天[风向](/docs/resource/wind-info/#wind-direction)360角度     | 310        |
| getWind360Night   | 夜间[风向](/docs/resource/wind-info/#wind-direction)360角度     | 310        |
| getWindDirDay     | 白天[风向](/docs/resource/wind-info/#wind-direction)            | 西北风     |
| getWindDirNight   | 夜间[风向](/docs/resource/wind-info/#wind-direction)            | 西北风     |
| getWindScaleDay   | 白天[风力等级](/docs/resource/wind-info/#wind-scale)            | 1-2        |
| getWindScaleNight | 夜间[风力等级](/docs/resource/wind-info/#wind-scale)            | 1-2        |
| getWindSpeedDay   | 白天[风速](/docs/resource/wind-info/#wind-speed)，公里/小时 | 14         |
| getWindSpeedNight | 夜间[风速](/docs/resource/wind-info/#wind-speed)，公里/小时 | 14         |
| getHumidity       | 相对湿度            | 37         |
| getPrecip         | 降水量              | 0.0          |
| getPressure       | 大气压强            | 1018       |
| getCloud          | 当天云量            | 23         |
| getUvIndex        | 紫外线强度指数      | 3          |
| getVis            | 能见度，单位：公里  | 10         | -->
