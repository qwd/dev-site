---
title: Historical
tag: ios-sdk
version: v4
description: QWeather iOS SDK supports historical weather and historical air quality AQI data from January 1, 2010 to present, The API supports query of historical data of the last 10 days, all historical data can be downloaded at one time, please contact us for details
ref: 7-sdk-ios-historical
---

Get the last 10 days of weather and air quality data.

If you need a longer period of historical city data or grid historical data, please please [contact us](https://www.qweather.com/en/contact).

## Historical

| Interface code (Enum)           | Interface              | Class                      |
| ------------------------------- | ---------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_WEATHER | Historical weather     | WeatherHistoricalBaseClass |
| INQUIRE_TYPE_HISTORICAL_AIR     | Historical air quality | WeatherHistoricalBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-id-ios date10back key-ios lang-sdk unit-sdk" %}

### Sample Code

```objc

    //Historical weather
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.date = @"20200425";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_WEATHER WithSuccess:^(WeatherHistoricalBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];

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

**Weather Historical Data**

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}

**Air Quality Historical Data**

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}
