---
title: About Alerts
description: Learn how to interpret alert lifecycles, time fields, and affected areas.
translationKey: api-warning-alert-guide
aliases:
- "/docs/resource/warning-info/"
---

Weather alerts are official messages issued by governments, meteorological services, or other authorized agencies for hazardous weather and related events that are expected, occurring, or likely to have an impact. They typically include the event, severity, affected area, validity period, and recommended actions, helping people and systems understand the risk and take appropriate precautions.

Weather alerts from different countries and regions may follow different rules for event classifications, languages, validity periods, updates, and affected areas. Do not treat an API alert as a fixed message tied only to an administrative area. Display and process it according to its lifecycle, time fields, and actual geographic coverage.

This guide explains the basic conventions for working with alert messages and links to coverage, event, update, and cancellation references.

## Supported Countries and Regions {#supported-regions}

See [Alert Coverage](/en/docs/api/warning/alert-coverage/).

## Alert Events {#alert-events}

See the [Alert Event List](/en/docs/api/warning/alert-events/).

## Languages {#language}

Alert messages are not available in every [supported language](/en/docs/resource/language/). The API prioritizes the local language, English, or Chinese. In some cases, a response may contain multiple languages or a language different from the one requested.

## Expired Alerts

An alert should be considered expired when any of the following occurs:

- The API no longer returns the alert
- Another alert updates it
- Another alert cancels it
- Its expiration time has passed

## Alert Changes {#update-and-cancel}

See [Alert Changes](/en/docs/api/warning/alert-changes/).

## Alert Times {#temporal}

Weather alerts contain several time fields with different meanings. Handle each field according to its semantics.

**Issue time** `issuedTime`

When the issuing authority created and released the alert message. It describes **when the message was issued**, not when the weather event began, and it does not necessarily indicate when the alert became effective.

**Effective time** `effectiveTime`

When **the alert message begins to apply**. This is separate from the actual start of the weather event and may be earlier or later than the event onset.

**Event onset time** `onsetTime`

When **the hazardous weather event is expected to begin**. It describes the event rather than the message. Because forecasts are uncertain, the event may begin earlier or later than this time.

**Expiration time** `expireTime`

When **the alert message is expected to expire**. It defines the validity of the message, not the exact end of the weather event. The weather may end earlier or continue longer than initially expected. See [Alert Changes](/en/docs/api/warning/alert-changes/) for changes to an alert.

> **These times do not have a required chronological order.** For example, an alert may be issued after a hazardous weather event has already begun.

Example:

```
issuedTime:      10:00
effectiveTime:   10:25
onsetTime:       14:00
expireTime:      20:00
```

*The authority issued the message at 10:00. It became effective at 10:25, the hazardous event was expected to begin at 14:00, and the message expired at 20:00.*

## Affected Area {#affected-area}

Hazardous weather is shaped by moving weather systems, local atmospheric conditions, terrain, and other natural factors. It does not begin or end at administrative boundaries. An alert should therefore be understood primarily as **geographic coverage**, not as an object attached to a single administrative code.

An affected area may be represented as:

- All or part of an administrative area
- A textual area description
- A geographic polygon or circle
- Another non-administrative geographic code

Developers do not need to determine the affected area themselves. Submit the target location's coordinates and the Alert API will return active alerts that apply to that location.

The administrative area or authority that issues an alert is **not necessarily the same as the area actually affected by the weather**.

For example, an alert issued by the Hebei Meteorological Observatory may list Zhangjiakou, Chengde, Baoding, Xiong'an New Area, Langfang, Shijiazhuang, Xingtai, and Handan as the affected areas. The API response then depends on whether the requested coordinates fall within that coverage:

```text
Baoding coordinates    → Alert returned
Chengde coordinates    → Alert returned
Tangshan coordinates   → No alert returned
Cangzhou coordinates   → No alert returned
```
