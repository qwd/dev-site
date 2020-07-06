---
title: 创建应用和KEY
tag: [start, refer]
version: 2
description: 使用和风天气数据API或SDK，首先要先创建一个应用，在这个应用下，你可以为这个应用不同的使用场景创建多个KEY。
---

使用和风天气数据API或SDK，首先要先创建一个应用，在这个应用下，你可以为这个应用不同的使用场景创建多个KEY。

### 第一步 创建应用

进入[控制台](https://console.heweather.com/)后，在左侧导航菜单中选择“API应用管理”

![创建应用](/assets/images/get-key-1.png)

### 第二步 选择应用类型

应用类型包括：开发版、商业版和高性能版，了解[它们之间的区别](/docs/faq/general#biz-vs-free)。

我们在这里以创建一个商业版应用为例。

![选择应用类型](/assets/images/get-key-2.png)

### 第三步 填写应用名称

填写你的应用名称，比如“公司旅游APP”、“测试项目”、“我的blog”等。应用名称仅可使用中文、英文、数字、下划线和短横线，最多20个字符。

### 第四步 创建数据KEY

创建一个全新的应用后需要添加一个数据KEY。首先要选择数据KEY的类型，分为Web API、iOS SDK和Android SDK三种类型。其中Web API用于通过API直接获取数据，SDK适用于通过SDK获取数据。

> 请注意，不同类型的KEY不能混用，即Web API的KEY不能用于通过SDK获取数据，反之亦然。

![选择KEY的类型](/assets/images/get-key-4.png)

### 第五步 KEY的设置

设置你的KEY，包括填写名称和绑定应用包名，KEY的名称可以用“测试KEY”、“生产环境KEY”、“xx项目专用”等，支持中文、英文、数字、下划线和短横线，最多15个字符。

![选择KEY的类型](/assets/images/get-key-5.png)

如果选择创建iOS和Android SDK的数据KEY，需要绑定应用标识。

* Android SDK：需要绑定Android APP的 `PackageName`，如果你有多个APP，可以创建多个KEY，绑定后该KEY仅可用于此APP。
* iOS SDK：需要绑定iOS APP的 `bundle id`，如果你有多个APP，可以创建多个KEY，绑定后该KEY仅可用于此APP。

点击了解如何获取[iOS Bundle ID](/docs/faq/technical#ios-bundle-identifier)或[Android Package Name](/docs/faq/technical#android-package-name)

### 第六步 创建完成

至此你已经完成了应用和KEY的创建，现在就复制创建好的KEY去试试吧！

> 请注意，商业版的应用使用按量计费的方式，你应该在创建完后进行充值或购买资源包才可以正常获取数据。

![创建完成](/assets/images/get-key-6.png)

### 更多操作

你可以对你创建的应用进行更多操作，包括更改名称、删除、添加新的KEY等等。

### API应用和KEY的数量

根据不同的用户类型，可以创建不同数量的应用或KEY。

|&nbsp;|普通用户|个人开发者|企业开发者|
|---|---|---|---|
|开发版应用数量|1|1|1|
|总应用数量|10|10|10|
|KEY数量|3个/应用|10个/应用|10个/应用|