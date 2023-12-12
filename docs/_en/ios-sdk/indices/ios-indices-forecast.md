---
title: Weather Indices Forecast
tag: [guide, ios, indices, forecast]
ref: 1-sdk-ios-indices-forecast
---

Get weather indices forecast data for cities in China and around the world.

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

| Interface code (Enum)   | Interface                       | Class            |
| ----------------------- | ------------------------------- | ---------------- |
| INQUIRE_TYPE_INDICES_1D | Today Weather Indices           | IndicesBaseClass |
| INQUIRE_TYPE_INDICES_3D | Weather Indices 3-days forecast | IndicesBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def key-ios idx-type-ios" %}

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

{% include api-response.html group="indices" prefix="daily" %}

### Index type and level

See [Indices Info](/en/docs/resource/indices-info/).



