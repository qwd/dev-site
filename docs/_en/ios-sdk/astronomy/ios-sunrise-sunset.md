---
title: Sunrise and Sunset
tag: [guide, ios, astronomy, sun]
ref: 1-sdk-ios-sun
---

Get the sunrise and sunset times for any location around the world for the next 60 days.


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
