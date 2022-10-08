---
title: GeoAPI
tag: [guide, api, geo, overview]
layout: guide-overview
description: 和风天气GeoAPI提供全球地理位位置、全球城市搜索服务，支持经纬度坐标反查、多语言、模糊搜索等功能。
permalink: /docs/api/geoapi/
ref: 0-api-geo
---

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。和风天气提供一个功能强大的位置信息搜索API服务：**GeoAPI**。通过GeoAPI，你可获取到需要查询城市或POI的基本信息，包括查询地区的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。

除此之外，GeoAPI还可以帮助你：

- 避免重名城市的困扰
- 支持名称模糊搜索
- 在你的应用或网站中根据用户输入的名称返回多个城市结果，便于用户选择准确的城市并返回该城市天气
- 在你的应用或网站中展示热门城市
- 不需要维护城市列表，城市信息更新实时获取  