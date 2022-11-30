---
title: Optimize Requests
tag: [bp, opz]
ref: bp-opz
---

To use the QWeather develop service more efficiently, you need to optimize your requests as much as possible. This document will introduce several common ways of optimization.

## Building a valid URL

When you use the API, a request is sent to us via a URL, like:

```
https://api.qweather.com/v7/weather/3d?parameters
```

Generally, this request URL is error-free, but there are some special cases to be aware of:

### No space

Do not enter a space in the request URL, this usually happens in the case of copy and paste, this error may not be detected immediately, so you need to pay attention when you copy and paste.

> **For example:** Typically we copy and paste KEY, depending on the system or software, there may be spaces before and after the content being copied, and you need to remove these spaces when you finish paste.

### Use standard URI syntax

You may need to concatenate multiple parameters or values in the request address of the API, which will be separated by special symbols. For example, the value of longitude and latitude is separated by `,`, instead of using Chinese `，`

For the standard URI syntax, please refer to [Uniform Resource Identifier (URI): Generic Syntax](https://datatracker.ietf.org/doc/html/rfc3986)

### URL encoding

For characters within the non-ASCII character set, such as `北京市`, you need to perform [URL encoding](https://en.wikipedia.org/wiki/Percent-encoding) on these characters.

## Secure requests

Please do not write requests URL or share this URL in the web page, which may reveal your sensitive information. Using HTTPS, signature authentication and other methods can effectively protect your sensitive information. Please refer to [Protect Your KEY](/docs/best-practices/protect-data-key/).

## Handle errors

When you encounter data response with a value other than `2xx` in the `code` field, it means your request has errors, at this time you need to pause the request and resolve these errors, otherwise in extreme cases you may violate our [usage restrictions](/en/docs/terms/restriction/) and get your account suspended.

> **For example:** When you pass in an incorrect parameter or KEY that will get `400` or `403`, you should pause the request this time and troubleshoot before continuing. Otherwise, we may suspend your account when a large number of request errors are generated.

### Understanding status codes

In the data response, `code` represents the status of the current request, and its value is similar to [HTTP Status Code](https://developer.mozilla.org/en-US/docs/web/http/status) with slight modifications. See [Status Code](/docs/resource/status-code/).

### Using exponential backoff to handle errors

When an error occurs, please stop the request before troubleshooting. However some errors are not caused by requests that do not meet the specification, such as exceeding the queries per minute limit(QPM), not having enough balance, etc. In this case you should use the [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) to optimize the request.

> **For example:** when your got a `429` status code, means you exceeded the QPM, you should now add a waiting period of **x** seconds before the next request starts. If the next request still returns `429`, double the waiting period, send another request, and so on, continuing to extend the waiting period until no more error status codes.

Simple formula:

> t = b<sup>c</sup>
{:.bqcode}

Here, `t` is the interval between the next request, or waiting period, `b` is the multiplicative factor or "base" and `c` is the number of errors.

If we follow the above example and assume that `b = 2`, then on the first error, the next request should wait for <span class="label code">2<sup>1</sup> = 2 seconds</span>, then another request should wait for <span class="label code">2<sup>2</sup> = 4 seconds</span>, and the third request wait for <span class="label code">2<sup>3</sup> = 8 seconds</span>, if the response to the fourth request is correct, the previous request frequency is restored and we can reset `c = 1`.

#### Avoid confict

If you have a large number of devices sending requests, in order to avoid conflicts between these devices that have the same waiting period, you can set a random number in the waiting period (or called a slot), the value range of this random number can be <span class="label code">0～2<sup>c</sup>-1</span>. In the above example, the random numbers for the three waiting periods are:

- first: 0, 1
- second: 0, 1, 2, 3
- third: 0, 1, 2, 3, 4, 5, 6, 7

This way you avoid conflicts by having different waiting periods for each device.

#### Truncation

The waiting period should not be unlimited. If there are 20 errors continuously, then the waiting period is already 291 hours long, which is obviously unacceptable. So you need to set a maximum value for the waiting period. Our recommendation is `c = 10`.

## Requests on need

Request weather data only when it is needed.

> **For example:** In an app where the weather content is located at the bottom of the page, you can make a request only when the user swipes to the weather content section.

If the weather content is already loaded, you can also set a cache time for this content, or add a refresh button to let the user manually refresh the data. For setting up caching, please refer to [Cache your data](/docs/best-practices/cache/).

