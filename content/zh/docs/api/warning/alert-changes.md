---
title: 预警的变更
description: 天气预警不是一个发布后保持不变的静态对象，随着天气系统的发展，预警信息可能随之变更。
toc: false
translationKey: api-warning-changes
---

天气预警不是一个发布后保持不变的静态对象，随着天气过程的发展，预警信息可能经过一次或多次更新。根据 `messageType` （预警信息类型）可以得知当前预警信息是首次发布还是对之前预警的更新。

`messageType` 包括：

- `alert` 初始预警信息
- `update` 表示对之前已经发布的预警进行更新
- `cancel` 表示主动取消之前已经发布的预警

## Alert

`alert` 表示一条新的预警首次发布。

例如：

```text
id:              A
issuedTime:      10:00
messageType:     alert
supersedes:      []
eventType:       wind
severity:        minor
expireTime:      18:00
```

这代表一个新的预警生命周期开始。

## Update

`update` 表示对之前已经发布的预警进行更新。更新可能涉及：预警等级、影响范围、过期时间等。

例如：

```text
id:              B
issuedTime:      13:00
messageType:     update
supersedes:      [A]
eventType:       wind
severity:        moderate
expireTime:      20:00
```

这表示当前预警 B 是一条性质为`update`的预警信息，它在 13:00 取代了预警 A，变更的内容包括严重程度升高，过期时间延长。此时预警 API 中不再返回预警 A。

## Cancel

`cancel` 表示主动取消此前的预警。

例如：

```text
id:              C
issuedTime:      15:00
messageType:     cancel
supersedes:      [B]
eventType:       wind
severity:        moderate
expireTime:      16:00
```

这表示当前预警 C 是一条性质为`cancel`的预警信息，它在 15:00 取代了预警 B，变更内容为取消预警信息。此时预警 API 中不再返回预警 B。另外，预警 C 也有自己的过期时间，默认为发布后的1小时。

