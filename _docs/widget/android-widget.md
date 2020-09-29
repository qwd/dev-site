---
title: Android天气插件
version: 1.0
tag: [widget]
data: weather
description: 免费的和风天气Android天气插件SDK，包括实况天气、分钟级降水、空气质量、灾害预警、30天预报、生活指数、台风路径等天气内容，支持在Android应用任意位置加入天气内容，并可生成天气频道页面。
lang-ref: widget-android
---
## 版本和更新

| 版本号 | 更新日期   | 获取密钥和下载 |
| ------ | ---------- | ---- |
| 1.1    | 2019-07-11 |  [下载](/widget/sdk) |

## 适配版本

Android 4.0及以上

## 工程配置

- 将Heweather_Plugin.jar导入到工程中，并且引用
- 配置Android Manifest权限


### 权限列表

| 权限说明     | 代码                                    | 是否必选                                                     |
| ------------ | --------------------------------------- | ------------------------------------------------------------ |
| 允许网络连接 | android.permission.INTERNET             | 必选                                                         |
| 访问设备状态 | android.permission.REANPHONESTATE       | 可选                                                         |
| 访问WiFi状态 | android.permission.ACCESSWIFISTATE      | 可选                                                         |
| 访问网络定位 | android.permission.ACCESSCOARSELOCATION | 可选 ( 如果用到不传递城市参数的方法，此权限为必选，否则无法使用对应的方法 ) |
| 访问GPS定位  | android.permission.ACCESSFINELOCATION   | 可选 ( 如果用到不传递城市参数的方法，此权限为必选，否则无法使用对应的方法 ) |
| 悬浮窗权限   | android.permission.SYSTEMALERTWINDOW    | 可选（如果用到悬浮的控件，此权限必选，否则无法显示悬浮窗）   |

### 引用库

```
implementation 'com.squareup.okhttp3:okhttp:3.9.0'(3.9.0+)
implementation 'com.google.code.gson:gson:2.6.2'(2.6.2+)
```

### 混淆

请在您的混淆文件中加入如下代码，请注意您引用的版本

#### 排除OKHTTP

```java
-dontwarn com.squareup.**
-dontwarn okio.**
-keep public class org.codehaus.* { *; }
-keep public class java.nio.* { *; }
```

#### 排除sdk

```java
-keep public class com.heweather.plugin.bean.** { *; }
-keep public class com.heweather.plugin.view.** { *; }
```

## 调用说明

#### （1）初始化用户的key和location

```java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        /**
         * 初始化
         *
         * @param key   用户的ID
         * @param location  地址详解，若不传或为空则调用Android源生定位
         */
         HeWeatherConfig.init("key","location");
    }
```

#### （2）横向布局

```java
<com.heweather.plugin.view.HorizonView
    android:id="@+id/horizon_view"
    android:layout_width="match_parent"
    android:layout_height="60dp" />
```

#### （3）左侧大布局右侧横向双布局

```java
<com.heweather.plugin.view.LeftLargeView
    android:id="@+id/ll_view"
    android:layout_width="match_parent"
    android:layout_height="60dp"/>
```

#### （4）右侧大布局左侧横向双布局

```java
<com.heweather.plugin.view.RightLargeView
        android:id="@+id/rl_view"
        android:layout_width="match_parent"
        android:layout_height="60dp"/>
```

#### （5）竖直布局

```java
<com.heweather.plugin.view.VerticalView
        android:id="@+id/vertical_view"
        android:layout_width="75dp"
        android:layout_height="match_parent"/>
```

#### （6）设置背景颜色

> 控件默认背景根据天气变化展示不同的背景图片

```java
//取消默认背景
horizonView.setDefaultBack(false);
//设置布局的背景圆角角度，颜色，边框宽度，边框颜色
horizonView.setStroke(5, Color.parseColor("#313a44"), 1, Color.BLACK);
```

#### （7）显示横向布局

```java
//横向布局
HorizonView horizonView = findViewById(R.id.horizon_view);
//取消默认背景
horizonView.setDefaultBack(false);
//设置布局的背景圆角角度，颜色，边框宽度，边框颜色     
horizonView.setStroke(5,Color.BLUE,1,Color.BLUE);
//添加地址文字描述，第一个参数为文字大小，单位：sp ，第二个参数为文字颜色，默认白色
horizonView.addLocation(14, Color.WHITE);
//添加预警图标，参数为图标大小，单位：dp
horizonView.addAlarmIcon(14);
//添加预警文字
horizonView.addAlarmTxt(14);
//添加温度描述
horizonView.addTemp(14, Color.WHITE);
//添加天气图标
horizonView.addWeatherIcon(14);
//添加天气描述
horizonView.addCond(14, Color.WHITE);
//添加风向图标
horizonView.addWindIcon(14);
//添加风力描述
horizonView.addWind(14, Color.WHITE);
//添加文字：AQI
horizonView.addAqiText(14, Color.WHITE);
//添加空气质量描述
horizonView.addAqiQlty(14);
//添加空气质量数值描述
horizonView.addAqiNum(14);
//添加降雨图标
horizonView.addRainIcon(14);
//添加降雨描述
horizonView.addRainDetail(14, Color.WHITE);
//设置控件的对齐方式，默认居中
horizonView.setViewGravity(HeContent.GRAVITY_CENTER);
//设置控件的内边距，默认为0
horizonView.setViewPadding(10,10,10,10);
//显示控件
horizonView.show();
```

