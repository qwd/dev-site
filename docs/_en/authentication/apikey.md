---
title: API KEY
tag: [auth, apikey]
ref: auth-apikey
---

API KEY is a common and simple authentication method. However, API KEY is less secure in some scenarios, we recommend using [JWT](/en/docs/authentication/jwt/) for authentication, especially for the apps can greatly improve security.

## Generate API KEY

You can log in to the Console to easily generate an API KEY:

1. Click **Project** in the left menu.
2. Click on the project where you want to add the API KEY.
3. Click the **Create Credential** button in the Credential section.
4. Choose API KEY as the authentication method.
5. Enter the name of the API KEY, e.g. “Travel App Test”.
6. Click the Create button

You can always check the API KEY in [Console - Project Management](https://console.qweather.com/#/apps).

## Authorize request

> **Warning:** Please DO NOT use multiple authentication methods at the same time, it may cause authentication failure.
{:.bqdanger}

We support two authentication methods for API KEYs.

### Request hearder

Add `X-QW-Api-Key: your-key` to your request Header. For example:

```bash
curl -H "X-QW-Api-Key: ABCD1234EFGH" --compressed \
'https://api.qweather.com/v7/weather/now?location=101010100'
```

### Query parameter

Add `key=your-key` to your query parameter. For example:

```bash
curl --compressed \
'https://api.qweather.com/v7/weather/now?location=101010100&key=ABCD1234EFGH'
```



