---
title: 元数据
description: 本篇文档将介绍 API 返回的 metadata 对象包括哪些信息以及它们的用途。
translationKey: res-meta
---

API 响应中我们使用 `metadata` 对象来描述当前请求/响应的元数据信息。

## tag

`tag` 是当前数据的唯一标识，用于追溯数据来源，也可以方便开发者判断数据是否更新。

## attributions

`attributions[]` 是当前数据的归因信息或声明，根据我们的开发者许可协议以及其他版权方的要求，你需要将此数组中的内容显示在你的产品或服务中。

## zeroResult

`zeroResult` 表示当前是否有返回的数据。当 `"zeroResult": true` 时，表示请求是成功的，但没有任何需要返回的数据。例如查询一个坐标的天气预警信息，此时该地点没有任何预警信息。


