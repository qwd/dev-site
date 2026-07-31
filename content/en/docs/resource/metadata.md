---
title: Metadata
description: This document introduces the information contained in the metadata object returned by the API and how it is used.
translationKey: res-meta
---

In API responses, we use the `metadata` object to describe the metadata for the current request or response.

## tag

`tag` is a unique identifier for the current data, used to trace the data’s source and to help developers determine whether the data has been updated.

## attributions

`attributions[]` contains attribution information or statements for the current data. In accordance with our Developer License Agreement and the requirements of other copyright holders, you must display the contents of this array in your product or service.

## zeroResult

`zeroResult` indicates whether data is being returned. When `“zeroResult”: true`, it means the request was successful but there is no data to return. For example, when querying weather alerts for a specific coordinate, this indicates that there are no alerts for that location.


