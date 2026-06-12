---
title: 预警信息
description: 和风天气预警提供中国及全球多个国家和地区的官方预警数据，这篇文档可以帮助了解预警数据的详细说明，例如支持的国家或地区列表，预警等级和预警类型。
translationKey: res-warning
---

[天气预警](/docs/api/warning/)提供中国及全球多个国家和地区的官方预警数据，这篇文档可以帮助了解预警数据的详细说明，例如支持的国家或地区列表，预警等级和预警类型。

> <strong>警告：</strong>天气预警的等级、类型、紧迫程度等信息有可能发生变化，包括新增、修改或删除，这些变化我们可能无法提前通知到你，<strong>因此你需要让你的程序更具有兼容性，避免在发生变化的时候导致错误出现！</strong>
>
>我们的建议是不要尝试枚举这些数值，或做其他形式的映射，而是直接输出到屏幕上。
{.bqdanger}
## 支持的国家或地区 {#supported-regions}

天气灾害预警并非适用于所有城市，我们将不断的扩展这些数据，目前和风天气预警服务支持的国家或地区如下：

> <strong>注意：</strong>天气预警基于各国政府部门的官方数据，当官方数据无法正常发布时，我们可能会临时下线遇到问题的国家。
{.bqwarning}
{{< regions-table mode="warning" >}}

## 信息类型 {#message-type}

`messageType` 代表当前预警信息的类型/性质，开发者可以了解当前预警是新发布的还是对之前预警的更新。

`messageType.code` 包括：

- <strong>alert</strong>：初始且活跃的预警信息
- <strong>update</strong>：更新并取代了在 `messageType.supersedes` 中指定预警信息
- <strong>cancel</strong>：取消了在 `messageType.supersedes` 中指定预警信息。<strong>cancel</strong> 类型的预警信息，`expiredTime` 为发布后1小时。

`messageType.supersedes` 用于指定当前预警信息所取代的先前预警信息的ID，仅在 `messageType.code` 为 <strong>update</strong> 或 <strong>cancel</strong> 时返回。它帮助开发者了解当前预警与之前预警之间的关联，确保数据的正确性和更新的顺畅。

## 紧迫程度 {#urgency}

`urgency` 表示预警信息的紧迫性，包括：

- <strong>immediate</strong>：必须立刻采取行动
- <strong>expected</strong>：应尽快采取行动（通常在 1 小时内）
- <strong>future</strong>：应在近期采取行动
- <strong>past</strong>：事件已不再发生
- <strong>unknown</strong>：紧迫性未知

## 严重程度 {#severity}

`severity`表示预警事件所造成的严重程度，包括：

> <strong>注意：</strong>严重等级可能会根据当地规范而有所新增，你的代码应该兼容此情况。

- <strong>unknown</strong>：严重性未知
- <strong>minor</strong>：对生命或财产构成的威胁极小或没有已知威胁
- <strong>moderate</strong>：对生命或财产可能构成威胁
- <strong>severe</strong>：对生命或财产构成的重大威胁
- <strong>extreme</strong>：对生命或财产构成的严重威胁

## 确定性 {#certainty}

`certainty` 表示预警信息的确定性或可信度，包括：

- <strong>observed</strong>：事件已经发生或正在发生
- <strong>likely</strong>：发生概率大于约 50%
- <strong>possible</strong>：有可能发生，但概率较低（≤ 50%）
- <strong>unlikely</strong>：预计不会发生（概率接近 0）
- <strong>unknown</strong>：确定性未知

## 颜色 {#color}

`color` 包括颜色代码和对应的RGBA色值，是预警信息在视觉表达中建议使用的颜色。目前支持的颜色代码：

- <strong>white</strong>
- <strong>gray</strong>
- <strong>green</strong>
- <strong>blue</strong>
- <strong>yellow</strong>
- <strong>amber</strong>
- <strong>orange</strong>
- <strong>red</strong>
- <strong>purple</strong>
- <strong>black</strong>

## 预警事件和代码 {#event-and-code}

我们为各国或地区的预警事件类别设计了统一的代码规则。

{{< warning-types-table >}}
