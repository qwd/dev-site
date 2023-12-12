---
title: 天气时光机
tag: [guide, android, time-machine, weather]
ref: 1-sdk-android-historical-weather
---

获取最近10天的天气历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

> 和风天气额外提供了2000年至今的历史再分析气象数据，通过数据文件的形式发送，如需要长时间的历史气象数据数据，请提供下列信息，发送邮件至sales@qweather.com，我们将有专人与你联系:
> * 企业名称
> * 联系方式
> * 所需要的城市或坐标
> * 所需要的时间范围


| 接口代码| 接口说明                  | 数据类             |
| ------------ | -------------------- | ------------------ |
| getWeatherHistorical| 历史天气数据  | HistoryWeatherBean |

### 接口参数说明

{% include params.html p="location-id-android date10back lang-def unit-def" %}

### 示例代码

```java
QWeather.getHistoricalWeather(Context context, String location, String date, QWeather.OnResultWeatherHistoricalBeanListener listener) ;

QWeather.getHistoricalWeather(Context context, String location, String date, Lang lang, Unit unit, QWeather.OnResultWeatherHistoricalBeanListener listener)
```

### HistoryWeatherBean属性

| 属性           | 说明                       | 示例值                 |
| -------------- | -------------------------- | ---------------------- |
| getCode        | 参考[状态码](/docs/resource/status-code/)                    | 200|
| getDailyBean   | 当天概况                   | DailyBean              |
| getHourlyBeans | 当天逐小时数据             | List&lt;HourlyBean&gt; |
| getRefer       | Refer 数据来源以及数据授权 | Refer                  |
| getBasic       | Basic 基础信息             | Basic                  |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather     |
| getLicenseList | 使用许可     | QWeather Developers License |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/historical/beijing-101010100.html |

**DailyBean 基础信息**

| 属性         | 说明     | 示例值     |
| ------------ | -------- | ---------- |
| getDate      | 预报日期 | 2013-12-30 |
| getSunrise   | [日出时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空** | 07:36      |
| getSunset    | [日落时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空** | 16:58      |
| getMoonRise  | 当天[月升时间](/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空** | 04:47      |
| getMoonSet   | 当天[月落时间](/docs/resource/sun-moon-info/#moonrise-and-moonset)，**可能为空** | 14:59      |
| getMoonPhase | 月相     | 满月       |
| getTempMax   | 最高温度 | 4          |
| getTempMin   | 最低温度 | -5         |
| getHumidity  | 相对湿度 | 37         |
| getPrecip    | 降水量   | 0          |
| getPressure  | 大气压强 | 1018       |

**HourlyBean 基础信息**

| 属性         | 说明                                   | 示例值           |
| ------------ | -------------------------------------- | ---------------- |
| getTime      | 历史当天天气时间                        | 2013-12-30T13:00+08:00 |
| getTemp      | 温度                                   | 2                |
| getIcon      | 当天每小时天气状况的[图标代码](/docs/resource/icons/)，另请参考[天气图标项目](https://icons.qweather.com/)                           | 101              |
| getText      | 当天每小时天气状况的文字描述，包括阴晴雨雪等                           | 多云             |
| getWind360   | [风向](/docs/resource/wind-info/#wind-direction)360角度                            | 290              |
| getWindDir   | [风向](/docs/resource/wind-info/#wind-direction)                                   | 西北             |
| getWindScale | [风力等级](/docs/resource/wind-info/#wind-scale)                                   | 3-4              |
| getWindSpeed | [风速](/docs/resource/wind-info/#wind-speed)                                   | 15               |
| getHumidity  | 湿度                                   | 30               |
| getPressure  | 大气压强                               | 1030             |
| getPrecip    | 逐小时预报降水量，默认单位：毫米       | 1.2              |
