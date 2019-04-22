---
book: SDK
version: 1.0
service: sdk
data: [air, weather, grid, alarm, map, solar]
title: iOS SDK 实体类属性
description: 和风天气iOS SDK 实体类属性对照表
---

接口说明 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
[城市查询](#城市查询) | INQUIRE_TYPE_SEARCH | SearchBaseClass.h
[3-10天天气预报](#3-10天天气预报) | INQUIRE_TYPE_WEATHER_FORECAST | WeatherForecastBaseClass.h
[实况天气](#实况天气) | INQUIRE_TYPE_WEATHER_NOW | WeatherNowBaseClass.h
[逐小时预报](#逐小时预报) | INQUIRE_TYPE_WEATHER_HOURLY | WeatherHourlyBaseClass.h
[生活指数](#生活指数) | INQUIRE_TYPE_WEATHER_LIFESTYLE | WeatherLifestyleBaseClass.h
[常规天气数据集合](#常规天气数据集合) | NQUIRE_TYPE_WEATHER | WeatherBaseClass.h
[格点实况天气](#格点实况天气) | INQUIRE_TYPE_WEATHER_GRID_NOW | WeatherGridNowBaseClass.h
[格点7天预报](#格点7天预报) | INQUIRE_TYPE_WEATHER_GRID_FORECAST | WeatherGridForecastBaseClass.h
[格点逐小时预报](#格点逐小时预报) | INQUIRE_TYPE_WEATHER_GRID_HOURLY | WeatherGridHourlyBaseClass.h
[分钟级降雨（邻近预报）](#分钟级降雨（邻近预报）) | INQUIRE_TYPE_WEATHER_GRID_MINUTE | WeatherGridMinuteBaseClass.h
[天气灾害预警](#天气灾害预警) | INQUIRE_TYPE_ALARM | AlarmBaseClass.h
[天气灾害预警集合](#天气灾害预警集合) | INQUIRE_TYPE_ALARM_ALL | AlarmAllBaseClass.h
[景点天气预报](#景点天气预报) | INQUIRE_TYPE_SCENIC | ScenicBaseClass.h
[空气质量实况](#空气质量实况) | INQUIRE_TYPE_AIR_NOW | AirNowBaseClass.h
[空气质量7天预报](#空气质量7天预报) | INQUIRE_TYPE_AIR_FORECAST | AirForecastBaseClass.h
[空气质量逐小时预报](#空气质量逐小时预报) | INQUIRE_TYPE_AIR_HOURLY | AirHourlyBaseClass.h
[空气质量数据集合](#空气质量数据集合) | INQUIRE_TYPE_AIR | AirBaseClass.h
[卫星云图](#卫星云图) | INQUIRE_TYPE_MAP_CLOUD_MAP | UIImage type
[太阳高度](#太阳高度) | INQUIRE_TYPE_SOLAR_ELEVATION_ANGLR | SolarElevationAngleBaseClass.h
[日出日落](#日出日落) | INQUIRE_TYPE_SOLAR_SUNRISE_SUNSET | SolarSunriseSunsetBaseClass.h
[历史数据](#历史数据) | INQUIRE_TYPE_WEATHER_HISTORICAL | WeatherHistoricalBaseClass.h

# 请求接口代码对照表
##  可调用枚举类 INQUIRE_TYPE

接口名称 | 接口代码 | 常量属性
--------- | ------------- | ------------
3-10天天气预报 | getWeatherForecast  | INQUIRE_TYPE_WEATHER_FORECAST
实况天气 | getWeatherNow | INQUIRE_TYPE_WEATHER_NOW
逐小时预报 | getWeatherHourly | INQUIRE_TYPE_WEATHER_HOURLY
生活指数 | getWeatherLifeStyle | INQUIRE_TYPE_WEATHER_LIFESTYLE
常规天气数据集合 | getWeather | INQUIRE_TYPE_WEATHER
分钟级降雨（邻近预报） | getWeatherGirdMinute | INQUIRE_TYPE_WEATHER_GRID_MINUTE
格点实况天气 | getWeatherGridNow | INQUIRE_TYPE_WEATHER_GRID_NOW
格点7天预报 | getWeatherGridForecast | INQUIRE_TYPE_WEATHER_GRID_FORECAST
格点逐小时预报 | getWeatherGirdHourly | INQUIRE_TYPE_WEATHER_GRID_HOURLY
天气灾害预警 | getAlarm | INQUIRE_TYPE_ALARM
天气灾害预警集合 | getAlarmAll | INQUIRE_TYPE_ALARM_ALL
景点天气预报 | getScenic | INQUIRE_TYPE_SCENIC
空气质量实况 | getAirNow | INQUIRE_TYPE_AIR_NOW
空气质量7天预报 | getAirForecast | INQUIRE_TYPE_AIR_FORECAST
空气质量逐小时预报 | getAirHourly | INQUIRE_TYPE_AIR_HOURLY
空气质量数据集合 | getAir | INQUIRE_TYPE_AIR
历史天气 | getWeatherHistorical | INQUIRE_TYPE_WEATHER_HISTORICAL
日出日落 | getSolarSunriseSunset | INQUIRE_TYPE_SOLAR_SUNRISE_SUNSET
卫星云图 | getMapCloudMap | INQUIRE_TYPE_MAP_CLOUD_MAP
太阳高度 | getSolarElevationAngle | INQUIRE_TYPE_SOLAR_ELEVATION_ANGLR
城市查询 | getSearch | INQUIRE_TYPE_SEARCH

# 多语言代码对照表
##  可调用枚举类 LANGUAGE_TYPE

语言 | 语言代码 | 常量属性
--------- | ------------- | ------------
简体中文 | zh  | LANGUAGE_TYPE_ZH
简体中文 | zhcn  | LANGUAGE_TYPE_ZHCN
简体中文 | cn  | LANGUAGE_TYPE_CN
繁体中文 | zhhk | LANGUAGE_TYPE_ZHHK
繁体中文 | hk | LANGUAGE_TYPE_HK
英文 | en | LANGUAGE_TYPE_EN
德语 | de | LANGUAGE_TYPE_DE
西班牙语 | es | LANGUAGE_TYPE_ES
法语 | fr | LANGUAGE_TYPE_FR
意大利语 | it | LANGUAGE_TYPE_IT
日语 | jp | LANGUAGE_TYPE_JP
韩语 | kr | LANGUAGE_TYPE_KR
俄语 | ru | LANGUAGE_TYPE_RU
印度语 | in | LANGUAGE_TYPE_IN
泰语 | th | LANGUAGE_TYPE_TH

# 单位对照表
##  可调用枚举类 UNIT_TYPE

语言 | 语言代码 | 常量属性
--------- | ------------- | ------------
公制 | m | UNIT_TYPE_M
英制 | i | UNIT_TYPE_I

# framework 说明

```objc
/**
 * 必选参数
 * @param userType      用户类型，分为 付费用户 普通用户
 * @param location      (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param date          获取制定日期的历史数据，格式为yyyy-mm-dd
 * @param time          查询时间，格式为HHmm，24 时制
 * @param tz            查询地区所在时区
 * @param lat           所查询地区的纬度,纬度采用十进制格式，北纬为正，南纬为负
 * @param lon           所查询地区的经度,经度采用十进制格式，东经为正，西经为负
 * @param alt           海拔高度，单位为米
 * @param unit          单位选择，公制（m）或英制（i），默认为公制单位
 *
 * 可选参数
 * @param lang          多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param languageType  多语言（枚举），默认为简体中文，其他语言请参照多语言对照表
 * @param unit          单位选择，公制（m）或英制（i），默认为公制单位
 * @param unitType      单位选择（枚举），公制（m）或英制（i），默认为公制单位
 */
```
具体使用方法请参考[iOS SDK文档](/docs/sdk/ios)

# 各接口所需参数及返回数据

##  <span id="3-10天天气预报">3-10天天气预报</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Forecast的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getDaily_forecast | 天气预报 | List&lt;ForecastBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  ForecastBase 天气预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期 | 2013-12-30
getSr | 日出时间 | 07:36
getSs | 日落时间 | 16:58
getMr | 月升时间 | 04:47
getMs | 月落时间 | 14:59
getTmp_max | 最高温度 | 4
getTmp_min | 最低温度 | -5
getCond_code_d | 白天天气状况代码 | 100
getCond_code_n | 晚间天气状况代码 | 100
getCond_txt_d | 白天天气状况描述 | 晴
getCond_txt_n | 晚间天气状况描述 | 晴
getWind_deg | 风向360角度 | 310
getWind_dir | 风向 | 西北风
getWind_sc | 风力 | 1-2
getWind_spd | 风速，公里/小时 | 14
getHum | 相对湿度 | 37
getPcpn | 降水量 | 0
getPop | 降水概率 | 0
getPres | 大气压强 | 1018
getUv_index | 紫外线强度指数 | 3
getVis | 能见度，单位：公里 | 10

##  <span id="实况天气">实况天气</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Now的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getNow | now 实况天气 | NowBase

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  UpdateBean 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  NowBean 实况天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getFl | 体感温度，默认单位：摄氏度 | 23
getTmp | 温度，默认单位：摄氏度 | 21
getCond_code | 实况天气状况代码 | 100
getCond_txt | 实况天气状况代码 | 晴
getWind_deg | 风向360角度 | 305
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getWind_spd | 风速，公里/小时 | 15
getHum | 相对湿度 | 40
getPcpn | 降水量 | 0
getPres | 大气压强 | 1020
getVis | 能见度，默认单位：公里 | 10
getCloud | 云量 | 23

##  <span id="逐小时预报">逐小时预报</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Hourly的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getHourly | hourly 逐小时天气 | List&lt;HourlyBase&gt;

###  BasicBean 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  UpdateBean 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  HourlyBean 逐小时天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00
getTmp | 温度 | 2
getCond_code | 天气状况代码 | 101
getCond_txt | 天气状况代码 | 多云
getWind_deg | 风向360角度 | 290
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getWind_spd | 风速，公里/小时 | 15
getHum | 相对湿度 | 30
getPres | 大气压强 | 1030
getPop | 降水概率，百分比 | 30
getDew | 露点温度 | 5
getCloud | 云量，百分比 | 15

##  <span id="生活指数">生活指数</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Lifestyle的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getLifestyle | LifestyleBean 逐小时天气 | List&lt;Lifestyle&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  LifestyleBase 生活指数

属性 | 说明
--------- | -------------
getBrf | 生活指数简介
getTxt | 生活指数详细描述
getType | 生活指数类型 comf：舒适度指数、cw：洗车指数、drsg：穿衣指数、flu：感冒指数、sport：运动指数、trav：旅游指数、uv：紫外线指数、air：空气污染扩散条件指数

##  <span id="常规天气数据集合">常规天气数据集合</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Weather的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getDaily_forecast | DailyForecast 逐小时天气 | List&lt;ForecastBase&gt;
getLifestyle | LifestyleBean 逐小时天气 | List&lt;LifestyleBase&gt;
getHourly | hourly 逐小时天气 | List&lt;HourlyBase&gt;
getNow | now 实况天气 | NowBase

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  ForecastBase 天气预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期 | 2013-12-30
getSr | 日出时间 | 07:36
getSs | 日落时间 | 16:58
getMr | 月升时间 | 04:47
getMs | 月落时间 | 14:59
getTmp_max | 最高温度 | 4
getTmp_min | 最低温度 | -5
getCond_code_d | 白天天气状况代码 | 100
getCond_code_n | 晚间天气状况代码 | 100
getCond_txt_d | 白天天气状况描述 | 晴
getCond_txt_n | 晚间天气状况描述 | 晴
getWind_deg | 风向360角度 | 310
getWind_dir | 风向 | 西北风
getWind_sc | 风力 | 1-2
getWind_spd | 风速，公里/小时 | 14
getHum | 相对湿度 | 37
getPcpn | 降水量 | 0
getPop | 降水概率 | 0
getPres | 大气压强 | 1018
getUv_index | 紫外线强度指数 | 3
getVis | 能见度，单位：公里 | 10

###  NowBase 实况天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getFl | 体感温度，默认单位：摄氏度 | 23
getTmp | 温度，默认单位：摄氏度 | 21
getCond_code | 实况天气状况代码 | 100
getCond_txt | 实况天气状况代码 | 晴
getWind_deg | 风向360角度 | 305
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getWind_spd | 风速，公里/小时 | 15
getHum | 相对湿度 | 40
getPcpn | 降水量 | 0
getPres | 大气压强 | 1020
getVis | 能见度，默认单位：公里 | 10
getCloud | 云量 | 23

###  HourlyBase 逐小时天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00
getTmp | 温度 | 2
getCond_code | 天气状况代码 | 101
getCond_txt | 天气状况代码 | 多云
getWind_deg | 风向360角度 | 290
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getWind_spd | 风速，公里/小时 | 15
getHum | 相对湿度 | 30
getPres | 大气压强 | 1030
getPop | 降水概率，百分比 | 30
getDew | 露点温度 | 5
getCloud | 云量，百分比 | 15

###  LifestyleBase 生活指数

属性 | 说明
--------- | -------------
getBrf | 生活指数简介
getTxt | 生活指数详细描述
getType | 生活指数类型 comf：舒适度指数、cw：洗车指数、drsg：穿衣指数、flu：感冒指数、sport：运动指数、trav：旅游指数、uv：紫外线指数、air：空气污染扩散条件指数、ac：空调开启指数、ag：过敏指数、gl：太阳镜指数、mu：化妆指数、airc：晾晒指数、ptfc：交通指数、fsh：钓鱼指数、spi：防晒指数

##  <span id="格点实况天气">格点实况天气</span>
###  接口参数说明
```objc
/**
 * @param location  (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)仅支持所查询的地区经纬度查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负）
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  GridNow的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | GridBasic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getGrid_now | GridNowBase 格点实况天气 | GridNowBase

###  GridBasic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  GridNowBase 格点实况天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00
getTmp | 温度 | 2
getCond_code | 天气状况代码 | 101
getCond_txt | 天气状况代码 | 多云
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getHum | 相对湿度 | 30
getPcpn | 1小时降水量 | 10
getPcpn_10m | 10分钟降水量 | 10
getPres | 大气压强 | 1030

##  <span id="格点7天预报">格点7天预报</span>
###  接口参数说明
```objc
/**
 * @param location  (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)仅支持所查询的地区经纬度查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负）
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  GridForecast的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | GridBasic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getGrid_forecast | GridForecastBase 格点实况天气 | List&lt;GridForecastBase&gt;

###  GridBasic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  GridForecastBase 格点预报天气

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期，格式yyyy-MM-dd | 2013-12-30
getTmp_max | 最高温度 | 4
getTmp_min | 最低温度 | -5
getCond_code_d | 白天天气状况代码 | 100
getCond_code_n | 晚间天气状况代码 | 100
getCond_txt_d | 白天天气状况描述 | 晴
getCond_txt_n | 晚间天气状况描述 | 晴
getWind_dir_d | 白天风向 | 西北
getWind_dir_n | 夜间风向 | 西北
getWind_sc_d | 白天风力 | 3-4
getWind_sc_n | 夜间风力 | 3-4

##  <span id="格点逐小时预报">格点逐小时预报</span>
###  接口参数说明
```objc
/**
 * @param location  (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)仅支持所查询的地区经纬度查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负）
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  GridHourly的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | GridBasic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getGrid_hourly | GridHourlyBase 格点实况天气 | List&lt;GridHourlyBase&gt;

###  GridBasic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  GridHourlyBase 格点逐小时天气预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00
getTmp | 温度 | 2
getCond_code | 天气状况代码 | 101
getCond_txt | 天气状况代码 | 多云
getWind_dir | 风向 | 西北
getWind_sc | 风力 | 3-4
getPcpn | 降水量 | 10


##  <span id="分钟级降雨（邻近预报）">分钟级降雨（邻近预报）</span>
###  接口参数说明
```objc
/**
 * @param location  (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)仅支持所查询的地区经纬度查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负）
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  GirdMinute的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | GridBasic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getPcpn_type | 降水类型，rain雨，snow雪 | GridMinutePcpnType
getPcpn_5m | GridMinutePcpn5m 未来两小时5分钟降水量 | List&lt;GridMinutePcpn5m&gt;
getGrid_minute_forecast | GridMinuteForecast 临近预报 | GridMinuteForecast

###  GridBasic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  GridMinutePcpnType 降水类型

属性 | 说明 | 示例值
--------- | ------------- | ----------
getPcpn_type | rain雨，snow雪 | rain

###  GridMinuteForecast 临近预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期，格式yyyy-MM-dd HH:mm | 2013-12-30 20:35
getTxt | 分钟降雨描述 | 未来2小时无降雨

###  GridMinutePcpn5m 未来两小时5分钟降水量

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 时间，格式yyyy-MM-dd HH:mm | 2013-12-30 20:35
getPcpn | 降水量 | 10

##  <span id="天气灾害预警">天气灾害预警</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Alarm的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAlarm | 灾害预警 | List&lt;AlarmBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AlarmBase 预警信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTitle | 预警信息标题 | 广东省深圳市气象台发布雷电黄色预警
getStat | 预警状态 | 预警中
getLevel | 预警等级：蓝黄橙红白 | 黄色
getType | 预警类型，全部类型参考本文简介 | 雷电
getTxt | 预警详细信息 | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。

##  <span id="天气灾害预警集合">天气灾害预警集合</span>

###  AlarmAll的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAlarm_list | 灾害预警 | List&lt;AlarmAllBase&gt;

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AlarmAllBase 预警信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getCid | 地区／城市ID | CN101280601
getTitle | 预警信息标题 | 广东省深圳市气象台发布雷电黄色预警
getStat | 预警状态 | 预警中
getLevel | 预警等级 | 黄色
getType | 预警类型 | 雷电
getTxt | 预警详细信息 | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。

##  <span id="景点天气预报">景点天气预报</span>
###  接口参数说明
```objc
/**
 * @param location 景点天气仅支持使用景点ID获取数据
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  ScenicWeather的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getDaily_forecast | 天气预报 | List&lt;ForecastBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  ForecastBase 逐天预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期 |
getSr | 日出时间 | 04:50
getSs | 日落时间 | 18:06
getTmp_max | 最高温度 | 4
getTmp_min | 最低温度 | -5
getCond_code_d | 白天天气状况代码 | 100
getCond_code_n | 晚间天气状况代码 | 100
getCond_txt_d | 白天天气状况描述 | 晴
getCond_txt_n | 晚间天气状况描述 | 晴
getWind_dir | 风向 | 东
getWind_sc | 风力 | 2-3

##  <span id="空气质量实况">空气质量实况</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  AirNow的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAir_now_station | AQI站点实况 | List&lt;AirNowStation&gt;
getAir_now_city | AQI城市实况 | AirNowCity

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AirNowCity AQI城市实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
getPub_time | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

###  AirNowStation AQI站点实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
pgetPub_time | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30
getAir_sta | 站点名称 | 万寿西宫
getAsid | 站点ID，请参考所有站点ID | CNA110000
getLat | 站点纬度 | 116.405285
getLon | 站点经度 | 39.904989
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

##  <span id="空气质量7天预报">空气质量7天预报</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询
 *                 经纬度格式：纬度,经度（英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  AirForecast的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAir_forecast | 空气质量 AQI 7天预报 | List&lt;AirForecastBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AirForecastBase AQI城市实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期,格式yyyy-MM-dd | 2017-08-09
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

##  <span id="空气质量逐小时预报">空气质量逐小时预报</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  AirHourly的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAir_hourly | 空气质量 AQI 7天预报 | List&lt;AirHourlyBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AirHourlyBase AQI城市实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报日期，格式yyyy-MM-dd HH:mm | 2017-08-09 14:00
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

##  <span id="空气质量数据集合">空气质量数据集合</span>
###  接口参数说明
```objc
/**
 * @param location (如果不添加此参数,framework 会根据GPS联网定位,根据当前经纬度查询)所查询的地区，可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */
```

###  Air的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getAir_hourly | 空气质量 AQI 7天预报 | List&lt;AirHourlyBase&gt;
getAir_forecast | 空气质量 AQI 7天预报 | List&lt;AirForecastBase&gt;
getAir_now_station | AQI站点实况 | List&lt;AirNowStation&gt;
getAir_now_city | AQI城市实况 | AirNowCity

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  AirNowCity AQI城市实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
getPub_time | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

###  AirNowStation AQI站点实况

属性 | 说明 | 示例值
--------- | ------------- | ----------
pgetPub_time | 数据发布时间,格式yyyy-MM-dd HH:mm | 2017-03-20 12:30
getAir_sta | 站点名称 | 万寿西宫
getAsid | 站点ID，请参考所有站点ID | CNA110000
getLat | 站点纬度 | 116.405285
getLon | 站点经度 | 39.904989
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

###  AirForecastBase AQI城市逐天预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期,格式yyyy-MM-dd | 2017-08-09
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

###  AirHourlyBase AQI城市逐小时预报

属性 | 说明 | 示例值
--------- | ------------- | ----------
getTime | 预报日期，格式yyyy-MM-dd HH:mm | 2017-08-09 14:00
getAqi | 空气质量指数，AQI和PM25的关系 | 74
getMain | 主要污染物 | pm25
getQlty | 空气质量，取值范围:优，良，轻度污染，中度污染，重度污染，严重污染，查看计算方式 | 良
getPm10 | pm10 | 78
getPm25 | pm25 | 66
getNo2 | 二氧化氮 | 40
getSo2 | 二氧化硫 | 30
getCo | 一氧化碳 | 33
getO3 | 臭氧 | 20

##  <span id="卫星云图">卫星云图</span>
###  接口参数说明 （本接口直接返回当前时间最新的一张卫星云图，图片格式为 .jpg）

##  <span id="太阳高度">太阳高度</span>
###  接口参数说明
```objc
/**
 * @param lat      所查询地区的纬度(纬度采用十进制格式，北纬为正，南纬为负)
 * @param lon      所查询地区的经度(经度采用十进制格式，东经为正，西经为负)
 * @param alt      海拔高度，单位：米
 * @param date     查询日期，格式为yyyyMMdd
 * @param time     查询时间，格式为HHmm，24 时制
 * @param tz       查询地区所在时区
 */
```

###  SolarElevationAngle 数据类

属性 | 说明 | 示例值
--------- | ------------- | ----------
getStatus | 接口状态 | ok
getSolar_elevation_angle | 基础信息 | SolarElevationAngleBase

###  SolarElevationAngleBase 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getSolar_elevation_angle | 太阳高度角 | 89
getSolar_azimuth_angle | 太阳方位角，正北顺时针方向角度 | 190
getSolar_hour | 太阳时 | 0923
getHour_angle | 时角 | -45.5

##  <span id="日出日落">日出日落</span>
###  接口参数说明
```objc
/**
 * @param location 可通过该地区名称、ID、Adcode、IP和经纬度进行查询经纬度格式：纬度,经度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     多语言，可以不使用该参数，默认为简体中文，其他语言请参照多语言对照表
 */
```

###  SolarSunriseSunset 数据类

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getUpdate | 接口更新时间 | Update
getSunrise_sunset | 日出日落信息 | List&lt;SolarSunriseSunsetBase&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  Update 接口更新时间

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLoc | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34
getUtc | UTC时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 04:34

###  SolarSunriseSunsetBase 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 日期 | 1999-05-01
getSr | 日出时间 | 05:34
getSr | 日落时间 | 18:34

##  <span id="历史数据">历史数据</span>
###  接口参数说明
```objc
/**
 * @param location 城市ID
 * @param date     日期
 */
```

###  Historical 数据类

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | Basic
getStatus | 接口状态 | ok
getDaily_weather | 当天概况 | List&lt;HistoricalDaily&gt;
getHourly_weather | 当天逐小时数据 | List&lt;HistoricalHourly&gt;

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00

###  HistoricalDaily 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getDate | 预报日期 | 2013-12-30
getSr | 日出时间 | 07:36
getSs | 日落时间 | 16:58
getMr | 月升时间 | 04:47
getMs | 月落时间 | 14:59
getTmp_max | 最高温度 | 4
getTmp_min | 最低温度 | -5
getHum | 相对湿度 | 37
getPcpn | 降水量 | 0
getPres | 大气压强 | 1018

###  HistoricalHourly 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBrief |  天气状况描述 | 晴
getCode | 天气状况代码 | 100
getDate | 时间 | 2014-05-01
getDir | 风向 | 东风
getHum | 湿度 | 52
getPres | 气压 | 1017
getSc | 风力 | 3-4
getSpd | 风速 | 20
getTmp | 温度 | 15

##  <span id="城市查询">城市查询</span>
###  接口参数说明
```objc
/**
 * @param location (输入需要查询的城市名称，支持模糊搜索，可输入中文（至少一个汉字）、英文（至少2个字母）、IP地址、坐标（经度在前纬度在后，英文,分割）、ADCode
 * @param group    城市查询分组，默认为全球城市，可按照任意国家范围进行查询，国家名称需使用[ISO 3166 所定义的国家代码](https://www.heweather.com/blog/iso-3166)
                   特殊值：world，查询全球城市
                   特殊值：scenic，查询中国4A和5A级景点地区
                   特殊值：overseas，查询除中国以外的全部海外城市
                   查询分组可最多设置20个值，多个值用英文','连接
 * @param number     搜索查询返回的数量，默认返回10个与查询城市或的确相关性最强的结果，可选1-20个，当使用IP地址或坐标查询时，仅返回一个结果
 * @param lang     多语言，默认为简体中文，其他语言请参照多语言对照表
 */
```

###  Search的属性

属性 | 说明 | 示例值
--------- | ------------- | ----------
getBasic | 基础信息 | List&lt;Basic&gt;
getStatus | 接口状态 | ok

###  Basic 基础信息

属性 | 说明 | 示例值
--------- | ------------- | ----------
getLocation | 地区／城市名称 | 卓资
getCid | 地区／城市ID | CN101080402
getLon | 地区／城市经度 | 112.577702
getLat | 地区／城市纬度 | 40.89576
getParent_city | 该地区／城市的上级城市 | 乌兰察布
getAdmin_area | 该地区／城市所属行政区域 | 内蒙古
getCnty | 该地区／城市所属国家名称 | 中国
getTz | 该地区／城市所在时区 | +8.00
