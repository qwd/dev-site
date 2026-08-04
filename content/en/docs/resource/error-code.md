---
title: Error Code
description: Introduce error code and error message for QWeather API. When an error
  occurs, please refer to this document first.
aliases:
- "/docs/start/status-code/"
- "/docs/resource/status-code/"
translationKey: res-status-code
---

When an API request fails, you will receive the corresponding error information. This document describes the error codes and error messages for the QWeather API.

> **NOTE:** You should correct the error properly, and when an error occurs, please temporarily stop the request and troubleshoot it. You should not continuously send out error requests, otherwise these error requests look like a DDoS attack, and in extreme cases, our security policy may suspend your account.

An error response looks like this:

```
HTTP/2 400
Content-Type: application/problem+json

{
  "error": {
      "status": 400,
      "type": "https://dev.qweather.com/docs/resource/error-code/#invalid-parameters",
      "title": "Invalid Parameters",
      "detail": "Invalid parameters, please check your request.",
      "invalidParams": [
          "lang"
      ]
  }
}
```

## INVALID PARAMETER

`HTTP response status code: 400`

Invalid parameters, generally means that the incorrect parameter values were passed in, refer to `error.invalidParams` in the response for the specific invalid parameters.

## MISSING PARAMETER

`HTTP response status code: 400`

Missing parameters, error will be reported when some mandatory parameters are not passed, refer to `error.invalidParams` in the response for specific missing parameters.

## NO SUCH LOCATION

`HTTP response status code: 400`

The location queried was not found or unsupported. For example, a query for a city that does not exist or an incorrect Location ID, in which case you should check and try another location.

## DATA NOT AVAILABLE

`HTTP response status code: 400`

Data is temporarily unavailable. You will receive this error code when you query data that is not supported, for example, to query air quality for a location that is not yet supported, please try another location for your query.

## UNAUTHORIZED

`HTTP response status code: 401`

Authentication failed, you need to check your KEY or Token, we will not response to the specific cause of the error for security reasons.

## NO CREDIT

`HTTP response status code: 403`

Request denied due to not enough available balance, savings plans or other credits in your account. You will need to add your available balance or purchase additional credit before continuing to request data.

## OVERDUE

`HTTP response status code: 403`

Request denied due to an overdue bill in your account. You have to pay the overdue bill before request data.

## SECURITY RESTRICTION

`HTTP response status code: 403`

Request denied due to this request violated your security restrictions, we will not specify which restrictions have been violated for security reasons. It is recommended that you should:

- Check your request
- Check that your security restrictions are reasonable
- If the request was not sent by you, consider that your credentials may have been compromised

## INVALID HOST

`HTTP response status code: 403`

Request denied due to invalid API Host, please view your API Host in [Console Setting](https://console.qweather.com/setting/) and replace to it. Learn more about [Create API Request](/en/docs/configuration/api-config/).

## ACCOUNT SUSPENSION

`HTTP response status code: 403`

Request denied due to user account suspension. Learn more about [Account Suspension](/en/docs/account/suspension/).

## DEPRECATED

`HTTP response status code: 403`

The API you requested has been deprecated. Please refer to the [developer documentation](https://dev.qweather.com/docs/) and use the latest version.

## FORBIDDEN

`HTTP response status code: 403`

You do not have permission to request this data at this time. You can submit a ticket to us for more details.

## NOT FOUND

`HTTP response status code: 404`

Incorrect path or path parameter, the resource could not be found.

## METHOD NOT ALLOWED

`HTTP response status code: 405`

The request used an HTTP method other than GET.

## TOO MANY REQUESTS

`HTTP response status code: 429`

Too many requests in a short time, exceeded the QPM limit or accumulated a lot of invalid requests. You must wait or fix the errors before retrying, otherwise ongoing 429 status may be recognized as abuse of server resources or DDoS attacks, which will suspend your account. See [Exponential Backoff](/en/docs/best-practices/optimize-requests/#using-exponential-backoff-to-handle-errors) for how to set the retry time.

## OVER MONTHLY LIMIT

`HTTP response status code: 429`

The request volume exceeds the limit for a monthly subscription, please wait until the next month to try again, or contact your Business Manager to upgrade your subscription plan.

## UNKNOWN ERROR

`HTTP response status code: 500`

An unknown error has occurred in our service, please [submit a ticket](https://console.qweather.com/support/ticket/new) to us.
