---
title: Sunrise and Sunset
tag: [guide, ios, astronomy, sun]
ref: 1-sdk-ios-sun
---

Get the sunrise and sunset times for any location around the world for the next 60 days.


| Interface code            | Interface     | Class       |
| -------------------------- | -------- | ------------ |
| astronomySun: | Sunrise and sunset data | AstronomySunResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def date60" %}

### Sample Code

Swift

```swift
   Task {
        do {
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyMMdd"
            let date = formatter.string(from: Date())
            let parameter = AstronomySunParameter(location: "101120501", date: date)
            let response = try await QWeather.instance
                .astronomySun(parameter)
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
    NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSString * date = [formatter stringFromDate:[NSDate date]];
    AstronomySunParameter *parameter = [AstronomySunParameter instanceWithLocation:@"101120501" date:date];
    [QWeatherObjc astronomySun:parameter completionHandler:^(AstronomySunResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```
     
### Response

{% include api-response.html group="astro" type="sun" prefix="nil" %}
