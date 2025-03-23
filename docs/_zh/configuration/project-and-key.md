---
title: 项目和凭据
tag: [config, project]
description: 项目和凭据是和风天气API开发的重要配置项，本文档将介绍如何设置项目和凭据。
ref: config-project
---
**项目**和**凭据**是和风天气API开发的重要配置项，本文档将介绍如何设置项目和凭据。

## 项目 {#project}

**项目**是承载和风天气数据服务的容器，也可以理解为是你需要开发的一个产品，例如“旅游APP”或者“毕业设计”。项目不仅可以区分你的产品，还可以用于数据统计或费用分摊，你可以访问[控制台-数据统计](https://console.qweather.com)浏览详细的统计信息。

### 创建项目 {#create-project}

你可以在[控制台](https://console.qweather.com/project)简单的创建一个项目。

1. 访问[控制台-项目管理](https://console.qweather.com/project)，点击“创建项目”按钮。
2. 填写项目名称，项目名称最多20个字符。你可以稍后对名称进行修改。
3. 选择[订阅方案](/docs/finance/subscription/)，如选择标准订阅，请确保你的可用额度≥10。订阅方案不可更改。
4. 点击“创建”按钮。

### 删除项目 {#delete-project}

> **警告：**删除动作不可撤销，删除成功后，该项目及项目中的所有凭据都将被删除且无法恢复，你无法再使用这个项目中的凭据获取数据。
{:.bqdanger}

1. 选择你希望删除的项目
2. 在网页最下方点击“删除项目”按钮
3. 输入项目的名称，点击“确认删除”按钮完成删除，或者点击“取消”按钮终止删除动作。

## 凭据 {#credential}

**凭据**用于API的身份认证，凭据包括Ed25519密钥（用于JWT认证）和API KEY。我们建议为你的不同业务和需求创建凭证，例如“iOS正式环境”或“测试专用”。关于安全的请求API，请参考[安全指南](/docs/best-practices/security-guidelines/)。关于身份认证的方式，请参考[身份认证](/docs/authentication/)。

### 添加凭据 {#add-credential}

你需要在项目内创建凭据用于API的身份认证：

1. 访问[控制台-项目管理](https://console.qweather.com/project)并选择你的项目
2. 在凭据设置区域点击绿色的“创建凭据”按钮
3. 选择身份认证方式，我们推荐使用JWT。了解更多关于[JWT](/docs/authentication/jwt/)和[API KEY](/docs/authentication/apikey/)。
4. 填写凭据名称
5. 上传Ed25519的公钥（如果选择JWT），
6. 点击“创建”按钮

### 设置限制 {#setup-restrictions}

你可以限制凭据的使用范围，提高对凭据的安全等级，请参考[应用限制](/docs/best-practices/app-guidelines/#app-restrictions)和[API限制](/docs/best-practices/app-guidelines/#api-restrictions)。

### 删除凭据 {#delete-credential}

> **警告：**删除动作不可撤销，删除成功后，你无法再使用这个凭据进行API身份认证。
{:.bqdanger}

1. 选择你希望删除的凭据
2. 在网页最下方点击“删除凭据”按钮
3. 输入凭据的名称，点击“确认删除”按钮完成删除，或者点击“取消”按钮终止删除动作。

## 其他规则 {#other-rules}

- 每个帐号，最多可以创建10个项目。
- 每个项目，最多可以创建20个凭据
- 项目所绑定的订阅方案不可更改，但是可以删除项目，删除后同时删除了订阅方案。

