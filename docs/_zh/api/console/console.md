---
title: 控制台API
tag: [guide, api, console, overview]
layout: guide-overview
description: 帐号所有者可以为指定凭据开启控制台API权限，以便轻松的在本地访问控制台数据，了解当前财务和请求量统计。
permalink: /docs/api/console/
ref: 0-api-console
---

## 启用控制台API

默认情况下，所有凭据均没有权限请求控制台API，你必须在凭据设置中启用控制台API才可以请求对应的数据。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 点击需要启用控制台API的凭据
3. 向下滑动至“控制台权限”
4. 勾选需要启用的控制台API权限
5. 点击“保存”按钮

## 时效性

控制台API返回的数据均为上一个小时或更早时候，有可能与控制台网站中显示的不一致，请以`asOf`响应的时间为准。