---
title: Alert Info
tag: resource
description: QWeather provides official alert data for China and many countries and regions worldwide. This document helps you understand specifications of alert data, such as the supported regions and alert events.
ref: res-warning
---

[Weather Alert](/en/docs/api/warning/) provides official alert data for China and many countries and regions worldwide. This document helps you understand specifications of alert data, such as the supported regions and alert events.

> **Warning:** All alert events, urgency and other fields are possible to change, including add/modify/delete. We may not be able to give advance notice of these changes, **so you have to make your code more compatible to avoid errors when they happen.**
>
> We recommend not trying to enumerate these values or mappings, but to output them directly to the screen.
{: .bqdanger}

## Supported regions

Weather alerts are not available for all cities, we will continue to expand these data, currently QWeather supports the following countries or regions.

> **Note:** Weather alert messages are based on official data from government departments. When official data is not released properly, we may temporarily take offline the country or region where the failure occurred.
{:.bqwarning}

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>Countries or Regions</th>
    </tr>
  </thead>
  <tbody>
  {%- assign warning_regions = site.data.table.regions | where: "isWarning", "TRUE" -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in warning_regions %}
    <tr>
      <td>{{ item.alpha-2 | downcase  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## Message type

The `messageType` indicates the type or nature of the current alert message. Developers can use this field to determine whether the alert is a newly issued one or an update to a previously issued alert.

`messageType.code` includes:

- **alert**: Initial and active alert
- **update**: Updates and supercedes the alert specified in `messageType.supersedes`
- **cancel**: Cancels the alert specified in `messageType.supersedes`, with an expiration time set to 1 hour after issuance.

`messageType.supersedes` specifies the identifier of the previous alert message that is replaced by the current alert. This array is only relevant when `messageType.code` is **update** or **cancel**. It helps developers understand the relationship between the current alert and a previous one, ensuring data correctness and smooth updates.

## Urgency

`urgency` indicates the urgency of the event.

- **immediate**: Responsive action should be taken immediately
- **expected**: Responsive action should be taken soon (within the next hour)
- **future**: Responsive action should be taken in the near future
- **past**: The event is no longer current
- **unknown**: Urgency unknown

## Severity

`severity` indicates the expected impact level of the event.

> **Note:** Severity may be expanded based on local specifications, your code should be compatible with this possibility.

- **extreme**: Extraordinary threat to life or property
- **severe**: Significant threat to life or property
- **moderate**: Possible threat to life or property
- **minor**: Minimal to no known threat to life or property
- **unknown**: Severity unknown

## Certainty

`certainty` indicates the certainty or confidence level of the event.

- **observed**: Determined to have occurred or to be ongoing
- **likely**: Likely (probability > ~50%)
- **possible**: Possible but not likely (probability ≤ ~50%)
- **unlikely**: Not expected to occur (probability ≈ 0)
- **unknown**: Certainty unknown

## Color

`color` contains the color code and its corresponding RGBA value, these are the recommended colors for the visual representation of warning messages. Supported color codes include:

- **white**
- **gray**
- **green**
- **blue**
- **yellow**
- **orange**
- **red**
- **purple**
- **black**

## Event and code

We have designed a unified coding system for alert event types in each country or region.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Event</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site.data.table.warning-type %}
    <tr>
      <td>{{ item.type }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.type_name_zh  }}{%- else -%}{{ item.type_name_en }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>



