---
title: 创建应用和KEY
tag: resource
description: 使用和风天气数据API或SDK，首先要先创建一个应用，在这个应用下，你可以为这个应用不同的使用场景创建多个KEY。本篇文档介绍如何快速的创建和风天气的应用和KEY。
redirect_from: /docs/start/get-key/
ref: 1-res-get-api-key
---

使用和风天气数据API或SDK，需要先创建一个[应用](/docs/resource/glossary/#application)，在这个应用下，你可以为不同的使用场景创建多个KEY。

## 创建应用

进入[控制台](https://console.qweather.com/)后，在左侧导航菜单中选择“应用管理”

![创建应用](/assets/images/content/get-key-1.png)

## 选择应用类型

应用类型包括：开发版、商业版和高性能版，了解[它们之间的区别](/help/general#biz-vs-free)。

我们在这里以创建一个商业版应用为例。

![选择应用类型](/assets/images/content/get-key-2.png)

## 填写应用名称

填写你的应用名称，比如“公司旅游APP”、“测试项目”、“我的blog”等。应用名称仅可使用中文、英文、数字、下划线和短横线，最多20个字符。

## 创建数据KEY

创建一个全新的应用后需要添加一个数据KEY。首先要选择数据KEY的类型：

- Web API：使用[API](/docs/api/)获取天气数据
- iOS SDK：使用[iOS SDK](/docs/ios-sdk/)获取天气数据
- Android SDK：使用[Android SDK](/docs/android-sdk/)获取天气数据

> 请注意，不同类型的KEY不能混用，即Web API的KEY不能用于通过SDK获取数据，反之亦然。

![选择KEY的类型](/assets/images/content/get-key-3.png)

## KEY的设置

设置你的KEY，包括填写名称和绑定应用包名，KEY的名称可以用“测试KEY”、“生产环境KEY”、“xx项目专用”等，支持中文、英文、数字、下划线和短横线，最多15个字符。

如果选择创建iOS和Android SDK的数据KEY，需要绑定应用标识。

* Android SDK：需要绑定Android APP的 `PackageName`，如果你有多个APP，可以创建多个KEY，绑定后该KEY仅可用于此APP。
* iOS SDK：需要绑定iOS APP的 `bundle id`，如果你有多个APP，可以创建多个KEY，绑定后该KEY仅可用于此APP。

点击了解如何获取[iOS Bundle ID](/docs/resource/glossary/#ios-bundle-identifier)或[Android Package Name](/docs/resource/glossary/#android-package-name)

## 创建完成

至此你已经完成了应用和KEY的创建，现在就复制创建好的KEY去试试吧！

> 请注意，商业版的应用使用按量计费的方式，需要先[充值](/help/buy/#top-up)或购买[资源包](/help/buy/#package)后才可以正常获取数据。

![创建完成](/assets/images/content/get-key-4.png)

## 更多操作

你可以对你创建的应用进行更多操作，包括更改名称、删除、添加新的KEY等等。

## 应用和KEY的数量

根据不同的[用户类型](/help/account/#account-type)，可以创建不同数量的应用或KEY。

|&nbsp;|普通用户|个人开发者|企业开发者|
|---|---|---|---|
|开发版应用数量|1|1|1|
|总应用数量|10|10|10|
|KEY数量|3个/应用|10个/应用|10个/应用|