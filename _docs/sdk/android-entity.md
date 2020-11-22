---
title: Android SDK 实体类属性
tag: [sdk]
version: v4
description: 和风天气Android SDK 实体类属性对照表
toc: true
lang-ref: sdkandroidentitty
---

## 实况天气

| 接口说明     | 接口代码      | 数据类         |
| ------------ | ------------- | -------------- |
| 实况天气数据 | getWeatherNow | WeatherNowBean |

#### 接口参数说明

**location** {{ site.data.text.required }}

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

```java
QWeather.getWeatherNow(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherNowListener listener) ;

QWeather.getWeatherNow(Context context, String location, QWeather.OnResultWeatherNowListener listener);
```

**WeatherNowBean的属性**

| 属性     | 说明                       | 示例值      |
| -------- | -------------------------- | ----------- |
| getCode  | 接口状态                   | ok          |
| getNow   | NowBean 实况天气           | NowBaseBean |
| getRefer | Refer 数据来源以及数据授权 | Refer       |
| getBasic | Basic 基础信息             | Basic       |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**NowBaseBean 实况天气**

| 属性         | 说明                       | 示例值           |
| ------------ | -------------------------- | ---------------- |
| getObsTime   | 实况观测时间               | 2013-12-30 13:14 |
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

| 接口说明         | 接口代码      | 数据类           |
| ---------------- | ------------- | ---------------- |
| 3天预报天气数据  | getWeather3D  | WeatherDailyBean |
| 7天预报天气数据  | getWeather7D  | WeatherDailyBean |
| 10天预报天气数据 | getWeather10D | WeatherDailyBean |
| 15天预报天气数据 | getWeather15D | WeatherDailyBean |

#### 接口参数说明

