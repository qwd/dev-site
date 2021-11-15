---
title: 实时天气和预报
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取全球天气预报、逐小时天气预报、未来15天预报等数据。和风天气支持全国4000+个市县区和海外15万个城市天气预报。
ref: 3-sdk-android-weather
---

## 实况天气

全国4000+个市县区和海外15万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据。

| 接口代码| 接口说明           | 数据类         |
| ------------ | ------------- | -------------- |
| getWeatherNow| 实况天气数据  | WeatherNowBean |

### 接口参数说明

{% include params.html p="location-android lang-sdk unit-sdk" %}

### 示例代码

```java
QWeather.getWeatherNow(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherNowListener listener) ;

QWeather.getWeatherNow(Context context, String location, QWeather.OnResultWeatherNowListener listener);
```

### WeatherNowBean属性

| 属性     | 说明                       | 示例值      |
| -------- | -------------------------- | ----------- |
| getCode  | 接口状态                   | [Status Code](/docs/resource/status-code/)  |
| getNow   | NowBean 实况天气           | NowBaseBean |
| getRefer | Refer 数据来源以及数据授权 | Refer       |
| getBasic | Basic 基础信息             | Basic       |

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

**NowBaseBean 实况天气**

| 属性         | 说明                       | 示例值           |
| ------------ | -------------------------- | ---------------- |
| getObsTime   | 实况观测时间               | 2013-12-30T13:14+08:00 |
| getFeelsLike | 体感温度，默认单位：摄氏度 | 23               |
| getTemp      | 温度，默认单位：摄氏度     | 21               |
| getIcon      | 实况天气状况代码           | 100              |
| getText      | 实况天气状况代码           | 晴               |
| getWind360   | 风向360角度                | 305              |
| getWindDir   | 风向                       | 西北             |
| getWindScale | 风力                       | 3-4              |
| getWindSpeed | 风速，公里/小时            | 15               |
| getHumidity  | 相对湿度                   | 40               |
| getPrecip    | 降水量                     | 0                |
| getPressure  | 大气压强                   | 1020             |
| getVis       | 能见度，默认单位：公里     | 10               |
| getCloud     | 云量                       | 23               |
| getDew       | 实况云量                   | 23               |

## 逐天预报

全球城市未来15天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、降水概率、露点温度、紫外线强度、能见度等。

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

## 逐小时天气预报

全球城市未来168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

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
| getWind360   | 风向360角度                              | 290              |
| getWindDir   | 风向                                     | 西北             |
| getWindScale | 风力                                     | 3-4              |
| getWindSpeed | 风速，公里/小时                          | 15               |
| getHumidity  | 相对湿度                                 | 30               |
| getPrecip    | 逐小时预报降水量，默认单位：毫米         | 1.2              |
| getPop       | 逐小时预报降水概率，百分比数值，可能为空 | 5                |
| getPressure  | 大气压强                                 | 1030             |
| getDew       | 露点温度                                 | 5                |
| getCloud     | 云量，百分比                             | 15               |

## 分钟降水

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。可实现精确到1公里格点的全国分钟级降雨/降雪预报，为每一分钟的降雨进行预测。

| 接口代码| 接口说明       | 数据类       |
| ---------- | ----------- | ------------ |
| getMinutely | 分钟级降雨 | MinutelyBean |

### 接口参数说明

{% include params.html p="location-coord lang-zhen-sdk" %}

### 示例代码

```java
QWeather.getMinuteLy(Context context, String location,QWeather.OnResultMinutelyListener listener);

QWeather.getMinuteLy(Context context, String location, Lang lang, QWeather.OnResultMinutelyListener listener);
```

### MinutelyBean属性

| 属性            | 说明                       | 示例值               |
| --------------- | -------------------------- | -------------------- |
| getCode         | 接口状态                   | [Status Code](/docs/resource/status-code/)   |
| getSummary      | 分钟降水描述               | 未来2小时无降雨      |
| getMinutelyList | 临近预报                   | List&lt;Minutely&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                |
| getBasic        | Basic 基础信息             | Basic                |

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

**Minutely 未来两小时5分钟降水量**

| 属性      | 说明                       | 示例值           |
| --------- | -------------------------- | ---------------- |
| getFxTime | 时间，格式yyyy-MM-dd HH:mm | 2013-12-30T20:35+08:00 |
| getPrecip | 降水量                     | 10               |
| getType   | 降水类型                   | rain             |
