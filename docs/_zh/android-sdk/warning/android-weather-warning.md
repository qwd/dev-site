---
title: 天气灾害预警
tag: [guide, android, warning, now]
ref: 1-sdk-android-weather-warning
---

天气灾害预警Android SDK可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**天气预警有较多规则和需要注意的事项，在开始使用天气预警之前，你应该先阅读[实用资料-预警信息](/docs/resource/warning-info/)。

| 接口代码| 接口        | 数据类      |
| ------------ | ---------- | ----------- |
| warningNow| 天气灾害预警  | WarningResponse |

## 参数

**WarningNowParameter**

{% include params.html p="location-def lang-def" %}

## 示例代码

```java
public void warningNow(WarningNowParameter parameter, Callback<WarningResponse> callback);
```

## 返回数据 

**WarningResponse**

 {% include api-response.html group="warning" type="warning" prefix="warning" %}

<!-- | 属性            | 说明                       | 示例值                      |
| --------------- | -------------------------- | --------------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)                    | 200  |
| getWarning      | 灾害预警                   | List&lt;Warning&gt; |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/severe-weather/beijing-101010100.html |
| getRefer        | Refer 数据来源以及数据授权 | Refer                       |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

**Warning**

| 属性         | 说明                               | 示例值                                                           |
| ------------ | ---------------------------------- | ---------------------------------------------------------------- |
| getId        | 预警id                             | 10102010020210514101500714183119
| getPubTime   | 预警发布时间   | 2017-10-25T12:03+08:00                                                 |
| getTitle     | 预警信息标题                       | 广东省深圳市气象台发布雷电黄色预警                               |
| getSender | 预警发布单位，可能为空 |深圳市气象台 |
| getStartTime | 预警开始时间                       | 2017-10-25T12:03+08:00                                |
| getEndTime   | 预警结束时间                       | 2017-10-25T12:03+08:00                                |
| getStatus    | 预警状态                           | 预警中                                                           |
| getSeverity     | [预警严重等级](/docs/resource/warning-info/#severity)               | Moderate                                                             |
| getSeverityColor     | [预警严重等级颜色](/docs/resource/warning-info/#severity-color)，**可能为空**               | Blue                                                             |
| getType      | [预警类型ID](/docs/resource/warning-info/#warning-type)     | 1014                                                             |
| getTypeName      | [预警类型名称](/docs/resource/warning-info/#warning-type)     | 雷电                                                             |
| getUrgency      | [预警信息的紧迫程度](/docs/resource/warning-info/#urgency)，**可能为空**     | Immediate                                                             |
| getCertainty      | [预警信息的确定性](/docs/resource/warning-info/#certainty)，**可能为空**     | Likely                                                             |
| getText      | 预警详细信息                       | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |
| getRelated      | 与本条预警相关联的预警ID，当预警状态为cancel或update时返回。可能为空 | 10102010020210513101500714846231 |
 -->

### 预警类型和等级

查看[预警类型和等级](/docs/resource/warning-info/)
