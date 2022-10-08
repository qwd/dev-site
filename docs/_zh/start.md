---
title: 开始使用
tag: [start, overview]
description: 和风天气提供了一个强大、现代化、开发友好的天气数据服务。如果你是第一次接触我们的天气数据，那么可以根据下方文档快速的了解和风天气是如何运行以及所涉及到的相关概念。
permalink: /docs/start/
ref: start-overview
---

欢迎使用和风天气开发服务，本片文档将介绍一些入门步骤和基本概念，便于你快速开始以及了解和风天气开发服务是如何运行的。

## 快速开始

#### 第一步 注册帐号

首先你需要一个和风天气的帐号，关于帐号的说明文档，请参考[帐号管理](/docs/account/)。

<a href="https://id.qweather.com/#/register?redirect=https%3A%2F%2Fconsole.qweather.com" target="_blank" rel="noopener noreferrer">点击注册!</a>

#### 第二步 创建项目和KEY

在[控制台](https://console.qweather.com/)的左侧导航中，选择**项目管理**，并点击右上角的“创建项目”按钮。参考[项目和KEY](/docs/configuration/project-and-key/)。

在创建项目时，需要同时选择一种订阅，例如：免费订阅、标准订阅或高级订阅，我们这里暂时以免费订阅为例。参考[订阅](/docs/finance/subscription/)。

#### 第三步 获取数据

在浏览器中输入下列API地址(请将最后的KEY替换成你在上一步创建的KEY)：

```
https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的KEY
```

如果在上一步选择的是标准订阅，请确保你的帐号可用额度>0，并在浏览器中输入下列API地址：

```
https://api.qweather.com/v7/weather/now?location=101010100&key=你的KEY
```

此时你应该就可以获得北京市的实时天气数据了。不过请注意，免费订阅仅支持有限的数据和请求量，请参考[订阅对比](/docs/finance/subscription/#comparison)。

#### 第四步 更多数据

参考[开发文档](/docs/api/)获取更多数据。

## 费用

当你使用标准订阅或高级订阅时，根据你的请求量，你需要支付订阅费用。

我们的计费方式为按量计费，并采用阶梯价，意味着你的请求量越多，单价越低，并且当你停止使用时，你不需要支付任何费用。请参考[按量计费定价](/docs/finance/pricing/)和[账单和支付](/docs/finance/billing-and-payment/)。

如果你的请求量较多，你也可以使用节省计划来大幅降低你的成本，了解[节省计划](/docs/finance/saving-plans/)。

对于中国大陆地区的用户，我们的价格已经包含增值税，如需要开具增值税发票请参考[增值税发票](/docs/finance/vat-invoice/)。

## 更多资料

在开发过程中，这些实用资料可以帮助你更高效的完成工作。

#### 特性

了解和风天气开发平台所提供的多种特性功能和开发概念。访问[特性](/docs/features/)。

#### 开发配置

在使用API或SDK之前，你需要做一些简单的配置工作，对于使用免费订阅的用户，还需要一些额外的配置。访问[开发配置](/docs/configuration/)。

#### 实用资料

你可以在这里找到关于状态码、天气图标、多语言、城市列表等实用资料。访问[实用资料](/docs/resource/)。

#### 最佳实践

介绍了一些使用我们服务的常见做法和经验，以便你能够快速的、稳定的获取你需要的数据。访问[最佳实践](/docs/best-practices/)。

#### 条款、限制和许可证

为了提供一个更加公平、高效、合规的开发环境，你需要同意我们的各项服务条款，并在在许可证允许的范围内使用和风天气开发服务。参考[条款](/docs/terms/)。


