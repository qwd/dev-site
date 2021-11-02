---
title: Configuration
tag: android-sdk
version: v4
description: The configuration instructions for the QWeather Android SDK, use the free QWeather SDK to quickly integrate the weather data.
ref: 1-sdk-android-config
---

## Download 

|Version|Update|MD5|Download|
|---|---|---|---|
|{{ site.data.v.android-sdk.version }}|{{ site.data.v.android-sdk.date }}|{{ site.data.v.android-sdk.md5 }}|[Download]({{ site.data.v.android-sdk.dllink }})|

## OS requirement

Android 4.4+

## Project configuration

1. Unzip the file, put the jar in the folder into your project, and quote
2. Configure **Android Manifest** to add permissions

**Permission list**

| Permission   | Code                                    |
| ------------------------ | --------------------------------------- |
| Allow network connection | android.permission.INTERNET             |
| Access GPS location      | android.permission.ACCESS_FINE_LOCATION |
| Access device status     | android.permission.READ_PHONE_STATE     |
| Access WIFI status       | android.permission.ACCESS_WIFI_STATE    |

**Reference Library**

```
compile'com.squareup.okhttp3:okhttp:3.12.12' (3.12.12+)
compile'com.google.code.gson:gson:2.6.2' (2.6.2+)
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
 
## Data Access Code

**Log function**

SDK no longer provides log function, error information can be provided by Throwable object in callback function OnError

**Initialization**

When using the SDK, you need to initialize the account in advance (you can execute it once globally)

```java
HeConfig.init("PublicId", "PrivateKey");
```

**Select API service version**

The SDK accesses the commercial version service by default, and users of the development version can adjust it by the following methods (execute it once globally)
 
```java
//Switch to development version service
HeConfig.switchToDevService();
//Switch to commercial service
HeConfig.switchToBizService();
```

**Data access example**

Call different methods according to your needs. The parameters in the interface callback method are the Classes returned by the interface

```java
/**
 * Real-time weather data
 * @param location location to be queried
 * @param lang (optional) set multi-language, the default is simplified Chinese
 * @param unit (optional) set unit, metric (m) or imperial (i), the default is metric unit
 * @param listener network access result callback
 */

QWeather.getWeatherNow(MainActivity.this, "CN101010100", Lang.ZH_HANS, Unit.METRIC, new QWeather.OnResultWeatherNowListener() {
    @Override
    public void onError(Throwable e) {
        Log.i(TAG, "getWeather onError: "+ e);
    }

    @Override
    public void onSuccess(WeatherNowBean weatherBean) {
        Log.i(TAG, "getWeather onSuccess: "+ new Gson().toJson(weatherBean));
        if (Code.OK.getCode().equalsIgnoreCase(weatherBean.getCode())) {
            WeatherNowBean.NowBaseBean now = weatherBean.getNow();
        } else {
            //Check the reason for the failure to return data here
            String status = weatherBean.getCode();
            Code code = Code.toEnum(status);
            Log.i(TAG, "failed code: "+ code);
        }
    }
});
```
