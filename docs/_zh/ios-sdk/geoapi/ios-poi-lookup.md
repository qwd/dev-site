---
title: POI搜索
tag: [guide, ios, geo, poi-lookup]
ref: 3-sdk-ios-geo-poi-lookup
---

使用关键字和坐标查询POI信息（景点、火车站、飞机场、港口等）

| 接口代码 | 接口                    | 数据类       |
| ----------- | ------------------ | ------------ |
| geoPoiLookup | POI搜索  | GeoPoiResponse |

### 请求参数

**GeoPoiLookupParameter**

{% include params.html p="location-geo geo-type city number lang-def" %}

### 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = GeoPoiLookupParameter(location: "116.41,39.92", type: .SCENIC)
        let response = try await QWeather.instance
            .geoPoiLookup(parameter)
    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
GeoPoiLookupParameter *parameter = [GeoPoiLookupParameter instanceWithLocation:@"116.41,39.92" 
                                            type:PoiSCENIC 
                                            city:nil 
                                            number:@(10) 
                                            lang:@(LangZH_HANS)];
[QWeatherObjc geoPoiLookup: parameter completionHandler:^(GeoPoiResponse * _Nullable response, NSError * _Nullable error) {
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