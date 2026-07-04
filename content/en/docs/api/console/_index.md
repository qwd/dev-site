---
title: Console API
description: Account owners can enable console API permissions for specified credentials
  to easily access console data locally for current financial and API traffic metrics.
url: "/en/docs/api/console/"
translationKey: 0-api-console
type: docs-overview
---

## Enable Console API

You must enable the Console API in the credential settings to access it. It is disabled by default.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Click on the credential that requires the Console API to be enabled.
3. Scroll down to 'Console data privileges'.
4. Check the permissions that need to be enabled.
5. Click the Save button.

## Latency

The data returned by the console API is from the last hour or earlier, and may not match what is shown in the console website, please refer to the `asOf` response for data time.
