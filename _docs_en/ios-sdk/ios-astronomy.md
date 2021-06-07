---
title: Sun and Moon
tag: ios-sdk
version: v4
description: Browse QWeather iOS SDK documentation to get global sunrise and sunset, moonrise and moonset, and moon phase data.
ref: 8-sdk-ios-astronomy
---

Get the latest 60-day global city sunrise/sunset, moon rise/moon set, moon phase and and solar elevation angle data.

## Sunrise and Sunset

Get the last 60 days of sunrise and sunset data for cities around the world.

| Interface code (Enum)            | Interface     | Class       |
| -------------------------- | -------- | ------------ |
| INQUIRE_TYPE_ASTRONOMY_SUN | Sunrise and sunset data | SunBaseModel |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios date60 key-ios" %}

### Sample Code

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
     
### Response

{% include api-response.html group="astro" type="sun" prefix="nil" %}

## Moon

Get the last 60 days of moonrise, moonset and moon phase data for cities around the world.

| Interface code (Enum)             | Interface           | Class        |
| --------------------------- | -------------- | ------------- |
| INQUIRE_TYPE_ASTRONOMY_MOON | Moonrise, moonset and moon phase data | MoonBaseModel |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios date60 key-ios lang-sdk" %}

### Sample Code

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

### Response

{% include api-response.html group="astro" type="moon" prefix="nil" %}

## Solar Elevation Angle

Get global solar elevation angle and azimuth.

| Interface code (Enum)                  | Interface       | Class            |
| -------------------------------- | ---------- | ----------------- |
| INQUIRE_TYPE_ASTRONOMY_SUN_ANGLE | Solar elevation angle data | SunAngleBaseModel |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord date time tz alt key-ios" %}

### Sample Code

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

### Response

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}