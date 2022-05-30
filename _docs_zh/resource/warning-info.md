---
title: 预警信息
tag: resource
description: 和风天气预警服务支持中国全球及多个国家和地区的气象预警服务，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家和地区列表，预警等级和预警类型。
ref: 9-res-warning
---

和风天气预警服务支持中国及全球多个国家和地区的气象预警服务([API](/docs/api/warning/)，[iOS SDK](/docs/ios-sdk/ios-warning/)，[Android SDK](/docs/android-sdk/android-warning/))，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家或地区列表，预警等级和预警类型。

> 天气预警的等级、类型、紧迫程度等信息有可能发生变化，包括新增、修改或删除，这些变化我们可能无法提前通知到你，**因此你需要让你的程序更具有兼容性，避免在发生变化的时候导致错误出现！**
>
>我们的建议是不要尝试枚举这些数值，或做其他形式的映射，而是直接输出到屏幕上。
{: .bqwarning}

> 天气预警不一定适用于多语言设置，当一条预警信息无法响应你的多语言设置时，我们会返回英文或当地语言的信息，而且这可能是混合的，即部分内容为英文，另一部分是本地语言。

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

> 一般预警信息的有效期不会超过48小时，因此如果预警信息中未能提供`warning.endTime`，我们建议将这条预警信息的过期时间设置为从`warning.startTime`开始后的24小时（我们也是这样做的）。

你可以根据`warning.endTime`来预估一条预警信息的失效时间，或者当你更新数据的时候无法再获取当之前相同ID的预警信息时，代表这一条预警已经过期或失效。

## 预警等级（弃用） {#level-deprecated}

`warning.level`代表预警信息的等级。

> **警告：**目前该字段已弃用，使用[严重等级](/docs/resource/warning-info/#severity)和[严重等级颜色](/docs/resource/warning-info/#severity-color)替代。
{:.bqwarning}

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

> **注意：**这个字段在一些国家和地区不可用，或者与所列出的值不尽相同

`warning.urgency` 表示预警信息的紧迫性，包括：

- Immediate
- Expected
- Future
- Past
- Unknown

## 确定性 {#certainty}

> **注意：**这个字段在一些国家和地区不可用，或者与所列出的值不尽相同

`warning.certainty` 表示预警信息的确定性或可信度，包括：

- Observed
- Likely
- Possible
- Unlikely
- Unknown

## 预警类型 {#warning-type}

和风天气根据各国官方气象部门的定义，提供了超过100种预警类型，这些类型并非适用于所有国家或地区。 

我们提供了下列预警类型的图标，请参考[和风天气图标](https://icons.qweather.com/)。

> **警告：**Type（弃用）版将在2021年12月31日不再返回，而采用新的Type名称，请及时更新。
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




