---
title: 潮流
tag: [guide, ios, ocean, currents]
ref: 2-sdk-ios-ocean-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

| 接口代码（枚举）            | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| INQUIRE_TYPE_OCEAN_CURRENTS | 潮流 | OceanTideBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-p6 date10" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"P66981";
QWeatherConfigInstance.date = @"20210518";
[QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_OCEAN_CURRENTS WithSuccess:^(OceanCurrentsBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### 返回数据

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

