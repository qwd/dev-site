---
title: Create API Request
tag: [config, api]
ref: config-api
---

Before starting to use API service, you need to do some simple configuration and preparation.

Now, let's assume you've created [project and credential](/en/docs/configuration/project-and-key/), we're ready to start creating a complete API request.

## Request URL

Generally, a complete API request URL consists of scheme, host, port, path and query parameters. (Of course, it may be called differently in different programs, we only refer to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986))

```
https://abcxyz.qweatherapi.com/airquality/v1/station/{LocationID}?lang=en
\___/   \____________________/\____________________/\___________/\______/
scheme          host                   path            path       query
                                                      params      params 
```

- scheme: only supports HTTPS.
- host: your [API Host](/en/docs/configuration/api-host/), view in the [Console - Setting](https://console.qweather.com/setting) 
- path: API endpoint.
- path params: the path parameters are all mandatory.
- query params: multiple query parameters are separated by `&`.

> **Hint:** URL encoding is required if the parameter contains special characters.

## Add authentication

We created an API request URL in the previous step, now we need to add authentication to it so that the server can recognize our identity. Learn about [Authentication](/en/docs/configuration/authentication/).

#### JWT

Add the following to the request header:

```
Authorization: Bearer eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA
```

#### API KEY

Add the following to the request header:

```
X-QW-Api-Key: ABCD1234EFGH
```

## Gzip

QWeather's Web API uses Gzip for compression by default, which will greatly reduce network traffic and speed up requests. See [Best Practices - Gzip](/en/docs/best-practices/gzip/).

## Build a complete API request 

You can build the final API request with any programming language, here we use curl to obtain the real-time weather in Beijing as an example:

```bash
# Replace the placeholders with your actual values:
# abcxyz.qweatherapi.com → your API Host
# 1234.ABCD.5678 → your JWT
# ABCD1234EFGH → your API KEY

# Authentication with JWT

curl --compressed \
-H 'Authorization: Bearer 1234.ABCD.5678' \
'https://abcxyz.qweatherapi.com/v7/weather/now?location=101010100'

# Authentication with API KEY

curl --compressed \
-H "X-QW-Api-Key: ABCD1234EFGH" \
'https://abcxyz.qweatherapi.com/v7/weather/now?location=101010100'
```

Building an API URL is not difficult for most developers, but we still strongly recommend that you read the [Best Practices- Optimize requests](/en/docs/best-practices/optimize-requests/) for troubleshooting and experience.