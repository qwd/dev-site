---
title: Time Machine for Weather
tag: [guide, ios, time-machine, weather]
ref: 7-sdk-ios-historical-weather
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> QWeather also provides historical reanalysis weather data from 2000 to present. If you need more historical weather data data, please provide the following information to <sales@qweather.com>.
> 
> * Company name
> * Contact information
> * City or coordinates
> * Date range

| Interface code (Enum)           | Interface              | Class                      |
| ------------------------------- | ---------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_WEATHER | Historical weather     | WeatherHistoricalBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-id-ios date10back key-ios lang-def unit-def" %}

### Sample Code

```objc
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
```
### Response

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
