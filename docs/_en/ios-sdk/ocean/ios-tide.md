<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:52:43
 * @FilePath: /dev-site/docs/_en/ios-sdk/ocean/ios-tide.md
-->
---
title: Tide
tag: [guide, ios, ocean, tide]
ref: 1-sdk-ios-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

| Interface code        | Interface     | Class             |
| ----------------------- | ---- | ------------------ |
| oceanTide: | Tide data | OceanTideResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-p2 date10" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let sevenDaysAfter = Calendar.current.date(byAdding: .day, value: 7, to: Date())!
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyMMdd"
            let date = formatter.string(from: sevenDaysAfter)
            let parameter = OceanParameter(location: "P2236", date: date)
            let response = try await QWeather.instance
                .oceanTide(parameter)
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
    NSDate * sevenDaysAfter = [[NSCalendar currentCalendar] dateByAddingUnit:NSCalendarUnitDay value:7 toDate:[NSDate date] options:0];
    NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSString * date = [formatter stringFromDate:sevenDaysAfter];
    OceanParameter *parameter = [OceanParameter instanceWithLocation:@"P2236" date:date];
    [QWeatherObjc oceanTide:parameter completionHandler:^(OceanTideResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

