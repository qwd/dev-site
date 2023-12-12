---
title: Moon and Moon Phase
tag: [guide, ios, astronomy, moon]
ref: 2-sdk-ios-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

| Interface code (Enum)             | Interface           | Class        |
| --------------------------- | -------------- | ------------- |
| INQUIRE_TYPE_ASTRONOMY_MOON | Moonrise, moonset and moon phase data | MoonBaseModel |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def date60 key-ios lang-def" %}

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
