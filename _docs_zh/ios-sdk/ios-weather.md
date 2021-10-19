---
title: 实时天气和预报
tag: ios-sdk
version: v4
description: 使用和风天气iOS SDK获取全球天气预报、逐小时天气预报、未来15天预报等数据。和风天气支持全国4000+个市县区和海外15万个城市天气预报。
ref: 3-sdk-ios-weather
---

## 天气预报和实况

全国4000+个市县区和海外15万个城市天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据。

| 接口代码（枚举）          | 接口          | 数据类           |
| ------------------------- | ------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_NOW  | 实况天气      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_3D   | 3天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_7D   | 7天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_10D  | 10天预报      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_15D  | 15天预报      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_24H  | 24小时预报况  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_72H  | 72小时预报况  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_168H | 168小时预报况 | WeatherBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-sdk unit-sdk" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}]; 
```

### 返回数据

{% include api-response.html group="weather" type="now daily hourly" prefix="now daily hourly" %}

## 分钟降水

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。可实现精确到1公里格点的全国分钟级降雨/降雪预报，为每一分钟的降雨进行预测。

| 接口代码（枚举）             | 接口      | 数据类                   |
| -------- | ----------------------------- | ------------------------ |
|  INQUIRE_TYPE_WEATHER_MINUTELY| 分钟降水 | WeatherMinutelyBaseClass |

### 接口参数

{% include params.html p="location-coord key-ios lang-zhen-sdk" %}

### 示例代码

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"116.41,39.92";
    QWeatherConfigInstance.lang = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WEATHER_MINUTELY WithSuccess:^(WeatherMinutelyBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
 
```

### 返回数据

{% include api-response.html group="minutely" prefix="nil"  %}