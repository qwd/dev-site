---
title: Time Machine for Air Quality
tag: [guide, ios, time-machine, air]
ref: 2-sdk-ios-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.

## Historical

| Interface code     | Interface              | Class                      |
| ------------------ | ---------------------- | -------------------------- |
| historicalAir:     | Historical air quality | HistoricalAirResponse      |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back lang-def" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let threeDaysAgo = Calendar.current.date(byAdding: .day, value: -3, to: Date())!
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyMMdd"
            let date = formatter.string(from: threeDaysAgo)
            let parameter = HistoricalAirParameter(location: "101120501", date: date)
            let response = try await QWeather.instance
                .historicalAir(parameter)
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
    NSDate * threeDaysAgo = [[NSCalendar currentCalendar] dateByAddingUnit:NSCalendarUnitDay value:-3 toDate:[NSDate date] options:0];
    NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSString * date = [formatter stringFromDate:threeDaysAgo];
    HistoricalAirParameter *parameter = [HistoricalAirParameter instanceWithLocation:@"101120501" date:date lang:@(LangZH_HANS)];
    [QWeatherObjc historicalAir:parameter completionHandler:^(HistoricalAirResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}
