---
title: API Host
tag: [config, apihost]
ref: config-apihost
---

The API Host is a dedicated API domain name for developers, replacing the legacy shared API domain. This provides enhanced security and better protection of developers' privacy.

For each developer account, the API Host is independent and unique. It is also part of the authentication process, meaning that even if a developer's credentials are leaked, an attacker cannot request data without knowing the API Host.

### Your API Host

You can view your API Host in the [Console - Settings](https://console.qweather.com/setting). The API Host looks like this:

```
abc1234xyz.def.qweatherapi.com
```

### Use API Host

You need to paste API Host into the API URL or the SDK configuration file, refer to:

- [How to send API requests](/en/docs/configuration/api-config/)
- [Install and setup iOS SDK](/en/docs/configuration/ios-sdk-config/)
- [Install and setup Android SDK](/en/docs/configuration/android-sdk-config/)


> **Warning:** If you are still using the legacy shared API domain, such as `api.qweather.com` or `devapi.qweather.com`, please switch to your own API Host as soon as possible to ensure higher security. The legacy shared API domain will be gradually discontinued starting in 2026.
{:.bqdanger}