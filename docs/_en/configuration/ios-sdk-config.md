---
title: iOS SDK Config
tag: [config, ios]
ref: config-ios
---

This document will introduce how to configure the iOS SDK for QWeather API.

> **Privacy Disclaimer:** QWeather iOS SDK **DOES NOT require any special permissions such as phone, location, device unique identifiers, etc.** We does not and cannot collect private data from this SDK. 

OS Requirement:
- iOS 15.0+
- macOS 11.0+
- tvOS 15.0+
- watchOS 8.0+
- visionOS 1.0+

## Step 1: Create Project and Credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [Authentication](/en/docs/authentication/).

## Step 2: Install SDK

The latest version of iOS SDK is {{ site.data.v.ios.version }}([Release note](https://blog.qweather.com/release/sdk/)), and it supports the following installation methods:

### CocoaPods

QWeather iOS SDK can be installed via [CocoaPods](https://cocoapods.org/). CocoaPods is an open source dependency manager, if you haven't installed CocoaPods yet, please refer to [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html). The following steps assume that you have already completed the installation and setup of CocoaPods.

1. Create a file named `Podfile` in your project directory
2. Add the following to the `Podfile` and save it
   - iOS
     ```
     target '{YOUR iOS TARGET}' do
        pod 'QWeatherKit','~> {{ site.data.v.ios.version }}'
     end
     ```
   - macOS
     ```
     target 'YOUR macOS TARGET' do
        pod 'QWeatherKit','~> {{ site.data.v.ios.version }}'
     end
     ```
3. Open a terminal and go to the directory containing the `Podfile` and run:
   ```
   pod install
   ```

**Update SDK**

Open a terminal and go to the directory containing the `Podfile` and run:

```
pod update
```

### Swift Package Manager

You can also use Swift Package Manager to integrate iOS SDK, please refer to [Adding package dependencies to your app](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

* SDK URL: [https://github.com/qwd/QWeatherKit.git](https://github.com/qwd/QWeatherKit.git)
* Dependency Rule: Required {{ site.data.v.ios.version }}


### Manual install

1. Download SDK: [QWeather_iOS_SDK_Pub_V{{ site.data.v.ios.version }}]({{ site.data.v.ios.dllink }}) <br>*MD5: {{ site.data.v.ios.md5 }}*
2. Add `QWeatherKit.xcframework` to iOS/macOS Target.

## 3: Initialization and Configuration‌

### Setup Host & Token

Replace `YOUR_HOST` and `YOUR_TOKEN` with your host and token:

Swift
>
>```swift
>
>  import QWeatherKit
>
>  ...
>
>  try await QWeather.getInstance("{YOUR_HOST}")
>                    .setupToken("{YOUR_TOKEN}")
>
>```

Objective-C

>
>```objc
>
>  #import <QWeatherKit/QWeatherKit-Swift.h>
>
>  ...
>
>  [QWeatherObjc initConfigWithHost:@"YOUR_HOST"];
>  [QWeatherObjc setupToken:@"{YOUR_TOKEN}"];
>
>```

## Sample Code

Add the following code where you need to use, enter the required parameters, and return to the data model of the corresponding type
  
Swift

```swift
   import QWeatherKit

   ...

   Task {
      do {
            try await QWeather
               .getInstance("{YOUR_HOST}")
               .setupToken("{YOUR_TOKEN}")

            let parameter = WeatherParameter(location: "101120501")
            let response = try await QWeather.instance.weatherNow(parameter)
            print(response)
        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
        }
   }

```        

Objective-C

```objc
  #import <QWeatherKit/QWeatherKit-Swift.h>

  ...

  [QWeatherObjc initConfigWithHost:@"YOUR_HOST"];
  [QWeatherObjc setupToken:@"{YOUR_TOKEN}"];

  WeatherParameter * parameter = [WeatherParameter makeWithLocation:@"101120501" lang:LangZH_HANS unit:UnitMETRIC];
    [QWeatherObjc weatherNow:parameter completionHandler:^(WeatherNowResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
   }];
```
