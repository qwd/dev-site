---
title: Alert Changes
description: Weather alerts may be updated or canceled as weather conditions change.
toc: false
translationKey: api-warning-changes
---

A weather alert is not a static object. It may be updated one or more times as the weather event develops. Based on the `messageType` (the nature of the alert message), you can determine whether the current advisory is the initial release or an update to a previous advisory.

`messageType` can be:

- `alert`: An initial alert message
- `update`: An update that replaces an earlier alert message
- `cancel`: A message that cancels an earlier alert

## Alert

`alert` indicates that a new alert has been issued for the first time.

For example:

```text
id:              A
issuedTime:      10:00
messageType:     alert
supersedes:      []
eventType:       wind
severity:        minor
expireTime:      18:00
```

This begins a new alert lifecycle.

## Update

`update` indicates that a previously issued alert has changed. An update may modify its severity, affected area, expiration time, or other information.

For example:

```text
id:              B
issuedTime:      13:00
messageType:     update
supersedes:      [A]
eventType:       wind
severity:        moderate
expireTime:      20:00
```

Alert B replaces alert A at 13:00. Its severity increases and its expiration time is extended. Alert A is no longer returned by the Alert API.

## Cancel

`cancel` indicates that an earlier alert has been canceled.

For example:

```text
id:              C
issuedTime:      15:00
messageType:     cancel
supersedes:      [B]
eventType:       wind
severity:        moderate
expireTime:      16:00
```

Alert C replaces and cancels alert B at 15:00. Alert B is no longer returned by the Alert API. The cancellation message has its own expiration time, which defaults to one hour after issuance.
