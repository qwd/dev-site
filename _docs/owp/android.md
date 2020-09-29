---
title: 天气普拉斯-Android开发文档
tag: [owp]
version: v1
description: 和风天气免费开源天气APP Android版开发文档，天气普拉斯开源天气APP是和风天气推出的免费开源天气APP，可以让你快速开发出属于自己的天气APP应用，完全免费。天气APP Android开发文档
toc: true
lang-ref: owpan
---
## 源码

[Github](https://github.com/heweather/OpenWeatherPlus-Android)

## 项目中引用的第三方

```
implementation 'com.squareup.okhttp3:okhttp:3.10.0'//网络框架
implementation 'com.google.code.gson:gson:2.8.0'//json解析
implementation 'joda-time:joda-time:2.10'//时间框架
implementation files('libs/AMap_Location_V4.0.1_20180426.jar')//高德定位
implementation files('libs/HeWeather_Public_Android_V3.3.jar')//和风天气SDK
```

## 项目结构说明

| 文件夹  | 对应内容                           |
| ------- | ---------------------------------- |
| res     | 存放资源文件                       |
| bean    | 存放实体类                         |
| utils   | 存放一些工具类                     |
| view    | 存放activity，fragment，自定义view |
| service | 存放服务类                         |
| adapter | 存放view的适配器                   |

## 工程运行

**方法一：**

1. 在github上下载项目[git项目地址](https://github.com/heweather/OpenWeatherPlus-Android)
2. open project，同步gradle

**方法二：**

在Android studio中选择File-New-Project from Version Control-git，之后在Git Repository URL中填入https://github.com/heweather/OpenWeatherPlus-Android.git ，点击clone。

### 配置初始化key

本项目使用高德定位sdk，和风天气sdk，需要用户自己注册相应的key并进行替换，否则不能成功运行。对应的初始化key位置如下所示

在AndroidManifest配置高德的key，详情请查看高德开发文档。[高德开发文档](https://lbs.amap.com/api/android-location-sdk/locationsummary)

```java
<meta-data
	android:name="com.amap.api.v2.apikey"
	android:value="高德key" />
```

在自定义的application的onCreate方法里初始化和风天气的key和userName

```java
HeConfig.init("你的userName", "你的key");
```

初始化key之后选择对应的域名，默认为付费用户域名，若您是免费用户，请调用如下代码

```java
//切换为免费域名（付费用户不用切换）
HeConfig.switchToFreeServerNode();
```

## 自定义
如不更换则使用和风天气默认图片和Logo

### 1.更欢首界面背景图片

- 更换res中mipmap-xxhdpi文件夹下的图片
- 图片命名规则back_100d back_100n 
- 100为和风天气代码 
- d对应白天，n对应夜晚

### 2.更换天气图标图片

- 更换res.mipmap-xhdpi文件加下的图片
- 图片命名规则icon_100d icon_100n 
- 100为和风天气代码 
- d对应白天，n对应夜晚

### 3.更换APP LOGO

- 更换res.mipmap-xhdip文件夹下ic_launcher图片

### 4.更换APP应用名称

- 更换res.values.string文件夹下app_name字段
- 若要更换英文名称，更换更换res.values-en.string文件夹下app_name字段
