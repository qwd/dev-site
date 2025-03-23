---
title: Security Guidelines
tag: [bp, protact]
redirect_from: /en/docs/best-practices/protect-data-key/
ref: bp-protact
---

Credentials (API KEY and Private KEY) is an important and sensitive information to get QWeather data, you have the responsibility to keep it properly and avoid the loss caused by leaking KEY, here are a few ways to protect KEY.

## HTTPS

Since 2014, our API has supported HTTPS encrypted access, and at the end of 2016, we closed all non-HTTPS access. Using HTTPS can help stop sensitive information in requests being disclosed, so please don't skip the HTTPS protection.

## Authentication with JWT

Use [JWT](/en/docs/authentication/jwt/) for authentication, so that even if someone else crawls your request data, it will be hard to get more valuable content.

## API restrictions

Enable API restrictions for your credentials so that only APIs added to the list are allowed to be accessed. Credentials can access any API by default.

To set one or more API restrictions, go to [Console - Project](https://console.qweather.com/project), select the needed project and click on the credentials you want to set.

## App restrictions

It is recommended that you always set app restrictions for credentials to increase the security level. The app restriction is a whitelist and only applications that add to the restricted list can use the credentials. 

Supported app restrictions include:

- Websites
- IP addresses
- iOS apps
- Andorid apps

To set an app restriction, go to [Console - Project](https://console.qweather.com/project), select the needed project and click on the credentials you want to set.

> **Hint:** Only one app restriction can be set per credential.

### Websites

Up to 10 websites can be added to use the credentials. If left blank, all referrer URLs are allowed to access data.

- **DO NOT** enter the protocol, e.g. `https://` or `http://`, just `yourdomain.com`
- Support root domains: `yourdoamin.com`, please note that the root domain does not include `www.yourdomain.com`
- Supprot subdomain: `sub.yourdomain.com` or `www.yourdomain.com`
- Support subdomain with a wildcard asterisk(*): `*.yourdomain.com`. Please note that the subdomain wildcard cannot be used in combination with other characters and can only be used at the beginning. For example:
  - ✅ `*.yourdomain.com`
  - ✅ `*.abc.yourdomain.com`
  - ❌ `*abc.yourdomain.com`
  - ❌ `abc.*.yourdomain.com`
- Ports, paths and parameters are **NOT Supported**: 
  - ❌`www.yourdomain.com:8080` 
  - ❌`www.yourdomain.com/path/`
  - ❌`www.yourdomain.com?params`

### IPs

Up to 10 IP addresses can be added to use the credentials. If left blank, all IP addresses are allowed to access the data.

- Support IPv4: `192.168.0.1`
- Support IPv6: `2001:db8::1`
- Support CIDR for subnet：`192.168.0.0/12` or `2001:db8::/64`

### iOS Apps

Specify up to 10 iOS apps that can use the credentials, enter the Bundle ID for each app. If left blank, no restriction is placed.

No additional settings are required for using QWeather iOS SDK, if using a third-party SDK or API, please add the following parameters to the request header:

```
X-QW-iOS-Bundle-Id: your-bundle-id
```

### Android Apps

Specify up to 10 Android apps that can use the credentials, enter the package name and SHA-1 certificate fingerprint([how to obtain](https://developers.google.com/android/guides/client-auth#using_keytool_on_the_certificate)) for each app. If left blank, no restriction is placed.

No additional settings are required for using QWeather Android SDK, if using a third-party SDK or API, please add the following parameters to the request header:

```
X-Android-Package-Name: your-package-name
X-Android-Cert: your-certificate-fingerprint
```

## Using KMS to store credentials

Most cloud infrastructure providers support Key Management Service (KMS), which you can use to securely store and read API KEYs or Private KEYs to avoid leaking the KEYs during program coding.

## Create multiple credentials

Developers should create multiple credentials for each application or environment. For example, if you want to make a app about travel, you can create multiple KEYs for iOS, Android and test environment.

## Change credentials

If you think your credential has been compromised or suspect a compromise, you can create a new credential, then upgrade your program, test and make sure the programs are all running on the new credential, and finally delete the old one.

## Delete unused keys

If you have KEYs that are no longer in use, please delete them promptly to avoid unexpected use in your code. You can check the statistics of these KEYs, if there is no request volume for a long time, it is generally safe to delete them.

## Using authentication server

When using [JWT](/en/docs/authentication/jwt/) for authentication in front-end or client-side applications, we recommend that you store the Private KEY in a secure authentication server, which will issue a Token to your application and then request data from QWeather by your application.

**Always keep the connection between the application and the authentication server is secure.**

## Using proxy server

For front-end or client-side applications, you can set up a proxy server where the API KEY or Private KEY is stored and your application sends requests to us through the proxy server.

**Always keep the connection between the application and the proxy server is secure.**

## Encrypt KEY

If storing KEY in the front-end is unavoidable, you can obfuscate or encrypt the code and change the KEY occasionally, to make it more difficult for others to access your KEY.

## Do not share with others

It is likely that you will share your code with others during development, so keep your credentials in environment variables or separate files to avoid giving away your credentials when sharing code.

If your code will be distributed in a public source code management system (e.g. Github), make sure that the file where the credentials is saved is included in a `.gitignore` or other similarly configuration file, in other words, keep the credentials out of the source code management system.