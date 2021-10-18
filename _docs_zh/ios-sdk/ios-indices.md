---
title: 天气生活指数
tag: ios-sdk
version: v4
description: 使用和风天气iOS SDK获取全球生活指数，包括洗车指数、穿衣指数、感冒指数、过敏指数、紫外线指数、钓鱼指数等数据，支持全国4000+个市县区和海外15万个城市天气预报。
ref: 4-sdk-ios-indices
---

和风天气生活指数为中国和海外城市提供详细的生活指数实况和预报数据，包括：

- 中国生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

| 接口代码（枚举）        | 接口         | 数据类           |
| ----------------------- | ------------ | ---------------- |
| INQUIRE_TYPE_INDICES_1D | 当天生活指数 | IndicesBaseClass |
| INQUIRE_TYPE_INDICES_3D | 3天生活指数  | IndicesBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios idx-type-ios" %}

### 示例代码

```objc
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.indices = @[@(INDICES_TYPE_all)];
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_INDICES_1D WithSuccess:^(IndicesBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
### 返回数据

{% include api-response.html group="indices" prefix="daily" %}

### 生活指数类型和等级

请访问[天气指数信息](/docs/resource/indices-info/)。

