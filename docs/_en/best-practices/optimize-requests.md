---
title: Optimize Requests
tag: [bp, opz]
ref: bp-opz
---

To use the QWeather develop service more efficiently, you need to optimize your requests as much as possible. This document will introduce several common ways of optimization.

## Building a valid URL

When you use the API, a request is sent to us via a URL, like:

```
https://abcxyz.qweatherapi.com/v7/weather/3d?parameters
```

Generally, this request URL is error-free, but there are some special cases to be aware of:

### Special Characters {#special-characters}

According to the [RFC 3986 URI Standard](https://datatracker.ietf.org/doc/html/rfc3986), except for English letters, digits, and some unreserved characters, all other characters in **parameter values** must be URL-encoded (also known as percent-encoding) to ensure correct parsing and transmission of requests.

Characters in parameter values that **do not need to be encoded**:

- English letters: `A-Z`, `a-z`
- Digits: `0-9`
- Unreserved characters: `-` `_` `.` `~`

Characters in parameter values that **must be encoded**:

- Spaces: encode as `%20`, do not use `+`, for example, `new york` ➡️ `new%20york`
- Chinese or other non-ASCII characters, for example, , `北京` ➡️ `%E5%8C%97%E4%BA%AC`
- Comma `,`: Although it is a reserved character and usually does not need to be encoded, to ensure compatibility with all servers and clients and to avoid ambiguity, it is strongly recommended to encode it. For example, `color=blue,red` ➡️ `color=blue%2Cred`
- All other characters not listed above as unreserved characters

### Invalid Whitespace

When constructing a request URL, be careful to avoid invalid whitespace characters. This often occurs during copy-paste operations. For example, when copying a token, there may be unintended spaces at the beginning or end. These spaces should be manually removed after pasting, as they can break the structure of the URL or result in incorrect parameters being passed, leading to request failures.

## Secure requests

Please do not write requests URL or share this URL in the web page, which may reveal your sensitive information. Using HTTPS, signature authentication and other methods can effectively protect your sensitive information. Please refer to [Protect Your KEY](/en/docs/best-practices/protect-data-key/).

## Handle errors

If your request returns an [error code](/en/docs/resource/error-code/), you should pause and handle it appropriately. Otherwise, repeated failures may be interpreted as a DDoS attack, and our security policy will suspend your account.

> **For example:** Sending invalid parameters or an incorrect credentail may return a `400` or `403` error. You should stop the request and fix the issue before retrying. Continuous failed requests may violate our EULA and be treated as an attack, leading to service disruption and account suspension.

### Understanding error codes

See [Error Code](/en/docs/resource/error-code/).

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

If the weather content is already loaded, you can also set a cache time for this content, or add a refresh button to let the user manually refresh the data. For setting up caching, please refer to [Cache your data](/en/docs/best-practices/cache/).

