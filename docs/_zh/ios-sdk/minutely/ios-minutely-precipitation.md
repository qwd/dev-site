---
title: 分钟级降水
tag: [guide, ios, minutely, precip]
ref: 1-sdk-ios-minutely-precip
---

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。

> 仅限中国地区。

| 接口代码（枚举）             | 接口      | 数据类                   |
| -------- | ----------------------------- | ------------------------ |
|  INQUIRE_TYPE_WEATHER_MINUTELY| 分钟降水 | WeatherMinutelyBaseClass |

### 接口参数

{% include params.html p="location-coord key-ios lang-def" %}

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

