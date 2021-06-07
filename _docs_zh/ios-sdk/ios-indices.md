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

### 生活指数常量 {#indices-constant}

生活指数等级仅供参考，等级有可能会进行调整。

> 如选择`INDICES_TYPE_all`，则不能再使用其他生活指数类型。

| 类型参数          | 类型名称             | 等级                                                                                       |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| INDICES_TYPE_all  | 全部生活指数         |                                                                                            |
| INDICES_TYPE_spt  | 运动指数             | 适宜(1)、较适宜(2)、较不宜(3)                                                              |
| INDICES_TYPE_cw   | 洗车指数             | 适宜(1)、较适宜(2)、较不宜(3)、不宜(4)                                                     |
| INDICES_TYPE_drsg | 穿衣指数             | 寒冷(1)、冷(2)、较冷(3)、较舒适(4)、舒适(5)、热(6)、炎热(7)                                |
| INDICES_TYPE_fis  | 钓鱼指数             | 适宜(1)、较适宜(2)、不宜(3)                                                                |
| INDICES_TYPE_uv   | 紫外线指数           | 最弱(1)、弱(2)、中等(3)、强(4)、很强(5)                                                    |
| INDICES_TYPE_tra  | 旅游指数             | 适宜(1)、较适宜(2)、一般(3)、较不宜(4)、不适宜(5)                                          |
| INDICES_TYPE_ag   | 花粉过敏指数         | 极不易发(1)、不易发(2)、较易发(3)、易发(4)、极易发(5)                                      |
| INDICES_TYPE_comf | 舒适度指数           | 舒适(1)、较舒适(2)、较不舒适(3)、很不舒适(4)、极不舒适(5)、不舒适(6)、非常不舒适(7)        |
| INDICES_TYPE_flu  | 感冒指数             | 少发(1)、较易发(2)、易发(3)、极易发(4)                                                     |
| INDICES_TYPE_ap   | 空气污染扩散条件指数 | 优(1)、良(2)、中(3)、较差(4)、很差(5)                                                      |
| INDICES_TYPE_ac   | 空调开启指数         | 长时间开启(1)、部分时间开启(2)、较少开启(3)、开启制暖空调(4)                               |
| INDICES_TYPE_gl   | 太阳镜指数           | 不需要(1)、需要(2)、必要(3)、很必要(4)、非常必要(5)                                        |
| INDICES_TYPE_mu   | 化妆指数             | 保湿(1)、保湿防晒(2)、去油防晒(3)、防脱水防晒(4)、去油(5)、防脱水(6)、防晒(7)、滋润保湿(8) |
| INDICES_TYPE_dc   | 晾晒指数             | 极适宜(1)、适宜(2)、基本适宜(3)、不太适宜(4)、不宜(5)、不适宜(6)                           |
| INDICES_TYPE_ptfc | 交通指数             | 良好(1)、较好(2)、一般(3)、较差(4)、很差(5)                                                |
| INDICES_TYPE_spi  | 防晒指数             | 弱(1)、较弱(2)、中等(3)、强(4)、极强(5)                                                    |

