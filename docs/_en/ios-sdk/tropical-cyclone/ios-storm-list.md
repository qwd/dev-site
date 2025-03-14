<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:50:33
 * @FilePath: /dev-site/docs/_en/ios-sdk/tropical-cyclone/ios-storm-list.md
-->
---
title: Storm List
tag: [guide, ios, storm, list]
ref: 1-sdk-ios-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`


| Interface code     | Interface          | Class             |
| ------------------ | ------------------ | ----------------- |
| tropicalStormList: | Storm list and IDs | StormListResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="basin year" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let parameter = StormListParameter(basin: .NP, year: 2024)
            let response = try await QWeather.instance
                .tropicalStormList(parameter)
            print(response)
        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
        }
    }
```

Objective-C

```objc
    StormListParameter *parameter = [StormListParameter instanceWithBasin:BasinTypeNP year:2024];
    [QWeatherObjc tropicalStormList:parameter completionHandler:^(StormListResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```
     
### Response

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}