**location**{{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

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

**WeatherDailyBean的属性**

| 属性     | 说明                       | 示例值                |
| -------- | -------------------------- | --------------------- |
| getCode  | 接口状态                   | ok                    |
| getDaily | DailyBean 逐天天气         | List&lt;DailyBean&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer                 |
| getBasic | Basic 基础信息             | Basic                 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
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

| 接口说明            | 接口代码       | 数据类            |
| ------------------- | -------------- | ----------------- |
| 24小时预报天气数据  | getWeather24H  | WeatherHourlyBean |
| 72小时预报天气数据  | getWeather72H  | WeatherHourlyBean |
| 168小时预报天气数据 | getWeather168H | WeatherHourlyBean |

#### 接口参数说明

**location** {{ site.data.text.required }}

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

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

**WeatherHourlyBean的属性**

| 属性      | 说明                       | 示例值                 |
| --------- | -------------------------- | ---------------------- |
| getCode   | 接口状态                   | ok                     |
| getHourly | HourlyBean 逐小时天气      | List&lt;HourlyBean&gt; |
| getRefer  | Refer 数据来源以及数据授权 | Refer                  |
| getBasic  | Basic 基础信息             | Basic                  |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**HourlyBean 逐小时天气**

| 属性         | 说明                                     | 示例值           |
| ------------ | ---------------------------------------- | ---------------- |
| getFxTime    | 预报时间，格式yyyy-MM-dd HH:mm           | 2013-12-30 13:00 |
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

| 接口说明   | 接口代码    | 数据类       |
| ---------- | ----------- | ------------ |
| 分钟级降雨 | getMinutely | MinutelyBean |

## 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的以逗号分隔的纬度/经度坐标（十进制）。例如： location=39.92,116.41

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getMinuteLy(Context context, String location,QWeather.OnResultMinutelyListener listener);

QWeather.getMinuteLy(Context context, String location, Lang lang, QWeather.OnResultMinutelyListener listener);
```

**MinutelyBean的属性**

| 属性            | 说明                       | 示例值               |
| --------------- | -------------------------- | -------------------- |
| getCode         | 接口状态                   | ok                   |
| getSummary      | 分钟降水描述               | 未来2小时无降雨      |
| getMinutelyList | 临近预报                   | List&lt;Minutely&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                |
| getBasic        | Basic 基础信息             | Basic                |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**Minutely 未来两小时5分钟降水量**

| 属性      | 说明                       | 示例值           |
| --------- | -------------------------- | ---------------- |
| getFxTime | 时间，格式yyyy-MM-dd HH:mm | 2013-12-30 20:35 |
| getPrecip | 降水量                     | 10               |
| getType   | 降水类型                   | rain             |

## 灾害预警

| 接口说明     | 接口代码   | 数据类      |
| ------------ | ---------- | ----------- |
| 天气灾害预警 | getWarning | WarningBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getWarning(Context context, String location, final QWeather.OnResultWarningListener listener) ;

QWeather.getWarning(Context context, String location, Lang lang, final QWeather.OnResultWarningListener listener) ;

```

**WarningBean的属性**

| 属性            | 说明                       | 示例值                      |
| --------------- | -------------------------- | --------------------------- |
| getCode         | 接口状态                   | ok                          |
| getBeanBaseList | 灾害预警                   | List&lt;WarningBeanBase&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                       |
| getBasic        | Basic 基础信息             | Basic                       |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**WarningBeanBase 预警信息**

| 属性         | 说明                               | 示例值                                                           |
| ------------ | ---------------------------------- | ---------------------------------------------------------------- |
| getId        | 预警id                             |
| getPubTime   | 预警发布时间，格式yyyy-MM-dd HH:mm | 2017-10-25 12:03                                                 |
| getTitle     | 预警信息标题                       | 广东省深圳市气象台发布雷电黄色预警                               |
| getStartTime | 预警开始时间                       | 2017-10-25 12:03                                                 |
| getEndTime   | 预警结束时间                       | 2017-10-25 12:03                                                 |
| getStatus    | 预警状态                           | 预警中                                                           |
| getLevel     | 预警等级：蓝黄橙红白               | 黄色                                                             |
| getType      | 预警类型，全部类型参考本文简介     | 雷电                                                             |
| getText      | 预警详细信息                       | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |

## 灾害预警列表

| 接口说明         | 接口代码       | 数据类          |
| ---------------- | -------------- | --------------- |
| 天气灾害预警集合 | getWarningList | WarningListBean |

#### 接口参数说明

**Range** {{ site.data.text.optional }} 

选择指定的国家，使用ISO 3166 国家代码目前仅支持中国。

**可调用枚举类Range**

| 数据类型                                                         | 常量属性 |
| ---------------------------------------------------------------- | -------- |
| 中国城市范围，可替换为其他国家的 ISO 3166 国家代码，例如range=us | CN       |

```java
/**
 * @param context  上下文
 * @param listener 网络访问回调接口
 */
QWeather.getWarningList(Context context, final QWeather.OnResultWarningListListener listener);
```

**WarningListBean的属性**

| 属性           | 说明         | 示例值                      |
| -------------- | ------------ | --------------------------- |
| getCode        | 接口状态     | ok                          |
| getUpdateTime  | 接口更新时间 | 2017-10-25 12:34            |
| getWarningBean | 灾害预警     | List&lt;WarningListBean&gt; |

**WarningListBeanBase 预警信息**

| 属性          | 说明         | 示例值    |
| ------------- | ------------ | --------- |
| getLocationId | 地区／城市ID | 101280601 |

## 生活指数

| 接口说明    | 接口代码     | 数据类      |
| ----------- | ------------ | ----------- |
| 1天生活指数 | getIndices1D | IndicesBean |
| 3天生活指数 | getIndices3D | IndicesBean |

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**IndicesType数组** {{ site.data.text.required }}
   
生活指数数据类型，包括洗车指数、穿衣指数、钓鱼指数等。可以一次性获取多个类型的生活指
数，多个类型请添加进同一数组。具体生活指数的类型`IndicesType`参数值如下：

> `IndicesType.ALL`已包含所有生活指数的数据，请勿与别的参数一起传递

| 数据类型             | 常量属性 |
| -------------------- | -------- |
| 全部指数             | ALL      |
| 舒适度指数           | COMF     |
| 洗车指数             | CW       |
| 穿衣指数             | DRSG     |
| 感冒指数             | FLU      |
| 运动指数             | SPT      |
| 旅游指数             | TRA      |
| 紫外线指数           | UV       |
| 空气污染扩散条件指数 | AP       |
| 空调开启指数         | AC       |
| 过敏指数             | AG       |
| 太阳镜指数           | GL       |
| 化妆指数             | MU       |
| 晾晒指数             | DC       |
| 交通指数             | PTFC     |
| 钓鱼指数             | FIS      |
| 防晒指数             | SPI      |

#### 示例代码

```java
/**
 * 获取1天生活指数数据
 */
QWeather.get1DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener);

/**
 * 获取3天生活指数数据
 */
QWeather.get3DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener) ;
```

**IndicesBean的属性**

| 属性         | 说明                       | 示例值                |
| ------------ | -------------------------- | --------------------- |
| getCode      | 接口状态                   | ok                    |
| getDailyList | 生活指数逐天预报数据       | List&lt;DailyBean&gt; |
| getRefer     | Refer 数据来源以及数据授权 | Refer                 |
| getBasic     | Basic 基础信息             | Basic                 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |


**DailyBean 当天生活指数**

| 属性        | 说明                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getDate     | 预报日期，格式 yyyy-MM-dd                                                                                                                                                                                                                      |
| getLevel    | 生活指数预报等级                                                                                                                                                                                                                               |
| getCategory | 生活指数预报级别名称                                                                                                                                                                                                                           |
| getName     | 生活指数类型                                                                                                                                                                                                                                   |
| getType     | 生活指数类型 comf 舒适度指数,cw 洗车指数,drsg 穿衣指数,flu 感冒指数,spt 运动指数,trav 旅游指数,uv 紫外线指数,ap 空气污染扩散条件指数,ac 空调开启指数,ag 过敏指数,gl 太阳镜指数,mu 化妆指数,dc 晾晒指数,ptfc 交通指数,fis 钓鱼指数,spi 防晒指数 |
| getText     | 生活指数详细描述                                                                                                                                                                                                                               |


## 景点实况天气

| 接口说明     | 接口代码         | 数据类            |
| ------------ | ---------------- | ----------------- |
| 景点实况天气 | getWeatherPoiNow | WeatherPoiNowBean |

#### 接口参数说明

**location** {{ site.data.text.required }}

需要查询景点的LocationID，LocationID可通过城市搜索服务获取。例如： location=101010100

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

```java
QWeather.getWeatherPoiNow(Context context, String location, final QWeather.OnResultPoiNowListener listener);

QWeather.getWeatherPoiNow(Context context, String location, Lang lang, Unit unit, final QWeather.OnResultPoiNowListener listener) ;
```

**WeatherPoiNowBean的属性**

| 属性     | 说明                       | 示例值  |
| -------- | -------------------------- | ------- |
| getCode  | 接口状态                   | ok      |
| getNow   | NowBean 实况天气           | NowBean |
| getRefer | Refer 数据来源以及数据授权 | Refer   |
| getBasic | Basic 基础信息             | Basic   |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**NowBean**

| 属性         | 说明                       | 示例值           |
| ------------ | -------------------------- | ---------------- |
| getObsTime   | 实况观测时间               | 2013-12-30 13:14 |
| getFeelsLike | 体感温度，默认单位：摄氏度 | 23               |
| getTemp      | 温度，默认单位：摄氏度     | 21               |
| getIcon      | 实况天气状况代码           | 100              |
| getText      | 实况天气状况代码           | 晴               |
| getWindDir   | 风向                       | 西北             |
| getWindScale | 风力                       | 3-4              |
| getHumidity  | 相对湿度                   | 40               |
| getPrecip    | 降水量                     | 0                |
| getPressure  | 大气压强                   | 1020             |


## 景点天气预报

| 接口说明        | 接口代码        | 数据类              |
| --------------- | --------------- | ------------------- |
| 景点7天天气预报 | getWeatherPoi7D | WeatherPoiDailyBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询景点的LocationID，LocationID可通过城市搜索服务获取。例如： location=101010100

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

```java
QWeather.getWeatherPoi7D(Context context, String location, final QWeather.OnResultPoiDailyListener listener);

QWeather.getWeatherPoi7D(Context context, String location, Lang lang, Unit unit, final QWeather.OnResultPoiDailyListener listener) ;
```

**WeatherPoiDailyBean的属性**

| 属性     | 说明                       | 示例值                |
| -------- | -------------------------- | --------------------- |
| getCode  | 接口状态                   | ok                    |
| getDaily | DailyBean 逐天天气         | List&lt;DailyBean&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer                 |
| getBasic | Basic 基础信息             | Basic                 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**DailyBean**

| 属性              | 说明             | 示例值     |
| ----------------- | ---------------- | ---------- |
| getFxDate         | 预报日期         | 2013-12-30 |
| getTempMax        | 最高温度         | 4          |
| getTempMin        | 最低温度         | -5         |
| getIconDay        | 白天天气状况代码 | 100        |
| getIconNight      | 晚间天气状况代码 | 100        |
| getTextDay        | 白天天气状况描述 | 晴         |
| getTextNight      | 晚间天气状况描述 | 晴         |
| getWindDirDay     | 白天风向         | 西北风     |
| getWindDirNight   | 夜间风向         | 西北风     |
| getWindScaleDay   | 白天风力         | 1-2        |
| getWindScaleNight | 夜间风力         | 1-2        |

## 空气质量实况

| 接口说明         | 接口代码  | 数据类     |
| ---------------- | --------- | ---------- |
| 空气质量实况数据 | getAirNow | AirNowBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getAirNow(Context context, String location, Lang lang,
QWeather.OnResultAirNowListener listener)
```

**AirNowBean的属性**

| 属性                 | 说明                       | 示例值                        |
| -------------------- | -------------------------- | ----------------------------- |
| getCode              | 接口状态                   | ok                            |
| getAirNowStationBean | AQI站点实况                | List&lt;AirNowStationBean&gt; |
| getNow               | AQI城市实况                | NowBean                       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                         |
| getBasic             | Basic 基础信息             | Basic                         |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**NowBean AQI城市实况**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30 |
| getAqi      | 空气质量指数，AQI和PM25的关系     | 74               |
| getPrimary  | 主要污染物                        | pm25             |
| getLevel    | 实时空气质量指数等级              | 2                |
| getCategory | 实时空气质量指数级别              | 良               |
| getPm10     | pm10                              | 78               |
| getPm2p5    | pm25                              | 66               |
| getNo2      | 二氧化氮                          | 40               |
| getSo2      | 二氧化硫                          | 30               |
| getCo       | 一氧化碳                          | 33               |
| getO3       | 臭氧                              | 20               |

**AirNowStationBean AQI站点实况**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30 |
| getName     | 站点名称                          | 万寿西宫         |
| getId       | 站点ID，请参考所有站点ID          | A110000          |
| getAqi      | 空气质量指数，AQI和PM25的关系     | 74               |
| getPrimary  | 主要污染物                        | pm25             |
| getLevel    | 实时空气质量指数等级              | 2                |
| getCategory | 实时空气质量指数级别              | 良               |
| getPm10     | pm10                              | 78               |
| getPm2p5    | pm25                              | 66               |
| getNo2      | 二氧化氮                          | 40               |
| getSo2      | 二氧化硫                          | 30               |
| getCo       | 一氧化碳                          | 33               |
| getO3       | 臭氧                              | 20               |

## 空气质量逐天预报

| 接口说明            | 接口代码 | 数据类       |
| ------------------- | -------- | ------------ |
| 空气质量5天预报数据 | getAir5D | AirDailyBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java

/**
 * 空气质量5天预报数据
 */

QWeather.getAir5D(Context context, String location, Lang lang, QWeather.OnResultAirDailyListener listener)

```

**AirDailyBean的属性**

| 属性        | 说明                       | 示例值                |
| ----------- | -------------------------- | --------------------- |
| getCode     | 接口状态                   | ok                    |
| getAirDaily | 空气质量 AQI 7天预报       | List&lt;DailyBean&gt; |
| getRefer    | Refer 数据来源以及数据授权 | Refer                 |
| getBasic    | Basic 基础信息             | Basic                 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**DailyBean AQI城市逐天预报**

| 属性        | 说明                          | 示例值     |
| ----------- | ----------------------------- | ---------- |
| getFxDate   | 预报日期,格式yyyy-MM-dd       | 2017-08-09 |
| getAqi      | 空气质量指数，AQI和PM25的关系 | 74         |
| getPrimary  | 主要污染物                    | pm25       |
| getLevel    | 实时空气质量指数等级          | 2          |
| getCategory | 实时空气质量指数级别          | 良         |


## 历史天气

| 接口说明     | 接口代码             | 数据类             |
| ------------ | -------------------- | ------------------ |
| 历史天气数据 | getWeatherHistorical | HistoryWeatherBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**date** {{ site.data.text.required }} 

选择获取历史的日期限度，最多可选择最近10天的数据，例如今天是7月5日，最多可获取6月25日至7月4日的历史数据。日期格式为yyyyMMdd，例如 date=20200531

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

```java
QWeather.getHistoricalWeather(Context context, String location, String date, QWeather.OnResultWeatherHistoricalBeanListener listener) ;

QWeather.getHistoricalWeather(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultWeatherHistoricalBeanListener listener)
```

**HistoryWeatherBean 数据类**

| 属性           | 说明                       | 示例值                 |
| -------------- | -------------------------- | ---------------------- |
| getCode        | 接口状态                   | ok                     |
| getDailyBean   | 当天概况                   | DailyBean              |
| getHourlyBeans | 当天逐小时数据             | List&lt;HourlyBean&gt; |
| getRefer       | Refer 数据来源以及数据授权 | Refer                  |
| getBasic       | Basic 基础信息             | Basic                  |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**DailyBean 基础信息**

| 属性         | 说明     | 示例值     |
| ------------ | -------- | ---------- |
| getDate      | 预报日期 | 2013-12-30 |
| getSunrise   | 日出时间 | 07:36      |
| getSunset    | 日落时间 | 16:58      |
| getMoonRise  | 月升时间 | 04:47      |
| getMoonSet   | 月落时间 | 14:59      |
| getMoonPhase | 月相     | 满月       |
| getTempMax   | 最高温度 | 4          |
| getTempMin   | 最低温度 | -5         |
| getHumidity  | 相对湿度 | 37         |
| getPrecip    | 降水量   | 0          |
| getPressure  | 大气压强 | 1018       |

**HourlyBean 基础信息**

| 属性         | 说明                                   | 示例值           |
| ------------ | -------------------------------------- | ---------------- |
| getTime      | 历史当天天气时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00 |
| getTemp      | 温度                                   | 2                |
| getIcon      | 天气状况代码                           | 101              |
| getText      | 天气状况代码                           | 多云             |
| getWind360   | 风向360角度                            | 290              |
| getWindDir   | 风向                                   | 西北             |
| getWindScale | 风力                                   | 3-4              |
| getWindSpeed | 风速                                   | 15               |
| getHumidity  | 湿度                                   | 30               |
| getPressure  | 大气压强                               | 1030             |
| getPrecip    | 逐小时预报降水量，默认单位：毫米       | 1.2              |

## 历史空气质量

| 接口说明         | 接口代码         | 数据类            |
| ---------------- | ---------------- | ----------------- |
| 历史空气质量数据 | getHistoricalAir | HistoricalAirBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**date** {{ site.data.text.required }} 

选择获取历史的日期限度，最多可选择最近10天的数据，例如今天是7月5日，最多可获取6月25日至7月4日的历史数据。日期格式为yyyyMMdd，例如 date=20200531

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }} 

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

