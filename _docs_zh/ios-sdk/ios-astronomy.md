---
title: 太阳和月亮
tag: ios-sdk
version: v4
description: 和风天气iOS SDK获取全球日出日落、月升月落、月相数据
ref: 8-sdk-ios-astronomy
---

获取最近60天全球城市日出日落、月升月落和逐小时的月相数据以及太阳高度角。

## 日出日落

获取未来60天全球日出日落。

| 接口代码（枚举）           | 接口     | 数据类       |
| -------------------------- | -------- | ------------ |
| INQUIRE_TYPE_ASTRONOMY_SUN | 日出日落 | SunBaseModel |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios date60 key-ios" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.date = @"20200425";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_ASTRONOMY_SUN WithSuccess:^(SunBaseModel  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```
     
### 返回数据

{% include api-response.html group="astro" type="sun" prefix="nil" %}

## 月升月落和月相

获取未来60天全球月升月落时间以及逐小时月相数据。

| 接口代码（枚举）            | 接口           | 数据类        |
| --------------------------- | -------------- | ------------- |
| INQUIRE_TYPE_ASTRONOMY_MOON | 月升月落和月相 | MoonBaseModel |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios date60 key-ios lang-sdk" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.date = @"20200425";
[QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_ASTRONOMY_MOON WithSuccess:^(MoonBaseModel  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
    
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
    
}];
```

### 返回数据

{% include api-response.html group="astro" type="moon" prefix="nil" %}

## 太阳高度角

任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持。

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