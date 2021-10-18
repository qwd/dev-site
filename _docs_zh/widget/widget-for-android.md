---
title: Android天气插件
version: 1.0
tag: widget
description: 免费的和风天气Android天气插件SDK，包括实况天气、分钟级降水、空气质量、灾害预警、30天预报、生活指数、台风路径等天气内容，支持在Android应用任意位置加入天气内容，并可生成天气频道页面。
ref: 5-widget-android
---

天气插件Android SDK，包括实况天气、空气质量、灾害预警、生活指数等天气内容，支持在Android应用任意位置加入天气内容，并可生成天气频道页面。

## 下载

请访问[Android天气插件产品页]({{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-sdk/)下载最新版本

## 适配版本

Android 4.0及以上

## 工程配置

- 将Heweather_Plugin.jar导入到工程中，并且引用
- 配置Android Manifest权限

### 权限列表

**android.permission.INTERNET** {{ site.data.t[page.lang].rqd }}

允许网络连接

**android.permission.REANPHONESTATE** {{ site.data.t[page.lang].rqd }}

访问设备状态

**android.permission.ACCESSCOARSELOCATION** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

访问网络定位，如果使用系统定位，该权限为必选

**android.permission.ACCESSFINELOCATION** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

访问GPS定位，如果使用系统定位，该权限为必选

**android.permission.SYSTEMALERTWINDOW** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

悬浮窗权限，如果使用悬浮窗功能，该权限为必选

**android.permission.ACCESSWIFISTATE** {{ site.data.t[page.lang].opt }}

访问WiFi状态

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
-keep public class com.qweather.plugin.bean.** { *; }
-keep public class com.qweather.plugin.view.** { *; }
```

## 调用说明

### 初始化

初始化用户的KEY和Location

```java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        /**
         * 初始化
         * @param key   用户的KEY
         * @param location  城市信息，若不传或为空则调用Android源生定位
         */
         QWeatherConfig.init("key","location");
    }
```

### 横向布局

```java
<com.qweather.plugin.view.HorizonView
    android:id="@+id/horizon_view"
    android:layout_width="match_parent"
    android:layout_height="60dp" />
```

#### 显示横向布局

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

### 左1右2横向布局

```java
<com.qweather.plugin.view.LeftLargeView
    android:id="@+id/ll_view"
    android:layout_width="match_parent"
    android:layout_height="60dp"/>
```

#### 显示左1右2横向布局

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



### 右1左2横向布局

```java
<com.qweather.plugin.view.RightLargeView
        android:id="@+id/rl_view"
        android:layout_width="match_parent"
        android:layout_height="60dp"/>
```

#### 显示右1左2横向布局

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


### 纵向布局

```java
<com.qweather.plugin.view.VerticalView
        android:id="@+id/vertical_view"
        android:layout_width="75dp"
        android:layout_height="match_parent"/>
```

#### 显示纵向布局

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

### 设置背景颜色

> 控件默认背景根据天气变化展示不同的背景图片

```java
//取消默认背景
horizonView.setDefaultBack(false);
//设置布局的背景圆角角度，颜色，边框宽度，边框颜色
horizonView.setStroke(5, Color.parseColor("#313a44"), 1, Color.BLACK);
```

### 替换天气图标

1. 在文件目录app/src/main下创建资源文件夹assets
2. 在app/src/main/assets文件夹放入文件名对应天气代码的图标，文件名：白天是天气代码+d，晚上是天气代码+n后缀为.png，例如：100d.png，100n.png，请参考[天气图标](/docs/resource/icons/)
3. 在初始化的时候调用下列方法

```java
   protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    //替换天气图标为本地图标
    QWeatherConfig.changeWeatherIcon();
}
```

### 使用悬浮控件

```java
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //location若不传或为空则调用Android源生定位
        QWeatherConfig.init("用户key","location");
        //初始化悬浮控件
        SuspendView suspendView = new SuspendView(this);
        //显示悬浮控件
        suspendView.show();
}
```

### 链接到H5

如需点击控件跳转到H5界面需要在AndroidManifest.xml配置如下代码

```html
<activity android:name="com.qweather.plugin.view.SdkWebViewActivity" />
```

## 属性方法参照

### 属性介绍

| 属性          | 说明             | 类型             |        
| ------------- | ---------------- | -----------------|
| location      | {{ site.data.p.location[page.lang] }}         | String  |                 
| viewGravity   | 内容显示对齐方式<br />`HeContent.GRAVITY_CENTER` 内容居中 **默认** <br />`HeContent.GRAVITY_LEFT` 内容居左<br />`HeContent.GRAVITY_RIGHT` 内容居右 | ViewGravity（String类型）|
| padding       | view的内边距     | dimension               |
| paddingLeft   | view的左边距     | dimension               | 
| paddingTop    | view的上边距     | dimension                |
| paddingRight  | view的右边距     | dimension                |
| paddingBottom | view的下边距     | dimension               |
| viewTextColor | view中的字体颜色<br />`Color.WHITE` **默认** | color                    |

> 上述location属性，如不传递location，则采用android原生定位，需开启android.permission.ACCESSCOARSELOCATION 和 android.permission.ACCESSFINELOCATION权限

### 方法介绍

**QWeatherConfig.init("key");**

初始化和风天气KEY

**QWeatherConfig.init("key", location);**

初始化和风天气KEY和location

**setDefaultBack(boolean defaultBack)**

设置是否展示默认的图片背景

- `true` 显示
- `false` 透明背景

**QWeatherConfig.changeWeatherIcon();**

使用自己配置的天气图标

**setStroke(int radius, int backColor, int strokeWidth, int strokeColor)**

设置控件的边框，参数1：圆角大小（单位：dp） 参数2：背景颜色 参数3：边框宽度（单位：px） 参数4：边框颜色。

**setViewGravity(String viewGravity)**

设置控件对齐方式

**setViewPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom)**

设置控件左上右下内边距

**addLocation(int textSize, int textColor)**

添加地址名称文字的大小（单位：sp）和颜色

**addLocation(int textSize, int textColor, int l, int t, int r, int b)**

添加地址名称文字的大小（单位：sp）、颜色、左上右下内边距

**addLocation(LinearLayout layout, int textSize, int textColor)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色

**addLocation(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距

**addTemp(int textSize, int textColor)**

添加温度描述的文字大小（单位：sp）和文字颜色

**addTemp(int textSize, int textColor, int l, int t, int r, int b)** 

添加温度描述的文字大小（单位：sp）、文字颜色和左上右下内边距

**addTemp(LinearLayout layout, int textSize, int textColor)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 

**addTemp(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距 

**addAqiText(int textSize, int textColor)**

添加文字：AQI，文字大小（单位：sp）和文字颜色

**addAqiText(int textSize, int textColor, int l, int t, int r, int b)**

添加文字：AQI，文字大小（单位：sp）、文字颜色和左上右下内边距

**addAqiText(LinearLayout layout, int textSize)**

加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色

**addAqiText(LinearLayout layout, int textSize, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距

**addWind(int textSize, int textColor)**                        

添加风力描述的文字大小（单位：sp）、文字颜色 

**addWind(int textSize, int textColor, int l, int t, int r, int b)**

添加风力描述的文字大小（单位：sp）、文字颜色、左上右下内边距

**addWind(LinearLayout layout, int textSize, int textColor)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 

**addWind(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜 参数4-7：控件的左上右下内边距 

**addCond(int textSize, int textColor)**

添加天气描述的文字大小（单位：sp）、文字颜色

**addCond(int size, int textColor, int l, int t, int r, int b)**

添加天气描述的文字大小（单位：sp）、文字颜色和左上右下内边距

**addCond(LinearLayout layout, int textSize, int textColor)**

加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色

**addCond(LinearLayout layout, int size, int textColor, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距

**addRainDetail(int textSize, int textColor)**

添加降雨描述的文字大小（单位：sp）、文字颜色

**addRainDetail(int size, int textColor, int l, int t, int r, int b)**

添加降雨描述的文字大小（单位：sp）、文字颜色和左上右下内边距

**addRainDetail(LinearLayout layout, int textSize, int textColor)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色

**addRainDetail(LinearLayout layout, int size, int textColor, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3：文字颜色 参数4-7：控件的左上右下内边距

**addAlarmTxt(int textSize)**

添加预警文字描述的文字大小（单位：sp）

**addAlarmTxt(int textSize, int l, int t, int r, int b)**

添加预警文字描述的文字大小（单位：sp）、左上右下内边距

**addAlarmTxt(LinearLayout layout, int textSize)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp）

**addAlarmTxt(LinearLayout layout, int textSize, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距
                          
**addAqiQlty(int textSize)**

添加空气质量文字描述的文字大小（单位：sp） 

**addAqiQlty(int textSize, int l, int t, int r, int b)**

添加空气质量文字描述的文字大小（单位：sp）、左上右下内边距

**addAqiQlty(LinearLayout layout, int textSize)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp）

**addAqiQlty(LinearLayout layout, int textSize, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距

**addAqiNum(int textSize)**

添加空气质量数值描述的文字大小（单位：sp）

**addAqiNum(int textSize, int l, int t, int r, int b)**

添加空气质量数值描述的文字大小（单位：sp）、左上右下内边距

**addAqiNum(LinearLayout layout, int textSize)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp）

**addAqiNum(LinearLayout layout, int textSize, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：文字大小（单位：sp） 参数3-6：控件的左上右下内边距

**addWeatherIcon(int mWidth)**

添加天气图标，图标宽高（单位：dp）

**addWeatherIcon(int mWidth, int l, int t, int r, int b)**

添加天气图标，图标宽高（单位：dp）、左上右下内边距

**addWeatherIcon(LinearLayout layout, int mWidth)**

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）

**addWeatherIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距

**addWindIcon(int mWidth)**  

添加风向图标，图标宽高（单位：dp）

**addWindIcon(int mWidth, int l, int t, int r, int b)** 

添加风向图标，图标宽高（单位：dp）、左上右下内边距

**addWindIcon(LinearLayout layout, int mWidth)** 

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）

**addWindIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)** 

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距

**addAlarmIcon(int mWidth)**

添加预警图标，图标宽高（单位：dp）
**addAlarmIcon(int mWidth, int l, int t, int r, int b)** 

添加预警图标，图标宽高（单位：dp）、左上右下内边距

**addAlarmIcon(LinearLayout layout, int mWidth)**  

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）

**addAlarmIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距

**addRainIcon(int mWidth)**

添加降雨图标，图标宽高（单位：dp）

**addRainIcon(int mWidth, int l, int t, int r, int b)**  

添加降雨图标，图标宽高（单位：dp）、左上右下内边距

**addRainIcon(LinearLayout layout, int mWidth)**   

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp）

**addRainIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

参数1：加入此控件的父布局 参数2：图标宽高（单位：dp） 参数3-6：控件的左上右下内边距
