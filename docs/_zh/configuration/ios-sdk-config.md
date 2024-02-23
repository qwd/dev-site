---
title: iOS SDK配置
tag: [config, ios]
description: KEY是获取和风天气服务的密钥（或称之为token、认证信息），当你创建项目的时候会创建第一个KEY。本篇文档将详细介绍KEY的使用方法。
ref: config-ios
---

这篇文档将介绍如何配置和风天气开发服务中的iOS SDK。

和风天气iOS SDK支持下列操作系统：

- iOS 9.0 及以上
- macOS 10.10 及以上

> **提示：**和风天气iOS SDK同样包含了macOS SDK。

## 第1步: 创建项目和KEY {#step-1-create-project-and-key}

请确保你已经创建了一个iOS SDK的KEY，否则请参考[项目和KEY](/docs/configuration/project-and-key/)。

## 第2步: 安装SDK {#step-2-install-sdk}

和风天气iOS SDK支持下列安装方式：

### CocoaPods {#cocoapods}

和风天气iOS SDK可以通过[CocoaPods](https://cocoapods.org/)进行安装。CocoaPods是一种开源依赖库管理器，如果你还未安装CocoaPods，请参考[CocoaPods快速开始](https://guides.cocoapods.org/using/getting-started.html)。下列步骤假设你已经完成了CocoaPods的安装和设置。

1. 在项目根目录创建名为`Podfile`的文件
2. 在`Podfile`文件中添加如下内容并保存：
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
3. 打开终端，进入包含`Podfile`的目录，运行：
   ```
   pod install
   ```

**更新SDK**

打开终端，进入包含`Podfile`的目录，运行：

```
pod update
```

这将SDK升级到最新版本。

### Swift Package Manager

iOS SDK支持使用Swift Package Manager集成，具体步骤请参考[Adding package dependencies to your app](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app)

* SDK URL: [https://github.com/qwd/iOS-SDK.git](https://github.com/qwd/iOS-SDK.git)
* Dependency Rule: Up to Next Major Version 4.14.0 < 5.0.0

### 手动安装 {#manual-install}

你可以选择手动安装和风天气iOS SDK。

1. 下载SDK：[QWeather_iOS_SDK_Pub_V{{ site.data.v.ios.version }}]({{ site.data.v.ios.dllink }}) <br>*MD5: {{ site.data.v.ios.md5 }}*
2. 将 `QWeather.xcframework` 包导入到iOS或macOS Target中

> **如果工程是由swift编写**
>
> 1. 在Swift工程主目录下新建一个OC类，如果是项目第一次创建OC类的话，会弹出提示窗: 是否建立Swift-OC的桥接文件。
> 2. 点击**Create Bridging Header**，Xcode会自动创建一个头文件。这个头文件，就是Swift-OC的桥接文件。
> 3. 在Swift-OC桥接文件里将本framework类进行声明，即可以使用。
> 4. SDK需要开启定位权限，在Info.plist里配置：
> 
>    ```
>    NSLocationWhenInUseUsageDescription
>    NSLocationAlwaysAndWhenInUseUsageDescription
>    ```

> **注意：**
>
> * 若产生崩溃`unrecognized selector sent to ...`，请在**Build Settings**中的**Other Linker Flags**里加上`-ObjC`
> * framework不提供日志功能，错误信息可由以下回调函数`getError`中获得
>   
>    ```objc
>    - (void)weatherWithInquireType:(INQUIRE_TYPE)inquireType
>                         WithSuccess:(void(^)(id responseObject))getSuccess
>                    faileureForError:(void(^)(NSError *error))getError;
>    ```
{:.bqwarning}

## 第3步: 配置密钥和订阅版本 {#step-3-setup-key-and-subscription}

在 `AppDelegate`文件中配置API密钥信息和选择订阅版本:

### 配置Public ID和KEY {#setup-public-id-and-key}

将代码中的`Your_KEY`和`Your_Public_ID`替换为你项目中的KEY和Public ID

```objc
QWeatherConfigInstance.publicID = @"Your_Public_ID";
QWeatherConfigInstance.appKey = @"Your_KEY";
```

### 配置项目的订阅版本 {#setup-subscription}

- 标准订阅：

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    ```
- 免费订阅：

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_DEV;
    ```

## 示例代码 {#sample-code}

在需要使用的地方加入以下代码输入所需参数即可，返回为对应类型的数据模型
  
```objc
/**
 * 实况天气
 * 实况天气即为当前时间点的天气状况以及温湿风压等气象指数，具体包含的数据：体感温度、
 * 实测温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水量、能见度等。
 *
 * @param userType 用户类型，分为商业版和免费开发版
 * @param location 地址详解
 * @param lang     多语言，默认为简体中文
 * @param unit     单位选择，公制（m）或英制（i），默认为公制单位
 */

#import <QWeather/QWeather.h>

AllWeatherInquieirs *qWeather = [AllWeatherInquieirs sharedInstance];//或AllWeatherInquieirs *qWeather     = [[AllWeatherInquieirs alloc] init];
qWeather.appType = APP_TYPE_BIZ;
qWeather.location = @"";
qWeather.lang = @"";//或qWeather.languageType = @"";
qWeather.unit = @"";//或qWeather.unitType = @"";

[qWeather weatherWithInquireType: INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass * responseObject) {

      } faileureForError:^(NSError *error) {

      }];
```        
