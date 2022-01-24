---
title: Warning Info
tag: resource
description: QWeather supports weather warning services for many countries and regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.
ref: 9-res-warning
---

QWeather supports weather warning services for many countries or regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.

## Supported Regions

Weather warnings are not available for all cities, we will continue to expand these data, currently QWeather supports the following countries or regions.

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

If the warning message does not provide a value for `endTime`, QWeather will set this warning to be valid for 24 hours from `startTime`.

## Level (Severity)

Every country and region may have its own definitions or protocols for weather warning levels(severity) and not all warning messages have every level, for example, haze warnings are only available in Yellow and Orange.

#### Color

Some countries and regions, weather warning levels are usually defined by colors. For mainland China, White (Guangdong Province only), Blue, Yellow, Orange and Red are used. For Hong Kong(SAR China), Yellow, Red and Black are used. For Macau(SAR China), Blue, Yellow, Orange, Red and Black are used. For Russia, White, Green, Yellow, Orange and Red are uesed. For India and European region, Green, Yellow, Orange and Red are available.

In general, the darker the color, the higher the severity of the warning. Currently available colors include:

- White 
- Blue 
- Green 
- Yellow 
- Orange 
- Red
- Black

#### Text

Some countries and regions, weather warning levels are usually defined by text. For Kuwait, Minor, Moderate, Severe and Extreme are used. For Brazil, Moderate, Severe and Extreme are applied. For South Africa, Minor, Moderate, Extreme and Unknown are applied. For Australia, Cancel, None, Unknown, Standard, Minor, Moderate, Major, Severe and Extreme are applied.

Currently available text includes:

- Cancel
- None
- Unknown
- Standard
- Minor
- Moderate
- Major
- Severe
- Extreme

#### Color vs Text

Both color and text can indicate the severity of the warning message, and you can refer to the following table:

| Color  | Text     |
| ------ | -------- |
| White  | Unknown  |
| Blue   | Minor    |
| Yellow | Moderate |
| Orange | Severe   |
| Red    | Extreme  |

## Urgency

> **Urgency** is not available in some countries and regions, or does not have the same value as listed below

`warning.urgency` denotes the urgency of the warning message, including:

- Immediate
- Expected
- Future
- Past
- Unknown

## Certainty

> **Certainty** is not available in some countries and regions, or does not have the same value as listed below

`warning.certainty` denotes the certainty or confidence level of the warning messages, including:

- Observed
- Likely
- Possible
- Unlikely
- Unknown

## Warning Type

QWeather provides over 100 warning types based on definitions from official meteorological departments around the world, however, these types are not available to all countries or regions. 

> Please note: All warning types and levels are possible to change, including additions, modifications or deletions, be sure to set your program's compatibility so that these changes do not cause errors!
{:.bqwarning}

> As of January 1, 2022, the API will use Type instead of Type (deprecated) return, so please update it.
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



