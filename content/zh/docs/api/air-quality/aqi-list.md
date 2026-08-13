---
title: 支持的空气质量指数
description: 和风空气质量 API 支持的空气质量指数和标准。
toc: false
translationKey: api-aqi-list
aliases:
- "/docs/resource/air-info/"
---

和风天气支持两种 AQI 类型，并在 API 中返回最多两个 AQI 数据：通用 AQI 与本地 AQI。

### QAQI

**QAQI** 是和风天气定义的通用的空气质量指数，以[世卫组织全球空气质量指南 2021](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) 为基础并进行了调整，以适应不同国家的自然环境、经济基础和社会状况。

*提示：QAQI 暂时不适用于中国地区。*

### 本地 AQI {#local-aqi}

本地空气质量一般由各国或地区环境部门进行监控和管理，并且根据当地的实际情况制定空气质量指数的标准，这些指数具有不同的标准和计算方法，并且有可能会发布多个标准的空气质量指数。

### AQI 列表 {#aqi-list}

以下是我们支持的空气质量指数以及它们对应的取值范围、类别等：

{{< aqi-table >}}

*下载完整表格：[aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/assets/table/aqis.csv)*
