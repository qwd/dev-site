---
title: API KEY
tag: [auth, apikey]
ref: auth-apikey
---

API KEY是一种常见、操作简单的身份认证方式。然而API KEY在一些场景下安全性较低，我们推荐使用[JWT](/docs/authentication/jwt/)进行身份验证，尤其对于客户端可以极大地提高安全性。

## 生成API KEY {#generate-api-key}

你可以登录控制台快速的生成API KEY：

1. 点击左侧菜单中的“项目管理”
2. 点击需要添加API KEY的项目名称
3. 在凭据设置区域点击绿色的创建凭据按钮
4. 身份认证方式选择API KEY
5. 输入凭据名称，比如“旅游APP测试”
7. 点击创建按钮

你可以随时在[控制台-项目管理](https://console.qweather.com/#/apps)中查看生成的API KEY。

## 发送API KEY进行身份验证 {#authorize-request}

> **注意：**请不要同时使用多种身份认证方式，可能会导致身份认证失败。
{:.bqdanger}

我们支持两种形式使用API KEY进行身份验证:

### 请求标头 {#request-hearder}

在你的请求Header中加入`X-QW-Api-Key: your-key`，例如：

```bash
curl -H "X-QW-Api-Key: ABCD1234EFGH" --compressed \
'https://api.qweather.com/v7/weather/now?location=101010100'
```

### 请求参数 {#query-parameter}

在请求参数中加入`key=your-key`，例如：

```bash
curl --compressed \
'https://api.qweather.com/v7/weather/now?location=101010100&key=ABCD1234EFGH'
```