| 单位 | 常量属性 |
| ---- | -------- |
| 公制 | METRIC   |
| 英制 | IMPERIAL |

#### 示例代码

```java
QWeather.getHistoricalAir(Context context, String location, String date, QWeather.OnResultAirHistoricalBeanListener listener) ;

QWeather.getHistoricalAir(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultAirHistoricalBeanListener listener)
```

**HistoricalAirBean 数据类**

| 属性              | 说明                       | 示例值                    |
| ----------------- | -------------------------- | ------------------------- |
| getCode           | 接口状态                   | ok                        |
| getRefer          | Refer 数据来源以及数据授权 | Refer                     |
| getBasic          | Basic 基础信息             | Basic                     |
| getAirHourlyBeans | 当天逐小时空气质量数据     | List&lt;AirHourlyBean&gt; |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**AirHourlyBean 历史当天逐小时空气质量数据**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30 |
| getAqi      | 空气质量指数，AQI和PM25的关系     | 74               |
| getPrimary  | 主要污染物                        | pm25             |
| getLevel    | 实时空气质量指数等级              | 2                |
| getCategory | 实时空气质量指数级别              | 良               |
| getPm10     | pm10                              | 78               |
| getPm2p5    | pm25                              | 66               |
| getNo2      | 二氧化氮                          | 40               |
| getSo2      | 二氧化硫                          | 30               |
| getCo       | 一氧化碳                          | 33               |
| getO3       | 臭氧                              | 20               |

