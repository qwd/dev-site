---
title: iOS SDK 使用文档
tag: [sdk]
version: v4
description: 和风天气官方iOS SDK开发文档，适配8.0版本以上，使用免费的和风天气SDK，快速集成和风天气最新天气数据，方便调用
---

## 适配版本

iOS 8.0 及以上

## 工程配置

**手动配置**

 本 framework 采用 Objective-C 编译，将 framework 包导入到项目中即可

 如果工程是由swift编写：

1. 在Swift工程主目录下新建一个OC类，如果是项目第一次创建OC类的话，会弹出如图的提示窗。这个提示窗就是是否建立Swift-OC的桥接文件的弹窗提示。
2. 点击Create Bridging Header，Xcode会自动创建一个头文件。这个头文件，就是Swift-OC的桥接文件
3. 在Swift-OC桥接文件里将本framework类进行声明，即可以使用。
4. sdk需要开启定位权限，在Info.plist里配置：
   NSLocationWhenInUseUsageDescription
   NSLocationAlwaysAndWhenInUseUsageDescription两项

**引用库**

~~~objc
 AFNetworking(4.0.0+)
~~~

**注意事项**

* 若产生崩溃unrecognized selector sent to ...，请在Build Settings中的Other Linker Flags里加上`-ObjC`
* framework不提供日志功能，错误信息可由以下回调函数getError中获得
  
    ```objc
    - (void)weatherWithInquireType:(INQUIRE_TYPE)inquireType
                         WithSuccess:(void(^)(id responseObject))getSuccess
                    faileureForError:(void(^)(NSError *error))getError;
    ```

## 数据访问配置
 
**配置public id和key**

在 AppDelegate 中添加 `publicId` 和 `appkey`

```objc
 HeConfigInstance.publicID = @"";
 HeConfigInstance.appKey = @"";
```

**设置访问的服务版本**

商业版设置为

```objc
HeConfigInstance.appType = APP_TYPE_BIZ;
```

免费开发版设置为

```objc
HeConfigInstance.appType = APP_TYPE_DEV;
```

高性能或自定义的服务版本

调用`-(void)changeDomain:(NSString *)domain`接口修改SDK的访问域名

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

AllWeatherInquieirs *heWeather = [AllWeatherInquieirs sharedInstance];//或AllWeatherInquieirs *heWeather     = [[AllWeatherInquieirs alloc] init];
heWeather.appType = APP_TYPE_BIZ;
heWeather.location = @"";
heWeather.lang = @"";//或heWeather.languageType = @"";
heWeather.unit = @"";//或heWeather.unitType = @"";

[heWeather weatherWithInquireType: INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass * responseObject) {

      } faileureForError:^(NSError *error) {

      }];
```          
