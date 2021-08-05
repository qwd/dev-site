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

### Indices Constant

The weather indices level is for reference only, and the level may be adjusted. 

> If you set `INDICES_TYPE_all`, you cannot use other indices types.

| Type              | Name            | Level  (Category)                                                                                                                                                                                                     |
| ----------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INDICES_TYPE_all  | All indices     |                                                                                                                                                                                                                       |
| INDICES_TYPE_spt  | Sports          | Excellent (1), Good (2), Poor  (3)                                                                                                                                                                                    |
| INDICES_TYPE_cw   | Car Wash        | Excellent (1), Good (2), At Risk  (3), Poor (4)                                                                                                                                                                       |
| INDICES_TYPE_drsg | Clothing        | Freezing (1), Cold (2), Cooler  (3), Cool (4), Comfort (5), Hot (6), Heat (7)                                                                                                                                         |
| INDICES_TYPE_fis  | Fishing         | Good (1), Moderate (2), Poor  (3)                                                                                                                                                                                     |
| INDICES_TYPE_uv   | UV              | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)                                                                                                                                                           |
| INDICES_TYPE_tra  | Travel          | Excellent (1), Good (2), Moderate  (3), Fair (4), Poor (5)                                                                                                                                                            |
| INDICES_TYPE_ag   | Allergy         | Beneficial (1), Neutral (2), At  Risk (3), High Risk (4), Extreme Risk (5)                                                                                                                                            |
| INDICES_TYPE_comf | Comfort         | Excellent (1), Good (2), Moderate  (3), Poor (4), Bad (5), Worse (6), Worst (7) )                                                                                                                                     |
| INDICES_TYPE_flu  | Cold            | Healthy (1), Moderate (2),  Unhealthy (3), Hazardous (4)                                                                                                                                                              |
| INDICES_TYPE_ap   | Air Pollution   | Excellent (1), Good (2), Moderate  (3), Bad (4), Poor (5)                                                                                                                                                             |
| INDICES_TYPE_ac   | Air-Conditioner | On (1), Advise (2), Neutral (3),  Heating Mode (4)                                                                                                                                                                    |
| INDICES_TYPE_gl   | Sunglasses      | No (1), Recommend (2), Advise (3),  Need (4), Necessary (5)                                                                                                                                                           |
| INDICES_TYPE_mu   | Makeup          | Hydrating (1), Moisturizing and  sun protection (2), Oil control and sun protection (3), Prevent dehydration  and sun protection (4), Oil control (5), Prevent dehydration (6), Sun  protection (7), Moisturizing (8) |
| INDICES_TYPE_dc   | Air-Cure        | Excellent (1), Good (2), Moderate  (3), At Risk (4), Bad (5), Poor (6)                                                                                                                                                |
| INDICES_TYPE_ptfc | Traffic         | Excellent (1), Good (2), Moderate  (3), Poor (4), Bad (5)                                                                                                                                                             |
| INDICES_TYPE_spi  | SPF             | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)                                                                                                                                                           |



