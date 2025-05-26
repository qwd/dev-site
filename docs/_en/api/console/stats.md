---
title: Stats
tag: [guide, api, console, stats]
ref: 1-api-console-stats
---

Retrieve your API traffic statistics for the last 24 hours.

> **Hint:** The data returned is as of the previous hour or earlier, it may be delayed from the data displayed in the Console.

## Privileges

This API requires the account owner to enable permissions for the credentials in the Console.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Click on the credential that requires the Console API to be enabled.
3. Scroll down to "Console data privileges".
4. Check the desired permissions in "API traffic stats":
   - "Allow access to overall API traffic stats", aggregate all projects and credentials, including deleted.
   - "Allow access to API traffic stats by project", filtered by `project` parameter.
   - “Allow access to API traffic by stats credential”, filtered by `credential` parameter.
5. Click the Save button.

Note: deleted projects or credentials cannot be queried individually (such as using filters `project` or `credential`), but their traffic stats are included in the overall aggregation.

## Endpoint

{% include api-url.html flag="console-stats" %}

## Parameters

#### Query parameters

{% include params.html p="q-stats-proj q-stats-cred" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="console" type="stats" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" %}