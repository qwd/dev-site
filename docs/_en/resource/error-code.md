---
title: Error Code
tag: resource
description: Introduce error code and error message for QWeather API. When an error occurs, please refer to this document first.
redirect_from: 
    - /en/docs/start/status-code/
    - /en/docs/resource/status-code/
ref: res-status-code
---

When an error occurs, you will receive the corresponding error code. This document will introduce the error codes and error messages for the QWeather API.

> **Hint:** Currently there are two versions of the error code at the same time, we will gradually migrate from v1 to v2, in the meantime you may find that APIs response different error codes.

> **NOTE:** You should correct the error properly, and when an error occurs, please temporarily stop the request and troubleshoot it. You should not continuously send out error requests, otherwise these error requests look like a DDoS attack, and in extreme cases, our security policy may suspend your account.
{:.bqdanger}

## Error Code v2

### INVALID PARAMETER

`HTTP response status code: 400`

Invalid parameters, generally means that the incorrect parameter values were passed in, refer to `error.invalidParams` in the response for the specific invalid parameters.

### MISSING PARAMETER

`HTTP response status code: 400`

Missing parameters, error will be reported when some mandatory parameters are not passed, refer to `error.invalidParams` in the response for specific missing parameters.

### NOT FOUND

`HTTP response status code: 400`

The location queried was not found. For example, a query for a city that does not exist or an incorrect LocationID, in which case you should check and try another location.

### DATA NOT AVAILABLE

`HTTP response status code: 400`

Data is temporarily unavailable. You will receive this error code when you query data that is not supported, for example, to query air quality for a location that is not yet supported, please try another location for your query.

### UNAUTHORIZED

`HTTP response status code: 401`

Authentication failed, you need to check your KEY or Token, we will not response to the specific cause of the error for security reasons.

### NO CREDIT

`HTTP response status code: 403`

Request denied due to not enough available balance, saving plans or other credits in your account. You will need to add your available balance or purchase additional credit before continuing to request data.

### UNPAID

`HTTP response status code: 403`

Request denied due to an outstanding bill in your account. You have to pay the outstanding bill before request data.

### SECURITY RESTRICTION

`HTTP response status code: 403`

Request denied due to this request violated your security restrictions, we will not specify which restrictions have been violated for security reasons. It is recommended that you should:

- Check your request
- Check that your security restrictions are reasonable
- If the request was not sent by you, consider that your credentials may have been compromised

### ERROR HOST

`HTTP response status code: 403`

Request denied due to incorrect Host and credentials being used. For example, send free subscription credential to a standard subscription service and vice versa.

### ACCOUNT SUSPENSION

`HTTP response status code: 403`

Request denied due to user account suspension. Learn more about [Account Suspension](https://dev.qweather.com/docs/account/suspension/).

### FORBIDDEN

`HTTP response status code: 403`

You do not have permission to request this data at this time. You can submit a ticket to us for more details.

### 404

`HTTP response status code: 404`

Incorrect path or path parameter, the resource could not be found. Please note that you will not get response body for 404 errors.

### TOO FAST

`HTTP response status code: 429`

Your request rate is too fast and exceeds the QPM limit. You should take an interval before retrying, also if you have multiple devices, this interval should be staggered or randomized. See [Exponential Backoff](/en/docs/best-practices/optimize-requests/#using-exponential-backoff-to-handle-errors) for interval requests.

### OVER FREE DAILY LIMIT

`HTTP response status code: 429`

Exceed the daily free requests, you should stop sending requests and wait until the next day to try again.

### OVER MONTHLY LIMIT

`HTTP response status code: 429`

The request volume exceeds the limit for a monthly subscription, please wait until the next month to try again, or contact your Business Manager to upgrade your subscription plan.

### UNKNOWN ERROR

`HTTP response status code: 500`

An unknown error has occurred in our service, please submit a ticket to us.

### Response

```
HTTP/2 400
Content-Type: application/problem+json

{
  "error": {
      "code": 400,
      "type": "https://dev.qweather.com/docs/resource/error-code/#invalid-parameters",
      "title": "Invalid Parameters",
      "detail": "Invalid parameters, please check your request.",
      "invalidParams": [
          "lang"
      ]
  }
}
```

- `error.status` the HTTP status code applicable to this problem
- `error.type` a URL that identifies the error type.
- `error.title` a short summary of this error 
- `error.detail` a human-readable explanation for this error.
- `error.invalidParams` invalid or missing params.

## Error Code v1 

By `code` in the API/SDK, you can get the status of the current request and determine whether the request is successful or an error occurred.

| Code | Description |
| ---- | -------------------------------- |
|200|Successful|
|204|The request is successful, but the area you are querying does not currently have the data you need. |
| 400 | Request error, may contain wrong request parameters or missing required parameters. |
| 401 | Authentication failed, the wrong KEY may be used, wrong KEY type (such as using SDK KEY to access Web API). |
| 402 | The requests has been exceeded or the balance is insufficient to support continued access to the service. You can recharge, or wait for the calls to reset. |
| 403 | No access permission, it may be because the PackageName or BundleID are inconsistent, or data that requires additional payment. |
|404| The queried data or region does not exist. |
| 429 | Exceeding the limited QPM, please refer to [QPM](/en/docs/resource/glossary/#qpm) |
| 500 | No response or timeout, service down, please [contact us](https://www.qweather.com/en/contact) |

### Response

```
HTTP/2 200
content-type: application/json

{
  "code": "401"
}
```

## 1 vs 2 

You can simply refer to the table below to understand the differences between v1 and v2 and make a quick migration. But please note that you still need to design for compatibility with v1 before we can fully migrate to v2.

||v1|v2|
|---|---|---|
|HTTP Status Code|200|HTTP Status Code according to different error responses|
|error type|❌|✅|
|error description|❌|✅|
|Identify error parameters|❌|✅|