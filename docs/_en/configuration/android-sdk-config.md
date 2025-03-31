---
title: Set up Android SDK
tag: [config, android]
ref: config-android
---

This document will introduce how to configure the Android SDK for QWeather API.

**OS requirement:**

Android 8.0+, minSDK 21

## Step 1: Create project and credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [JWT authentication](/en/docs/configuration/authentication/#json-web-token).

## Step 2: Install SDK

Download the latest SDK: [QWeather Android SDK {{ site.data.v.android.version }}]({{ site.data.v.android.dllink }}) *(MD5:`{{ site.data.v.android.md5 }}`)*

Copy the JAR file to the `app/libs/`

```bash
YOUR-PROJECT/
├── app/
│   ├── libs/
│   │   └── QWeather_Public_Android_V{{ site.data.v.android.version }}.jar
│   ├── src/
│   └── build.gradle
```

Update the Gradle configuration `app/build.gradle`

```bash
dependencies {
    // add QWeather jar
    implementation files('libs/QWeather_Public_Android_V{{ site.data.v.android.version }}.jar')
    
    // or add all jar
    implementation fileTree(dir: 'libs', include: ['*.jar'])
}
```

Reference library

```
implementation libs.gson
implementation libs.okhttp
```

Add the following code to the obfuscation file `proguard-rules.pro`

```java
//  exclude okhttp
 -dontwarn com.squareup.**
 -dontwarn okio.**
 -keep public class org.codehaus.* { *; }
 -keep public class java.nio.* { *; }

//  exclude QWeather
 -dontwarn com.qweather.sdk.**
 -keep class com.qweather.sdk.** { *;}
```

## Step 3: Add API Host and token

> **Hint:** iOS SDK only support [JWT](/docs/configuration/authentication/#json-web-token) for authentication.

```java
QWeather.getInstance(MainActivity.this, "{YOUR_HOST}") // Initialize api host
        .setTokenGenerator(new TokenGenerator() {
                        @Override
                        public String generator() {
                             // Update jwt token should be implemented here in production environments
                            return "{YOUR_TOKEN}"; 
                        }
                    });
```

## Sample code

Get real-time weather for Beijing.

```java
WeatherParameter parameter = new WeatherParameter("101010100")
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
