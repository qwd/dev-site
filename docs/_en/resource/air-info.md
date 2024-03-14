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

{% include aqi-table.html %}

*Download entire table for the above: [aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/_data/table/aqis.csv)*

### AQI value

The AQI is not always a number, and some national standards or at certain category, the AQI is described using text. For example, the Canadian AQHI has a value range of 1-10+, and obviously "10+" is a text. For easier calculation and display consistent with the standard, we provide two expressions for the AQI value:

* `aqi.value` Numeric type values, this includes AQIs expressed numerically as well as AQIs expressed in text, which we convert to integers for developers to calculate.
* `aqi.valueDisplay` String type value, for direct display. It is fully compliant with the local AQI standard format, so it is recommended to use this field when displaying to your users.

In the Canadian example, if the current AQI category is "Very High Risk":

```json
{
  "aqi": [
    {
      "value": 11,
      "valueDisplay": "10+"
    }
  ]
}
```

### Default Local AQI

Some cities have multiple AQIs, which helps cover more usage scenarios. Also, we set default AQIs based on local regulations, customs or practices, so if you only want to show one of these AQIs and are not sure which one to show, you can use `aqi.defaultLocalAqi` to help choose.

For example, in Singapore, it is usual to use the 1-Hour PM2.5 to indicate the current air quality, while PSI 24H is more used for forecast and overview. In this case, the real-time AQI will recommend 1-Hour PM2.5 (SG) as the default AQI.

```json
{
  "aqi": [
    {
      "name": "PSI 24H (SG)",
      "defaultLocalAqi": false
    },
    {
      "name": "1-Hour PM2.5 (SG)",
      "defaultLocalAqi": true
    }
  ]
}
```

> **Hint:** The default AQI is not mandatory, so you should choose the most appropriate AQI for your product.

In addition, when there are multiple AQIs, the [Pollutant sub-index](#pollutant-sub-index) will be prioritized to be calculated based on the default AQI's standard.

### Health effects and advice

Air quality has a direct impact on human health. We provide information on health effects and advice in the API, and for most people, health advice can be helpful in guiding their actions and responding as promptly as possible when air pollution occurs. 

Health advice will be provided separately according to healthy populations and sensitive populations, where sensitive populations are included:

* Elderly
* Pregnant women
* Children
* People with heart disease
* People with respiratory diseases
* Other people with unusual air sensitivity

Health effects and advice are not available for all countries and regions.

> **Warning:** Health effects and advice are not regulatory advice and do not have the force of law, and you should be aware of, or inform your users to: under any circumstances, people who are unwell should seek immediate medical attention and follow medical advice.
{:.bqdanger}

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

### Pollutant sub-index

> **Hint:** Pollutant sub-index are only available for [Air Quality v1 (beta)](/en/docs/api/air-quality/) and do not work for [API v7 (legacy)](/en/docs/api/air/).

The pollutant sub-index is the AQI for each pollutant. Usually, we need to calculate the sub-index first, and then the worst sub-index representation is the current AQI value, for example:

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```

The Pollutant sub-index gives us an idea of the current levels of each pollutant in the air quality and is also used to pick out the [primary pollutant](#primary-pollutant) for the current air quality.

### Primary pollutant

The pollutant with the highest concentration value or the worst pollutant sub-index is the primary pollutant, which represents the primary source of current air pollution.

> **Hint:** Depending on local AQI standard, the primary pollutant may not be calculated, and in this case the primary pollutant is null.

## Monitoring Station

In most cities, we will refer to the data from nearby air quality monitoring stations for AQI calculation, you can use the `station=true` parameter in your request, this will return the station ID and name associated with this city.

You can use the [Monitoring Station Data](/en/docs/api/air-quality/air-station/) to obtain values of pollutant concentrations measured at specific monitoring stations.

> **Warning:** Monitoring stations may not be able to provide data for a variety of reasons, such as failures, maintenance, etc., and it is not possible to know when or if they will be restored.
{:.bqwarning}

## China AQI

- In China (except Hong Kong, Macao and Taiwan), the calculation of AQI is in accordance with the [Technical Regulation on Ambient Air Quality Index (AQI) (Trial) (HJ 633-2012)](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/ t20120302_224166.shtml), and two types of AQI data are provided according to the standard, i.e., AQI (CN) and AQI-1H (CN).
- The AQI-1H (CN) is much closer to or the same as the real-time data released by the [China National Environmental Monitoring Centre](http://www.cnemc.cn/).
- If the pollutant sub-index is < 50, the primary pollutant in both AQI (CN) and AQI-1H (CN) is null.