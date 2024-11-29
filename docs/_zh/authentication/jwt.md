---
title: JSON Web Token
tag: [auth, jwt]
ref: auth-jwt
---

和风天气开发服务支持并推荐使用JWT（JSON Web Token）进行身份认证。无论在前端还是后端，JWT都能够显著的提高API安全等级，有效防止其他人伪造你的身份进行API请求。

## 前提 {#prerequisites}

和风天气使用Ed25519算法进行签名，Ed25519是使用Curve25519椭圆曲线和SHA-512的EdDSA（Edwards-curve Digital Signature Algorithm）的一种实现。你需要提前生成Ed25519的私钥和公钥，其中私钥用于签名且由你自己保管，公钥用于我们对签名进行验证。这意味着除了你之外，任何人（包括我们）都无法伪造你的签名。

#### 生成Ed25519密钥 {#generate-ed25519-key}

这里介绍一种使用OpenSSL创建Ed25519密钥的方法。

> **提示：**我们建议使用OpenSSL 3.0.1及以上版本创建Ed25519和验证签名。在大多数Linux和macOS的最新版本中已经集成OpenSSl 3.0+，对于Windows，我们推荐使用winget安装OpenSSL。

> **提示：**你也可以通过在线工具、熟悉的开发语言或第三方库生成Ed25519私钥和公钥。

打开终端，粘贴下列文本生成公钥和私钥:

```bash
openssl genpkey -algorithm ED25519 -out ed25519-private.pem \
&& openssl pkey -pubout -in ed25519-private.pem > ed25519-public.pem
```

这将在当前目录创建两个文件：

- ed25519-private.pem，私钥，用于JWT认证的签名。你应该妥善安全的保管私钥。
- ed25519-public.pem，公钥，用于签名的验证，需要上传到和风天气控制台

#### 上传公钥 {#upload-public-key}

当你完成密钥对的生成后，你需要将其中的公钥添加到和风天气控制台，用于JWT身份验证。

1. 点击左侧导航中的**项目管理**
2. 点击需要添加公钥的项目名称
3. 在凭据设置区域点击**创建凭据**按钮
4. 身份认证方式选择**JSON Web Token**
5. 输入凭据名称，比如“旅游APP测试”
6. 使用任意文本编辑器打开公钥文件（比如刚才创建的ed25519-public.pem），复制其中的全部内容，这些内容看起来像是：
   ```
   -----BEGIN PUBLIC KEY-----
   MCowBQYDK2VwAyEAARbeZ5AhklFG4gg1Gx5g5bWxMMdsUd6b2MC4wV0/M9Q=
   -----END PUBLIC KEY-----
   ```
7. 在公钥文本框中粘贴公钥内容
8. 点击创建按钮

你将在最后看到创建凭据成功的页面，并且显示了这个凭据的创建日期、ID和SHA256值。出于安全考虑，你无法在控制台查看这个公钥。但你可以使用公钥的SHA256值与本地SHA256进行对比，以便确认使用的是正确的公钥。

## 生成JWT {#generate-jwt}

