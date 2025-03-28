---
title: Android SDK配置
tag: [config, android]
ref: config-android
---

这篇文档将介绍如何配置和风天气开发服务中的Android SDK。

> **隐私声明：**和风天气Android SDK**不需要电话、位置、设备唯一标识符等任何特殊权限**，我们不会也无法通过本SDK收集用户隐私信息。
     
## 下载 {#download}

|版本|日期|MD5|
|---|---|---|
|{{ site.data.v.android.version }} [下载]({{ site.data.v.android.dllink }})|{{ site.data.v.android.date }} [更新记录](https://blog.qweather.com/release/sdk/) |`{{ site.data.v.android.md5 }}`|

## 创建项目和凭据 {#create-project-and-credential}

请确保已经创建了项目和凭据，请参考[项目](/docs/configuration/project-and-key/)和[身份认证](/docs/authentication/)。

## 适配版本 {#os-requirement}

Android 5.0+, minSDK 21

## 工程配置 {#project-configuration}

1. 解压文件，将文件夹内jar放入您的工程，并且引用
2. 配置Android Manifest 添加权限

**权限列表**

权限说明 | 代码
--------- | -------------
允许连接网络 | android.permission.INTERNET


**引用库**

```
    implementation libs.gson
    implementation libs.okhttp
```

**混淆**

请在您的混淆文件proguard-rules.pro中加入如下代码
请注意您引用的版本

```java
//  排除okhttp
 -dontwarn com.squareup.**
 -dontwarn okio.**
 -keep public class org.codehaus.* { *; }
 -keep public class java.nio.* { *; }

//  排除QWeather
 -dontwarn com.qweather.sdk.**
 -keep class com.qweather.sdk.** { *;}
```
 
## 数据访问配置 {#data-access-configuration}

**日志功能**

SDK 不再提供日志功能， 错误信息可由回调函数 OnError 中的 Throwable 对象提供

**账户初始化**

使用 SDK 时，需提前进行账户初始化（全局执行一次即可）

```java
QWeather.getInstance(MainActivity.this, "{YOUR_HOST}")
        .setToken("{YOUR_JWT_TOKEN}")
```

**数据访问示例**

根据您的需求调用不同的方法，接口回调方法中的参数就是接口返回的数据类

```java
WeatherParameter parameter = new WeatherParameter("101120501")
                .lang(Lang.ZH_HANS)
                .unit(Unit.METRIC);

QWeather.instance.weatherNow(parameter, new Callback<WeatherNowResponse>() {
    @Override
    public void onSuccess(WeatherNowResponse response) {
        Log.i(TAG, response.toString());
    }

    @Override
    public void onFailure(ErrorResponse errorResponse) {
        Log.i(TAG,errorResponse.toString());
    }

    @Override
    public void onException(Throwable e) {
        e.printStackTrace();
    }
});
```
