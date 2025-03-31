---
title: Storm List
tag: [guide, api, storm, list]
ref: 1-api-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`

## Endpoint

{% include api-url.html %}

## Parameters

#### Query parameters

{% include params.html p="basin year" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}