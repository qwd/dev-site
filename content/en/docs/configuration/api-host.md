---
title: API Host
description: Learn how to find and use your unique API Host to securely access QWeather APIs.
translationKey: config-apihost
---

The API Host is a dedicated API domain name for developers, replacing the legacy shared API domain. This provides enhanced security and better protection of developers' privacy.

For each developer account, the API Host is independent and unique. It is also part of the authentication process, meaning that even if a developer's credentials are leaked, an attacker cannot request data without knowing the API Host.

### Your API Host

You can view your API Host in the [Console - Settings](https://console.qweather.com/setting). The API Host is randomly assigned by the system and looks like this:

```
h2a9cf3mhs.xy.qweatherapi.com
```

### Use API Host

Paste the API Host into the API request URL. See [how to build an API request](/en/docs/configuration/api-config/).

> **Warning:** If you are still using the legacy shared API domain, such as `api.qweather.com`, `devapi.qweather.com` or `geoapi.qweather.com`, please switch to your own API Host as soon as possible to ensure higher security. [The legacy shared API domain will be gradually discontinued starting in 2026](https://blog.qweather.com/announce/public-api-domain-change-to-api-host/).
{.bqdanger}
