---
title: Air Quality
tag: ios-sdk
version: v4
description: QWeather iOS SDK air quality AQI supported all cities and 1500+ monitoring stations in China.
ref: 6-sdk-ios-air
---

Air Quality real-time and daily forecast for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, and nitrogen dioxide , sulfur dioxide, carbon monoxide values.

| Interface code (Enum) | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_NOW| Air Quality Live              | AirBaseClass |
| INQUIRE_TYPE_WEATHER_AIR_5D| Air quality 5-day forecast  ​​ | AirBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios lang-sdk" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_NOW WithSuccess:^(AirBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv){: target="_blank"}.

| Parameters       | Description                                                                                                                                                                                | Example values ​​       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| code             | Status code, please refer to [Status Code](/en/docs/start/status-code/)                                                                                                                     | 200                     |
| updateTime       | [Last updated time](/en/docs/start/glossary#update-time)                                                                                                                         | 2013-12-30T01:45+08:00  |
| fxLink           | Responsive web page of this data, for embedded in website or APP                                                                                                                           | http://hfx.link/ae45    |
| now.pubTime      | The data release time from the data source                                                                                                                                                 | 2013-12-30T01:45+08:00  |
| now.aqi          | Real-time air quality index                                                                                                                                                                | 74                      |
| now.level        | Real-time air quality index level                                                                                                                                                          | 2                       |
| now.category     | Real-time air quality index category                                                                                                                                                       | Good                    |
| now.primary      | The main pollutant. When the air quality category is `excellent`, return `NA`                                                                                                              | pm2p5                   |
| now.pm10         | Real-time PM10                                                                                                                                                                             | 78                      |
| now.pm2p5        | Real-time PM2.5                                                                                                                                                                            | 66                      |
| now.no2          | Real-time Nitrogen dioxide                                                                                                                                                                 | 40                      |
| now.so2          | Real-time Sulfur dioxide                                                                                                                                                                   | 30                      |
| now.co           | Real-time Carbon monoxide                                                                                                                                                                  | 33                      |
| now.o3           | Real-time Ozone                                                                                                                                                                            | 20                      |
| station.pubTime  | The data release time from the monitoring station                 | 2013-12-30T01: 45+08:00 |
| station.name     | The name of the monitoring station                               | Wanshou West Palace     |
| station.cid      | ID of the monitoring station, see [ID list](/en/docs/start/location-list/)                                           | CNA110000               |
| station.aqi      | Real-time air quality index of the monitoring station               | 74                      |
| station.level    | Real-time air quality index level of the monitoring station  | 2                       |
| station.category | Real-time air quality index category of the monitoring station                              | Good               |
| station.primary  | The real-time main pollutants of the monitoring station. When the air quality category is `excellent`, return `NA` | pm2p5                    |
| station.pm10     | Real-time PM10 from the monitoring station                       | 78                      |
| station.pm2p5    | Real-time PM2.5 from the monitoring station                     | 66                      |
| station.no2      | Real-time nitrogen dioxide from the monitoring station            | 40                      |
| station.so2      | Real-time sulfur dioxide from the monitoring station                | 30                      |
| station.co       | Real-time carbon monoxide from the monitoring station              | 33                      |
| station.o3       | Real-time ozone from the monitoring station                     | 20                      |
| daily.fxDate     | Daily air quality forecast date                                                                                                                                                            | 2018-05-31              |
| daily.aqi        | Daily air quality index                                                                                                                                                                    | 74                      |
| daily.level      | Daily air quality index level                                                                                                                                                              | 2                       |
| daily.category   | Daily air quality index category                                                                                                                                                           | Good                    |
| daily.primary    | The main pollutants, When the air quality category is `excellent`, return `NA`                                                                                                             | pm2.5                   |
| refer.sources    | Data source and other statements, **may be null**                                                                                                                                          |                         |
| refer.license    | License, **may be null**                                                                                                                                                                   |                         |