---
title: Weather Warning City List
tag: [guide, android, warning, list]
ref: 2-sdk-android-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

See also [Weather warning Android SDK](/en/docs/android-sdk/warning/android-weather-warning/) to get warning details.

> For more warning information, see [Warning Info](/en/docs/resource/warning-info/).

| Interface Code| Interface  | Class |
| ---------------- | -------------- | --------------- |
| getWarningList| Weather warning city list  | WarningListBean |

### Parameter

{% include params.html p="range-warning" %}

### Sample Code

```java
/**
 * @param context context
 * @param listener network access callback interface
 */
QWeather.getWarningList(Context context, Range range, final QWeather.OnResultWarningListListener listener);
```

### Properties

Properties of WarningListBean

| Property | Description | Example |
| -------------- | ------------ | --------------------- ------ |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T12:34+08:00 |
| getWarningBean | Weather warning | List&lt;WarningListBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather |
| getLicenseList | Data license | QWeather Developers License |

**WarningListBeanBase Warning Information**

| Property | Description | Example |
| ------------- | ------------ | --------- |
| getLocationId | Location ID | 101280601 |
