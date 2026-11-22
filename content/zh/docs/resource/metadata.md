---
title: 元数据
description: 介绍 API 返回的 metadata 对象包括哪些信息以及它们的用途。
translationKey: res-meta
---

API 响应中我们使用 `metadata` 对象来描述当前请求/响应的元数据信息。

## tag

`tag` 是当前数据的唯一标识，用于追溯数据生产批次，也可以方便开发者判断数据是否更新。

## attributions

`attributions` 是字符串数组，包含当前数据的归因链接、数据提供方名称或其他必须展示的信息。你必须在使用了我们服务的产品中标注“和风天气”或“QWeather”，并完整展示数组中的所有内容。请参考[注明来源](/docs/terms/attribution/)。

## zeroResult

`zeroResult` 表示当前是否有可用的数据。当 `zeroResult: true` 时，表示请求是成功的，但没有可用的数据。例如查询一个坐标的天气预警信息，此时该地点没有任何预警信息。


