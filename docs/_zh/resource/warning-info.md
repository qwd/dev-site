---
title: 预警信息
tag: resource
description: 和风天气预警服务支持中国全球及多个国家和地区的气象预警服务，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家和地区列表，预警等级和预警类型。
ref: res-warning
---

和风天气预警服务支持中国及全球多个国家和地区的气象预警服务([API](/docs/api/warning/)，[iOS SDK](/docs/ios-sdk/warning/ios-weather-warning/)，[Android SDK](/docs/android-sdk/warning/android-weather-warning/))，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家或地区列表，预警等级和预警类型。

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

## 多语言 {#supported-language}

天气预警可能不适用于所有[我们支持的语言](/docs/resource/language/)，请参考下列场景：

- 只有`warning.title`，`warning.text`，`warning.typeName`支持多语言设置。
- 当没有设置语言的情况下，将优先返回查询城市的当地语言，如果当地语言不存在，则返回英文。
- 当设置的语言被支持时，则返回设置的语言。
- 当设置的语言不支持时，则返回查询城市的当地语言，如果不支持当地语言，则返回英文。

> **提示：**数据的语言可能是混合的，例如部分内容是当地语言，另一部分是其他语言。这种情况较少，由于这些内容基于各个气象部门发布的官方内容，因此无法排除。

## 预警状态 {#status}

`warning.status` 代表当前预警信息的发布状态，包括：

- Active - 当前预警处于激活状态
- Update - 当前预警是一次对之前指定预警信息的升级或修改
- Cancel - 由于各种原因取消之前指定预警信息的发布。该状态是一个预保留的值，你目前不能使用这个值去判断预警是否有效。

## 过期时间 {#expiry-time}

> **提示：**一般预警信息的有效期不会超过48小时，因此如果预警信息中未能提供`warning.endTime`，我们建议将这条预警信息的过期时间设置为从`warning.startTime`开始后的24小时（我们也是这样做的）。

你可以根据`warning.endTime`来预估一条预警信息的失效时间，或者当你更新数据的时候无法再获取当之前相同ID的预警信息时，代表这一条预警已经过期或失效。

## 预警等级（已弃用） {#level-deprecated}

`warning.level`代表预警信息的等级。

> **警告：**不要再使用`warning.level`，这个字段已弃用，目前返回为空或未更新的值，未来可能会被完全移除。请使用[严重等级](/docs/resource/warning-info/#severity)和[严重等级颜色](/docs/resource/warning-info/#severity-color)替代。
{:.bqdanger}

## 严重等级 {#severity}

`warning.severity`表示预警事件所造成的影响强度。

不同国家和地区对预警严重等级有自己的的定义和规范，在科威特适用于Minor、Moderate、Severe和Extreme。对于巴西，适用于Moderate、Severe和Extreme。对于南非，适用于Minor、Moderate、Extreme和Unknown。对于澳大利亚适用于Cancel、None、Unknown、Standard、Minor、Moderate、Major、Severe和Extreme。对于其他国家适用于Unknown、Minor、Moderate、Severe和Extreme。

目前预警严重等级包括：

- Cancel
- None
- Unknown
- Standard
- Minor
- Moderate
- Major
- Severe
- Extreme

## 严重等级颜色 {#severity-color}

对于[严重等级](/docs/resource/warning-info/#severity)，一些国家和地区的预警严重等级习惯采用颜色进行定义，我们将根据当地习惯提供严重等级所适用的颜色。

> **注意：**如果当地没有更适合的颜色，则返回为空。

目前预警严重等级颜色包括：

- White 
- Blue 
- Green 
- Yellow 
- Orange 
- Red
- Black


## 紧迫程度 {#urgency}

> **注意：**这个字段在一些国家和地区不可用，或者与所列出的值不尽相同。

`warning.urgency` 表示预警信息的紧迫性，包括：

- Immediate
- Expected
- Future
- Past
- Unknown

## 确定性 {#certainty}

> **注意：**这个字段在一些国家和地区不可用，或者与所列出的值不尽相同。

`warning.certainty` 表示预警信息的确定性或可信度，包括：

- Observed
- Likely
- Possible
- Unlikely
- Unknown

## 预警类型 {#warning-type}

和风天气根据各国官方气象部门的定义，提供了超过300种预警类型，这些类型并非适用于所有国家或地区。 

我们也根据预警类型制作了对应的图标，请参考[和风天气图标](https://icons.qweather.com/)。

> **提示：** 预警类型的名称可能是相同的，这不是一个bug，例如几乎每个气象部门都会发布“大风预警”，但是这个预警的规则或标准可能是不一样，请以各个气象部门的定义为准。

> **警告：** 预警类型会根据各国气象部门的规定而新增、修改或删除，预警类型的名称也有可能由于翻译的影响而有所变化，因此我们不建议存储这些预警类型，以避免在预警类型更新时造成你的程序错误。
{:.bqdanger}

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>TypeName</th>
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




