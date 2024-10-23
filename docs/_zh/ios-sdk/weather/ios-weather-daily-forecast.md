---
title: 每日天气预报
tag: [guide, ios, weather, daily]
ref: 2-sdk-ios-weather-daily-forecast
---

每日天气预报iOS SDK，提供全球城市未来3-15天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、降水概率、露点温度、紫外线强度、能见度等。

| 接口代码（枚举）          | 接口          | 数据类           |
| ------------------------- | ------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_3D   | 3天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_7D   | 7天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_10D  | 10天预报      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_15D  | 15天预报      | WeatherBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def lang-def unit-def" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_3D WithSuccess:^(WeatherBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}]; 
```

### 返回数据

{% include api-response.html group="weather" type="daily" prefix="daily" %}
