---
title: Warning Info
tag: resource
description: QWeather supports weather warning services for many countries and regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.
ref: 9-res-warning
---

QWeather supports weather warning services([API](/en/docs/api/warning/), [iOS SDK](/en/docs/ios-sdk/ios-warning/), [Android SDK](/en/docs/android-sdk/android-warning/)) for many countries or regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.

> All warning level, type, urgency and other fields are possible to change, including add/modify/delete. We may not be able to give advance notice of these changes, **so you have to make your code more compatible to avoid errors when they happen.**
>
> We recommend not trying to enumerate these values or mappings, but to output them directly to the screen.
{: .bqwarning}

> Weather warning do not always work with multilingual setting. When a warning message does not respond to your multilingual setting, we will return the message in either English or the local language, or even part of the content in English and part in the local language.

## Supported Regions

Weather warnings are not available for all cities, we will continue to expand these data, currently QWeather supports the following countries or regions.

> Weather warning are based on official data from government departments in each country. When official data is not released properly, we may temporarily take offline the country where the failure occurred.

> You can use the `range` parameter to get a list of all warning cities for that country or regions via [Warning City List API](/en/docs/api/warning/weather-warning-city-list/).

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>Countries or Regions</th>
    </tr>
  </thead>
  <tbody>
  {%- assign warning_regions = site.data.regions | where: "isWarning", true -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in warning_regions %}
    <tr>
      <td>{{ item.alpha-2 | downcase  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## Status

`warning.status` denotes the status of the current warning published, including:

- Active - Warning is active
- Update - The current warning is an update or modification to a previously specified warning.
- Cancel - The previously specified warning is cancelled for various reasons. This is a reserved value and you cannot use it to determine if the warning is active.

## Expiry time

> Typically, a warning message is not valid for more than 48 hours, so if `warning.endTime` is not available, we recommend to set the expiry time of this warning message to 24 hours from `warning.startTime` (which is what we do).

You can use `warning.endTime` to estimate when a warning message will expire, or when you can no longer get a warning message with the same ID as the previous one, which means that the warning has expired.

## Level (deprecated) 

`warning.level` represents the level of the warning information.

> **Warning:** This field is currently deprecated, replaced with [severity](/en/docs/resource/warning-info/#severity) and [severity color](/en/docs/resource/warning-info/#severity-color).
{:.bqwarning}

## Severity

`warning.severity` indicates the intensity of the impact caused by the warning event.

Every country and region may have its own definitions or protocols for warning severity. For Kuwait, Minor, Moderate, Severe and Extreme are used. For Brazil, Moderate, Severe and Extreme are applied. For South Africa, Minor, Moderate, Extreme and Unknown are applied. For Australia, Cancel, None, Unknown, Standard, Minor, Moderate, Major, Severe and Extreme are applied. For other countries and regions, Unknown, Minor, Moderate, Severe and Extreme are available.

Currently available severity includes:

- Cancel
- None
- Unknown
- Standard
- Minor
- Moderate
- Major
- Severe
- Extreme

## Severity color

Some countries and regions prefer to define the [severity](/en/docs/resource/warning-info/#severity) by color, and we will provide the preferred color for the severity according to the local practice.

> **Note:** May be null if there is no local preferred color.

Currently available colors are:

- White 
- Blue 
- Green 
- Yellow 
- Orange 
- Red
- Black

## Urgency

> **Note:** `warning.urgency` is not available in some countries and regions, or does not have the same value as listed below

`warning.urgency` denotes the urgency of the warning message, including:

- Immediate
- Expected
- Future
- Past
- Unknown

## Certainty

> **Note:** `warning.certainty` is not available in some countries and regions, or does not have the same value as listed below

`warning.certainty` denotes the certainty or confidence level of the warning messages, including:

- Observed
- Likely
- Possible
- Unlikely
- Unknown

## Warning Type

QWeather provides over 100 warning types based on definitions from official meteorological departments around the world, however, these types are not available to all countries or regions. 

We also provide warning icons, please go to [QWeather Icons](https://icons.qweather.com/en/).

> **Warning:** As of January 1, 2022, the API will use Type instead of Type (deprecated) return, so please update it.
{:.bqwarning}

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Type (deprecated)</th>
      <th>TypeName</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site.data.warning-type %}
    <tr>
      <td>{{ item.type }}</td>
      <td>{{ item.type_deprecated }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.type_name_zh  }}{%- else -%}{{ item.type_name_en }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>



