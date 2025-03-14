<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:53:28
 * @FilePath: /dev-site/docs/_en/ios-sdk/minutely/ios-minutely-precipitation.md
-->
---
title: Minutely Precipitation
tag: [guide, ios, minutely, precip]
ref: 1-sdk-ios-minutely-precip
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

| Interface code   | Interface            | Class                    |
| ---------------- | -------------------- | ------------------------ |
| minutely:        | Minute precipitation | MinutelyResponse |

### Request Parameters

{% include params.html p="location-coord lang-def" %}

### Sample Code

Swift

```swift
   Task{
        do {
            let parameter = MinutelyParameter(longitude: 116.41, latitude: 39.92)
            let response = try await QWeather.instance
                .minutely(parameter)
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
    MinutelyParameter * paramater = [MinutelyParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangTypeZH_HANS)];
    [QWeatherObjc minutely:paramater completionHandler:^(MinutelyResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="minutely" prefix="nil"  %}
