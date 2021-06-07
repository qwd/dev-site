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

| Parameters                 | Description                                                                                                      | Example values ​​      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------- |
| code                       | Status code, please refer to [Status Code](/en/docs/start/status-code/)                                           | 200                    |
| fxLink                     | Responsive web page of this data, for embedded in website or APP. Only for Chinese cities.                       | http://hfx.link/ae45   |
| weatherDaily.date          | date                                                                                                             | 2018-05-31             |
| weatherDaily.sunrise       | Sunrise time                                                                                                     | 07:36                  |
| weatherDaily.sunset        | Sunset time                                                                                                      | 16:58                  |
| weatherDaily.moonrise      | Moonrise time                                                                                                    | 04:47                  |
| weatherDaily.moonset       | Moonset time                                                                                                     | 14:59                  |
| weatherDaily.moonPhase     | Name of the moon phase of the day                                                                                | First quarter moon     |
| weatherDaily.tempMax       | The highest temperature of the day                                                                               | 4                      |
| weatherDaily.tempMin       | The lowest temperature of the day                                                                                | -5                     |
| weatherDaily.humidity      | Relative humidity of the day, in percent                                                                         | 37                     |
| weatherDaily.precip        | Precipitation of the day                                                                                         | 0                      |
| weatherDaily.pressure      | The atmospheric pressure of the day                                                                              | 1018                   |
| weatherHourly.time         | Historical weather time of the day                                                                               | 2013-12-30T01:45+08:00 |
| weatherHourly.temp         | Hourly temperature of the day                                                                                    | 2                      |
| weatherHourly.icon         | The code of the hourly weather condition icon of the day, free to download [weather icons](/en/docs/start/icons/) | 101                    |
| weatherHourly.text         | Hourly weather condition code for the day                                                                        | Cloudy                 |
| weatherHourly.precip       | Hourly precipitation                                                                                             | 1.2                    |
| weatherHourly.windDir      | Hourly wind direction                                                                                            | NW                     |
| weatherHourly.windScale    | Hourly wind scale                                                                                                | 4                      |
| weatherHourly.windSpeed ​​ | Hourly wind speed, km/h                                                                                          | 15                     |
| weatherHourly.wind360      | Hourly wind direction in azimuth degree                                                                          | 305                    |
| weatherHourly.humidity     | Hourly relative humidity, in percent                                                                             | 30                     |
| weatherHourly.pressure     | Hourly atmospheric pressure                                                                                      | 1030                   |
| airHourly.pubTime          | Release time of historical air quality data of the day, format yyyy-MM-dd HH:mm                                  | 2013-12-30T01:45+08:00 |
| airHourly.aqi              | Hourly air quality index                                                                                         | 74                     |
| airHourly.primary          | The main pollutants per hour of the day. When the air quality category is `excellent`, return `NA`               | pm2.5                  |
| airHourly.level            | Hourly air quality index level                                                                                   | 2                      |
| airHourly.category         | Hourly air quality index level                                                                                   | Good                   |
| airHourly.pm10             | Hourly pm10                                                                                                      | 78                     |
| airHourly.pm2p5            | Hourly pm2.5                                                                                                     | 66                     |
| airHourly.no2              | Hourly nitrogen dioxide                                                                                          | 40                     |
| airHourly.so2              | Hourly sulfur dioxide                                                                                            | 30                     |
| airHourly.co               | Hourly carbon monoxide                                                                                           | 33                     |
| airHourly.o3               | Hourly ozone                                                                                                     | 20                     |
| refer.sources              | Data source and other statements, **may be null**                                                                | qweather.com           |
| refer.license              | License, **may be null**                                                                                         |                        |
