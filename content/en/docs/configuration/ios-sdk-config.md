---
title: Set up iOS SDK
translationKey: config-ios
---

This document will introduce how to configure the iOS SDK for QWeather API.

<strong>OS Requirement:</strong>

- iOS 15.0+
- macOS 11.0+
- tvOS 15.0+
- watchOS 8.0+
- visionOS 1.0+

## Step 1: Create project and credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [JWT authentication](/en/docs/configuration/authentication/#json-web-token).

## Step 2: Install SDK

The latest version of iOS SDK is 5.2.1([Release note](https://blog.qweather.com/release/sdk/)), and it supports the following installation methods:

### Swift Package Manager

You can also use Swift Package Manager to integrate iOS SDK, please refer to [Adding package dependencies to your app](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

* SDK URL: [https://github.com/qwd/qweather-ios-sdk.git](https://github.com/qwd/qweather-ios-sdk.git)
* Dependency Rule: Required 5.2.1

### CocoaPods

QWeather iOS SDK can be installed via [CocoaPods](https://cocoapods.org/). CocoaPods is an open source dependency manager, if you haven't installed CocoaPods yet, please refer to [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html). The following steps assume that you have already completed the installation and setup of CocoaPods.

1. Create a file named `Podfile` in your project directory
2. Add the following to the `Podfile` and save it
   - iOS
```
     target '{YOUR_iOS_TARGET}' do
        pod 'QWeather-SDK','~> 5.2.1'
     end
     ```
   - macOS
```
     target '{YOUR_macOS_TARGET}' do
        pod 'QWeather-SDK','~> 5.2.1'
     end
     ```
3. Open a terminal and go to the directory containing the `Podfile` and run:
```
   pod install
   ```

<strong>Update SDK</strong>

Open a terminal and go to the directory containing the `Podfile` and run:

```
pod update
```

### Manual install

1. Download SDK: [QWeatherSDK 5.2.1](https://github.com/qwd/qweather-ios-sdk/releases/tag/5.2.1)
2. Add `QWeatherSDK.xcframework` to iOS/macOS Target.

## Step 3: Add API Host and token


### Initialize the QWeather instance.

Replace `YOUR_HOST` with your [API Host](/docs/configuration/api-host/).

<strong>Swift</strong>

```swift
import QWeatherSDK

...

try await QWeather
            .getInstance("{YOUR_HOST}")  // Initialize api host
            .setupLogEnable(true)  // Enable debug logging (set false for production environments)

```

<strong>Objective-C</strong>

```objc
#import <QWeatherSDK/QWeatherSDK-Swift.h>

...

// Initialize api host
[QWeatherObjc initConfigWithHost:@"{YOUR_HOST}"];

// Enable debug logging (set false for production environments)
[QWeatherObjc setupLogEnable:YES];
```

### Set up the token generator

> <strong>Hint:</strong> iOS SDK only support [JWT](/docs/configuration/authentication/#json-web-token) for authentication.

The SDK provides two token generation mechanisms: TokenGenerator and closure-based implementation. Developers can choose either approach based on their needs. It is important to note that if both methods are configured simultaneously, the closure implementation will be automatically disabled. For security purposes, please ensure proper management of sensitive information such as private key, project ID, and credential ID, avoiding storage or transmission in plaintext.

<strong>Swift</strong>

```swift
// Configure the token generator using the JWTGenerator class provided by the SDK
let jwt = JWTGenerator(privateKey: "{YOUR_PRIVATE_KEY}", // Pravite Key
                              pid: "{YOUR_PROJECT_ID}", // Project ID
                              kid: "{YOUR_KID}") // Credential ID
instance.setupTokenGenerator(jwt)

//NOTE: Developers can also customize a token generator by conforming to the TokenGenerator protocol.

// Set the token generator via a closure.
instance.setupTokenGenerator({  
     // Update jwt token should be implemented here in production environments
      return "{YOUR_TOKEN}"
})
```

<strong>Objective-C</strong>

```objc
// Set the token generator using the method provided by the SDK.
[QWeatherObjc setupTokenGeneratorWithPrivateKey:@"{YOUR_PRIVATE_KEY}" // Pravite Key
                                          pid:@"{YOUR_PROJECT_ID}" // Project ID
                                          kid:@"{YOUR_KID}"]; // Credential ID


// Set the token generator via a closure.
[QWeatherObjc setupTokenGeneratorWithGenerater:^NSString * _Nonnull{
    // Update jwt token should be implemented here in production environments
    return @"{YOUR_TOKEN}"; 
}];
```

## Sample code

Get real-time weather for Beijing.

Swift

```swift
import QWeatherSDK

...

Task {
    do {
        let parameter = WeatherParameter(location: "101010100")
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
#import <QWeatherSDK/QWeatherSDK-Swift.h>

...

WeatherParameter *parameter = [WeatherParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc weatherNow:parameter completionHandler:^(WeatherNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Troubleshooting

Follow the steps below to systematically check your Xcode project configuration. We recommend integrating the QWeatherSDK via CocoaPods or Swift Package Manager (SPM), as these tools handle most dependency and configuration issues automatically.

<strong>1. Verify SDK Configuration</strong>

Swift Library Settings

```
Target → Build Settings → LIBRARY_SEARCH_PATHS = $(inherited) $(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)

Target → Build Settings → Always Embed Swift Standard Libraries = YES
```

Objective-C Linker Settings

```
Target → Build Settings → Other Linker Flags = -ObjC -framework "QWeatherSDK"

// To resolve the __swift_FORCE_LOAD_$_swiftCompatibility56 error
// and help the linker locate the Swift compatibility libraries:
Target → Build Settings → Other Linker Flags += -L$(DEVELOPER_DIR)/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/$(PLATFORM_NAME)
```

<strong>2. Clear Build Cache</strong>

1. Delete the build cache folder: Open Finder, go to `~/Library/Developer/Xcode/DerivedData/` and remove the folder related to your project.
2. Clean the build folder: In Xcode, select Product → Clean Build Folder (shortcut: Shift + Command + K).
3. Quit Xcode and restart it.
4. Rebuild your project.

<strong>3. Check Sample Project</strong>

Refer to our sample project <https://github.com/qwd/qweather-ios-sdk/tree/main/Example>.

<strong>4. Last Resort</strong>

If the issue persists, try creating a brand-new Xcode project and integrate `QWeatherSDK.xcframework` directly. This helps rule out issues caused by complex or corrupted settings in your existing project.
