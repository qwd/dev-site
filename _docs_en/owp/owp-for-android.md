---
title: OWP for Android
tag: owp
version: v1
description: QWeather Free Open Source Weather APP Android version development document, Weather Plus Open Source Weather APP is a free open source weather APP launched by QWeather, which allows you to quickly develop your own weather APP application, completely free. Weather APP Android Development Document
toc: true
ref: 2-owp-android
---
## Source code

[Github](https://github.com/qwd/OpenWeatherPlus-Android)

## 3rd libraries

```
implementation'com.squareup.okhttp3:okhttp:3.10.0'//Network framework
implementation'com.google.code.gson:gson:2.8.0'//json analysis
implementation'joda-time:joda-time:2.10'//time frame
implementation files('libs/AMap_Location_V4.0.1_20180426.jar')//High German positioning
implementation files('libs/QWeather_Public_Android_V3.3.jar')//QWeather SDK
```

## Project Structure

| Folder |  Description |
| ------- | ---------------------------------- |
| res | Store resource files |
| bean | Store entity classes |
| utils | Store some tools |
| view | Store activity, fragment, custom view |
| service | Storage service |
| adapter | The adapter that stores the view |

## How to build

1. Download the project on [github](https://github.com/qwd/OpenWeatherPlus-Android)
2. Open project, sync gradle

### Configure initialization key

This project uses AutoNavi to locate and QWeather sdk. The user needs to register the key and replace it, otherwise it will not run successfully. The corresponding initialization key location is as follows

Configure AutoNavi’s key in AndroidManifest. For details, please refer to AutoNavi development documentation. [LBS AutoNavi](https://developer.amap.com/api/android-location-sdk/locationsummary)

```java
<meta-data
android:name="com.amap.api.v2.apikey"
android:value="High German key" />
```

Initialize QWeather's key and userName in the onCreate method of the custom application

```java
HeConfig.init("your userName", "your key");
```

After initializing the key, select the corresponding domain name. The default is the domain name of the paid user. If you are a free user, please call the following code

```java
//Switch to a free domain name (paid users do not need to switch)
HeConfig.switchToFreeServerNode();
```

## Customize
If you don’t change it, use the default picture and logo of QWeather

### Background image

- Replace the picture in the mipmap-xxhdpi folder in res
- Picture naming rules back_100d back_100n
- 100 is the QWeather code
- d corresponds to daytime, n corresponds to night

### Weather icon

- Replace the image added in the res.mipmap-xhdpi file
- Picture naming rules icon_100d icon_100n
- 100 is QWeather code
- d corresponds to daytime, n corresponds to night

### APP logo

- Replace the ic_launcher picture in the res.mipmap-xhdip folder

### APP name

- Replace the app_name field in the res.values.string folder
- To change the English name, replace the app_name field in the res.values-en.string folder