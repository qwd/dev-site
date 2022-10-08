---
title: 潮汐
tag: [guide, ios, ocean, tide]
ref: 1-sdk-ios-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。


| 接口代码（枚举）        | 接口     | 数据类             |
| ----------------------- | ---- | ------------------ |
| INQUIRE_TYPE_OCEAN_TIDE | 潮汐 | OceanTideBaseClass |

### 请求参数

{% include params.html p="location-p2 date10 key-ios" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"P66981";
QWeatherConfigInstance.date = @"20210518";
[QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_OCEAN_TIDE WithSuccess:^(OceanTideBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### 返回数据

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}
