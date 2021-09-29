---
title: Warning Info
tag: start
description: QWeather supports weather warning services for many countries and regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.
ref: 9-start-warning
---

QWeather supports weather warning services for many countries and regions around the world. You can find more descriptions of these warnings here, such as the list of supported countries and regions, warning levels and warning types.

## Supported Regions

Weather warnings are not available for all cities, we will continue to expand these data, currently QWeather supports the following countries and regions.

> You can use the `range` parameter to get a list of all warning cities for that country via [warning city list](/en/docs/api/warning/weather-warning-city-list/).

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>Regions</th>
    </tr>
  </thead>
  <tbody>
  {%- assign warning_regions = site.data.regions | where: "isWarning", true -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in warning_regions %}
    <tr>
      <td>{{ item.alpha-2  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## Warning Level

Warning levels may vary by country and region. For mainland China, white (Guangdong Province only), blue, yellow, orange, and red are used. For Hong Kong(SAR China), yellow, red and black are used. For Macau(SAR China), blue, yellow, orange, red and black are used. For other countries and regions, green, yellow, orange and red are available.

> In general, the darker the color, the higher the severity of the warning, but not all warnings have all levels, for example, haze warnings are only available in yellow and orange.

> Not all warnings contain all levels, for instance: haze warnings only have yellow and orange levels.

- White 
- Blue 
- Green 
- Yellow 
- Orange 
- Red
- Black

## Warning Type

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



