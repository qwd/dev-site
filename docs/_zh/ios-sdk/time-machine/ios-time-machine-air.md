---
title: 历史空气质量
tag: [guide, ios, time-machine, air]
ref: 2-sdk-ios-historical-air
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

| 接口代码        | 接口            | 数据类                 |
| -------------- | -------------- | --------------------- |
| historicalAir: | 历史空气质量     | HistoricalAirResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-id date10back lang-def" %}

### 示例代码

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
    HistoricalAirParameter * parameter = [HistoricalAirParameter makeWithLocation:@"101120501" date:date lang:LangTypeZH_HANS];
    [QWeatherObjc historicalAir:parameter completionHandler:^(HistoricalAirResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### 返回数据


{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}