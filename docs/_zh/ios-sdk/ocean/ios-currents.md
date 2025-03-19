---
title: 潮流
tag: [guide, ios, ocean, currents]
ref: 2-sdk-ios-ocean-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

| 接口代码            | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| oceanCurrents | 潮流 | OceanCurrentsResponse |

### 请求参数

**OceanParameter**

{% include params.html p="location-p6 date10" %}

### 示例代码

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

### 返回数据

**OceanCurrentsResponse**

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

