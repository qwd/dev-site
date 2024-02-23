---
title: 项目和KEY
tag: [config, project]
description: 项目是承载和风天气服务的容器，KEY是获取服务的密钥。开始使用和风天气服务的第一步就是需要创建项目和KEY。
ref: config-project
---

**项目**是承载和风天气数据服务的容器，也可以理解为是你需要开发的一个产品，例如“旅游APP”或者“毕业设计”。项目不仅可以区分你的产品，还可以用于数据统计或费用分摊，你可以访问[控制台-数据统计](https://console.qweather.com)浏览详细的统计信息。

**KEY**是获取和风天气开发服务的密钥（或称之为token，认证信息），在创建项目后，你可以为你的不同业务和需求创建KEY，例如“iOS正式环境”或“测试专用”。

## 创建项目 {#create-project}

1. 访问[控制台-项目管理](https://console.qweather.com/#/apps)，点击“创建项目”按钮。
2. 填写项目名称，项目名称最多20个字符。你可以稍后对名称进行修改。
3. 选择[订阅方案](/docs/finance/subscription/)，如选择标准订阅，请确保你的可用额度≥10。订阅方案不可更改。
4. 选择KEY适用的平台，不同平台的KEY无法混用。此时创建第一个KEY，你可以稍后创建更多的KEY。
5. 填写KEY的名称，最多20个字符。
6. 点击“创建”按钮。

## 创建KEY {#create-key}

当你创建一个项目的时候，已经要求创建一个KEY，如果需要创建更多的KEY：

1. 在需要增加KEY的项目卡片右侧点击“添加KEY”按钮。
2. 选择KEY适用的平台，不同平台的KEY无法混用，即Web API的KEY无法在Android SDK中使用，反之亦然。
   - Web API：使用[API](/docs/api/)获取天气数据
   - iOS SDK：使用[iOS SDK](/docs/ios-sdk/)获取天气数据
   - Android SDK：使用[Android SDK](/docs/android-sdk/)获取天气数据
3. 如果你选择的是Web API，则可以跳过这一步，否则你需要输入[iOS Bundle ID](/docs/resource/glossary/#ios-bundle-identifier)或[Android Package Name](/docs/resource/glossary/#android-package-name)。
4. 填写KEY的名称，最多20个字符。你可以稍后对名称进行修改。
5. 点击“创建”按钮。

## 编辑项目和KEY {#edit-project-and-key}

你可以对项目和KEY的名称进行编辑，编辑名称不会影响你的开发服务，实时生效。

你也可以对iOS KEY的Bundle ID或Android KEY的Package Name进行编辑，可能需要一些时间才可生效，最长4小时，生效后原来绑定的Bundle ID或Package Name将无法再获取到数据。

## 删除项目 {#delete-project}

> **警告：**删除动作不可撤销，删除成功后，该项目及项目中的所有数据KEY都将被删除且无法恢复，你无法再通过这个项目中的KEY获取数据。
{:.bqdanger}

1. 选择你希望删除的项目卡片，在右侧点击”编辑“按钮。
2. 点击“删除”按钮。
3. 在打开的确认窗口中再次确认是否删除，如果不希望删除，点击“取消”按钮，如果确定删除，请输入项目名称并点击“确认删除”按钮。

## 删除KEY {#delete-key}

> **警告：**删除动作不可撤销，删除成功后，你无法再通过这个KEY获取数据。
{:.bqdanger}

1. 选择你希望删除的KEY，在右侧点击”编辑“按钮。
2. 点击“删除”按钮。
3. 在打开的确认窗口中再次确认是否删除，如果不希望删除，点击“取消”按钮，如果确定删除，请输入KEY的名称并点击“确认删除”按钮。

## 限制 {#restriction}

- 项目
  - 每个帐号，最多可以创建10个项目。
  - 项目所绑定的订阅方案不可更改，但是可以删除项目，删除后同时删除了订阅方案。
- KEY
  - 每个项目，最多可以创建20个数据KEY。
  - KEY所适用的开发平台不可更改，即无法将Web API的KEY变更为Android SDK的KEY。

