---
title: Storm List
tag:
- guide
- api
- storm
- list
ref: 1-api-storm-list
translationKey: 1-api-storm-list
type: docs
---

Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="basin year" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="storm" type="list" prefix="storm" >}}
