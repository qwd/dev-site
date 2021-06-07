---
title: GeoAPI
tag: ios-sdk
version: v4
description: Browse the QWeather iOS SDK development documentation for global city information and latitude and longitude counter-check.
ref: 2-sdk-ios-geo
---

Weather data is based on geographic location, so you need to know specific location information before getting the weather. QWeather provides a powerful GeoAPI service, which can obtain the basic information of the city that needs to be queried, including the location ID of the city or region (you need this ID to query the weather), multilingual name, latitude and longitude, time zone, altitude, Rank value, administrative division, etc.

In addition, the GeoAPI service can also help you:

- Avoid the trouble of the same name city
- Return multiple city results based on the name entered by the user in your APP or website, so that the user can select an accurate city and return the city’s weather
- Display popular cities in your APP or website, users can directly select, reduce search steps and improve user experience
- No need to maintain the city list, city information updates are obtained in real time

> GeoAPI is free for the first 50,000 calls per day for each account, more calls refer to [price](/en/help/buy#price)
{:.bqwarning}

## City Lookup

| Interface code (Enum)| Interface           | Class        |
| ----------- | ---------------------------- | ------------ |
| INQUIRE_TYPE_GEO_CITY_LOOKUP| City lookup  | GeoBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="key-ios location-geo lang-sdk range number" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"beijing";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_CITY_LOOKUP WithSuccess:^(GeoBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

| Parameters | Description | Example |
| ---------- | ----------- |------------ | -------------------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Location latitude | 22.53122 |
| location.lon | Location longitude | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | [Timezone](/en/docs/start/glossary#timezone) of the location | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | Type of the location | city |
| location.rank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |

## Top City

| Interface code (Enum)| Interface     | Class        |
| --------- | ------------------------ | ------------ |
|| INQUIRE_TYPE_GEO_TOPCITY Top city   | GeoBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="key-ios lang-sdk range number" %}

### Sample Code

```objc

    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"beijing";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_TOPCITY WithSuccess:^(GeoBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

| Parameters | Description | Example |
| ---------- | ----------- |------------ | -------------------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Latitude of the location | 22.53122 |
| location.lon | Longitude of the location | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | Location [Timezone](/en/docs/start/glossary#timezone) | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | Location type | city |
| location.rank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |


## POI Lookup

| Interface code (Enum)| Interface         | Class        |
| ---------- | --------------------------- | ------------ |
| INQUIRE_TYPE_GEO_POI_LOOKUP| POI Lookup  | GeoBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-geo key-ios geo-type city number lang-sdk" %}

### Sample Code

```objc

    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"beijing";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_POI_LOOKUP WithSuccess:^(GeoBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

| Parameters | Description | Example |
| ---------- | ----------- |------------ | -------------------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Latitude of the location | 22.53122 |
| location.lon | Longitude of the location | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | Location [Timezone](/en/docs/start/glossary#timezone) | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | POI type | scenic |
| location.rank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |


## POI Range

| Interface code (Enum)| Interface       | Class        |
| --------- | -------------------------- | ------------ |
| INQUIRE_TYPE_GEO_POI_RANGE| POI range  | GeoBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord key-ios radius number lang-sdk" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"116.4,39.1";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_POI_RANGE WithSuccess:^(GeoBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    
```

### Response

| Parameters | Description | Example |
| ---------- | ----------- |------------ | -------------------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Latitude of the location | 22.53122 |
| location.lon | Longitude of the location | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | POI [Timezone](/en/docs/start/glossary#timezone) | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | POI type | city |
| location.rank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |