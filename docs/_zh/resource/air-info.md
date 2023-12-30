---
title: 空气质量信息
tag: resource
description: 本篇文档将介绍使用和风天气空气质量API时的一些背景知识和说明。空气质量指数（Air Quality Index）简称AQI，是定量描述空气质量状况的非线性指数，空气污染越严重，对人体的健康危害也就越大。
ref: res-air
---

空气质量指数（Air Quality Index）简称AQI，是定量描述空气质量状况的非线性指数，空气污染越严重，对人体的健康危害也就越大。本篇文档将介绍使用和风天气空气质量API时的一些背景知识和说明。

## 支持的国家或地区 {#supported-regions}

[API v7（旧版）](/docs/api/air/)仅支持中国（含港澳台）地区使用，[空气质量v1（beta）](/docs/api/air-quality/)支持中国、美国和欧洲大部分国家，并将逐步拓展新的国家和地区。

## 支持的空气质量指数 {#supported-aqis}

空气质量一般由各国或地区环境部门进行监控和管理，并且根据当地的实际情况制定空气质量指数的标准，目前世界范围内没有统一的空气质量标准。[《世卫组织全球空气质量指南》](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines)对空气质量和污染物的临时目标提出了建议，但并没有法律约束力，只是一份参考文件。

空气质量指数在一些国家和地区可能具有不同的标准或相同标准不同的计算方法，[空气质量v1（beta）](/docs/api/air-quality/)将根据当地标准提供一种或多种AQI数据。以下是我们支持的空气质量指数以及它们对应的取值范围、类别等。

<table>
  <thead>
    <tr>
      <th>Code</th>
      <th>名称</th>
      <th>取值范围</th>
      <th>级别</th>
      <th>类别</th>
    </tr>
  </thead>
  <tbody>
  {%- assign sort_aqi = site.data.table.aqis | sort: 'code' -%}
  {% for item in sort_aqi %}
    <tr>
        <td><code>{{ item.code }}</code></td>
        <td>{{ item.name  }}</td>
        <td>
            <ul class="clear-list">
            {%- assign range_array = item.value_threshold | split: "," -%}
            {% for range in range_array %}
                <li>{{ range }}</li>
            {% endfor %}
            </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign lv_array = item.levels | split: "," -%}
            {% for lv in lv_array %}
                <li>{{ lv }}</li>
            {% endfor %}
            </ul>
        </td>
        <td>
            <ul class="clear-list">
            {%- assign cate_array = item.categories_zh | split: "," -%}
            {% for cate in cate_array %}
                <li>{{ cate }}</li>
            {% endfor %}
            </ul>
        </td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## 污染物 {#pollutants}

空气质量由空气污染物确定，污染物浓度越高，对人体的危害越大。污染物包括固体颗粒、滴液和气体的混合物，它们有多种来源，例如家庭燃料燃烧、工业生产、交通废气、发电、露天焚烧、沙尘等。[《世卫组织全球空气质量指南》](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines)提到的污染物有PM2.5、PM10、O3、NO2、SO2和CO，然而各国和地区的环境部门对于污染物有不同的定义，例如中国空气质量要求计算6种污染物，欧盟则要求计算5种污染物。

在实践中，AQI中包含的污染物并不一致，这是因为：

- 各国和地区对污染物的定义不同
- 监测站故障或被关闭

另一方面，污染物浓度的单位也不尽相同，请参考下表了解污染物的名称和它们可用的单位。

<table>
  <thead>
    <tr>
      <th>code</th>
      <th>名称</th>
      <th>全称</th>
      <th>单位(新版)</th>
      <th>单位(旧版)</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site.data.table.air-pollutant %}
    <tr>
      <td><code>{{ item.code  }}</code></td>
      <td>{{ item.name  }}</td>
      <td>{{ item.fullname_zh }}</td>
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

## 污染物分指数 {#pollutant-sub-index}

> **提示：**污染物分指数仅限[空气质量v1（beta）](/docs/api/air-quality/)，不适用于[API v7（旧版）](/docs/api/air/)。

分指数是各项污染物的指数。通常，最差的分指数代表当前的AQI。分指数的取值范围与对应的空气质量指数的取值范围是一致的。

## 首要污染物 {#primary-pollutant}

一般来说，浓度值最高或分指数最差的污染物是首要污染物，但是根据各国或地区的标准或者缺失污染物数值导致无法计算时，首要污染物可能为空。

## 中国空气质量指数说明 {#china-aqi}

- 在中国（除港澳台地区），空气质量指数的计算按照[《环境空气质量指数（AQI）技术规定（试行）（HJ 633—2012）》](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/t20120302_224166.shtml)为准，并根据标准提供了两种空气质量指数的数据，即空气质量AQI (CN)和空气质量实时报AQI-1H (CN)。
- AQI-1H (CN)的结果更加接近或等同于[中国环境监测总站](http://www.cnemc.cn/)发布的实时数据。
- 当污染物分指数<50时，AQI (CN) 和AQI-1H (CN) 的首要污染物均为空。