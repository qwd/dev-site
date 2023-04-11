---
title: Weather Warning
tag: [guide, android, warning, now]
ref: 1-sdk-android-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> For more warning information, see [Warning Info](/en/docs/resource/warning-info/).

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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
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
| getSeverity     | [Warning severity](/en/docs/resource/warning-info/#severity)     | Moderate                                                             |
| getSeverityColor     | [Preferred color for severity](/en/docs/resource/warning-info/#severity-color), **may be null**    | Blue                                                             |
| getType      | [Warning type ID](/en/docs/resource/warning-info/#warning-type)    | 1014                                                             |
| getTypeName      | [Warning type name](/en/docs/resource/warning-info/#warning-type)  | Lightning                                                             |
| getUrgency      | [The urgency of the warning message](/en/docs/resource/warning-info/#urgency), **may be null**     | Immediate                                                             |
| getCertainty      | [The certainty of the warning message](/en/docs/resource/warning-info/#certainty), **may be null**     | Likely                                                             |
| getText | Detailed description of the warning | Shenzhen Meteorological Bureau distributed a yellow warning signal for mine-laying electricity at 12:59 on October 04. Please pay attention to defense. |
| getRelated | Related warning id | related warning id of current warning, **may be null** |

### Warning Level and Type

See [Warning Level and Type](/en/docs/resource/warning-info/)