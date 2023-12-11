---
title: 实时天气
tag: [guide, ios, weather, now]
ref: 1-sdk-ios-weather-now
---

城市实时天气iOS SDK，支持中国3000+市县区和海外20万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等。

| 接口代码（枚举）          | 接口          | 数据类           |
| ------------------------- | ------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_NOW  | 实况天气      | WeatherBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-def unit-sdk" %}

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

{% include api-response.html group="weather" type="now" prefix="now" %}
