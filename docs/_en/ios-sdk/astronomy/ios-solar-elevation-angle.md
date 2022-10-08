---
title: Solar Elevation Angle
tag: [guide, ios, astronomy, solar-elevation-angle]
ref: 3-sdk-ios-solar-elevation-angle
---

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