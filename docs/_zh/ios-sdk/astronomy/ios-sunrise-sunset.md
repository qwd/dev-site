---
title: 日出日落
tag: [guide, ios, astronomy, sun]
ref: 1-sdk-ios-sun
---

获取未来60天全球任意地点日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

| 接口代码           | 接口     | 数据类       |
| -------------------------- | -------- | ------------ |
| astronomySun | 日出日落 | AstronomySunResponse |

## 请求参数

**AstronomySunParameter**

{% include params.html p="location-def date60" %}

## 示例代码

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
     
## 返回数据

**AstronomySunResponse**

{% include api-response.html group="astro" type="sun" prefix="nil" %}
