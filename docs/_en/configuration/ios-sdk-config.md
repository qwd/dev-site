---
title: iOS SDK Config
tag: [config, ios]
ref: config-ios
---

This document will introduce how to configure the iOS SDK for QWeather API.

OS Requirement:

- iOS 9.0+
- macOS 10.10+

> **Hint:** QWeather iOS SDK also includes macOS SDK.

## Step 1: Create Project and Credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [Authentication](/en/docs/authentication/).

## Step 2: Install SDK

iOS SDK supports the following installation methods:

### CocoaPods

QWeather iOS SDK can be installed via [CocoaPods](https://cocoapods.org/). CocoaPods is an open source dependency manager, if you haven't installed CocoaPods yet, please refer to [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html). The following steps assume that you have already completed the installation and setup of CocoaPods.

1. Create a file named `Podfile` in your project directory
2. Add the following to the `Podfile` and save it
   - iOS
     ```
     target 'YourTargetName-iOS' do
        pod 'QWeather-SDK'
     end
     ```
   - macOS
     ```
     target 'YourTargetName-macOS' do
        pod 'QWeather-SDK'
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

* SDK URL: [https://github.com/qwd/iOS-SDK.git](https://github.com/qwd/iOS-SDK.git)
* Dependency Rule: Up to Next Major Version 4.14.0 < 5.0.0


### Manual install

1. Download SDK: [QWeather_iOS_SDK_Pub_V{{ site.data.v.ios.version }}]({{ site.data.v.ios.dllink }}) <br>*MD5: {{ site.data.v.ios.md5 }}*
2. Add `QWeather.xcframework` to iOS/macOS Target.

> **If the project is written by swift:**
>
> 1. Create a new OC class in the main directory of the Swift project. If the OC class is created for the first time in the project, a prompt window as shown in the figure will pop up. This prompt window is a pop-up prompt for whether to create a Swift-OC bridge file.
> 2. Click **Create Bridging Header**, Xcode will automatically create a header file. This header file is the bridge file of Swift-OC
> 3. Declare this framework class in the Swift-OC bridge file and it can be used.
> 4. The sdk needs to enable the location permission, which is configured in Info.plist:
> 
>    ```
>    NSLocationWhenInUseUsageDescription
>    NSLocationAlwaysAndWhenInUseUsageDescription
>    ```

> **Warning:**
>
> - If there is a crash say `unrecognized selector sent to ...`, please add `-ObjC` to **Other Linker Flags** in **Build Settings**
> - The framework does not provide log function, error information can be obtained from the following callback `getError` 
>  
>   ```objc
>   -(void)weatherWithInquireType:(INQUIRE_TYPE)inquireType
>                      WithSuccess:(void(^)(id responseObject))getSuccess
>                 faileureForError:(void(^)(NSError *error))getError;
> ```
{:.bqwarning}

## Step 3: Setup KEY and Subscription

Setup the API KEY and Subscription in the `AppDelegate`:

### Setup Public ID and KEY

Replace `Your_KEY` and `Your_Public_ID` with your KEY and credential ID:

```objc
QWeatherConfigInstance.publicID = @"Your_Public_ID";
QWeatherConfigInstance.appKey = @"Your_KEY";
```

### Setup Subscription

- Standard subscription:

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    ```
- Free subscription:

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_DEV;
    ```

## Sample Code

Add the following code where you need to use, enter the required parameters, and return to the data model of the corresponding type
  
```objc
/**
 * Real-time weather
 *
 * @param userType: user type, divided into commercial version and free development version
 * @param location: location to be queried
 * @param lang: set multi-language, the default is simplified Chinese
 * @param unit: set unit, metric (m) or imperial (i), the default is metric unit
 */

#import <QWeather/QWeather.h>

AllWeatherInquieirs *qWeather = [AllWeatherInquieirs sharedInstance];//or AllWeatherInquieirs *qWeather = [[AllWeatherInquieirs alloc] init];
qWeather.appType = APP_TYPE_BIZ;
qWeather.location = @"101010300";
qWeather.lang = @"";//or qWeather.languageType = @"";
qWeather.unit = @"";//or qWeather.unitType = @"";

[qWeather weatherWithInquireType: INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass * responseObject) {

      } faileureForError:^(NSError *error) {

      }];
```