## 太阳和月亮

| 接口说明       | 接口代码   | 数据类      |
| -------------- | ---------- | ----------- |
| 太阳和月亮数据 | getSunMoon | SunMoonBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

需要查询地区的LocationID或以逗号分隔的纬度/经度坐标（十进制），LocationID可通过城市搜索服务获取。例如： location=101010100 或 location=39.92,116.41

**date** {{ site.data.text.required }} 

选择获取历史的日期限度，最多可选择最近10天的数据，例如今天是7月5日，最多可获取6月25日至7月4日的历史数据。日期格式为yyyyMMdd，例如 date=20200531

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getSunMoon(Context context, String location, String date, final OnResultSunMoonListener listener) ;

QWeather.getSunMoon(Context context, String location, Lang lang, String date, final OnResultSunMoonListener listener)                                
```

**SunMoonBean 数据类**

| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 接口状态                   | ok                        |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getSunMoonBean       | 日出日落                   | SunMoonBeanBase           |
| getMoonPhaseBeanList | 月相信息                   | List&lt;MoonPhaseBean&gt; |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25 04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**SunMoonBeanBase**

| 属性        | 说明     | 示例值                 |
| ----------- | -------- | ---------------------- |
| getSunrise  | 日出时间 | 2013-12-30T05:44+08:00 |
| getSunset   | 日落时间 | 2013-12-30T17:02+08:00 |
| getMoonRise | 月升时间 | 2013-12-30T13:19+08:00 |
| getMoonSet  | 月落时间 | 2013-12-31T23:31+08:00 |

**MoonPhaseBean**

| 属性            | 说明                   | 示例值                 |
| --------------- | ---------------------- | ---------------------- |
| getFxTime       | 月相逐小时预报时间     | 2013-12-31T23:31+08:00 |
| getValue        | 月相数值               | 0.25                   |
| getName         | 月相名字               | 上弦月                 |
| getIllumination | 月亮照明度，百分比数值 | 30                     |

## 城市信息查询

| 接口说明 | 接口代码         | 数据类  |
| -------- | ---------------- | ------- |
| 城市查询 | getGeoGityLookup | GeoBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 
输入需要查询的城市名称，可使用中文、英文、坐标（经度在前纬度在后，英文,分割，请参考坐标的使用规范）、ADCode（仅限中国城市）。例如location=beijing， location=116.4,39.1
当使用模糊搜索时，至少输入一个汉字或2个英文字母。

**number** {{ site.data.text.optional }} 

返回城市的数量，取值范围1-20，默认返回10个结果。

**range** {{ site.data.text.optional }} 

搜索范围，默认搜索全球城市。 可设定只在某个国家范围内进行搜索，国家名称需使用ISO 3166 所定义的国家代码。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=us`

