---
title: 热门城市查询
tag: [guide, ios, geo, top-city]
ref: 2-sdk-ios-geo-top
---

获取全球各个国家国家热门城市列表，通过该列表可以让用户轻松查看各国主要城市的天气状况。

| 接口代码      | 接口         | 数据类              |
| ------------ | ----------- | ------------------ |
| geoCityTop  | 热门城市查询  | GeoCityTopResponse |

## 参数

**GeoCityTopParameter**

{% include params.html p="range number lang-def" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = GeoCityTopParameter(range: Range.CN)
        let response = try await QWeather.instance
            .geoCityTop(parameter)
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
GeoCityTopParameter *parameter = [GeoCityTopParameter instanceWithRange:@(RangeCN) 
                                        number:@(10) 
                                        lang:@(LangZH_HANS)];
[QWeatherObjc geoCityTop:parameter completionHandler:^(GeoCityTopResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**GeoCityTopResponse**

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}
