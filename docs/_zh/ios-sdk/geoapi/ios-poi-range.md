---
title: POI范围搜索
tag: [guide, ios, geo, poi-range]
ref: 4-sdk-ios-geo-poi-range
---

提供指定区域范围内查询所有POI信息。

| 接口代码 | 接口                   | 数据类       |
| ----------- | -------------------------- | ------------ |
| geoPoiRange | POI范围搜索  | GeoPoiResponse |

### 请求参数

**GeoPoiRangeParameter**

{% include params.html p="location-coord geo-type radius number lang-def" %}

### 示例代码

**Swift**

```swift
Task{
    do{
        let response = try await QWeather.instance
                    .geoPoiRange(.init(location: "113.88,22.45", type: .CSTA, radius: 50))
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
GeoPoiRangeParameter * parameter = [GeoPoiRangeParameter instanceWithLocation:@"116.41,39.92"
                                                                            type:PoiSCENIC
                                                                        radius:@(50)
                                                                        number:@(10)
                                                                            lang:@(LangZH_HANS)];
[QWeatherObjc geoPoiRange:parameter completionHandler:^(GeoPoiResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### 返回数据

**GeoPoiResponse**

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}
