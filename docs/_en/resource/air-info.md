---
title: Air Quailty Info
tag: resource
description: Air Quality Index (AQI), is a non-linear index that quantitatively describes the quality of the air. As air pollution levels rise, so does the AQI, along with the associated public health risk. This document will introduce some background knowledge and instructions when using Air Quality API.
ref: res-air
---

Air Quality Index (AQI), is a non-linear index that quantitatively describes the quality of the air. As air pollution levels rise, so does the AQI, along with the associated public health risk. This document will introduce some background knowledge and instructions when using Air Quality API.

> This document only applies to the [Air Quality API v1](/en/docs/api/air-quality/), for other version please refer to [Air Quality in Web API v7](/en/docs/api/air/).

## Supported regions

[Air Quality API v1](/en/docs/api/air-quality/) supports China, United States, and most of the countries in Europe and Asia, and will be expanding to new countries and regions in the future.

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>Regoins</th>
      <th>Supported AQIs</th>
    </tr>
  </thead>
  <tbody>
  {%- assign aqi_regions = site.data.table.regions | where: "isAir", "TRUE" -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in aqi_regions %}
    <tr>
      <td>{{ item.alpha-2 | downcase  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
      <td>
        {%- assign aqis = item.aqis | split: "," %}
        {%- for aqi in aqis %}
        <code>{{ aqi | lstrip }}</code>
        {% endfor -%}
      </td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## Supported AQIs

QWeather supports two kinds of AQI and responds up to two AQI data in the API: QWeather AQI and local AQI.

### QAQI

> **Hint:** QAQI is not available for China.

QAQI is a generic air quality index defined by QWeather, based on the [WHO Air Quality Guidelines 2021](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) and adapted for various countries and regions with their natural environments, economic bases and social conditions.

### Local AQI

Local AQI is typically monitored and managed by national or regional environmental authorities, and standards for AQIs are set according to local conditions. These AQIs have various specifications and algorithms, and it is possible to issue multiple AQIs.

### AQI List

Check out our supported AQIs and their value ranges, categories and more:

{% include aqi-table.html %}

*Download entire table for the above: [aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/_data/table/aqis.csv)*

## AQI value

The AQI is not always a number, and some national standards or at certain category, the AQI is described using text. For example, the Canadian AQHI has a value range of 1-10+, and obviously "10+" is a text. For easier calculation and display consistent with the standard, we provide two expressions for the AQI value:

* `aqi` Numeric type values, this includes AQIs expressed numerically as well as AQIs expressed in text, which we convert to integers for developers to calculate.
* `aqiDisplay` String type value, for direct display. It is fully compliant with the local AQI standard format, so it is recommended to use this field when displaying to your users.

In the Canadian example, if the current AQI category is "Very High Risk":

```json
{
  "indexes": [
    {
      "aqi": 11,
      "aqiDisplay": "10+"
    }
  ]
}
```

## Health effects and advice

Air quality has a direct impact on human health. We provide information on health effects and advice in the API, and for most people, health advice can be helpful in guiding their actions and responding as promptly as possible when air pollution occurs. 

Health advice will be provided separately according to healthy populations and sensitive populations, where sensitive populations are included:

* Elderly
* Pregnant women
* Children
* People with heart disease
* People with respiratory diseases
* Outdoor workers
* Other people with unusual air sensitivity

Health effects and advice are not available for all countries and regions.

> **Warning:** Health effects and advice are not regulatory advice and do not have the force of law, and you should be aware of, or inform your users to: under any circumstances, people who are unwell should seek immediate medical attention and follow medical advice.
{:.bqdanger}

## Pollutants

Air quality is based on air pollutants, and the higher the concentration of a pollutant, the more harmful it is to humans. Air pollutants are complex mixture of solid particles, liquid droplets, as well as gases, which come from many sources, for example: household fuel burning, industrial chimneys, traffic exhausts, power generation, open burning of waste, agricultural practices, desert dust and many other sources. The pollutants mentioned in the [WHO Global Air Quality Guidelines](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) are PM2.5, PM10, O3, NO2, SO2, and CO, however, environmental authorities have different definitions of pollutants, e.g., China requires 6 pollutants for air quality, while the European Environment Agency requires 5 pollutants.

> **Note:** In practice, pollutants in the AQI are not consistent and pollutants may not be available in some areas, this is because:
> 
> - Different standards for pollutants in local regulations
> - Monitoring stations malfunction or are closed
> - Some pollutants are not supported by the monitoring station
> - Requirements by law or regulation
{:.bqwarning}

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

### Pollutant sub-index

The pollutant sub-index is the AQI for each pollutant. Usually, we need to calculate the sub-index first, and then the worst sub-index representation is the current AQI value, for example:

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```

The Pollutant sub-index gives us an idea of the current levels of each pollutant in the air quality and is also used to pick out the [primary pollutant](#primary-pollutant) for the current air quality.

### Primary pollutant

The pollutant with the highest concentration value or the worst pollutant sub-index is the primary pollutant, which represents the primary source of current air pollution.

> **Hint:** Depending on local AQI standard, the primary pollutant may not be calculated, and in this case the primary pollutant is null.

## Monitoring Station

At most locations, we will reference data from nearby air quality monitoring stations for AQI calculations, in which case these referenced station IDs and names will be returned in the API.

You can use the [Monitoring Station Data](/en/docs/api/air-quality/air-station/) to obtain values of pollutant concentrations measured at specific monitoring stations.

> **Warning:** Monitoring stations may not be able to provide data for a variety of reasons, such as failures, maintenance, etc., and it is not possible to know when or if they will be restored.
{:.bqdanger}

## China AQI

For AQI in China, please refer to the following instruction:

- The calculation of AQI is in accordance with the [Technical Regulation on Ambient Air Quality Index (AQI) (Trial) (HJ 633-2012)](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/ t20120302_224166.shtml).
- QAQI is not supported
- Pollutants are not supported in Air Quality Forecast API.
- If the pollutant sub-index is < 50, the primary pollutant in AQI (CN) is null.
- The air quality data are **for reference only, have not been revised and confirmed by a full audit process, and are not applicable for evaluating the compliance status or any official assessment**. Please refer to the air quality data released by [China national Environmental Monitoring Centre](https://www.cnemc.cn).