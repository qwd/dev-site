---
title: Sunrise and Sunset
tag: [guide, ios, astronomy, sun]
ref: 1-sdk-ios-sun
---

Get the sunrise and sunset times for any location around the world for the next 60 days.


| Interface code            | Interface     | Class       |
| -------------------------- | -------- | ------------ |
| astronomySun | Sunrise and sunset data | AstronomySunResponse |

## Parameters

**AstronomySunParameter**

{% include params.html p="location-def date60" %}

## Sample code

**Swift**

```swift
Task {
    do {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyMMdd"
        let date = formatter.string(from: Date())
        let parameter = AstronomySunParameter(location: "101010100", date: date)
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

**Objective-C**

```objc
NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
[formatter setDateFormat:@"yyyyMMdd"];
NSString * date = [formatter stringFromDate:[NSDate date]];
AstronomySunParameter *parameter = [AstronomySunParameter instanceWithLocation:@"101010100" date:date];
[QWeatherObjc astronomySun:parameter completionHandler:^(AstronomySunResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```
     
## Response

**AstronomySunResponse**

{% include api-response.html group="astro" type="sun" prefix="nil" %}
