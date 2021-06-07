---
title: Weather Warning
tag: ios-sdk
version: v4
description: QWeather iOS SDK support severe weathe warning in China, real-time access to typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.
ref: 5-sdk-ios-warning
---

Get severe weathe warning in China, including typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.

## Weather Warning

| Interface code (Enum) | Interface       | Class            |
| --------------------- | --------------- | ---------------- |
| INQUIRE_TYPE_WARNING  | Weather warning | WarningBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios lang-zhen-sdk" %}

### Sample Code

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNING WithSuccess:^(WarningBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

| Parameters | Description | Example values ​​ |
| ---------- | ----------- |--------------------------------------- | ---------- -------------------------------------------------- ---- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| updateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| fxLink | The city's disaster warning details are adaptive web pages, which can be embedded in websites or applications. ****may be null**. ** | http://hfx.link/ae45 |
| warning.id | The unique identifier of this warning, which can be used to determine whether this warning already exists. | 202010110345679813 |
| warning.pubTime | Warning release time | 2017-10-25T12:03+08:00 |
| warning.title | Title of warning information | Guangdong Shenzhen Meteorological Observatory issued a yellow lightning warning |
| warning.startTime | Warning start time, **may be null** | Shenzhen Meteorological Observatory of Guangdong Province issued a yellow lightning warning |
| warning.endTime | The end time of the warning, **may be null** | Shenzhen Meteorological Observatory of Guangdong Province issued a yellow lightning warning |
| warn
ing.status | Warning status, **Not applicable to all countries, **may be null**. ** | Early Warning |
| warning.level | Warning level | Yellow |
| warning.type | Warning type | Thunder and lightning |
| warning.txt | Detailed text description of the warning | Shenzhen Meteorological Bureau distributed the yellow warning signal of mine electric at 12:59 on October 4th, please pay attention to defense. |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |

## Weather Warning City List

| Interface code (Enum)    | Interface              | Class            |
| ------------------------ | ---------------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | List of warning cities | WarningListClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="range-cn key-ios" %}

### Sample Code

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.range = @"cn";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNINGLIST WithSuccess:^(WarningListClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

| Parameters                | Description                                                            | Example values ​​      |
| ------------------------- | ---------------------------------------------------------------------- | ---------------------- |
| code                      | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200                    |
| updateTime                | [Last updated time](/en/docs/start/glossary#update-time)     | 2013-12-30T01:45+08:00 |
| warningLocList.locationId | The city/region ID of the current country warning                      | 101010100              |