**可调用枚举类Range**

| 数据类型                                                         | 常量属性 |
| ---------------------------------------------------------------- | -------- |
| 全球城市范围，默认                                               | WORLD    |
| 中国城市范围，可替换为其他国家的 ISO 3166 国家代码，例如`range=us` | CN       |

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getGeoCityLookup(Context context, String location, Range range, int number, Lang lang, final QWeather.OnResultGeoListener listener);

QWeather.getGeoCityLookup(Context context, Range range, final QWeather.OnResultGeoBeansListener listener) ;

QWeather.getGeoCityLookup(Context context, String location, final QWeather.OnResultGeoBeansListener listener);
```

**GeoBean的属性**

| 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 接口状态 | ok                       |
| getLocationBean | 城市数据 | List&lt;LocationBean&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |


**LocationBean 基础信息**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------------------------- | -------------------- |
| getName      | 地区／城市名称                                                          | 卓资                 |
| getId        | 地区／城市ID                                                            | 101080402            |
| getLon       | 地区／城市经度                                                          | 112.577702           |
| getLat       | 地区／城市纬度                                                          | 40.89576             |
| getAdm2      | 该地区／城市的上级城市                                                  | 乌兰察布             |
| getAdm1      | 该地区／城市所属行政区域                                                | 内蒙古               |
| getCountry   | 该地区／城市所属国家名称                                                | 中国                 |
| getTz        | 该地区／城市所在时区                                                    | +8.00                |
| getUtcOffset | 该地区/城市目前与UTC时间偏移的小时数                                    | +08:00               |
| getIsDst     | 该地区/城市是否当前处于夏令时,1: 表示当前处于夏令时, 0: 表示当前不是夏令时 | 0                    |
| getType      | 该地区／城市的属性                                                      | city                 |
| getRank      | 该地区／城市评分                                                        | 10                   |
| getFxLink    | 城市的天气预报网页链接                                                  | http://hfx.link/ae45 |

## 热门城市查询

| 接口说明     | 接口代码      | 数据类  |
| ------------ | ------------- | ------- |
| 热门城市查询 | getGeoTopCity | GeoBean |

#### 接口参数说明

**number** {{ site.data.text.optional }} 

返回热门城市的数量，默认返回10个，可选1-20个

**range** {{ site.data.text.optional }} 

搜索范围，默认搜索全球城市。 可设定只在某个国家范围内进行搜索，国家名称需使用ISO 3166 所定义的国家代码。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=us`