#### （8）显示左侧大布局右侧双布局

```java
//左侧大布局右侧双布局控件
LeftLargeView llView = findViewById(R.id.ll_view);
 
//获取左侧大布局
LinearLayout leftLayout = llView.getLeftLayout();
//获取右上布局
LinearLayout rightTopLayout = llView.getRightTopLayout();
//获取右下布局
LinearLayout rightBottomLayout = llView.getRightBottomLayout();
 
//设置布局的背景圆角角度（单位：dp），颜色，边框宽度（单位：px），边框颜色
llView.setStroke(5, Color.parseColor("#313a44"), 1, Color.BLACK);
 
//添加温度描述到左侧大布局
//第一个参数为需要加入的布局
//第二个参数为文字大小，单位：sp
//第三个参数为文字颜色，默认白色
llView.addTemp(leftLayout, 40, Color.WHITE);
//添加温度图标到右上布局，第二个参数为图标宽高（宽高1：1，单位：dp）
llView.addWeatherIcon(rightTopLayout, 14);
//添加预警图标到右上布局
llView.addAlarmIcon(rightTopLayout, 14);
//添加预警描述到右上布局
llView.addAlarmTxt(rightTopLayout, 14);
//添加文字AQI到右上布局
llView.addAqiText(rightTopLayout, 14);
//添加空气质量到右上布局
llView.addAqiQlty(rightTopLayout, 14);
//添加空气质量数值到右上布局
llView.addAqiNum(rightTopLayout, 14);
//添加地址信息到右上布局
llView.addLocation(rightTopLayout, 14, Color.WHITE);
//添加天气描述到右下布局
llView.addCond(rightBottomLayout, 14, Color.WHITE);
//添加风向图标到右下布局
llView.addWindIcon(rightBottomLayout, 14);
//添加风力描述到右下布局
llView.addWind(rightBottomLayout, 14, Color.WHITE);
//添加降雨图标到右下布局
llView.addRainIcon(rightBottomLayout, 14);
//添加降雨描述到右下布局
llView.addRainDetail(rightBottomLayout, 14, Color.WHITE);
//设置控件的对齐方式，默认居中
llView.setViewGravity(HeContent.GRAVITY_LEFT);
//显示布局
llView.show();
```

#### （9）显示右侧大布局左侧横向双布局

```java
RightLargeView rlView = findViewById(R.id.rl_view);
//方法参数同（7）左侧大布局右侧双布局
LinearLayout rightLayout = rlView.getRightLayout();
LinearLayout leftTopLayout = rlView.getLeftTopLayout();
LinearLayout leftBottomLayout = rlView.getLeftBottomLayout();
 
//取消默认背景
rlView.setDefaultBack(false);
rlView.setStroke(0, Color.GRAY, 1,  Color.WHITE);
rlView.addLocation(leftTopLayout, 14, Color.WHITE);
rlView.addAqiText(leftTopLayout, 14);
rlView.addAqiQlty(leftTopLayout, 14);
rlView.addAqiNum(leftTopLayout, 14);
rlView.addAlarmIcon(leftTopLayout, 14);
rlView.addAlarmTxt(leftTopLayout, 14);
rlView.addWeatherIcon(leftTopLayout, 14);
 
rlView.addRainIcon(leftBottomLayout, 14);
rlView.addRainDetail(leftBottomLayout, 14, Color.WHITE);
rlView.addWindIcon(leftBottomLayout, 14);
rlView.addWind(leftBottomLayout, 14, Color.WHITE);
rlView.addCond(leftBottomLayout, 14, Color.WHITE);
 
rlView.addTemp(rightLayout, 40, Color.WHITE);
rlView.setViewGravity(HeContent.GRAVITY_RIGHT);
rlView.show();
```

#### （10）显示竖直布局

