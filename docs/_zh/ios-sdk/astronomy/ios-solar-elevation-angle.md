---
title: 太阳高度角
tag: [guide, ios, astronomy, solar-elevation-angle]
ref: 3-sdk-ios-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

| 接口代码（枚举）                 | 接口       | 数据类            |
| -------------------------------- | ---------- | ----------------- |
| INQUIRE_TYPE_ASTRONOMY_SUN_ANGLE | 太阳高度角 | SunAngleBaseModel |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-coord date time tz alt key-ios" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"116.41,39.92";
QWeatherConfigInstance.date = @"20210518";
QWeatherConfigInstance.time = @"1230";
QWeatherConfigInstance.tz = @"0800";
QWeatherConfigInstance.alt = @"43";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_ASTRONOMY_SUN_ANGLE WithSuccess:^(SunAngleBaseModel  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
    
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
    
}];
```

### 返回数据

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}