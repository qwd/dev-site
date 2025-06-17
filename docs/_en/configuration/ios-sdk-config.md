---
title: Set up iOS SDK
tag: [config, ios]
ref: config-ios
---

This document will introduce how to configure the iOS SDK for QWeather API.

**OS Requirement:**

- iOS 15.0+
- macOS 11.0+
- tvOS 15.0+
- watchOS 8.0+
- visionOS 1.0+

## Step 1: Create project and credential

Make sure you have created a Project and Credential, see [Project and KEY](/en/docs/configuration/project-and-key/) and [JWT authentication](/en/docs/configuration/authentication/#json-web-token).

## Step 2: Install SDK

The latest version of iOS SDK is {{ site.data.v.ios.version }}([Release note](https://blog.qweather.com/release/sdk/)), and it supports the following installation methods:

### Swift Package Manager

You can also use Swift Package Manager to integrate iOS SDK, please refer to [Adding package dependencies to your app](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

* SDK URL: [https://github.com/qwd/qweather-ios-sdk.git](https://github.com/qwd/qweather-ios-sdk.git)
* Dependency Rule: Required {{ site.data.v.ios.version }}

### CocoaPods

QWeather iOS SDK can be installed via [CocoaPods](https://cocoapods.org/). CocoaPods is an open source dependency manager, if you haven't installed CocoaPods yet, please refer to [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html). The following steps assume that you have already completed the installation and setup of CocoaPods.

1. Create a file named `Podfile` in your project directory
2. Add the following to the `Podfile` and save it
   - iOS
     ```
     target '{YOUR_iOS_TARGET}' do
        pod 'QWeather-SDK','~> {{ site.data.v.ios.version }}'
     end
     ```
   - macOS
     ```
     target '{YOUR_macOS_TARGET}' do
        pod 'QWeather-SDK','~> {{ site.data.v.ios.version }}'
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

### Manual install

1. Download SDK: [QWeatherSDK {{ site.data.v.ios.version }}](https://github.com/qwd/qweather-ios-sdk/releases/tag/{{ site.data.v.ios.version }})
2. Add `QWeatherSDK.xcframework` to iOS/macOS Target.

## Step 3: Add API Host and token


### Initialize the QWeather instance.

Replace `YOUR_HOST` with your [API Host](/docs/configuration/api-host/).

**Swift**

```swift
import QWeatherSDK

...

try await QWeather
            .getInstance("{YOUR_HOST}")  // Initialize api host
            .setupLogEnable(true)  // Enable debug logging (set false for production environments)

```

**Objective-C**

```objc
#import <QWeatherSDK/QWeatherSDK-Swift.h>

...

// Initialize api host
[QWeatherObjc initConfigWithHost:@"{YOUR_HOST}"];

// Enable debug logging (set false for production environments)
[QWeatherObjc setupLogEnable:YES];
```
 
### Set up the token generator

> **Hint:** iOS SDK only support [JWT](/docs/configuration/authentication/#json-web-token) for authentication.

The SDK provides two token generation mechanisms: TokenGenerator and closure-based implementation. Developers can choose either approach based on their needs. It is important to note that if both methods are configured simultaneously, the closure implementation will be automatically disabled. For security purposes, please ensure proper management of sensitive information such as private key, project ID, and credential ID, avoiding storage or transmission in plaintext.

**Swift**

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

**Objective-C**

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
