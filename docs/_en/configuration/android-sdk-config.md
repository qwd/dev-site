---
title: Set up Android SDK
tag: [config, android]
ref: config-android
---

This document will introduce how to configure the Android SDK for QWeather API.

**OS requirement:**

Android 8.0+, minSDK 26

## Step 1: Create project and credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [JWT authentication](/en/docs/configuration/authentication/#json-web-token).

## Step 2: Install SDK

Download the latest SDK: [QWeather Android SDK {{ site.data.v.android.version }}]({{ site.data.v.android.dllink }}) *(JAR MD5:`{{ site.data.v.android.md5 }}`)*

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
implementation libs.eddsa
implementation libs.gson
implementation libs.okhttp
```

Add the following code to the obfuscation file `proguard-rules.pro`

```java
-keep public class com.qweather.sdk.QWeather {
    public *;
}

-keep public class com.qweather.sdk.basic.**{ *; }
-keepclassmembers class com.qweather.sdk.basic** { *; }

-keep public class com.qweather.sdk.parameter.**{ *; }
-keepclassmembers class com.qweather.sdk.parameter** { *; }

-keep public class com.qweather.sdk.response.**{ *; }
-keepclassmembers class com.qweather.sdk.response** { *; }

-keep interface com.qweather.sdk.Callback{  *; }
-keep interface com.qweather.sdk.TokenGenerator{  *; }
-keep public class com.qweather.sdk.JWTGenerator {
    public *;
}
```

## Step 3: Add API Host and token

### Initialize the QWeather instance.

Replace `YOUR_HOST` with your [API Host](/docs/configuration/api-config/#api-host).

```java
QWeather.getInstance(MainActivity.this, "{YOUR_HOST}") // Initialize api host
        .setLogEnable(true);   // Enable debug logging (set false for production environments)
```
 
### Set up the token generator

> **Hint:** Android SDK only support [JWT](/docs/configuration/authentication/#json-web-token) for authentication.

For security purposes, please ensure proper management of sensitive information such as private key, project ID, and credential ID, avoiding storage or transmission in plaintext.

```java
// Set up the token generator using the JWTGenerator provided by the SDK, which implements the TokenGenerator interface.
JWTGenerator jwt = new JWTGenerator("{YOUR_PRIVATE_KEY}", // Private key
                           "{YOUR_PROJECT_ID}", // Project ID
                           "{YOUR_KID}"); // Credential ID
instance.setTokenGenerator(jwt);

//NOTE: Developers can customize their token generators by implementing the TokenGenerator interface. 
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
