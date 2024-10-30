---
title: Time Machine for Air Quality
tag: [guide, ios, time-machine, air]
ref: 2-sdk-ios-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.

## Historical

| Interface code (Enum)           | Interface              | Class                      |
| ------------------------------- | ---------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_AIR     | Historical air quality | WeatherHistoricalBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back lang-def" %}

### Sample Code

```objc
    //Historical air quality
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ; QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.date = @"20200425";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_AIR WithSuccess:^(WeatherHistoricalBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
### Response

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}
