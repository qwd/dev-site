---
title: Alert Info
description: QWeather provides official alert data for China and many countries and
  regions worldwide. This document helps you understand specifications of alert data,
  such as the supported regions and alert events.
translationKey: res-warning
---

[Weather Alert](/en/docs/api/warning/) provides official alert data for China and many countries and regions worldwide. This document helps you understand specifications of alert data, such as the supported regions and alert events.

> <strong>Warning:</strong> All alert events, urgency and other fields are possible to change, including add/modify/delete. We may not be able to give advance notice of these changes, <strong>so you have to make your code more compatible to avoid errors when they happen.</strong>
>
> We recommend not trying to enumerate these values or mappings, but to output them directly to the screen.
{.bqdanger}
## Supported regions

Weather alerts are not available for all cities, we will continue to expand these data, currently QWeather supports the following countries or regions.

> <strong>Note:</strong> Weather alert messages are based on official data from government departments. When official data is not released properly, we may temporarily take offline the country or region where the failure occurred.
{.bqwarning}
{{< regions-table mode="warning" >}}

## Message type

The `messageType` indicates the type or nature of the current alert message. Developers can use this field to determine whether the alert is a newly issued one or an update to a previously issued alert.

`messageType.code` includes:

- <strong>alert</strong>: Initial and active alert
- <strong>update</strong>: Updates and supercedes the alert specified in `messageType.supersedes`
- <strong>cancel</strong>: Cancels the alert specified in `messageType.supersedes`, with an expiration time set to 1 hour after issuance.

`messageType.supersedes` specifies the identifier of the previous alert message that is replaced by the current alert. This array is only relevant when `messageType.code` is <strong>update</strong> or <strong>cancel</strong>. It helps developers understand the relationship between the current alert and a previous one, ensuring data correctness and smooth updates.

## Urgency

`urgency` indicates the urgency of the event.

- <strong>immediate</strong>: Responsive action should be taken immediately
- <strong>expected</strong>: Responsive action should be taken soon (within the next hour)
- <strong>future</strong>: Responsive action should be taken in the near future
- <strong>past</strong>: The event is no longer current
- <strong>unknown</strong>: Urgency unknown

## Severity

`severity` indicates the expected impact level of the event.

> <strong>Note:</strong> Severity may be expanded based on local specifications, your code should be compatible with this possibility.

- <strong>extreme</strong>: Extraordinary threat to life or property
- <strong>severe</strong>: Significant threat to life or property
- <strong>moderate</strong>: Possible threat to life or property
- <strong>minor</strong>: Minimal to no known threat to life or property
- <strong>unknown</strong>: Severity unknown

## Certainty

`certainty` indicates the certainty or confidence level of the event.

- <strong>observed</strong>: Determined to have occurred or to be ongoing
- <strong>likely</strong>: Likely (probability > ~50%)
- <strong>possible</strong>: Possible but not likely (probability ≤ ~50%)
- <strong>unlikely</strong>: Not expected to occur (probability ≈ 0)
- <strong>unknown</strong>: Certainty unknown

## Color

`color` contains the color code and its corresponding RGBA value, these are the recommended colors for the visual representation of warning messages. Supported color codes include:

- <strong>white</strong>
- <strong>gray</strong>
- <strong>green</strong>
- <strong>blue</strong>
- <strong>yellow</strong>
- <strong>orange</strong>
- <strong>red</strong>
- <strong>purple</strong>
- <strong>black</strong>

## Event and code

We have designed a unified coding system for alert event types in each country or region.

{{< warning-types-table >}}
