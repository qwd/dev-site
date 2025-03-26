---
title: 项目和凭据
tag: [config, project]
ref: config-project
---

开始请求API之前，你需要先创建项目和凭据。

## 项目 {#project}

**项目**是承载和风天气数据服务的容器，也可以理解为是你需要开发的一个产品，例如“旅游APP”或者“毕业设计”。项目不仅可以区分你的产品，还可以用于数据统计或费用分摊。

### 创建项目 {#create-project}

你可以最多创建10个项目。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 点击右上角“创建项目”按钮
3. 填写项目名称，项目名称最多20个字符。你可以稍后对名称进行修改。
4. 点击“保存”按钮。

### 删除项目 {#delete-project}

> **警告：**删除动作不可撤销，删除成功后，该项目及项目中的所有凭据都将被删除且无法恢复，你无法再使用这个项目中的凭据获取数据。
{:.bqdanger}

1. 在项目列表中点击你希望删除的项目
2. 在页面最下方点击“删除”按钮
3. 输入项目的名称，点击“确认删除”
4. 你将收到一封身份验证邮件，输入验证码
5. 完成删除

## 凭据 {#credential}

**凭据**用于API的身份认证，是你的核心敏感数据。关于安全的请求API，请参考[安全指南](/docs/best-practices/security-guidelines/)。关于身份认证的方式，请参考[身份认证](/docs/authentication/)。

根据身份认证方式的不同，凭据分为JWT凭据和API KEY凭据。每个项目最多创建20个凭据。

### 添加JWT凭据 {#add-credential-for-jwt}

添加JWT凭据，你需要先创建Ed25519公钥和私钥，参考[身份认证-生成Ed25512](/docs/configuration/authentication/#prerequisites)

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 在项目列表中点击你需要添加凭据的项目
3. 点击凭据区域右侧的“添加凭据”按钮
4. 输入凭据名称
5. 选择身份认证方式JSON Web Token
6. 填写凭据名称
7. 使用任意文本编辑器打开你的Ed25519的公钥，复制其中的全部内容，这些内容看起来像是：
   ```
   -----BEGIN PUBLIC KEY-----
   MCowBQYDK2VwAyEAARbeZ5AhklFG4gg1Gx5g5bWxMMdsUd6b2MC4wV0/M9Q=
   -----END PUBLIC KEY-----
   ```
8. 在公钥文本框中粘贴公钥内容
9. 点击“保存”按钮

你将在最后看到创建凭据成功的页面，并且显示了这个凭据的创建日期、ID和SHA256值。出于安全考虑，控制台不会再次显示这个公钥。但你可以使用公钥的SHA256值与本地SHA256进行对比，以便确认使用的是正确的公钥。

### 添加API KEY凭据 {#add-credential-for-api-key}

我们推荐使用[JWT身份认证](/docs/configuration/authentication/#json-web-token)。从2027年1月1日起，我们将逐步限制使用API KEY进行身份认证的每日请求数量。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 在项目列表中点击你需要添加凭据的项目
3. 点击凭据区域右侧的“添加凭据”按钮
4. 输入凭据名称
5. 选择身份认证方式API KEY。
6. 点击“保存”按钮

### 安全限制 {#security-restrictions}

为提高凭据安全性，我们建议为凭据添加安全限制。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 选择你希望添加安全限制的凭据
3. 滑动至应用限制区域，参考[应用限制](/docs/best-practices/security-guidelines/#app-restrictions)了解详情和规则。
4. 继续向下滑动至API限制区域，参考[API限制](/docs/best-practices/security-guidelines/#api-restrictions)了解详情和规则。

### 删除凭据 {#delete-credential}

> **警告：**删除动作不可撤销，删除成功后，你无法再使用这个凭据进行API身份认证。
{:.bqdanger}

1. 选择你希望删除的凭据
2. 在网页最下方点击“删除凭据”按钮
3. 输入凭据的名称，点击“确认删除”
4. 你将收到一封身份验证邮件，输入验证码
5. 完成删除