和风天气支持标准的[JWT协议和规范](https://datatracker.ietf.org/doc/html/rfc7519)，大部分情况下你不需要自己编写生成JWT的代码，几乎所有开发语言都有开源库用于JWT的生成，你可以在[JWT.io](https://jwt.io/libraries)查看这些库。

一个完整的JWT包括三个部分：**Header**，**Payload**和**Signature**。我们将介绍每个部分必须传递的参数：

#### Header

Header包括下列参数并保存为JSON对象格式：

- `alg` 签名算法，请设置为**EdDSA**
- `kid` 凭据ID，你可以在[控制台-项目管理](https://console.qweather.com/#/apps)中查看

例如：

```json
{
    "alg": "EdDSA",
    "kid": "ABCDE12345"
}
```

#### Payload

Payload包括下列参数并保存为JSON对象格式：

- `sub` 签发主体，这个值是凭据的项目ID，项目ID在[控制台-项目管理](https://console.qweather.com/#/apps)中查看
- `iat` 签发时间，这个值表示JWT签发生效的时间，UNIX时间戳格式。为了防止时间误差，建议你将`iat`设置为当前时间之前的30秒，并确保你的服务器或设备的时间和日期是正确的。
- `exp` 过期时间，这个值表示JWT在何时过期，UNIX时间戳格式。较长的过期时间可以减轻负载，但是较短的时间可以提高安全性。你应该根据使用场景设置过期时间，例如在服务端，可能适合较长的时间，在前端则适合较短的时间。目前允许的有效期最长为24小时（86400秒）。

例如：

```json
{
    "sub": "ABCDE23456",
    "iat": 1703912400,
    "exp": 1703912940
}
```

> **注意：**在Header和Payload中的信息是明文传输，所以仅添加上述指定的参数，不要添加任何其他敏感信息和无关参数。
{:.bqdanger}

#### Signature

将Header和Payload分别进行Base64URL编码并用英文句号拼接在一起，使用你的私钥对其进行Ed25519算法的签名，之后对签名结果同样进行Base64URL编码。

> **注意：**必须使用**Base64URL**编码，而不是Base64，两者有些许差别。

#### 拼接在一起

最后，请将Base64URL编码后的Header、Payload和Signature使用英文句号拼接在一起，组合为最终的Token，即 `header.payload.signature`，最终看起来像是：

```
eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA
```

## 发送JWT进行身份验证 {#authorize-request}

将上述创建的完整Token作为参数添加到`Authorization: Bearer`请求标头，例如：

```bash
curl --compressed \
-H 'Authorization: Bearer eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA' \
'https://api.qweather.com/v7/weather/now?location=101010100'
```

## 生成JWT示例 {#jwt-demo}

请将代码中的`YOUR_KEY_ID`，`YOUR_PROJECT_ID`，`YOUR_PRIVATE_KEY`或`PATH_OF_YOUR_PRIVATE_KEY`替换为你的值。

> **提示：**示例仅供参考和测试，我们不保证在任何环境下可以正常运行，请根据你的开发语言和环境进行适配。

#### Java 8+

需要依赖库 [ed25519-java](https://github.com/str4d/ed25519-java)

```
<dependency>
    <groupId>net.i2p.crypto</groupId>
    <artifactId>eddsa</artifactId>
    <version>0.3.0</version>
</dependency>
```

```java
// Private key
byte[] privateKeyBytes = Base64.getDecoder().decode("YOUR_PRIVATE_KEY".trim().replace("-----BEGIN PRIVATE KEY-----", "").replace("-----END PRIVATE KEY-----", ""));
PKCS8EncodedKeySpec encoded = new PKCS8EncodedKeySpec(privateKeyBytes);
PrivateKey privateKey = new EdDSAPrivateKey(encoded);

// Header
String headerJson = "{\"alg\": \"EdDSA\", \"kid\": \"YOUR_KEY_ID\"}";

// Payload
long iat = ZonedDateTime.now(ZoneOffset.UTC).toEpochSecond() - 30;
long exp = iat + 900;
String payloadJson = "{\"sub\": \"YOUR_PROJECT_ID\", \"iat\": " + iat + ", \"exp\": " + exp + "}";

// Base64url header+payload
String headerEncoded = Base64.getUrlEncoder().encodeToString(headerJson.getBytes(StandardCharsets.UTF_8));
String payloadEncoded = Base64.getUrlEncoder().encodeToString(payloadJson.getBytes(StandardCharsets.UTF_8));
String data = headerEncoded + "." + payloadEncoded;

EdDSAParameterSpec spec = EdDSANamedCurveTable.getByName(EdDSANamedCurveTable.ED_25519);

// Sign
final Signature s = new EdDSAEngine(MessageDigest.getInstance(spec.getHashAlgorithm()));
s.initSign(privateKey);
s.update(data.getBytes(StandardCharsets.UTF_8));
byte[] signature = s.sign();

String signatureString = Base64.getUrlEncoder().encodeToString(signature);

System.out.println("Signature: \n" + signatureString);

// Print Token
String jwt = data + "." + signatureString;
System.out.println("JWT: \n" + jwt);
```

#### Node.js 16+

需安装Jose依赖，`npm install jose`

```js
import {SignJWT, importPKCS8} from "jose";

const YourPrivateKey = 'YOUR_PRIVATE_KEY'

importPKCS8(YourPrivateKey, 'EdDSA').then((privateKey) => {
  const customHeader = {
    alg: 'EdDSA',
    kid: 'YOUR_KEY_ID'
  }
  const iat = Math.floor(Date.now() / 1000) - 30;
  const exp = iat + 900;
  const customPayload = {
    sub: 'YOUR_PROJECT_ID',
    iat: iat,
    exp: exp
  }
  new SignJWT(customPayload)
    .setProtectedHeader(customHeader)
    .sign(privateKey)
    .then(token => console.log('JWT: ' + token))
}).catch((error) => console.error(error))
```

#### Python3

需要运行 `pip3 install PyJWT` 才能安装 `PyJWT` 包。

```python
#!/usr/bin/env python3
import sys
import time
import jwt

# Open PEM
private_key = """YOUR_PRIVATE_KEY"""

payload = {
    'iat': int(time.time()) - 30,
    'exp': int(time.time()) + 900,
    'sub': 'YOUR_PROJECT_ID'
}
headers = {
    'kid': 'YOUR_KEY_ID'
}

# Generate JWT
encoded_jwt = jwt.encode(payload, private_key, algorithm='EdDSA', headers = headers)

print(f"JWT:  {encoded_jwt}")
```

#### Shell

```bash
#!/bin/bash

# Set `kid`, `sub` and `private_key_path`
kid=YOUR_KEY_ID
sub=YOUR_PROJECT_ID
private_key_path=PATH_OF_YOUR_PRIVATE_KEY

# Set `iat` and `exp`
# `iat` defaults to the current time -30 seconds
# `exp` defaults to `iat` +15 minutes
iat=$(( $(date +%s) - 30 ))
exp=$((iat + 900))

# base64url encoded header and payload
header_base64=$(printf '{"alg":"EdDSA","kid":"%s"}' "$kid" | openssl base64 -e | tr -d '=' | tr '/+' '_-' | tr -d '\n')
payload_base64=$(printf '{"sub":"%s","iat":%d,"exp":%d}' "$sub" "$iat" "$exp" | openssl base64 -e | tr -d '=' | tr '/+' '_-' | tr -d '\n')
header_payload="${header_base64}.${payload_base64}"

# Save $header_payload as a temporary file for Ed25519 signature
tmp_file=$(mktemp)
echo -n "$header_payload" > "$tmp_file"

# Sign with Ed25519
signature=$(openssl pkeyutl -sign -inkey "$private_key_path" -rawin -in "$tmp_file" | openssl base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')

# Delete temporary file
rm -f "$tmp_file"

# Generate JWT
jwt="${header_payload}.${signature}"

# Print Token
echo "$jwt"
```
