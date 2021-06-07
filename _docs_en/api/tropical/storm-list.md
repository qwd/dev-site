---
title: Storm List
tag: api
data: tropical
version: v7
description: Get a list of tropical cyclones (typhoons) in the world's major ocean basins.
ref: 1-api-storm-list
---

Get a list of tropical cyclones (typhoons) in the world's major ocean basins.

> Only the coastal areas of China are supported now, i.e. `basin=NP`

### Request URL

{% include api-url.html %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="basin year key" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}