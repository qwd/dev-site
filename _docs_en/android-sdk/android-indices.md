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
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
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
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
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

### Indices Constant

The weather indices level is for reference only, and the level may be adjusted. 

> If you set `IndicesType.ALL`, you cannot use other indices types

| Type | Name            | Level  (Category)                                            |
| ---- | --------------- | ------------------------------------------------------------ |
| ALL  | All indices     |                                                              |
| SPT  | Sports          | Excellent (1), Good (2), Poor  (3)                           |
| CW   | Car Wash        | Excellent (1), Good (2), At Risk  (3), Poor (4)              |
| DRSG | Clothing        | Freezing (1), Cold (2), Cooler  (3), Cool (4), Comfort (5), Hot (6), Heat (7) |
| FIS  | Fishing         | Good (1), Moderate (2), Poor  (3)                            |
| UV   | UV              | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)  |
| TRA  | Travel          | Excellent (1), Good (2), Moderate  (3), Fair (4), Poor (5)   |
| AG   | Allergy         | Beneficial (1), Neutral (2), At  Risk (3), High Risk (4), Extreme Risk (5) |
| COMF | Comfort         | Excellent (1), Good (2), Moderate  (3), Poor (4), Bad (5), Worse (6), Worst (7) ) |
| FLU  | Cold            | Healthy (1), Moderate (2),  Unhealthy (3), Hazardous (4)     |
| AP   | Air Pollution   | Excellent (1), Good (2), Moderate  (3), Bad (4), Poor (5)    |
| AC   | Air-Conditioner | On (1), Advise (2), Neutral (3),  Heating Mode (4)           |
| GL   | Sunglasses      | No (1), Recommend (2), Advise (3),  Need (4), Necessary (5)  |
| MU   | Makeup          | Hydrating (1), Moisturizing and  sun protection (2), Oil control and sun protection (3), Prevent dehydration  and sun protection (4), Oil control (5), Prevent dehydration (6), Sun  protection (7), Moisturizing (8) |
| DC   | Air-Cure        | Excellent (1), Good (2), Moderate  (3), At Risk (4), Bad (5), Poor (6) |
| PTFC | Traffic         | Excellent (1), Good (2), Moderate  (3), Poor (4), Bad (5)    |
| SPI  | SPF             | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)  |

