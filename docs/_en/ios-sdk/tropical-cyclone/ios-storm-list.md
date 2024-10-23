---
title: Storm List
tag: [guide, ios, storm, list]
ref: 1-sdk-ios-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`


| Interface code (Enum)         | Interface     | Class             |
| ----------------------- | -------- | ------------------ |
| INQUIRE_TYPE_STORM_LIST | Storm list and IDs | StormListBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="basin year" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.basin = BASIN_TYPE_NP;
    QWeatherConfigInstance.year = @"2021";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_STORM_LIST WithSuccess:^(StormListBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### Response

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}

