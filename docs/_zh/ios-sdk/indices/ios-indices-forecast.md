---
title: 天气指数预报
tag: [guide, ios, indices, forecast]
ref: 1-sdk-ios-indices-forecast
---

中国和海外城市天气生活指数预报数据。

- 中国天气生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外天气生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

| 接口代码    | 接口         | 数据类           |
| ---------- | ------------ | --------------- |
| indices1d | 当天生活指数   | IndicesDailyResponse |
| indices3d | 3天生活指数    | IndicesDailyResponse |

## 参数

**IndicesParameter**

{% include params.html p="location-def idx-type lang-def" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = IndicesParameter(location: "101010100", type: [.CW,.DRSG])

        /**
        * 获取1天生活指数数据
        */
        let _ = try await QWeather.instance.indices1d(parameter)
        
        /**
        * 获取3天生活指数数据
        */
        let _ = try await QWeather.instance.indices3d(parameter)

    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
IndicesParameter *parameter = [IndicesParameter instanceWithLocation:@"101010100" type:@[@(IndicesCW),@(IndicesDRSG)] lang:@(LangZH_HANS)];

void (^handler)(IndicesDailyResponse *, NSError *) = ^(IndicesDailyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/**
* 获取1天生活指数数据
*/
[QWeatherObjc indices1d:parameter lang:LangZH_HANS completionHandler:handler];

/**
* 获取3天生活指数数据
*/
[QWeatherObjc indices3d:parameter lang:LangZH_HANS completionHandler:handler];
```

## 返回数据

**IndicesDailyResponse**

{% include api-response.html group="indices" prefix="daily" %}

### 生活指数类型和等级

请访问[天气指数信息](/docs/resource/indices-info/)。

