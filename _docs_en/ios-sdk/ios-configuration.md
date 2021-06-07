---
title: Configuration
tag: ios-sdk
version: v4
description: The configuration instructions for the iOS SDK of QWeather, use the free QWeather SDK to quickly integrate the latest weather data of QWeather for easy calling
ref: 1-sdk-ios-config
---

## Download

|Version|Update|MD5|Download|
|---|---|---|---|
|{{ site.data.v.ios-sdk.version }}|{{ site.data.v.ios-sdk.date }}|{{ site.data.v.ios-sdk.md5 }}|[Download]({{ site.data.v.ios-sdk.dllink }})|

## OS Requirement

iOS 8.0+

## Project Configuration

**Manual configuration**

This framework is compiled with Objective-C, just import the framework package into the project.

If the project is written by swift:

1. Create a new OC class in the main directory of the Swift project. If the OC class is created for the first time in the project, a prompt window as shown in the figure will pop up. This prompt window is a pop-up prompt for whether to create a Swift-OC bridge file.
2. Click **Create Bridging Header**, Xcode will automatically create a header file. This header file is the bridge file of Swift-OC
3. Declare this framework class in the Swift-OC bridge file and it can be used.
4. The sdk needs to enable the location permission, which is configured in Info.plist:
   
   ```
   NSLocationWhenInUseUsageDescription
   ```` 
   and 
   ```
   NSLocationAlwaysAndWhenInUseUsageDescription
   ```

**Reference Library**

```objc
AFNetworking(4.0.0+)
```

> If there is a crash say `unrecognized selector sent to ...`, please add `-ObjC` to **Other Linker Flags** in **Build Settings**
> 
> The framework does not provide log function, error information can be obtained from the following callback `getError` 
>  
> ```objc
> -(void)weatherWithInquireType:(INQUIRE_TYPE)inquireType
>                      WithSuccess:(void(^)(id responseObject))getSuccess
>                 faileureForError:(void(^)(NSError *error))getError;
> ```

## Data Access Configuration
 
**Public ID and KEY**

Add `publicId` and `appkey` in AppDelegate

```objc
 QWeatherConfigInstance.publicID = @"";
 QWeatherConfigInstance.appKey = @"";
```

**Set Data Application version**

Business Data Application version is set to

```objc
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
```

Free Data Application version is set to

```objc
QWeatherConfigInstance.appType = APP_TYPE_DEV;
```

High-performance Data Application or customized service version

Call the `-(void)changeDomain:(NSString *)domain` interface to modify the SDK access domain name

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

AllWeatherInquieirs *qWeather = [AllWeatherInquieirs sharedInstance];//or AllWeatherInquieirs *qWeather = [[AllWeatherInquieirs alloc] init];
qWeather.appType = APP_TYPE_BIZ;
qWeather.location = @"";
qWeather.lang = @"";//or qWeather.languageType = @"";
qWeather.unit = @"";//or qWeather.unitType = @"";

[qWeather weatherWithInquireType: INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass * responseObject) {

      } faileureForError:^(NSError *error) {

      }];
```