---
title: 逐小时天气预报
tag: [guide, ios, weather, hourly]
ref: 3-sdk-ios-weather-hourly
---

逐小时天气预报API，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

| 接口代码（枚举）          | 接口          | 数据类           |
| ------------------------- | ------------- | ---------------- |
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
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_24H WithSuccess:^(WeatherBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}]; 
```

### 返回数据

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}
