---
title: QWeather-SDK配置
tag: [config, ios, macos]
description: KEY是获取和风天气服务的密钥（或称之为token、认证信息），当你创建项目的时候会创建第一个KEY。本片文档将详细介绍KEY的使用方法。
ref: config-ios
---

这篇文档将介绍如何配置和风天气开发服务中的iOS、macOS SDK。

## 下载

|版本|日期|MD5|下载|
|---|---|---|---|
|{{ site.data.v.ios.version }}|{{ site.data.v.ios.date }}|{{ site.data.v.ios.md5 }}|[下载]({{ site.data.v.ios.dllink }})|

## 创建项目和KEY

请确保你已经创建了一个SDK的KEY，否则请参考[项目和KEY](/docs/configuration/project-and-key/)。

## 适配版本

iOS 9.0 及以上， macOS 10.10 及以上

## 工程配置

**手动配置**

1. 添加[AFNetworking(4.0.0+)](https://github.com/AFNetworking/AFNetworking)
2. 将 QWeather.xcframework 包导入到iOS或macOS Target 中

**使用Cocoapods配置**

1. 在项目根目录创建Podfile文件
2. 在ios或者macOS target 中添加 ***pod 'QWeather-SDK'***
3. 用终端进入工程根目录执行 ***pod install***

>Podfile示例：
```
   target 'YourTargetName-iOS' do
    pod 'QWeather-SDK'
   end

   target 'YourTargetName-macOS' do
    pod 'QWeather-SDK'
   end
```
**引用**

```objc
 #import <QWeather/QWeather.h>
```

**如果工程是由swift编写**

1. 在Swift工程主目录下新建一个OC类，如果是项目第一次创建OC类的话，会弹出如图的提示窗。这个提示窗就是是否建立Swift-OC的桥接文件的弹窗提示。
2. 点击**Create Bridging Header**，Xcode会自动创建一个头文件。这个头文件，就是Swift-OC的桥接文件
3. 在Swift-OC桥接文件里将本framework类进行声明，即可以使用。
4. sdk需要开启定位权限，在Info.plist里配置：
   NSLocationWhenInUseUsageDescription
   NSLocationAlwaysAndWhenInUseUsageDescription两项

**注意事项**

* 若产生崩溃`unrecognized selector sent to ...`，请在**Build Settings**中的**Other Linker Flags**里加上`-ObjC`
* framework不提供日志功能，错误信息可由以下回调函数`getError`中获得
  
    ```objc
    - (void)weatherWithInquireType:(INQUIRE_TYPE)inquireType
                         WithSuccess:(void(^)(id responseObject))getSuccess
                    faileureForError:(void(^)(NSError *error))getError;
    ```

## 数据访问配置
 
### 配置Public ID和KET

在 AppDelegate 中添加 `publicId` 和 `appkey`

```objc
 QWeatherConfigInstance.publicID = @"";
 QWeatherConfigInstance.appKey = @"";
```

### 配置项目的订阅版本

- 标准订阅：

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    ```
- 免费订阅：

    ```objc
    QWeatherConfigInstance.appType = APP_TYPE_DEV;
    ```

- 高级订阅：调用`-(void)changeDomain:(NSString *)domain`接口修改SDK的访问域名

## 数据访问示例代码

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

AllWeatherInquieirs *qWeather = [AllWeatherInquieirs sharedInstance];//或AllWeatherInquieirs *qWeather     = [[AllWeatherInquieirs alloc] init];
qWeather.appType = APP_TYPE_BIZ;
qWeather.location = @"";
qWeather.lang = @"";//或qWeather.languageType = @"";
qWeather.unit = @"";//或qWeather.unitType = @"";

[qWeather weatherWithInquireType: INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass * responseObject) {

      } faileureForError:^(NSError *error) {

      }];
```        
