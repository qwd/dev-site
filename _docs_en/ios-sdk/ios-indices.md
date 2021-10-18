---
title: Weather Indices
tag: ios-sdk
version: v4
description: Check the QWeather iOS SDK development documentation for weather indices, including car wash, cold, clothing, allergies, etc.
ref: 4-sdk-ios-indices
---

Weather Indices including:

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

| Interface code (Enum)   | Interface                       | Class            |
| ----------------------- | ------------------------------- | ---------------- |
| INQUIRE_TYPE_INDICES_1D | Today Weather Indices           | IndicesBaseClass |
| INQUIRE_TYPE_INDICES_3D | Weather Indices 3-days forecast | IndicesBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios idx-type-ios" %}

### Sample Code

```objc
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.indices = @[@(INDICES_TYPE_all)];
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_INDICES_1D WithSuccess:^(IndicesBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
### Response

| Parameters | Description | Example values ​​ |
| ---------- | ----------- | ----------------- |  |------------------------------------------ |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| updateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| fxLink | Responsive web page of this data, for embedded in website or APP | http://hfx.link/ae45 |
| daily.date | Forecast date | 2018-05-30 |
| daily.type | Weather indices type | 2 |
| daily.name | Name of weather indices type | Comfort index |
| daily.level | Weather indices level | 1 |
| daily.category | Weather indices category name |Comfort |
| daily.text | Detailed description of the weather indices, **may be null** | The temperature is suitable during the day, and you should feel more refreshing and comfortable. |
| refer.sources | Data source and other statements, **may be null** | qweather.com |
| refer.license | License, **may be null** |commercial license |

### Index type and level

See [Indices Info](/en/docs/resource/indices-info/).



