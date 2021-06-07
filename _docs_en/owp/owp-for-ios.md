---
title: OWP for iOS
tag: owp
version: v1
description: QWeather Free Open Source Weather APP iOS version development document, Weather Plus Open Source Weather APP is a free open source weather APP launched by QWeather, which allows you to quickly develop your own weather APP application, completely free. Weather APP iOS development document.
ref: 1-owp-ios
---
## Source code

[Github](https://github.com/qwd/OpenWeatherPlus-iOS)

## Project Structure

| Folder           | Corresponding content                                        |
| ---------------- | ------------------------------------------------------------ |
| Supporting Files | Storing some resource configurations required by the project |
| Define           | Store pch files and some macro definitions and header files required by the project |
| Category         | Store some classifications required by the project           |
| Base             | Store some of the base classes needed for the project        |
| Modules          | Store Controller-Model-View                                  |
| AppDelegate      | Store AppDelegate                                            |

## How to build

1. Clone the repository

```
$ git clone https://github.com/heweather/OpenWeatherPlus-iOS.git
```

2. Install pods

```
$ cd HeFengWeather
$ pod install
```

3. Set weather data

   3.1 Open **HeFengWeather.xcworkspace** with xcode. 

   3.2 Go to the [QWeather Console](https://console.qweather.com) to apply for the key.

   3.3 Replace /Define/CommonMacros/KAMapLocationAPPKey and /Define/CommonMacros/HeWeatherSDK_USERKey to  **appkey**, **userkey**

   3.4 Set heweather SDK

   For free account

   ```
   HeConfigInstance.userType = USER_TYPE_FREE_USER
   ```

   For commercial account

   ```
   HeConfigInstance.userType = USER_TYPE_USER
   ```

4. Set location service

   4.1 Go to the [Amap](https://developer.amap.com) to apply for the appkey.

   4.2 Replace /Define/CommonMacros/KAMapLocationAPPKey to  **appkey**

## Customized

### Background image

1. The naming rules for background image files are xxx100d or xxx100n

- where xxx is the picture name prefix user can define it by himself
- Number 100 is the weather condition code
- d = day, n = night

2. The weather background is in the /weatherState/Assets.xcassets 

### Weather icon

1. The weather icon naming rules are xxx100d or xxx100n

- where xxx is the picture name prefix user can define it by himself
- Number 100 is the weather condition code
- d = day, n = night

2. The weather icon is in the /weatherState/Assets.xcassets 

### APP LOGO

The APP logo is in the /homeImage/Assets.xcassets 

### APP ICON

Change App Icon in Assets.xcassets