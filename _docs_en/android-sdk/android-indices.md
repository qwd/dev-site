---
title: Weather Indices
tag: android-sdk
version: v4
description: Check the QWeather Android SDK development documentation for weather indices, including car wash, cold, clothing, allergies, etc.
ref: 4-sdk-android-indices
---

Weather Indices including:

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

| Interface Code| Interface  | Class |
| ----------- | ------------ | ----------- |
| getIndices1D| 1 day Weather Indices  | IndicesBean |
| getIndices3D| 3 days Weather Indices  | IndicesBean |

### Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-android idx-type-android" %}

### Sample Code

```java
/**
 * Get 1-day weather indices data
 */
QWeather.get1DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener);

/**
 * Get 3-day weather indices data
 */
QWeather.get3DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener);
```

### Properties

Properties of IndicesBean

| Property | Description | Example |
| ------------ | -------------------------- | --------- ------------ |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getDailyList | Daily weather indices | List&lt;DailyBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |


**DailyBean Daily Life Index**

| Properties | Description |
| ----------- | ------------------------------------------------|
| getDate | Forecast date |
| getLevel | Weather indices Level |
| getCategory | Weather indices category name |
| getName | Weather indices type name |
| getType | Weather indices type |
| getText | Detailed description of weather indices |

### Index type and level

See [Indices Info](/en/docs/resource/indices-info/).

