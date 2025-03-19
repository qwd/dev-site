---
title: 月升月落和月相
tag: [guide, ios, astronomy, moon]
ref: 2-sdk-ios-moon
---

获取未来60天全球城市月升月落和逐小时的月相数据。

> 月相已考虑南北半球的差异，不需要再进行转换

| 接口代码            | 接口           | 数据类        |
| --------------------------- | -------------- | ------------- |
| astronomyMoon | 月升月落和月相 | AstronomyMoonResponse |

### 请求参数

**AstronomyMoonParameter**

{% include params.html p="location-def date60 lang-def" %}

### 示例代码

**Swift**

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

### 返回数据

**AstronomyMoonResponse**

{% include api-response.html group="astro" type="moon" prefix="nil" %}
