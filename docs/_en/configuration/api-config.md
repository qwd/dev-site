---
title: API Config
tag: [config, api]
ref: config-api
---

Before starting to use API service, you need to do some simple configuration and preparation.

## Create Project and KEY

Make sure you have created a Project and Web API KEY, otherwise refer to [Project and KEY](/en/docs/configuration/project-and-key/).

## Understanding API URL

Generally, a complete API request URL consists of scheme, host, port, path and query parameters. (Of course, it may be called differently in different programs, we only refer to [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986))

```
https://api.qweather.com/v7/weather/now?location=xxx&key=xxx
\___/   \______________/\______________/\__________________/
scheme        host   (port)   path        query parameters 
```

- scheme: https
- host: api.qweather.com
- port: 443 
- path: /v7/weather/7d?
- query parameters: location=xxx&key=xxx 

API host may vary depends on subscription and data, please refer to the instructions in the development guide.

> **Note:** You must use the API host: `devapi.qweather.com` for Free subscriptions. The exception is GeoAPI, which use `geoapi.qweather.com` regardless of Free or Standard subscriptions.
{:.bqwarning}

Building an API URL is not difficult for most developers, but we still strongly recommend that you read the [Best Practices- Optimize requests](/en/docs/best-practices/optimize-requests/) for troubleshooting and experience.

## Gzip

QWeather's Web API uses Gzip for compression by default, which will greatly reduce network traffic and speed up requests. See [Best Practices - Gzip](/en/docs/best-practices/gzip/)。

## Try it out

Please copy and paste the following link into your browser and see what the response is. Replace the `key` with your own.

- For Standard subscription, please copy the following link
```
https://api.qweather.com/v7/weather/3d?location=101010100&key=Your_key
```

- For Free subscription, please copy the following link
```
https://devapi.qweather.com/v7/weather/3d?location=101010100&key=Your_key
```
