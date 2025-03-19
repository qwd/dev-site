---
title: Weather Indices Forecast
tag: [guide, android, indices, forecast]
ref: 1-sdk-android-indices-forecast
---

Get weather indices forecast data for cities in China and around the world.

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

| Interface code| Interface  | Class |
| ----------- | ------------ | ----------- |
| indices1d | Today Weather Indices           | IndicesDailyResponse |
| indices3d | Weather Indices 3-days forecast | IndicesDailyResponse |

### Request Parameters

**IndicesParameter**

{% include params.html p="location-def idx-type lang-def" %}


### Sample Code

```java
/**
 * Get 2-day weather indices data
 */
public void indices1d(IndicesParameter parameter, Callback<IndicesDailyResponse> callback);

/**
 * Get 3-day weather indices data
 */
public void indices3d(IndicesParameter parameter, Callback<IndicesDailyResponse> callback);
```


### Response 

**IndicesDailyResponse**

| Property | Description | Example |
| ------------ | -------------------------- | --------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/indices/beijing-101010100.html |
| getDaily | Daily weather indices | List&lt;IndicesDaily&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |


**IndicesDaily**

| Properties | Description |
| ----------- | -----------|
| getDate | Forecast date |
| getLevel | Weather indices Level |
| getCategory | Weather indices category name |
| getName | Weather indices type name |
| getType | Weather indices type |
| getText | Detailed description of weather indices |

### Index type and level

See [Indices Info](/en/docs/resource/indices-info/).

