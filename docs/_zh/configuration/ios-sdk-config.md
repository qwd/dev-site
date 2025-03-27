---
title: iOS SDK配置
tag: [config, ios]
ref: config-ios
---

这篇文档将介绍如何配置和风天气开发服务中的iOS SDK。

> **隐私声明：**和风天气iOS SDK**不需要电话、位置、设备唯一标识符等任何特殊权限**，我们不会也无法通过本SDK收集用户隐私信息。

和风天气iOS SDK支持下列操作系统：
- iOS 15.0+
- macOS 11.0+
- tvOS 15.0+
- watchOS 8.0+
- visionOS 1.0+

## 第1步: 创建项目和凭据 {#step-1-create-project-and-credential}

请确保已经创建了项目和凭据，请参考[项目](/docs/configuration/project-and-key/)和[身份认证](/docs/authentication/)。

## 第2步: 安装SDK {#step-2-install-sdk}

当前iOS SDK的最新版本是{{ site.data.v.ios.version }}([更新记录](https://blog.qweather.com/release/sdk/))，支持下列安装方式：

### Swift Package Manager {#swift-package-manager}

iOS SDK支持使用Swift Package Manager集成，具体步骤请参考[Adding package dependencies to your app](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app)

* SDK URL: [https://github.com/qwd/qweather-ios-sdk.git](https://github.com/qwd/qweather-ios-sdk.git)
* Dependency Rule: Required {{ site.data.v.ios.version }}

### CocoaPods {#cocoapods}

和风天气iOS SDK可以通过[CocoaPods](https://cocoapods.org/)进行安装。CocoaPods是一种开源依赖库管理器，如果你还未安装CocoaPods，请参考[CocoaPods快速开始](https://guides.cocoapods.org/using/getting-started.html)。下列步骤假设你已经完成了CocoaPods的安装和设置。

1. 在项目根目录创建名为`Podfile`的文件
2. 在`Podfile`文件中添加如下内容并保存：
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
3. 打开终端，进入包含`Podfile`的目录
   - 运行：
      ```
      pod install
      ```

**更新SDK**

打开终端，进入包含`Podfile`的目录，运行：

```
pod update
```

### 手动安装 {#manual-install}

你可以选择手动安装和风天气iOS SDK。

1. 下载SDK：[QWeatherSDK {{ site.data.v.ios.version }}](https://github.com/qwd/qweather-ios-sdk/releases/tag/{{ site.data.v.ios.version }})
2. 将 `QWeatherSDK.xcframework` 包导入到iOS或macOS Target中


## 第3步: 初始化配置 {#step-3-setup-key-and-subscription}


### 配置 HOST 和 TOKEN {#setup-public-id-and-key}

将代码中的`YOUR_HOST`和`YOUR_TOKEN`替换为您的 host 地址和 token：

**Swift**
>
>```swift
>
>  import QWeatherSDK
>
>  ...
>
>  try await QWeather.getInstance("{YOUR_HOST}")
>                    .setupToken("{YOUR_TOKEN}")
>
>```

**Objective-C**

>
>```objc
>
>  #import <QWeatherSDK/QWeatherSDK-Swift.h>
>
>  ...
>
>  // 初始化设置
>  [QWeatherObjc initConfigWithHost:@"YOUR_HOST"];
>  [QWeatherObjc setupToken:@"{YOUR_TOKEN}"];
>
>```

## 示例代码 {#sample-code}

在需要使用的地方加入以下代码输入所需参数即可，返回为对应类型的数据模型
  
**Swift**

```swift
   import QWeatherSDK

   ...

   Task {
      do {

            // 初始化设置
            try await QWeather
               .getInstance("{YOUR_HOST}")
               .setupToken("{YOUR_TOKEN}")

            // 实时天气
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

**Objective-C**
```objc
  #import <QWeatherSDK/QWeatherSDK-Swift.h>

  ...

  // 初始化设置
  [QWeatherObjc initConfigWithHost:@"YOUR_HOST"];
  [QWeatherObjc setupToken:@"{YOUR_TOKEN}"];

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