```java
VerticalView verticalView = findViewById(R.id.vertical_view);
verticalView.setDefaultBack(false);
//方法参数同（6）横向布局
verticalView.addLocation(14, Color.WHITE);
verticalView.addTemp(14, Color.WHITE);
verticalView.addWeatherIcon(14);
verticalView.addCond(14, Color.WHITE);
verticalView.addWindIcon(14);
verticalView.addWind(14, Color.WHITE);
verticalView.addAqiText(14, Color.WHITE);
verticalView.addAqiQlty(14);
verticalView.addAqiNum(14);
verticalView.addAlarmIcon(14);
verticalView.addAlarmTxt(14);
verticalView.addRainIcon(14);
verticalView.addRainDetail(14, Color.WHITE);
verticalView.show();
```

#### （11）替换天气图标

1. 在文件目录app/src/main下创建资源文件夹assets
1. 在app/src/main/assets文件夹放入文件名对应天气代码的图标，文件名：白天是天气代码+d，晚上是天气代码+n后缀为.png，例如：100d.png，100n.png（图标对应关系请参考和风天气官网天气状况代码和图标对应关系 https://dev.qweather.com/docs/start/icons）
1. 在初始化的时候调用下列方法

```java
   protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    //替换天气图标为本地图标
    HeWeatherConfig.changeWeatherIcon();
}
```

#### （12）使用悬浮控件

```java
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //location若不传或为空则调用Android源生定位
        HeWeatherConfig.init("用户key","location");
        //初始化悬浮控件
        SuspendView suspendView = new SuspendView(this);
        //显示悬浮控件
        suspendView.show();
}
```

#### （13）如需点击控件跳转到H5界面需要在AndroidManifest.xml配置如下代码
```html
<activity android:name="com.heweather.plugin.view.SdkWebViewActivity" />
```


## 属性方法参照

### 属性介绍

| 属性          | 说明             | 类型                      | 默认        |
| ------------- | ---------------- | ------------------------- | ----------- |
| location      | 地址详解         | String                    | 无          |
| viewGravity   | 内容显示对齐方式 | ViewGravity（String类型） | center      |
| padding       | view的内边距     | dimension                 | 0px         |
| paddingLeft   | view的左边距     | dimension                 | 0px         |
| paddingTop    | view的上边距     | dimension                 | 0px         |
| paddingRight  | view的右边距     | dimension                 | 0px         |
| paddingBottom | view的下边距     | dimension                 | 0px         |
| viewTextColor | view中的字体颜色 | color                     | Color.WHITE |

#### 地址详解，location参数

| 权限说明                                                     | 代码                                               |
| ------------------------------------------------------------ | -------------------------------------------------- |
| 不传递地址参数                                               | 自动采用android源生定位                            |
| 城市ID：城市列表                                             | location=CN101010100                               |
| 经纬度格式：经度,纬度（经度在前，纬度在后英文,分隔，十进制格式，北纬东经为正，南纬西经为负 | location=116.40,39.9                               |
| 城市名称，城市列表                                           | location=北京、 location=北京市、 location=beijing |
| 城市名称,上级城市 或 省 或 国家，英文逗号分隔，此方式可以在重名的情况下只获取想要的地区的天气数据，例如 西安,陕西 | location=朝阳,北京、 location=chaoyang,beijing     |
| IP                                                           | location=60.194.130.1                              |
| 根据请求自动判断，根据用户的请求获取IP，通过 IP 定位并获取城市数 | location=auto_ip(固定参数)                         |

#### ViewGravity

| String                   | 插件内容水平方向显示对齐方式 |
| ------------------------ | ---------------------------- |
| HeContent.GRAVITY_CENTER | 内容居中                     |
| HeContent.GRAVITY_LEFT   | 内容居左                     |
| HeContent.GRAVITY_RIGHT  | 内容居右                     |

### 方法介绍

