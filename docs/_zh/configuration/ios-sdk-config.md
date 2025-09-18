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

请确保已经创建了[项目和凭据](/docs/configuration/project-and-key/)，并已了解如何使用[JWT身份认证](/docs/configuration/authentication/#json-web-token)。

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

## 第3步: 添加API Host和Token {#step-3-add-api-host-and-token}

### 初始化QWeather实例

将代码中的`YOUR_HOST`替换为您的[API Host](/docs/configuration/api-host)

**Swift**

```swift
import QWeatherSDK

...

try await QWeather
            .getInstance("{YOUR_HOST}")  // 初始化服务地址
            .setupLogEnable(true)  // 启用调试日志（生产环境建议设置为 false）

```

**Objective-C**

```objc
#import <QWeatherSDK/QWeatherSDK-Swift.h>

...

// 初始化服务地址
[QWeatherObjc initConfigWithHost:@"{YOUR_HOST}"];

// 启用调试日志（生产环境建议设置为 false）
[QWeatherObjc setupLogEnable:YES];
```
 
### 设置Token生成器

> **提示：**iOS SDK仅支持[JWT身份认证](/docs/configuration/authentication/#json-web-token)。

SDK支持通过TokenGenerator和闭包两种机制生成访问令牌，开发者可根据需求任选其一。需注意当同时配置两种方式时，闭包实现将自动失效。出于安全考虑，请确保妥善保管私钥、项目ID及凭据ID等敏感信息，避免以明文形式存储或传输。

**Swift**

```swift
// 通过SDK提供的JWTGenerator设置令牌生成器，其遵从TokenGenerator协议
let jwt = JWTGenerator(privateKey: "{YOUR_PRIVATE_KEY}", // 私钥
                              pid: "{YOUR_PROJECT_ID}", // 项目ID
                              kid: "{YOUR_KID}") // 凭据ID
instance.setupTokenGenerator(jwt)

//NOTE: 开发者也可以通过遵从TokenGenerator协议创建自己的令牌生成器

// 通过闭包设置令牌生成器
instance.setupTokenGenerator({  
    // 生产环境中应在此处实现令牌刷新逻辑，而非硬编码
    return "{YOUR_TOKEN}"  // 返回用于 API 认证的 JWT 令牌
})
```

**Objective-C**

```objc
// 通过SDK提供的方法设置令牌生成器
[QWeatherObjc setupTokenGeneratorWithPrivateKey:@"{YOUR_PRIVATE_KEY}" // 私钥
                                          pid:@"{YOUR_PROJECT_ID}" // 项目ID
                                          kid:@"{YOUR_KID}"]; // 凭据ID


// 通过闭包设置令牌生成器
[QWeatherObjc setupTokenGeneratorWithGenerater:^NSString * _Nonnull{
    // 生产环境中应在此处实现令牌刷新逻辑，而非硬编码
    return @"{YOUR_TOKEN}"; // 返回用于 API 认证的 JWT 令牌
}];
```

## 示例代码 {#sample-code}

请求北京实时天气。
  
**Swift**

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

**Objective-C**

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

## 故障排查

请按照以下步骤逐项排查你的 Xcode 项目配置。我们推荐使用 CocoaPods 或 Swift Package Manager (SPM) 来集成 QWeatherSDK，这将自动处理大部分配置依赖问题。

**1. 检查SDK配置**

Swift 标准库配置
```
Target → Build Settings → LIBRARY_SEARCH_PATHS = $(inherited) $(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)

Target → Build Settings → Always Embed Swift Standard Libraries = YES

```


Objective-C 链接设置
```
Target → Build Settings → Other Linker Flags = -ObjC -framework "QWeatherSDK"

// 为解决 __swift_FORCE_LOAD_$_swiftCompatibility56 错误，帮助链接器定位 Swift 兼容库
Target → Build Settings → Other Linker Flags += -L$(DEVELOPER_DIR)/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/$(PLATFORM_NAME)

```

**2. 清理缓存**

1. 删除编译缓存目录：打开 Finder，前往 `~/Library/Developer/Xcode/DerivedData/` 删除与当前项目对应的文件夹
2. 删除编译目录：在 Xcode 中点击菜单 Product → Clean Build Folder (快捷键 Shift + Command + K)
3. 完全退出并重启 Xcode
4. 重新编译项目
 
**3. 参考示例**

参考我们的示例项目：<https://github.com/qwd/qweather-ios-sdk/tree/main/Example>

**4. 终极尝试**

如果问题依然存在，请尝试创建一个全新的 Xcode 工程添加 QWeatherSDK.xcframework 进行集成测试。这有助于排除原有工程复杂配置或损坏带来的干扰。