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

Android 4.4+

## 工程配置 {#project-configuration}

1. 解压文件，将文件夹内jar放入您的工程，并且引用
2. 配置Android Manifest 添加权限

**权限列表**

权限说明 | 代码
--------- | -------------
允许连接网络 | android.permission.INTERNET


**引用库**

```
    compile 'com.squareup.okhttp3:okhttp:3.12.12' （3.12.12+）
    compile 'com.google.code.gson:gson:2.6.2'   (2.6.2+)
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
HeConfig.init("PublicId", "PrivateKey");
```

**设置订阅版本**

默认为标准订阅，如使用免费订阅，可通过以下方法进行调整（全局执行一次即可）
 
```java
//切换至免费订阅
HeConfig.switchToDevService();
//切换至标准订阅
HeConfig.switchToBizService();
```

**数据访问示例**

根据您的需求调用不同的方法，接口回调方法中的参数就是接口返回的数据类

```java
/**
 * 实况天气数据
 * @param location 所查询的地区，可通过该地区ID、经纬度进行查询经纬度格式：经度,纬度
 *                 （英文,分隔，十进制格式，北纬东经为正，南纬西经为负)
 * @param lang     (选填)多语言，可以不使用该参数，默认为简体中文
 * @param unit     (选填)单位选择，公制（m）或英制（i），默认为公制单位
 * @param listener 网络访问结果回调
 */

QWeather.getWeatherNow(MainActivity.this, "101010300", Lang.ZH_HANS, Unit.METRIC, new QWeather.OnResultWeatherNowListener() {
    @Override
    public void onError(Throwable e) {
        Log.i(TAG, "getWeather onError: " + e);
    }

    @Override
    public void onSuccess(WeatherNowBean weatherBean) {
        Log.i(TAG, "getWeather onSuccess: " + new Gson().toJson(weatherBean));
        //先判断返回的status是否正确，当status正确时获取数据，若status不正确，可查看status对应的Code值找到原因
        if (Code.OK == weatherBean.getCode()) {
            WeatherNowBean.NowBaseBean now = weatherBean.getNow();
        } else {
            //在此查看返回数据失败的原因
            Code code = weatherBean.getCode();
            Log.i(TAG, "failed code: " + code);
        }
    }
});
```