| 方法名                                                       | 参数详解                                                     | 作用                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------- |
| HeWeatherConfig.init("key");                                 | 参数1：和风天气提供的key                                     | 初始化                     |
| HeWeatherConfig.init("key", location);                       | 参数1：和风天气提供的key 参数2：location（请参照地址详解）   | 初始化                     |
| setDefaultBack(boolean defaultBack)                          | 参数1：是否展示默认天气图片背景（true：展示，false：透明背景） | 设置是否展示默认的图片背景 |
| HeWeatherConfig.changeWeatherIcon();                         |                                                              | 使用自己配置的天气图标     |
| setStroke(int radius, int backColor, int strokeWidth, int strokeColor) | 参数1：圆角大小（单位：dp） 参数2：背景颜色 参数3：边框宽度（单位：px） 参数4：边框颜色 | 设置控件的边框             |
| setViewGravity(String viewGravity)                           | 参数1：控件对齐方式（默认居中）                              | 设置控件对齐方式           |
| setViewPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom) | 参数1-4：控件左上右下内边距                                  | 设置控件内边距             |
| addLocation(int textSize, int textColor)                     | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加地址描述文字           |
| addLocation(int textSize, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addLocation(LinearLayout layout, int textSize, int textColor) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addLocation(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 |                            |
| addTemp(int textSize, int textColor)                         | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加温度描述               |
| addTemp(int textSize, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addTemp(LinearLayout layout, int textSize, int textColor)    | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addTemp(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 |                            |
| addAqiText(int textSize, int textColor)                      | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加文字：AQI              |
| addAqiText(int textSize, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addAqiText(LinearLayout layout, int textSize)                | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addAqiText(LinearLayout layout, int textSize, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 |                            |
| addWind(int textSize, int textColor)                         | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加风力描述               |
| addWind(int textSize, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addWind(LinearLayout layout, int textSize, int textColor)    | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addWind(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜 参数4-7：控件的左上右下内边距 |                            |
| addCond(int textSize, int textColor)                         | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加天气描述               |
| addCond(int size, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addCond(LinearLayout layout, int textSize, int textColor)    | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addCond(LinearLayout layout, int size, int textColor, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 |                            |
| addRainDetail(int textSize, int textColor)                   | 参数1：文字大小（单位：sp） 参数2：文字颜色                  | 添加降雨描述               |
| addRainDetail(int size, int textColor, int l, int t, int r, int b) | 参数1：文字大小（单位：sp） 参数2：文字颜色 参数3-6：控件的左上右下内边距 |                            |
| addRainDetail(LinearLayout layout, int textSize, int textColor) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 |                            |
| addRainDetail(LinearLayout layout, int size, int textColor, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 |                            |
| addAlarmTxt(int textSize)                                    | 参数1：文字大小（单位：sp）                                  | 添加预警文字描述           |
| addAlarmTxt(int textSize, int l, int t, int r, int b)        | 参数1：文字大小（单位：sp） 参数2-5：控件的左上右下内边距    |                            |
| addAlarmTxt(LinearLayout layout, int textSize)               | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp）        |                            |
| addAlarmTxt(LinearLayout layout, int textSize, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距 |                            |
| addAqiQlty(int textSize)                                     | 参数1：文字大小（单位：sp）                                  | 添加空气质量文字描述       |
| addAqiQlty(int textSize, int l, int t, int r, int b)         | 参数1：文字大小（单位：sp） 参数2-5：控件的左上右下内边距    |                            |
| addAqiQlty(LinearLayout layout, int textSize)                | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp）        |                            |
| addAqiQlty(LinearLayout layout, int textSize, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距 |                            |
| addAqiNum(int textSize)                                      | 参数1：文字大小（单位：sp）                                  | 添加空气质量数值描述       |
| addAqiNum(int textSize, int l, int t, int r, int b)          | 参数1：文字大小（单位：sp） 参数2-5：控件的左上右下内边距    |                            |
| addAqiNum(LinearLayout layout, int textSize)                 | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp）        |                            |
| addAqiNum(LinearLayout layout, int textSize, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距 |                            |
| addWeatherIcon(int mWidth)                                   | 参数1：图标宽高（单位：dp）                                  | 添加天气图标               |
| addWeatherIcon(int mWidth, int l, int t, int r, int b)       | 参数1：图标宽高（单位：dp） 参数2-5：控件的左上右下内边距    |                            |
| addWeatherIcon(LinearLayout layout, int mWidth)              | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）        |                            |
| addWeatherIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距 |                            |
| addWindIcon(int mWidth)                                      | 参数1：图标宽高（单位：dp）                                  | 添加风向图标               |
| addWindIcon(int mWidth, int l, int t, int r, int b)          | 参数1：图标宽高（单位：dp） 参数2-5：控件的左上右下内边距    |                            |
| addWindIcon(LinearLayout layout, int mWidth)                 | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）        |                            |
| addWindIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距 |                            |
| addAlarmIcon(int mWidth)                                     | 参数1：图标宽高（单位：dp）                                  | 添加预警图标               |
| addAlarmIcon(int mWidth, int l, int t, int r, int b)         | 参数1：图标宽高（单位：dp） 参数2-5：控件的左上右下内边距    |                            |
| addAlarmIcon(LinearLayout layout, int mWidth)                | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）        |                            |
| addAlarmIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距 |                            |
| addRainIcon(int mWidth)                                      | 参数1：图标宽高（单位：dp）                                  | 添加降雨图标               |
| addRainIcon(int mWidth, int l, int t, int r, int b)          | 参数1：图标宽高（单位：dp） 参数2-5：控件的左上右下内边距    |                            |
| addRainIcon(LinearLayout layout, int mWidth)                 | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）        |                            |
| addRainIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b) | 参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距 |                            |
