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
    MinutelyParameter * paramater = [MinutelyParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS)];
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
