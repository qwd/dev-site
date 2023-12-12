---
title: 日出日落
tag: [guide, ios, astronomy, sun]
ref: 1-sdk-ios-sun
---

获取未来60天全球任意地点日出日落时间。

| 接口代码（枚举）           | 接口     | 数据类       |
| -------------------------- | -------- | ------------ |
| INQUIRE_TYPE_ASTRONOMY_SUN | 日出日落 | SunBaseModel |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def date60 key-ios" %}

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
