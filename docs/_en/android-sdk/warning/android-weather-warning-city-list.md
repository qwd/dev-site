---
title: Weather Warning City List
tag: [guide, android, warning, list]
ref: 2-sdk-android-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

See also [Weather warning Android SDK](/en/docs/android-sdk/warning/android-weather-warning/) to get warning details.

> **Note:** Weather Warning City List only supports China (including Hong Kong, Macao and China Taiwan) now. For other countries and regions, please use [Weather Warning](/en/docs/android-sdk/warning/android-weather-warning/).
{:.bqwarning}

> **Tips:** For more warning description, see [Resource - Warning Info](/en/docs/resource/warning-info/).

| Interface code| Interface  | Class |
| ---------------- | -------------- | --------------- |
| warningList| List of warning cities  | WarningListResponse |

## Parameters

**WarningListParameter**

{% include params.html p="range-warning" %}

## Sample code

```java
public void warningList(WarningListParameter parameter, Callback<WarningListResponse> callback);
```

## Response

**WarningListResponse**

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

<!-- | Property | Description | Example |
| -------------- | ------------ | --------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T12:34+08:00 |
| getWarningLocList | Weather warning | List&lt;WarningLocation&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**WarningLocation**

| Property | Description | Example |
| ------------- | ------------ | --------- |
| getLocationId | Location ID | 101280601 | -->
