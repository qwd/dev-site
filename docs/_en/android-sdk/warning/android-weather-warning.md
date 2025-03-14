<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 14:29:17
 * @FilePath: /dev-site/docs/_en/android-sdk/warning/android-weather-warning.md
-->
---
title: Weather Warning
tag: [guide, android, warning, now]
ref: 1-sdk-android-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> **Tips:** For more warning description, see [Resource - Warning Info](/en/docs/resource/warning-info/).

| Interface Code| Interface  | Class |
| ------------ | ---------- | ----------- |
| warningNow| Weather Warning  | WarningBaseResponse |

### Parameter

{% include params.html p="location-def lang-def" %}

### Sample Code


```java
public void warningNow(WarningNowParameter parameter, Callback<WarningBaseResponse> callback);
```

### Properties

Properties of WarningBean

| Property | Description | Example |
| --------------- | -------------------------- | --------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/severe-weather/beijing-101010100.html |
| getWarning | Disaster Warning | List&lt;Warning&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description | Type | Example |
| -------- | ----------- | ---- | ------- |
| getSources | Data source and other statements | List&lt;String&gt; | QWeather |
| getLicense | Data license |  List&lt;String&gt;  | QWeather Developers License |

**Warning Information**

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
