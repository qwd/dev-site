---
title: Moon and Moon Phase
tag: [guide, ios, astronomy, moon]
ref: 2-sdk-ios-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

| Interface code              | Interface           | Class        |
| --------------------------- | -------------- | ------------- |
| astronomyMoon | Moonrise, moonset and moon phase data | AstronomyMoonResponse |

## Parameters

**AstronomyMoonParameter**

{% include params.html p="location-def date60 lang-def" %}

## Sample code

Swift

```swift
Task {
    do {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyMMdd"
        let date = formatter.string(from: Date())
        let parameter = AstronomyMoonParameter(location: "101010100", date: date)
        let response = try await QWeather.instance
            .astronomyMoon(parameter)
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
AstronomyMoonParameter *parameter = [AstronomyMoonParameter instanceWithLocation:@"101010100" date:date lang:@(LangZH_HANS)];
[QWeatherObjc astronomyMoon:parameter completionHandler:^(AstronomyMoonResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**AstronomyMoonResponse**

{% include api-response.html group="astro" type="moon" prefix="nil" %}
