---
title: 月升月落和月相
tag: [guide, ios, astronomy, moon]
ref: 2-sdk-ios-moon
---

获取未来60天全球城市月升月落和逐小时的月相数据。

> 月相已考虑南北半球的差异，不需要再进行转换

| 接口代码（枚举）            | 接口           | 数据类        |
| --------------------------- | -------------- | ------------- |
| INQUIRE_TYPE_ASTRONOMY_MOON | 月升月落和月相 | MoonBaseModel |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def date60 key-ios lang-def" %}

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
