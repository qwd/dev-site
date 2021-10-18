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

| 参数           | 描述                                                               | 示例值                                 |
| -------------- | ------------------------------------------------------------------ | -------------------------------------- |
| code           | 状态码，具体含义请参考[状态码](/docs/start/status-code/)            | 200                                    |
| updateTime     | 当前[数据最近更新时间](/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00                 |
| fxLink         | 该城市的天气预报详情自适应网页，可嵌入网站或应用                   | http://hfx.link/ae45                   |
| daily.date     | 预报日期                                                           | 2018-05-30                             |
| daily.type     | 生活指数预报类型                                                   | 2                                      |
| daily.name     | 生活指数预报类型的名称                                             | 舒适度指数                             |
| daily.level    | 生活指数预报等级                                                   | 1                                      |
| daily.category | 生活指数预报级别名称                                               |                                        |
| daily.text     | 生活指数预报的详细描述                                             | 白天温度适宜，应会感到比较清爽和舒适。 |
| refer.sources  | 原始数据来源，可能为空                                             |                                        |
| refer.license  | 使用许可，可能为空                                                 |                                        |

### 生活指数类型和等级

请访问[天气指数信息](/docs/resource/indices-info/)。