**可调用枚举类Range**

| 数据类型                                                         | 常量属性 |
| ---------------------------------------------------------------- | -------- |
| 全球城市范围，默认                                               | WORLD    |
| 中国城市范围，可替换为其他国家的 ISO 3166 国家代码，例如`range=us` | CN       |

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getGeoTopCity(Context context, int number, Range range, Lang lang, final QWeather.OnResultGeoBeansListener listener);

QWeather.getGeoTopCity(Context context, final QWeather.OnResultGeoBeansListener listener);
```

**GeoBean的属性**

| 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 接口状态 | ok                       |
| getLocationBean | 城市数据 | List&lt;LocationBean&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |


**LocationBean 基础信息**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------------------------- | -------------------- |
| getName      | 地区／城市名称                                                          | 卓资                 |
| getId        | 地区／城市ID                                                            | 101080402            |
| getLon       | 地区／城市经度                                                          | 112.577702           |
| getLat       | 地区／城市纬度                                                          | 40.89576             |
| getAdm2      | 该地区／城市的上级城市                                                  | 乌兰察布             |
| getAdm1      | 该地区／城市所属行政区域                                                | 内蒙古               |
| getCountry   | 该地区／城市所属国家名称                                                | 中国                 |
| getTz        | 该地区／城市所在时区                                                    | +8.00                |
| getUtcOffset | 该地区/城市目前与UTC时间偏移的小时数                                    | +08:00               |
| getIsDst     | 该地区/城市是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时 | 0                    |
| getType      | 该地区／城市的属性                                                      | city                 |
| getRank      | 该地区／城市评分                                                        | 10                   |
| getFxLink    | 城市的天气预报网页链接                                                  | http://hfx.link/ae45 |

## POI信息搜索

| 接口说明    | 接口代码        | 数据类     |
| ----------- | --------------- | ---------- |
| POI信息搜索 | getGeoPoiLookup | GeoPoiBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

输入需要查询的POI名称，可使用中文、英文。最少一个汉字或2个英文字母，返回结果将按照相关性和Rank值进行排列。例如*location=故宫*

**type** {{ site.data.text.required }} 

POI类型，可选择搜索某一类型的POI，目前仅限景点。例如 Type.SCENIC

**number** {{ site.data.text.optional }} 

返回热门城市的数量，默认返回10个，可选1-20个

**city** {{ site.data.text.optional }} 

选择POI所在城市，可设定只搜索在特定城市内的POI信息。城市名称可以是中文、英文或城市的LocationID。默认全世界范围。

> 城市名称需要精准匹配，建议使用LocaitonID，如城市名称无法识别，则数据返回为空。

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getGeoPoiLookup(Context context, String location, String city, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiLookup(Context context, String location, Type type, final QWeather.OnResultGeoPoiListener listener);
```

