---
title: POI Lookup
tag: [guide, ios, geo, poi-lookup]
ref: 3-sdk-ios-geo-poi-lookup
---

POI Lookup API provides basic information of POI(scenic spot, tide stations, currents stations, etc.)

| Interface code (Enum)| Interface         | Class        |
| ---------- | --------------------------- | ------------ |
| INQUIRE_TYPE_GEO_POI_LOOKUP| POI Lookup  | GeoBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-geo key-ios geo-type city number lang-def" %}

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
| code | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Latitude of the location | 22.53122 |
| location.lon | Longitude of the location | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | Location [Timezone](/en/docs/resource/glossary/#timezone) | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/resource/glossary/#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | POI type | scenic |
| location.rank | [Location Rank](/en/docs/resource/glossary/#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |
