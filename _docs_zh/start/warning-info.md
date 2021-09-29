---
title: 预警参考资料
tag: start
description: 不同国家的灾害预警具有不同定义的等级和类型，这里可以了解到和风天气全部灾害预警信息的等级和类型说明。
ref: 9-start-warning
---

和风天气预警服务支持全球多个国家和地区的气象预警服务，这里可以了解我们所支持的预警信息的详细说明，例如支持的国家和地区列表，预警等级和预警类型。

## 支持的国家和地区 {#supported-regions}

天气灾害预警并非适用于所有城市，我们将不断的扩展这些数据，目前和风天气预警服务支持的国家和地区如下：

> 你可以使用`range`参数通过[预警城市列表](/docs/api/warning/weather-warning-city-list/)获取该国家的所有预警城市信息

<table>
  <thead>
    <tr>
      <th>ISO 3166-1</th>
      <th>国家和地区</th>
    </tr>
  </thead>
  <tbody>
  {%- assign warning_regions = site.data.regions | where: "isWarning", true -%}
  {%- assign name = "name-" | append: page.lang -%}
  {% for item in warning_regions %}
    <tr>
      <td>{{ item.alpha-2  }}</td>
      <td>{%- if page.lang == "zh" -%}{{ item.name_zh  }}{%- else -%}{{ item.name_en  }}{%- endif -%}</td>
    </tr>
  {% endfor %}  
  </tbody>
</table>

## 预警等级 {#warning-level}

不同国家和地区的预警等级可能不同。在中国大陆地区适用于白色（仅限广东省）、蓝色、黄色、橙色和红色。对于中国香港地区，适用于黄色、红色和黑色。对于中国澳门地区，适用于蓝色、黄色、橙色、红色和黑色。对于其他国家和地区，适用于绿色、黄色、橙色和红色。

> 一般来说，颜色越深，代表预警的严重程度越高，但并非所有预警都具有全部等级，例如霾预警只有黄色和橙色。

- 白色 
- 蓝色 
- 绿色 
- 黄色 
- 橙色 
- 红色
- 黑色

## 预警类型 {#warning-type}

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




