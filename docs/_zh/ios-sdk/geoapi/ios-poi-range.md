---
title: POI范围搜索
tag: [guide, ios, geo, poi-range]
ref: 4-sdk-ios-geo-poi-range
---

提供指定区域范围内查询所有POI信息。


| 接口代码 | 接口                   | 数据类       |
| ----------- | -------------------------- | ------------ |
| geoPoiRange: | POI范围搜索  | GeoPoiResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-coord radius number lang-def" %}

### 示例代码

Swift

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

Objective-C

```objc
    GeoPoiRangeParameter *parameter = [GeoPoiRangeParameter makeWithLocation:@"116.41,39.92" 
                                                            type:PoiTypeSCENIC 
                                                            radius:50 
                                                            number:10 
                                                            lang:LangTypeZH_HANS
                                                            ];
    [QWeatherObjc geoPoiRange:parameter  completionHandler:^(GeoPoiResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### 返回数据

| 参数               | 描述                                                    | 示例                 |
| ------------------ | ------------------------------------------------------- | -------------------- |
| code               | 状态码，具体含义请参考[状态码](/docs/resource/status-code/) | 200                  |
| location.name      | 地区/城市名称                                           | 南山区               |
| location.cid       | 地区/城市ID                                             | 101280604            |
| location.lat       | 地区/城市纬度                                           | 22.53122             |
| location.lon       | 地区/城市经度                                           | 113.92942            |
| location.adm2      | 该地区/城市的上级行政区划名称                           | 深圳市               |
| location.adm1      | 该地区/城市所属一级行政区域                             | 广东省               |
| location.country   | 该地区/城市所属国家名称                                 | 中国                 |
| location.tz        | 该地区/城市所在时区                                     | +0800                |
| location.utcOffset | 该地区/城市目前与UTC时间偏移的小时数，参考详细说明      | +08:00               |
| location.isDst     | 该地区/城市是否当前处于夏令时                           | 0                    |
| location.type      | 该地区/城市的属性                                       | city                 |
| location.rank      | 地区评分                                                | 10                   |
| location.fxLink    | 该地区的天气预报网页链接，便于嵌入你的网站或应用        | http://hfx.link/34T5 |
| refer.sources      | 原始数据来源，可能为空                                  |                      |
| refer.license      | 使用许可，可能为空                                      |                      |
