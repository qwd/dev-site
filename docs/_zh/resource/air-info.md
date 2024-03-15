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

{% include aqi-table.html %}

*下载完整表格：[aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/_data/table/aqis.csv)*

### AQI的值 {#aqi-value}

空气质量指数并非一定是数字，一些国家的标准或在某些等级时，AQI使用文字进行描述。例如加拿大AQHI的取值范围是1-10+，显然“10+”是一个文本。为了便于计算和符合规范的显示，我们为AQI的值提供了两种表达方式：

* `aqi.value` 数字类型的值，这包括了本身是数字表达的AQI，也包括用文字表达的AQI，我们将其转化为整数，以便于开发者进行计算。
* `aqi.valueDisplay` 字符串类型的值，用于直接显示。这也是当地AQI的标准格式，因此在向你的用户展示时，建议使用这个字段。

在加拿大的例子中，如果当前空气质量的类别是“极高风险”：

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

### 默认的本地AQI {#default-local-aqi}

一些城市具有多个AQI，这有助于覆盖更多的使用场景。同时，我们也根据当地法规、习惯或实践设置了默认AQI。因此如果你只想展示其中一种AQI，并且不知道应该展示哪一个的时候，你可以通过`aqi.defaultLocalAqi`进行选择。

例如在新加坡，人们习惯使用1小时PM2.5的指数来表达当前的空气质量，而PSI 24H更多用于预报和概述。在这种情况下，实时AQI将推荐1-Hour PM2.5 (SG)为默认AQI。

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

> **提示：**默认AQI并非具有强制性的，因此你应该根据你的产品选择最适合的AQI。

另外，当有多个AQI时，[污染物分指数](#pollutant-sub-index)将优先根据默认AQI的标准进行计算，当默认AQI无法计算时会选择另外的公式，且仅提供一种结果。


### 健康影响和建议 {#health-effects-and-advice}

空气质量的好坏对人类健康产生直接的影响。我们在API中提供了健康影响和建议的信息，对于大多数人来说，健康指导建议可以有效的指导他们的行动，尽可能的在发生空气污染时进行及时响应。这些建议区分了健康人群和敏感人群，其中敏感人群包括：

* 老人
* 孕妇
* 儿童
* 心脏疾病患者
* 呼吸系统疾病患者
* 其他对空气异常敏感的人群

健康影响和建议不适用于所有国家和地区。

> **警告：**健康影响和建议并非规范建议，也不具备法律效力，你应该了解或向你的用户告知：在任何时候，如有身体不适者应立即就医并遵医嘱。
{:.bqdanger}

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

### 污染物分指数 {#pollutant-sub-index}

> **提示：**污染物分指数仅限[空气质量v1（beta）](/docs/api/air-quality/)，不适用于[API v7（旧版）](/docs/api/air/)。

污染物分指数是各项污染物的空气质量指数。通常，我们需要先计算分指数，然后最差的分指数代表即为当前的AQI数值，例如：

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```

通过污染物分指数，我们可以了解当前空气质量各项污染物的水平，也用于挑选出当前空气质量的罪魁祸首-[首要污染物](#primary-pollutant)。

### 首要污染物 {#primary-pollutant}

浓度值最高或污染物分指数最差的污染物是首要污染物，代表导致当前空气污染的主要成分。

> **提示：**根据各国或地区的标准，首要污染物可能无法被计算，此时首要污染物为空。

## 空气质量监测站 {#monitoring-station}

在绝大多数城市，我们会参考附近空气质量监测站的数据进行AQI的计算，你可以在请求时使用`station=true`参数（默认是false），这将返回于这个城市相关联的监测站ID和名字。

你可以使用[监测站数据API](/docs/api/air-quality/air-station/)获取具体监测站所测量的污染物浓度值。

> **注意：**监测站可能由于各种原因无法提供数据，例如故障、维护等，且无法预知何时恢复或是否能恢复。因此请不要完全依赖监测站数据，或将监测站作为枚举值，或作为固定展示。
{:.warning}

## 中国空气质量指数说明 {#china-aqi}

- 在中国（除港澳台地区），空气质量指数的计算按照[《环境空气质量指数（AQI）技术规定（试行）（HJ 633—2012）》](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/201203/t20120302_224166.shtml)为准，并根据标准提供了两种空气质量指数的数据，即空气质量AQI (CN)和空气质量实时报AQI-1H (CN)。
- AQI-1H (CN)的结果更加接近或等同于[中国环境监测总站](http://www.cnemc.cn/)发布的实时数据。
- AQI (CN)代表当日空气质量。
- 当污染物分指数<50时，AQI (CN) 和AQI-1H (CN) 的首要污染物均为空。
- 所提供的空气质量数据仅为当天参考值，未经过完整的审核程序进行修订和确认，不适用评价达标状况或任何正式评估。