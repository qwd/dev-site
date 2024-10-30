---
title: 安全指南
tag: [bp, protact]
redirect_from: /docs/best-practices/protect-data-key/
ref: bp-protact
---

凭据（包括API KEY和Token）是获取和风天气数据的重要敏感信息，你有责任妥善保管，避免泄露凭据而造成的损失，在这里介绍几种的安全保护凭据的方式。

## 使用HTTPS {#https}

从2014年开始，我们的API就支持了HTTPS加密访问，在2016年底，我们关闭了所有非HTTPS的访问。使用HTTPS可以有效的阻止请求中的敏感信息被泄露，请不要跳过HTTPS的保护。

## 使用JWT身份验证 {#authentication-with-jwt}

使用[JWT](/docs/authentication/jwt/)进行身份认证，这将有效的保护你的密钥，即使他人抓取到了你的请求信息，也几乎无法获得更多有价值的内容。

## 设置安全限制 {#security-restriction}

建议你始终为凭据设置安全限制，加强凭据的安全等级。安全限制采用白名单形式，只有加入限制列表的应用才能使用凭据请求API。

支持的安全限制包括：

- 网址限制
- IP限制
- iOS应用限制
- Andorid应用限制

如要设置安全限制，请访问[控制台-项目管理](https://console.qweather.com/#/apps)，选择需要的项目和凭据。

> **提示：**每个凭据仅限设置一种安全限制。

### 网址限制 {#websites}

最多可以添加10个网址允许使用凭据请求API。如果留空，则允许所有来源网址访问。

- **不需要**输入协议，例如`https://`或`http://`，仅输入`yourdomain.com`即可。
- 支持根域名：`yourdoamin.com`，请注意根域名不包括www.yourdomain.com
- 支持子域名：`sub.yourdomain.com` 或 `www.yourdomain.com`
- 支持子域名使用通配符：`*.yourdomain.com`，请注意子域名通配符不能与其他字符组合使用，且只能在开头使用。例如：
  - ✅ `*.yourdomain.com`
  - ✅ `*.abc.yourdomain.com`
  - ❌ `*abc.yourdomain.com`
  - ❌ `abc.*.yourdomain.com`
- **不支持**端口、路径和参数：
  - ❌`www.yourdomain.com:8080` 
  - ❌`www.yourdomain.com/path/`
  - ❌`www.yourdomain.com?params`

### IP限制 {#ips}

最多可以添加10个IP地址允许使用凭据请求API。如果留空，则允许所有IP地址访问。

- 支持IPv4: `192.168.0.1`
- 支持IPv6: `2001:db8::1`
- 支持CIDR表示子网：`192.168.0.0/12` 或 `2001:db8::/64`

### iOS应用限制 {#ios-apps}

最多可添加10个iOS应用，你需要输入每个iOS应用的Bundle ID。如果留空，则允许所有iOS应用使用当前凭据。

如果使用官方iOS SDK则无需额外设置，如果使用第三方SDK或使用API请求数据，你需要在请求头部添加如下参数：

- `X-iOS-Bundle-Id` iOS应用的Bundle ID

示例：

```bash
curl -X GET --compressed \
-H 'Authorization: Bearer your_token' \
-H 'X-iOS-Bundle-Id: com.company.appname' \
'https://api.qweather.com/path/to/data'
```

### Android应用限制 {#android-apps}

最多可添加10个Android应用，你需要输入的每个Android应用的Package name和签名证书SHA-1指纹（[如何获取](https://developers.google.cn/android/guides/client-auth?hl=zh-cn#using_keytool_on_the_certificate)）。如果留空，则允许所有Android应用使用当前凭据。

如果使用官方Android SDK则无需额外设置，如果使用第三方SDK或API，你需要在请求头部添加如下参数：

- `X-Android-Package-Name` Android应用的包名（Package name）
- `X-Android-Cert` Android应用的签名证书SHA-1指纹

示例：

```bash
curl -X GET --compressed \
-H 'Authorization: Bearer your_token' \
-H 'X-Android-Package-Name: com.company.appname' \
-H 'X-Android-Cert: 8E:57:D3:9E:E8:DE:D4:1A:E7:E8:47:41:0F:38:D5:4C:54:CA:4C:4A' \
'https://api.qweather.com/path/to/data'
```

## 使用密钥管理服务存储凭据 {#using-kms-to-store-credentials}

大部分云服务商都支持密钥管理服务(KMS, Key Management Service)，你可以使用KMS安全的存储和读取API KEY或Private KEY，以避免在程序编码中泄露KEY。

## 创建多个的凭据 {#create-multiple-credentials}

我们支持创建多个项目和凭据，因此不要把鸡蛋都放在一个篮子里，对于不同的产品或者同一产品的不同平台，应该创建不同凭据进行使用，例如你要做一个款关于旅游的项目，可以为iOS、Android、小程序和网站创建不同的凭据。

## 更改凭据 {#change-credential}

如果你认为你的凭据已经泄露或者怀疑泄露，你可以新建一个凭据，然后升级你的程序，测试并确保程序都运行在新的凭据，最后删除旧的凭据。

## 删除未使用的凭据 {#delete-unused-keys}

如果有不再使用的凭据，请及时删除，避免在程序代码中被错误的使用。你可以查看这个凭据的统计数据，如果长期没有请求量，一般情况是可以放心删除的。

## 使用身份认证服务器 {#using-authentication-server}

当前端或客户端应用使用[JWT](/docs/authentication/jwt/)进行身份认证时，我们推荐你将Private KEY存储在一台安全的认证服务器中，由认证服务器向你的应用颁发Token，然后再通过应用请求和风天气的数据。

**请始终确保应用与身份认证服务器的连接是安全的。**

## 使用代理服务器 {#using-proxy-server}

对于前端或客户端应用，你可以设置一台代理服务器，API KEY或Private KEY储存在代理服务器中，你的应用通过代理服务器向我们发送请求。

**请始终确保应用与代理服务器的连接是安全的。**

## 混淆或加密KEY {#encrypt-key}

如果不可避免的在前端或客户端应用中存储凭据，那么也可以通过混淆或加密代码的方式，再配合不定期的更换凭据，从而让他人获取这些数据更加困难。

## 不要在代码中共享 {#do-not-share-with-others}

在开发过程中，不可避免的会与其他人共享你的代码，因此将凭据存储在环境变量或独立的文件中，则可以有效的避免代码共享时泄露你的凭据。如果你的代码会发布在公共源代码管理系统时（例如Github），请确保存储凭据的文件包含在`.gitignore`或其他类似功能的配置文件中，换句话说，让凭据不要保留在源代码管理系统中。