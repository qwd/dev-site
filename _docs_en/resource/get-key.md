---
title: Get KEY
tag: resource
description: To use the QWeather Data API or SDK, you need create an Application first and create multiple keys for different usage scenarios.
redirect_from: /en/docs/start/get-api-key/
ref: 1-res-get-api-key
---

To use QWeather data service, you need to create an [Application](/en/docs/start/glossary/#Application) first and create multiple [KEY](/en/docs/start/glossary/#key) for different usage scenarios.

## Create an Application

Login to [Console](https://console.qweather.com/), select **Application** in the left navigation menu

![Create Application](/assets/images/content/get-key-1.png)

## Set Application type

Application types include: Dev, Pro and Performance version, see [difference between them](/en/help/general#biz-vs-free).

We are here to create a Pro version as an example.

![Set Application type](/assets/images/content/get-key-2.png)

## Set Application name

Fill in your Application name, such as "Company Travel APP", "Test Project", "My Blog", etc. The Application name can only use Chinese, English, numbers, underline and dashes, with a maximum of 20 characters.

## Create data KEY

Add a data KEY after creating a Application. First, select the type of data KEY, which is divided into three types: Web API, iOS SDK and Android SDK. Among them, Web API is used to obtain data directly through API, and SDK is suitable for obtaining data through SDK.

Add a data KEY after creating a Application. Select the type of data KEY:

- Web API: use [API](/docs/api/) to get the weather data
- iOS SDK: use [iOS SDK](/docs/ios-sdk/) to get the weather data
- Android SDK: use [Android SDK](/docs/android-sdk/) to get weather data

> Please note that different types of KEYs cannot be shared, i.e. the KEY of the Web API cannot be used to obtain data via the SDK and vice versa.

![Select the type of KEY](/assets/images/content/get-key-3.png)

## KEY setting

Fill in your KEY name, can be "Test KEY", "Production KEY", "xxx project", etc. The KEY name can only use Chinese, English, numbers, underline and dashes, up to 15 characters.

If your KEY type is iOS or Android SDK, you need to bind the your APP.

* Android SDK: Need to bind the `PackageName` of your Android APP. If you have multiple APPs, you can create multiple KEYs. After binding, the KEY can only be used for this APP.
* iOS SDK: You need to bind the `bundle id` of iOS APP. If you have multiple apps, you can create multiple KEYs. After binding, the KEY can only be used for this app.

Learn how to obtain [iOS Bundle ID](/en/docs/start/glossary/#ios-bundle-identifier) ​​or [Android Package Name](/en/docs/start/glossary/#android-package-name)

## Done

Now, you have successfully created your Application and KEY, copy your KEY and try it!

> Please note that the Pro Application requires a [top-up](/en/help/buy/#top-up) or purchase a [Package](/en/help/buy/#package) before the data can be accessed.

![Create complete](/assets/images/content/get-key-4.png)

## Quota

According to different [Account Type](/en/help/account/#account-type), different numbers of Applications or KEYs can be created.

| &nbsp;           | Registered User | Developer      |
| ---------------- | --------------- | -------------- |
| Dev Applications | 1               | 1              |
| All Applications | 10              | 10             |
| KEY              | 3/Application   | 10/Application |