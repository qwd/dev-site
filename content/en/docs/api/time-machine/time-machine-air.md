---
title: Time Machine for Air Quality
tag:
- guide
- api
- time-machine
- air
ref: 2-api-historical-air
translationKey: 2-api-historical-air
type: docs
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="location-id date10back lang-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="air" type="now" prefix="airHourly" update="0" >}}
