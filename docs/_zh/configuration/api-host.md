---
title: API Host
tag: [config, apihost]
ref: config-apihost
---

API Host是开发者独立的API地址，用于取代传统的共享API地址，这将提供更高的安全性和保护开发者的隐私。

对于每个开发者帐号来说，API Host都是独立、唯一的，同时API Host也是身份认证的一部分，这意味着即使开发者的凭据泄露了，盗用者如果不知道API Host也是无法请求数据的。

### 查看你的API Host {#your-api-host}

你可以在[控制台-设置](https://console.qweather.com/setting)中查看你的API Host，API Host 看起来像是：

```
abc1234xyz.def.qweatherapi.com
```

### 使用API Host {#use-api-host}

你需要将API Host粘贴至API请求URL或SDK的配置文件中，请参考：

- [如何发送API请求](/docs/configuration/api-config/)
- [安装和配置 iOS SDK](/docs/configuration/ios-sdk-config/)
- [安装和配置 Android SDK](/docs/configuration/android-sdk-config/)

> **警告：** 如果是使用的是原共享API地址，例如`api.qweather.com`或`devapi.qweather.com`，请尽快更换为你自己的API Host以提供更高的安全性。此类原共享API地址将从2026年起逐步停止服务。
{:.bqdanger}