**GeoPoiBean的属性**

| 属性       | 说明     | 示例值          |
| ---------- | -------- | --------------- |
| getCode    | 接口状态 | ok              |
| getPoiList | 城市数据 | List&lt;Poi&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |


**Poi 基础信息**

| 属性         | 说明                                                              | 示例值    |
| ------------ | ----------------------------------------------------------------- | --------- |
| getName      | Poi名称                                                           | 南山区    |
| getId        | PoiID                                                             | 101280604 |
| getLon       | Poi经度                                                           | 22.53122  |
| getLat       | Poi纬度                                                           | 113.92942 |
| getAdm2      | 该Poi的上级行政区划名称                                           | 深圳市    |
| getAdm1      | 该Poi所属一级行政区域                                             | 广东省    |
| getCountry   | 该Poi所属国家名称                                                 | 中国      |
| getTz        | 该Poi所在时区                                                     | +8.00     |
| getUtcOffset | 该Poi目前与UTC时间偏移的小时数                                    | +08:00    |
| getIsDst     | 该Poi是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时 | 0         |
| getType      | 该Poi的属性                                                       | city      |
| getRank      | 地区评分                                                          | 10        |

## POI范围搜索

| 接口说明    | 接口代码       | 数据类     |
| ----------- | -------------- | ---------- |
| POI范围搜索 | getGeoPoiRange | GeoPoiBean |

