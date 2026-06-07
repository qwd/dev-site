---
title: Finance Summary
tag:
- guide
- api
- console
- finance
ref: 1-api-console-finance
translationKey: 1-api-console-finance
type: docs
---

Retrieve your financial and billing summary.

> **Hint:** The data returned is as of the previous hour or earlier, it may be delayed from the data displayed in the Console.

## Privileges

This API requires the account owner to enable permissions for the credentials in the Console.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Click on the credential that requires the Console API to be enabled.
3. Scroll down to "Console data privileges".
4. Check "Allow access to finance summary data".
5. Click the Save button.

## Endpoint

{{< api-url >}}

## Parameters

No parameters are required.

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="console" type="finance" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" >}}
