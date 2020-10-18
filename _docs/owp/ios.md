---
title: 天气普拉斯-iOS开发文档
tag: [owp]
version: v1
description: 和风天气免费开源天气APP iOS版开发文档，天气普拉斯开源天气APP是和风天气推出的免费开源天气APP，可以让你快速开发出属于自己的天气APP应用，完全免费。天气APP iOS开发文档。
toc: true
lang-ref: owpios
---
## 源码

[Github](https://github.com/qwd/OpenWeatherPlus-iOS)

## 项目结构说明

| 文件夹           | 对应内容                                  |
| ---------------- | ----------------------------------------- |
| Supporting Files | 存放一些工程需要的资源配置                |
| Define           | 存放pch文件和一些工程需要的宏定义、头文件 |
| Helpers          | 存放一些工具类                            |
| Category         | 存放一些工程需要的分类                    |
| Base             | 存放一些工程需要的基类                    |
| Modules          | 存放Controller-Model-View                 |
| AppDelegate      | 存放AppDelegate                           |

## 如何运行

1.克隆工程

```
$ git clone https://github.com/qwd/OpenWeatherPlus-iOS.git
```

2.安装 pods

```
$ cd HeFengWeather
$ pod install
```

3.用xcode打开HeFengWeather.xcworkspace。

4.替换高德定位SDK的appkey

在高德开放平台控制台根据Bundle Identifier新建应用并复制appkey,替换Define目录下CommonMacros中的KAMapLocationAPPKey宏定义对应的key

 [高德开放平台](https://lbs.amap.com/)

5.替换和风天气SDK的appkey和userKey

在和风天气官网控制台根据Bundle Identifier新建应用并复制appkey，userkey,替换Define目录下CommonMacros中的QWeatherSDK_USERKey 和 QWeatherSDK_USERNameKey宏定义对应的key

[和风天气控制台](https://console.qweather.com/)

6.更换和风天气SDK的域名
    
- 在HeFengWeatherTool.m中修改HeConfigInstance.userType对应的值

- 如果是付费用户修改为HeConfigInstance.userType = USER_TYPE_USER

- 如果是免费用户修改为HeConfigInstance.userType = USER_TYPE_FREE_USER

## 自定义更换图片

### 更换首界面背景图片

1.背景图片文件的命名规则为xxx100d或xxx100n

- 其中xxx为图片名字前缀用户可自己定义
- 数字100为天气状况代码
- d代表白天的天气图片,n代表夜晚的天气图片

2.用按规则命名好的背景图片更换Assets.xcassets中weatherStatebg文件夹下的图片

### 更换天气图标图片

1.天气图标的命名规则为xxx100d或xxx100n

- 其中xxx为图片名字前缀用户可自己定义
- 数字100为天气状况代码
- d代表白天的天气图片,n代表夜晚的天气图片

2.用按规则命名好的天气图片更换Assets.xcassets中weatherState文件夹下的图片

### 更换APP LOGO

更换Assets.xcassets中homeImage文件夹下hefeng_about图片

### 更换APP ICON

更换Assets.xcassets中AppIcon