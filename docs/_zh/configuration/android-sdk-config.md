---
title: Android SDK配置
tag: [config, android]
ref: config-android
---

这篇文档将介绍如何配置和风天气开发服务中的Android SDK。

> **隐私声明：**和风天气Android SDK**不需要电话、位置、设备唯一标识符等任何特殊权限**，我们不会也无法通过本SDK收集用户隐私信息。

**适配版本**

Android 8.0+, minSDK 21

## 第1步: 创建项目和凭据 {#step-1-create-project-and-credential}

请确保已经创建了[项目和凭据](/docs/configuration/project-and-key/)，并已了解如何使用[JWT身份认证](/docs/configuration/authentication/#json-web-token)。

## 第2步: 安装SDK {#step-2-install-sdk}

下载最新版本：[QWeather Android SDK {{ site.data.v.android.version }}]({{ site.data.v.android.dllink }}) *(MD5:`{{ site.data.v.android.md5 }}`)*

将JAR文件复制到`app/libs/`目录:

```bash
YOUR-PROJECT/
├── app/
│   ├── libs/
│   │   └── QWeather_Public_Android_V{{ site.data.v.android.version }}.jar
│   ├── src/
│   └── build.gradle
```

修改Gradle配置`app/build.gradle`文件：

```bash
dependencies {
    // 添加以下配置
    implementation files('libs/QWeather_Public_Android_V{{ site.data.v.android.version }}.jar')
    
    // 或者批量添加所有JAR
    implementation fileTree(dir: 'libs', include: ['*.jar'])
}
```

引用库

```
implementation libs.gson
implementation libs.okhttp
```

请在混淆文件`proguard-rules.pro`中加入如下代码

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

## 第3步: 添加API Host和Token {#step-3-add-api-host-and-token}

> **提示：**Android SDK仅支持[JWT身份认证](/docs/configuration/authentication/#json-web-token)。

使用 SDK 时，需提前进行账户初始化（全局执行一次即可）

将代码中的`YOUR_HOST`和`YOUR_TOKEN`替换为您的[API Host](/docs/configuration/api-config/#api-host)和[JWT身份认证](/docs/configuration/authentication/)：

```java
QWeather.getInstance(MainActivity.this, "{YOUR_HOST}") // 初始化服务地址
        .setTokenGenerator(new TokenGenerator() { // 设置令牌生成器
                        @Override
                        public String generator() {
                             // 生产环境中应在此处实现令牌刷新逻辑，而非硬编码
                            return "{YOUR_TOKEN}"; // 返回用于 API 认证的 JWT 令牌
                        }
                    });
```

## 示例代码 {#sample-code}

请求北京实时天气。

```java
WeatherParameter parameter = new WeatherParameter("101010100")
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
