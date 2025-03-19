---
title: Storm List
tag: [guide, ios, storm, list]
ref: 1-sdk-ios-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`


| Interface code     | Interface          | Class             |
| ------------------ | ------------------ | ----------------- |
| tropicalStormList | Storm list | StormListResponse |

### Request Parameters

**StormListParameter**

{% include params.html p="basin year" %}

### Sample Code

**Swift**

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

**Objective-C**

```objc
StormListParameter *parameter = [StormListParameter instanceWithBasin:BasinNP year:2024];
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

**StormListResponse**

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}

