---
title: JSON Web Token
tag: [auth, jwt]
ref: auth-jwt
---

QWeather supports and recommends using JWT (JSON Web Token) for authentication. Whether on the front-end or back-end, JWT can significantly protect your keys and effectively prevent others from forging your identity for API requests.

## Prerequisites

QWeather uses the Ed25519 algorithm for signing, Ed25519 is an implementation of EdDSA (Edwards-curve Digital Signature Algorithm) using Curve25519 elliptic curves and SHA-512. You need to generate the private and public keys for Ed25519 in advance, where the private key is used for signing and kept by you, and the public key is used for us to verify the signature. This means that no one (including us) can forge your signature except you.

#### Generate Ed25519 key

Here is an introduction to creating an Ed25519 key using OpenSSL.

> **Hint:** We recommend using OpenSSL 3.0.1+ to generate Ed25519 key and verify signatures. The latest versions of most Linux distributions and macOS have OpenSSl 3.0+ built in. For Windows, we recommend using winget to install OpenSSL.

> **Hint:** You can also generate Ed25519 private and public keys through online tools, commonly used programming languages, or third-party libraries.

Open a terminal and paste the following text to generate the Ed25519 key.

```bash
openssl genpkey -algorithm ED25519 -out ed25519-private.pem && openssl pkey -pubout -in ed25519-private.pem > ed25519-public.pem
```

This will create two files in the current directory:

- ed25519-private.pem, the private key, which is used for signatures for JWT authentication. You should keep the private key safe and secure.
- ed25519-public.pem, the public key, which is used for signature verification and needs to be uploaded to the QWeather console

#### Upload public key

Once your Ed25519 keys is generated, you need to add the public key to the QWeather console for JWT authentication.

Login [Console](https://console.qweather.com):

1. Click **Project Management** in the left navigation.
2. Choose the project where you want to add the public key.
3. Click the **Create Credential** button in the Credential Settings section.
4. Choose the authentication method **JSON Web Token**.
5. Enter the credential name, such as “Travel App for test”.
6. Use any text editor to open the public key (like ed25519-public.pem which was generated in the previous step), and copy the entire contents of it. The content looks like:
   ```
   -----BEGIN PUBLIC KEY-----
   MCowBQYDK2VwAyEAARbeZ5AhklFG4gg1Gx5g5bWxMMdsUd6b2MC4wV0/M9Q=
   -----END PUBLIC KEY-----
   ```
7. Paste the public key in the textarea.
8. Click **Create** button

You will see the **Create Credential Success** page and it shows the creation date, credential ID and SHA-256. For security reasons, you cannot view this public key in the Console. However, you can use the SHA-256 value of the public key to compare it with the local SHA-256 in order to confirm that the correct public key was used.

## Generate JWT

QWeather supports the [JWT protocol and specification](https://datatracker.ietf.org/doc/html/rfc7519), in most cases you don't need to write your own code for generating JWT, almost all programming languages have third-party open source libraries for JWT generation, you can find these libraries in [JWT.io]( https://jwt.io/libraries).

A complete JWT consists of three parts: Header, Payload and Signature. we will introduce the mandatory parameters in each part:

#### Header

Header includes the following parameters and saved in JSON object format:

- `alg` The signature algorithm, set the value to **EdDSA**.
- `kid` Your Credential ID, you can copy it in [Console - Project Management](https://console.qweather.com/#/apps).

For example:

```json
{
    "alg": "EdDSA",
    "kid": "ABCDE12345"
}
```

#### Payload

Payload includes the following parameters and saved in JSON object format:

- `sub` Subject, this value is your Project ID of the Credential.
- `iat` Issue time, this value indicates the time when the JWT was generated and effective, in UNIX timestamp format.
- `exp` expiration time, this value indicates when the JWT expires, in UNIX timestamp format. A longer expiration time reduces overhead, but a shorter time improves security. The maximum expiration time is 24 hours(86400 seconds).

For example:

```json
{
    "sub": "ABC2345DEF",
    "iat": 1703912400,
    "exp": 1703912940
}
```

> **Warning:** Only add the specified parameters above in the Header and Payload, do not add any other sensitive information and irrelevant parameters.
{:.bqdanger}

#### Signature

Encode the Header and Payload using Base64URL and separate them by a dot, then sign them with your private key using the Ed25519 algorithm. Once you have this signature, encode signature with Base64URL as well.

#### Putting all together

At last, put the Base64URL-encoded Header, Payload, and Signature together and separate them with dots, like `header.payload.signature`, that's the Token we need, for example:

```
eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA
```

## Authorize Request

Add the Token as a parameter to the `Authorization: Bearer` request header, for example:

```bash
curl -i -H 'Authorization: Bearer eyJhbGciOiAiRWREU0EiLCJraWQiOiAiQUJDRDEyMzQifQ.eyJpc3MiOiJBQkNEMTIzNCIsImlhdCI6MTcwMzkxMjQwMCwiZXhwIjoxNzAzOTEyOTQwfQ.MEQCIFGLmpmAEwuhB74mR04JWg_odEau6KYHYLRXs8Bp_miIAiBMU5O13vnv9ieEBSK71v4UULMI4K5T9El6bCxBkW4BdA' \
--compressed 'https://api.qweather.com/v7/weather/now?location=101010100'
```

## JWT Demo {#jwt-demo}

Please replace `YOUR_KEY_ID`, `YOUR_PROJECT_ID`, `YOUR_PRIVATE_KEY` or `PATH_OF_YOUR_PRIVATE_KEY` in the code with your values.

> **Hint:** These demos are for reference and test only, we can't guarantee that they will work in any environment.

#### Java 8+

Required dependency: [ed25519-java](https://github.com/str4d/ed25519-java)

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

Required dependency: `npm install jose`

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

You must run `pip3 install PyJWT` to install `PyJWT`.

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
