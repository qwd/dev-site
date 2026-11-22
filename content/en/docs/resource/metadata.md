---
title: Metadata
description: This document introduces the information contained in the metadata object returned by the API and how it is used.
translationKey: res-meta
---

In API responses, we use the `metadata` object to describe the metadata for the current request or response.

## tag

`tag` is a unique identifier for the current data. It is used to identify the batch that produced the data and also helps developers determine whether the data has been updated.

## attributions

`attributions` is an array of strings that includes attribution links, data provider names or other required information. You must display “QWeather” in products that use our service and display all items in the array completely. See [Attribution](/en/docs/terms/attribution/) to learn more.

## zeroResult

When `zeroResult` is `true`, the request succeeded and there is no available data to return. For example, a weather alert query can return `zeroResult: true` when there are no alerts for the requested coordinates.
