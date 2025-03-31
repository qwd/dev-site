---
title: Currents
tag: [guide, ios, ocean, currents]
ref: 2-sdk-ios-ocean-currents
---

Global currents data for the next 10 days, including currents speed and direction.

| Interface code             | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| oceanCurrents | Currents data | OceanCurrentsResponse |

## Parameters

**OceanParameter**

{% include params.html p="location-p6 date10" %}

## Sample code

**Swift**

```swift
Task{
    do {
        let sevenDaysAfter = Calendar.current.date(byAdding: .day, value: 7, to: Date())!
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyMMdd"
        let date = formatter.string(from: sevenDaysAfter)
        let parameter = OceanParameter(location: "P66981", date: date)
        let response = try await QWeather.instance
            .oceanCurrents(parameter)
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
NSDate * sevenDaysAfter = [[NSCalendar currentCalendar] dateByAddingUnit:NSCalendarUnitDay value:7 toDate:[NSDate date] options:0];
NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
[formatter setDateFormat:@"yyyyMMdd"];
NSString * date = [formatter stringFromDate:sevenDaysAfter];
OceanParameter *parameter = [OceanParameter instanceWithLocation:@"P66981" date:date];
[QWeatherObjc oceanCurrents:parameter completionHandler:^(OceanCurrentsResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**OceanCurrentsResponse**

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