#### 接口参数说明

**location** {{ site.data.text.required }} 

输入需要查询的POI坐标，坐标以逗号分隔的经度/纬度坐标。例如
*location=116.4,39.1*

**type** {{ site.data.text.required }} 

POI类型，可选择搜索某一类型的POI，目前仅限景点。例如 Type.SCENIC

**number** {{ site.data.text.optional }} 

返回热门城市的数量，默认返回10个，可选1-20个

**radius** {{ site.data.text.optional }} 

搜索范围，可设置搜索半径，取值范围1-50，单位：公里。*默认5公里*。

**lang** {{ site.data.text.optional }} 

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```java
QWeather.getGeoPoiRange(Context context, String location, int radius, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiRange(Context context, String location, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);
```

**GeoPoiBean的属性**

| 属性       | 说明     | 示例值          |
| ---------- | -------- | --------------- |
| getCode    | 接口状态 | ok              |
| getPoiList | 城市数据 | List&lt;Poi&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | Weather China      |
| getLicenseList | 使用许可     | commercial license |


**Poi 基础信息**

| 属性         | 说明                                                              | 示例值    |
| ------------ | ----------------------------------------------------------------- | --------- |
| getName      | Poi名称                                                           | 南山区    |
| getId        | PoiID                                                             | 101280604 |
| getLon       | Poi经度                                                           | 22.53122  |
| getLat       | Poi纬度                                                           | 113.92942 |
| getAdm2      | 该Poi的上级行政区划名称                                           | 深圳市    |
| getAdm1      | 该Poi所属一级行政区域                                             | 广东省    |
| getCountry   | 该Poi所属国家名称                                                 | 中国      |
| getTz        | 该Poi所在时区                                                     | +8.00     |
| getUtcOffset | 该Poi目前与UTC时间偏移的小时数                                    | +08:00    |
| getIsDst     | 该Poi是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时 | 0         |
| getType      | 该Poi的属性                                                       | city      |
| getRank      | 地区评分                                                          | 10        |


