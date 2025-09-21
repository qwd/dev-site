---
title: 预警信息
tag: resource
description: 和风天气预警提供中国及全球多个国家和地区的官方预警数据，这篇文档可以帮助了解预警数据的详细说明，例如支持的国家或地区列表，预警等级和预警类型。
ref: res-warning
---

[天气预警](/docs/api/warning/)提供中国及全球多个国家和地区的官方预警数据，这篇文档可以帮助了解预警数据的详细说明，例如支持的国家或地区列表，预警等级和预警类型。

> **警告：**天气预警的等级、类型、紧迫程度等信息有可能发生变化，包括新增、修改或删除，这些变化我们可能无法提前通知到你，**因此你需要让你的程序更具有兼容性，避免在发生变化的时候导致错误出现！**
>
>我们的建议是不要尝试枚举这些数值，或做其他形式的映射，而是直接输出到屏幕上。
{: .bqdanger}

## 支持的国家或地区 {#supported-regions}

天气灾害预警并非适用于所有城市，我们将不断的扩展这些数据，目前和风天气预警服务支持的国家或地区如下：

> **注意：**天气预警基于各国政府部门的官方数据，当官方数据无法正常发布时，我们可能会临时下线遇到问题的国家。
{:.bqwarning}

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>国家或地区</th>
    </tr>
  </thead>
  <tbody>
 {%- assign warning_regions = site.data.table.regions | where: "isWarning", "TRUE" -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in warning_regions %}
    <tr>
      <td>{{ item.alpha-2 | downcase  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## 信息类型 {#message-type}

`msgType` 代表当前预警信息的类型/性质，包括：

- **alert**：初始且活跃的预警信息
- **update**：更新并取代了在`relatedAlertIds`中指定预警信息
- **cancel**：取消了在`relatedAlertIds`中指定预警信息，同时其过期时间`expiredTime`为发布后1小时。

## 严重程度 {#severity}

`severity`表示预警事件所造成的严重程度，包括：

> **注意：**严重等级可能会根据当地规范而有所新增，你的代码应该兼容此情况。

- **unknown**：严重性未知
- **minor**：对生命或财产构成的威胁极小或没有已知威胁
- **moderate**：对生命或财产可能构成威胁
- **severe**：对生命或财产构成的重大威胁
- **extreme**：对生命或财产构成的严重威胁

## 颜色 {#color}

颜色通常表示当前预警事件类型或严重程度，优先使用当地规范或习惯的RGBA色值，包括：

- **white**
- **blue**
- **green**
- **yellow**
- **amber**
- **orange**
- **red**
- **black**

## 紧迫程度 {#urgency}

`urgency` 表示预警信息的紧迫性，包括：

- **immediate**：必须立刻采取行动
- **expected**：应尽快采取行动（通常在 1 小时内）
- **future**：应在近期采取行动
- **past**：事件已不再发生
- **unknown**：紧迫性未知

## 确定性 {#certainty}

`certainty` 表示预警信息的确定性或可信度，包括：

- **observed**：事件已经发生或正在发生
- **likely**：发生概率大于约 50%
- **possible**：有可能发生，但概率较低（≤ 50%）
- **unlikely**：预计不会发生（概率接近 0）
- **unknown**：确定性未知

## 预警事件和代码 {#event-and-code}

`event` 表示预警事件的名称。和风天气根据各国官方气象部门的定义，提供了数百种预警事件，例如大风、雷暴预警事件。事件名称可能相同或类似，但其代表的地区、标准各不相同。

`eventCodes` 表示该预警事件对应的代码，其中 `name` 是代码的体系名称，`value` 是代码的值。事件代码包括:

- 当地事件代码，例如适用于美国的SAME体系，这有助于你对接或兼容当地系统。并非所有国家或地区提供当地事件代码。
- 通用事件代码，我们为每一个预警事件提供了唯一的代码，便于跨区域开发。通用代码的名称是 **UNIVERSAL**。

> **警告：** 预警事件会根据各国气象部门的规定而新增、修改或删除，事件名称也有可能由于翻译的影响而有所变化，因此我们不建议存储这些预警类型，以避免在预警类型更新时造成你的程序错误。
{:.bqdanger}

<table>
  <thead>
    <tr>
      <th>QWEATHER Code</th>
      <th>Event</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site.data.table.warning-type %}
    <tr>
      <td>{{ item.type }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.type_name_zh  }}{%- else -%}{{ item.type_name_en }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>




