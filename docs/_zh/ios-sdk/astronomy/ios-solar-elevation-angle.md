---
title: 太阳高度角
tag: [guide, ios, astronomy, solar-elevation-angle]
ref: 3-sdk-ios-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

| 接口代码                 | 接口       | 数据类            |
| -------------------------------- | ---------- | ----------------- |
| astronomySolarElevationAngle | 太阳高度角 | AstronomySolarElevationAngleResponse |

## 请求参数

**SolarElevationAngleParameter**

{% include params.html p="location-coord date time tz alt" %}

## 示例代码

**Swift**

```swift
Task {
    do {
        let currentDate = Date()
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyMMdd"
        let date = dateFormatter.string(from: currentDate)
        
        let timeFormatter = DateFormatter()
        timeFormatter.dateFormat = "HHmm"
        timeFormatter.locale = Locale(identifier: "en_US_POSIX")
        let time = timeFormatter.string(from: currentDate)
        
        let parameter = SolarElevationAngleParameter(location: "101010100", date: date, time: time, tz: "0800", alt: "43")
        let response = try await QWeather.instance
            .astronomySolarElevationAngle(parameter)
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
NSDate * current = [NSDate date];
NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
[formatter setDateFormat:@"yyyyMMdd"];
NSString * date = [formatter stringFromDate:current];

NSDateFormatter * timeFormatter = [[NSDateFormatter alloc] init];
[timeFormatter setDateFormat:@"yyyyMMdd"];
[timeFormatter setLocale:[NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"]];
NSString * time = [formatter stringFromDate:current];

SolarElevationAngleParameter *parameter = [SolarElevationAngleParameter instanceWithLocation:@"116.41,39.92" date:date time:time tz:@"0800" alt:@"43"];

[QWeatherObjc astronomySolarElevationAngle:parameter completionHandler:^(AstronomySolarElevationAngleResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**AstronomySolarElevationAngleResponse**

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}