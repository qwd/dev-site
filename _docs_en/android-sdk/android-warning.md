---
title: Weather Warning
tag: android-sdk
version: v4
description: QWeather Android SDK support severe weathe warning in China and EU countries, real-time access to typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.
ref: 5-sdk-android-warning
---

Get severe weathe warning in China and EU countries, including typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.

## Weather Warning

| Interface Code| Interface  | Class |
| ------------ | ---------- | ----------- |
| getWarning| Weather Warning  | WarningBean |

### Parameter

{% include params.html p="location-android lang-zhen-sdk" %}

### Sample Code

```java
QWeather.getWarning(Context context, String location, final QWeather.OnResultWarningListener listener);

QWeather.getWarning(Context context, String location, Lang lang, final QWeather.OnResultWarningListener listener);

```

### Properties

Properties of WarningBean

| Property | Description | Example |
| --------------- | -------------------------- | ------ --------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getBeanBaseList | Disaster Warning | List&lt;WarningBeanBase&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------- | ------------------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**WarningBeanBase Warning Information**

| Property | Description | Example |
| ------------ | ---------------------------------- |----------- |
| getId | The unique identifier of this warning, which can be used to determine whether this warning already exists. |
| getPubTime | Warning release time | 2017-10-25T12:03+08:00 |
| getTitle | Title of warning information | Shenzhen Meteorological Observatory of Guangdong Province issues yellow lightning warning |
| getSender | Sender of warning information | Shenzhen Meteorological Observatory |
| getStartTime | Warning start time, **may be null** | 2017-10-25T12:03+08:00 |
| getEndTime | End time of warning, **may be null** | 2017-10-25T12:03+08:00 |
| getStatus | Warning status, **may be null**<br />`active` Early warning or first warning<br />`update` Warning information update<br />`cancel` cancel warning | active |
| getLevel | Warning level | yellow |
| getType | Warning type | 11B12 |
| getTypeName | Warning type name | Raiden |
| getText | Detailed description of the warning | Shenzhen Meteorological Bureau distributed a yellow warning signal for mine-laying electricity at 12:59 on October 04. Please pay attention to defense. |
| getRelated | Related warning id | related warning id of current warning, **may be null** |

## Warning City List

Get a list of cities with current weather warnings in China and EU countries.

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
QWeather.getWarningList(Context context, final QWeather.OnResultWarningListListener listener);
```

### Properties

Properties of WarningListBean

| Property | Description | Example |
| -------------- | ------------ | --------------------- ------ |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time) | 2017-10-25T12:34+08:00 |
| getWarningBean | Weather warning | List&lt;WarningListBean&gt; |

**WarningListBeanBase Warning Information**

| Property | Description | Example |
| ------------- | ------------ | --------- |
| getLocationId | Location ID | 101280601 |

## Warning Level and Type

See [Warning Level and Type](/en/docs/resource/warning-info/)