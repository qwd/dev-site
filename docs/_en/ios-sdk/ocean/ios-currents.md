<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:52:56
 * @FilePath: /dev-site/docs/_en/ios-sdk/ocean/ios-currents.md
-->
---
title: Currents
tag: [guide, ios, ocean, currents]
ref: 2-sdk-ios-ocean-currents
---

Global currents data for the next 10 days, including currents speed and direction.

## Currents

Currents data for the next 10 days, including currents speed, direction and hourly forecast.

| Interface code             | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| oceanCurrents: | Currents data | OceanCurrentsResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-p6 date10" %}

### Sample Code

Swift

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

Objective-C

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

### Response

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

