---
title: 分钟级降水
tag: [guide, ios, minutely, precip]
ref: 1-sdk-ios-minutely-precip
---

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。
> 仅限中国地区。

| 接口代码   | 接口      | 数据类                   |
| --------- | -------------- | ----------------- |
|  minutely | 分钟降水 | MinutelyResponse |

### 请求参数

**MinutelyParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | Double | 是 | 116.41 |
| latitude | Double | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |

### 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = MinutelyParameter(longitude: 116.41, latitude: 39.92)
        let response = try await QWeather.instance
            .minutely(parameter)
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
MinutelyParameter * paramater = [MinutelyParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS)];
[QWeatherObjc minutely:parameter completionHandler:^(MinutelyResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### 返回数据

**MinutelyResponse**

{% include api-response.html group="minutely" prefix="nil"  %}

