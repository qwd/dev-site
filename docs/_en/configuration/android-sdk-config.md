---
title: Android SDK Config
tag: [config, android]
ref: config-android
---

This document will introduce how to configure the Android SDK in the QWeather Develop Service.

> **Privacy Disclaimer:** QWeather Android SDK **DOES NOT require any special permissions such as phone, location, device unique identifiers, etc.** We does not and cannot collect private data from this SDK. 

## Download 

|Version|Update|MD5| 
|---|---|---|----------------------------------------------|
|{{ site.data.v.android.version }} [Download]({{ site.data.v.android.dllink }})|{{ site.data.v.android.date }} [Release note](https://blog.qweather.com/release/sdk/)|`{{ site.data.v.android.md5 }}`|

## OS requirement

Android 5.0+, minSDK 21

## Create Project and Credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [Authentication](/en/docs/authentication/).

## Project configuration

1. Unzip the file, put the jar in the folder into your project, and quote
2. Configure **Android Manifest** to add permissions

**Permission list**

| Permission   | Code                                    |
| ------------------------ | --------------------------------------- |
| Allow network connection | android.permission.INTERNET             |

**Reference Library**

```
    implementation libs.gson
    implementation libs.okhttp
```

**Confusion**

Please add the following code to your obfuscated file **proguard-rules.pro**

Please note the version you quote

```java
// exclude okhttp
 -dontwarn com.squareup.**
 -dontwarn okio.**
 -keep public class org.codehaus.* {*;}
 -keep public class java.nio.* {*;}

// Exclude QWeather
 -dontwarn com.qweather.sdk.**
 -keep class com.qweather.sdk.** {*;}
```
 
## Data Access configuration

**Log function**

SDK no longer provides log function, error information can be provided by Throwable object in callback function OnError

**Initialization**

When using the SDK, you need to initialize the account in advance (you can execute it once globally)

```java
QWeather.getInstance(MainActivity.this, "{YOUR_HOST}")
        .setToken("{YOUR_JWT_TOKEN}")
```

**Data access example**

Call different methods according to your needs. The parameters in the interface callback method are the Classes returned by the interface

```java
WeatherParameter parameter = new WeatherParameter("101120501")
                .lang(Lang.ZH_HANS)
                .unit(Unit.METRIC);

QWeather.instance.weatherNow(parameter, new Callback<WeatherNowResponse>() {
    @Override
    public void onSuccess(WeatherNowResponse response) {
        Log.i(TAG, response.toString());
    }

    @Override
    public void onFailure(ErrorResponse errorResponse) {
        Log.i(TAG,errorResponse.toString());
    }

    @Override
    public void onException(Throwable e) {
        e.printStackTrace();
    }
});
```
