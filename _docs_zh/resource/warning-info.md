---
title: 预警信息
tag: resource
description: 和风天气预警服务支持中国全球及多个国家和地区的气象预警服务，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家和地区列表，预警等级和预警类型。
ref: 9-res-warning
---

和风天气预警服务支持中国及全球多个国家和地区的气象预警服务，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家或地区列表，预警等级和预警类型。

## 支持的国家或地区 {#supported-regions}

天气灾害预警并非适用于所有城市，我们将不断的扩展这些数据，目前和风天气预警服务支持的国家或地区如下：

> 天气预警基于各国政府部门的官方数据，当官方数据无法正常发布时，我们可能会临时下线遇到问题的国家。

> 你可以使用`range`参数通过[预警城市列表](/docs/api/warning/weather-warning-city-list/)获取该国家的所有预警城市信息

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>国家或地区</th>
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

## 预警状态 {#status}

`warning.status` 代表当前预警信息的发布状态，包括：

- Active - 当前预警处于激活状态
- Update - 当前预警是一次对之前指定预警信息的升级或修改
- Cancel - 由于各种原因取消之前指定预警信息的发布。该状态是一个预保留的值，你目前不能使用这个值去判断预警是否有效。

## 过期时间 {#expiry-time}

如果预警信息中未能提供`endTime`，我们默认将这条预警信息的过期时间设置为从`startTime`开始后的24小时。

## 预警等级 {#level-severity}

虽然预警等级在CAP1.2中有标准规范，但是不同国家和地区对预警等级也有自己的的定义和规范。

#### 使用颜色定义

一些国家和地区的预警等级习惯采用颜色进行定义。在中国大陆地区适用于白色（仅限广东省）、蓝色、黄色、橙色和红色。对于中国香港地区，适用于黄色、红色和黑色。对于中国澳门地区，适用于蓝色、黄色、橙色、红色和黑色。对于俄罗斯，适用于白色、绿色、黄色和红色。对于印度、欧洲的国家和地区，适用于绿色、黄色、橙色和红色。

一般来说，颜色越深，代表预警的严重程度越高，目前使用的颜色包括：

- 白色 
- 蓝色 
- 绿色 
- 黄色 
- 橙色 
- 红色
- 黑色

#### 使用文字定义

一些国家和地区采用文字对预警等级进行定义。在科威特适用于低、中等、严重和极端。对于巴西，适用于中等、严重和极端。对于南非，适用于低、中等、极端和未知。对于澳大利亚适用于取消、无、未知、标准、低、中等、高、严重和极端。

目前使用文字描述的等级包括：

- Cancel
- None
- Unknown
- Standard
- Minor
- Moderate
- Major
- Severe
- Extreme

#### 颜色与文字对照

使用颜色和文字都可以表示预警信息的严重程度，我们建议采用下列标准进行文字和颜色的转换：

| 颜色 | 文字     |
| ---- | -------- |
| 白色 | Unknown  |
| 蓝色 | Minor    |
| 黄色 | Moderate |
| 橙色 | Severe   |
| 红色 | Extreme  |

## 紧迫程度 {#urgency}

> 这个字段在一些国家和地区不可用，或者与所列出的值不尽相同

`warning.urgency` 表示预警信息的紧迫性，一般情况分为：

- Immediate
- Expected
- Future
- Past
- Unknown

## 确定性 {#certainty}

> 这个字段在一些国家和地区不可用，或者与所列出的值不尽相同

`warning.certainty` 表示预警信息的确定性或可信度，一般情况分为：

- Observed
- Likely
- Possible
- Unlikely
- Unknown

## 预警类型 {#warning-type}

和风天气根据各国官方气象部门的定义，提供了超过100种预警类型，这些类型并非适用于所有国家或地区。 

> 请注意，所有预警类型和等级都有可能发生变化，包括新增、修改或删除，因此请务必调整好你的程序，以便在发生变化的时候不会导致错误出现！
{:.bqwarning}

> Type（弃用）版将在2021年12月31日不再返回，而采用新的Type名称，请及时更新。
{:.bqwarning}

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Type（弃用）</th>
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




