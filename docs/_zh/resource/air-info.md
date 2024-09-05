---
title: 空气质量信息
tag: resource
description: 本篇文档将介绍使用和风天气空气质量API时的一些背景知识和说明。空气质量指数（Air Quality Index）简称AQI，是定量描述空气质量状况的非线性指数，空气污染越严重，对人体的健康危害也就越大。
ref: res-air
---

空气质量指数（Air Quality Index）简称AQI，是定量描述空气质量状况的非线性指数，空气污染越严重，对人体的健康危害也就越大。本篇文档将介绍使用和风天气空气质量API时的一些背景知识和说明。

> 本文档仅适用于[空气质量v1](/docs/api/air-quality/)版本，其他版本请参考[Web API v7 中的空气质量](/docs/api/air/)。

## 支持的国家或地区 {#supported-regions}

[空气质量v1](/docs/api/air-quality/)及未来版本支持中国、美国、亚洲和欧洲大部分国家，并将逐步拓展新的国家和地区。

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>国家或地区</th>
      <th>支持的AQIs</th>
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

## 支持的空气质量指数 {#supported-aqis}

和风天气支持两种AQI类型，并在API中返回最多两个AQI数据：通用AQI与本地AQI。

### QAQI

> **提示：** QAQI 不适用于中国地区。

QAQI是和风天气定义的通用的空气质量指数，以[《世卫组织全球空气质量指南 2021》](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines)为基础并进行了调整，以适应不同国家的自然环境、经济基础和社会状况。

### 本地AQI {#local-aqi}

本地空气质量一般由各国或地区环境部门进行监控和管理，并且根据当地的实际情况制定空气质量指数的标准，这些指数具有不同的标准和计算方法，并且有可能会发布多个标准的空气质量指数。

### AQI列表 {#aqi-list}

以下是我们支持的空气质量指数以及它们对应的取值范围、类别等：

{% include aqi-table.html %}

*下载完整表格：[aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/_data/table/aqis.csv)*

## AQI的值 {#aqi-value}

空气质量指数并非一定是数字，一些国家的标准或在某些等级时，AQI使用文字进行描述。例如加拿大AQHI的取值范围是1-10+，显然“10+”是一个文本。为了便于计算和符合规范的显示，我们为AQI的值提供了两种表达方式：

* `aqi` 数字类型的值，这包括了本身是数字表达的AQI，也包括用文字表达的AQI，我们将其转化为数字，以便于开发者进行计算。
* `aqiDisplay` 字符串类型的值，用于直接显示。这也是当地AQI的标准格式，因此在向你的用户展示时，建议使用这个字段。

在加拿大的例子中，如果当前空气质量的类别是“极高风险”：

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

## 健康影响和建议 {#health-effects-and-advice}

空气质量的好坏对人类健康产生直接的影响。我们在API中提供了健康影响和建议的信息，对于大多数人来说，健康指导建议可以有效的指导他们的行动，尽可能的在发生空气污染时进行及时响应。这些建议区分了健康人群和敏感人群，其中敏感人群包括：

* 老人
* 孕妇
* 儿童
* 心脏疾病患者
* 呼吸系统疾病患者
* 长期的户外工作者
* 其他对空气异常敏感的人群

健康影响和建议不适用于所有国家和地区。

> **警告：**健康影响和建议并非规范建议，也不具备法律效力，你应该了解或向你的用户告知：在任何时候，如有身体不适者应立即就医并遵医嘱。
{:.bqdanger}

## 污染物 {#pollutants}

空气质量由空气污染物确定，污染物浓度越高，对人体的危害越大。污染物包括固体颗粒、滴液和气体的混合物，它们有多种来源，例如家庭燃料燃烧、工业生产、交通废气、发电、露天焚烧、沙尘等。[《世卫组织全球空气质量指南》](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines)提到的污染物有PM2.5、PM10、O3、NO2、SO2和CO，然而各国和地区的环境部门对于污染物有不同的定义，例如中国空气质量要求计算6种污染物，欧盟则要求计算5种污染物。

> **注意：**在实践中，AQI中的污染物并不一致，在一些地区也可能无法提供污染物的详细数据，这是因为：
>
> - 当地规范对污染物的标准不同
> - 监测站故障或被关闭
> - 监测站不支持某些污染物的监控
> - 法律法规的要求
{:.bqwarning}

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

### 污染物分指数 {#pollutant-sub-index}

污染物分指数是各项污染物的空气质量指数。通常，我们需要先计算分指数，然后最差的分指数代表即为当前的AQI数值，例如：

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```

通过污染物分指数，我们可以了解当前空气质量各项污染物的水平，也用于挑选出当前空气质量的罪魁祸首-[首要污染物](#primary-pollutant)。

### 首要污染物 {#primary-pollutant}

浓度值最高或污染物分指数最差的污染物是首要污染物，代表导致当前空气污染的主要成分。

> **提示：**根据各国或地区的标准，首要污染物可能无法被计算，此时首要污染物为空。

## 空气质量监测站 {#monitoring-station}

在大多数地点，我们会参考附近空气质量监测站的数据进行AQI的计算，此时API中将返回这些参考的监测站ID和名字。

你可以使用[监测站数据API](/docs/api/air-quality/air-station/)获取具体监测站所测量的污染物浓度值。

> **注意：**监测站可能由于各种原因无法提供数据，例如故障、维护等，且无法预知何时恢复或是否能恢复。因此请不要完全依赖监测站数据，或将监测站作为枚举值，或作为固定展示。
{:.bqdanger}

## 中国空气质量指数说明 {#china-aqi}

在中国地区的空气质量数据，请参考下列说明：

- 空气质量指数的计算按照[《环境空气质量指数（AQI）技术规定（试行）（HJ 633—2012）》](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/t20120302_224166.shtml)为准。
- 不支持QAQI
- 空气质量预报中，不支持污染物的详细数据。
- 当污染物分指数<50时，AQI (CN) 的首要污染物均为空。
- 所提供的空气质量数据**仅为参考值，未经过完整的审核程序进行修订和确认，不适用评价达标状况或任何正式评估**。请以[中国环境监测总站](https://www.cnemc.cn)发布的空气质量数据为准。