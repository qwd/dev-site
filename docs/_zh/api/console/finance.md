---
title: 财务汇总
tag: [guide, api, console, finance]
ref: 1-api-console-finance
---

查询你的财务和计费的汇总信息。

> **提示：**返回的数据截止至上一个小时或更早时候，它与控制台中显示的数据相比可能有1个小时或更长的延迟。

## 获取权限 {#privileges}

必须由帐号所有者在控制台为凭据开通权限后才可以访问本接口。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 点击需要启用控制台API的凭据
3. 向下滑动至“控制台权限”
4. 勾选“允许访问财务汇总数据”
5. 点击“保存”按钮

## 请求路径 {#endpoint}

{% include api-url.html flag="console-finance" %}

## 参数 {#parameters}

无需参数。

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="console-finance" %}

{% include api-response.html group="console" type="finance" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" %}