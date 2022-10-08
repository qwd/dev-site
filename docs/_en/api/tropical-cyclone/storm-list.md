---
title: Storm List
tag: [guide, api, storm, list]
ref: 1-api-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`

## Request URL

{% include api-url.html %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="basin year key" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}