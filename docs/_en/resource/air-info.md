---
title: Air Quailty Info
tag: resource
description: Air Quality Index (AQI), is a non-linear index that quantitatively describes the quality of the air. As air pollution levels rise, so does the AQI, along with the associated public health risk. This document will introduce some background knowledge and instructions when using Air Quality API.
ref: res-air
---

Air Quality Index (AQI), is a non-linear index that quantitatively describes the quality of the air. As air pollution levels rise, so does the AQI, along with the associated public health risk. This document will introduce some background knowledge and instructions when using Air Quality API.

## Supported regions

[API v7 (legacy)](/en/docs/api/air/) is only available for China (including Hong Kong, Macao and Taiwan), and [Air Quality v1 (beta)](/en/docs/api/air-quality/) supports China, United States, and most of the countries in Europe, and will be expanding to new countries and regions in the future.

## Supported AQIs

Different countries and regions have their own air quality indices, corresponding to different national air quality standards, there are currently no worldwide common air quality standards. [WHO Global Air Quality Guidelines](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) recommend interim targets for air quality and pollutants. However, it is not legally binding and is only a reference document.

The AQI may have different standards or different calculation methods in some countries and regions. [Air Quality v1 (beta)](/en/docs/api/air-quality/) will provide one or more types of AQI data according to local standards. The following are the AQIs we support and their corresponding value ranges, categories, etc.

<table>
  <thead>
    <tr>
      <th>AQI</th>
      <th>Value</th>
      <th>Level</th>
      <th>Category</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
  {%- assign sort_aqi = site.data.table.aqis | sort: 'code' -%}
  {% for item in sort_aqi %}
    <tr>
        <td>
          <ul class="clear-list">
            <li>{{ item.name  }}</li>
            <li>Code: <code>{{ item.code }}</code></li>
          </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign range_array = item.range_threshold | split: "," -%}
            {% for range in range_array %}
                <li>{{ range }}</li>
            {% endfor %}
            </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign lv_array = item.level | split: "," -%}
            {% for lv in lv_array %}
                <li>{{ lv }}</li>
            {% endfor %}
            </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign cate_array = item.category_en | split: "," -%}
            {% for cate in cate_array %}
                <li>{{ cate }}</li>
            {% endfor %}
            </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign color_array = item.color_rgb | split: "|" -%}
            {% for color in color_array %}
                <li>{{ color }}</li>
            {% endfor %}
            </ul>
        </td> 
    </tr>
  {% endfor %}  
  </tbody>
</table>

*Download entire table for the above: [aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/_data/table/aqis.csv)*


## Pollutants

Air quality is based on air pollutants, and the higher the concentration of a pollutant, the more harmful it is to humans. Air pollutants are complex mixture of solid particles, liquid droplets, as well as gases, which come from many sources, for example: household fuel burning, industrial chimneys, traffic exhausts, power generation, open burning of waste, agricultural practices, desert dust and many other sources. The pollutants mentioned in the [WHO Global Air Quality Guidelines](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) are PM2.5, PM10, O3, NO2, SO2, and CO, however, environmental authorities have different definitions of pollutants, e.g., China requires 6 pollutants for air quality, while the European Environment Agency requires 5 pollutants.

In practice, the pollutants included in the AQI are not consistent, this is because:

- Different definitions of pollutants in different countries and regions
- Monitoring stations failing or being closed

In addition, the measurement units for pollutant concentration also vary. Refer to the table below for the name of the pollutants and the units they are available in.

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>Name</th>
      <th>Full name</th>
      <th>Unit(new)</th>
      <th>Unit(legacy)</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site.data.table.air-pollutant %}
    <tr>
      <td><code>{{ item.code  }}</code></td>
      <td>{{ item.name  }}</td>
      <td>{{ item.fullname_en }}</td>
      <td>
        <ul class="clear-list">
        {%- assign unit_array = item.units | split: "," -%}
        {% for unit in unit_array %}
            <li>{{ unit }}</li>
        {% endfor %}
        </ul>
      </td>
      <td>{{ item.units_apiv7  }}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## Pollutant sub-index

> **Hint:** Pollutant sub-index are only available for [Air Quality v1 (beta)](/en/docs/api/air-quality/) and do not work for [API v7 (legacy)](/en/docs/api/air/).

Sub-index is an index for each pollutant. Typically, the worst sub-index represents the current AQI, and the range of the sub-index is the same as the range of the corresponding AQI.

## Primary pollutant

In general, the pollutant with the highest concentration value or the worst sub-index is the primary pollutant, but the primary pollutant may be null, depending on national and regional standards or when missing pollutant values make it impossible to calculate.

## China AQI

- In China (except Hong Kong, Macao and Taiwan), the calculation of AQI is in accordance with the [Technical Regulation on Ambient Air Quality Index (AQI) (Trial) (HJ 633-2012)](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/ t20120302_224166.shtml), and two types of AQI data are provided according to the standard, i.e., AQI (CN) and AQI-1H (CN).
- The AQI-1H (CN) is much closer to or the same as the real-time data released by the [China National Environmental Monitoring Centre](http://www.cnemc.cn/).
- If the pollutant sub-index is < 50, the primary pollutant in both AQI (CN) and AQI-1H (CN) is null.