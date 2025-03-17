---
title: 潮汐
tag: [guide, ios, ocean, tide]
ref: 1-sdk-ios-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。


| 接口代码（枚举）        | 接口     | 数据类             |
| ----------------------- | ---- | ------------------ |
| oceanTide: | 潮汐 | OceanTideResponse |

### 请求参数

{% include params.html p="location-p2 date10" %}

### 示例代码

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

### 返回数据

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}
