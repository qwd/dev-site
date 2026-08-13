---
title: 污染物列表
description: 和风空气质量 API 支持的污染物列表。
toc: false
translationKey: api-aqi-pollutant
---

空气质量由空气污染物确定，污染物浓度越高，对人体的危害越大。污染物包括固体颗粒、滴液和气体的混合物，它们有多种来源，例如家庭燃料燃烧、工业生产、交通废气、发电、露天焚烧、沙尘等。[世卫组织全球空气质量指南](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines)提到的污染物有PM2.5、PM10、O3、NO2、SO2和CO，然而各国和地区的环境部门对于污染物有不同的定义，例如中国空气质量要求计算6种污染物，欧盟则要求计算5种污染物。

在实践中，AQI 中的污染物并不一致，在一些地区也可能无法提供污染物的详细数据，这是因为：

- 当地规范对污染物的标准不同
- 监测站故障或被关闭
- 监测站不支持某些污染物的监控
- 法律法规的要求

## 首要污染物 {#primary-pollutant}

浓度值最高或污染物分指数最差的污染物是首要污染物，代表导致当前空气污染的主要成分。

## 污染物分指数 {#pollutant-sub-index}

污染物分指数是各项污染物的空气质量指数，以便于我们了解和对比当前空气质量各项污染物的等级，其中最差的污染物分指数用于确定首要污染物。

一般来说，最差的分指数即为当前的 AQI 数值，例如：

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```


## 支持的污染物 {#supported-pollutants}

请参考下方表格了解目前我们支持的污染物和其单位。

{{< pollutants-table >}}