---
title: Widget for Android
version: 1.0
tag: widget
description: QWeather Widget Android SDK makes it simple to embed weather content into your android APP, supporting various layouts and styles.
ref: 5-widget-android
---

## Download

See [Create Widget SDK]({{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-sdk/) to download the latest version.

## OS Requirements

Android 4.0+

## Configuration

- Import **Heweather_Plugin.jar** into the project and reference
- Set **Android Manifest** permissions

### Permission

**android.permission.INTERNET** {{ site.data.t[page.lang].rqd }}

Allow network connection

**android.permission.REANPHONESTATE** {{ site.data.t[page.lang].rqd }}

Access device status

**android.permission.ACCESSCOARSELOCATION** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

Access network location, if you use system positioning, this permission is required.

**android.permission.ACCESSFINELOCATION** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

Access GPS location, if you use system positioning, this permission is required.

**android.permission.SYSTEMALERTWINDOW** {{ site.data.t[page.lang].rqd }} {{ site.data.t[page.lang].opt }}

Floating window permissions, if floating controls are used, this permission is required

**android.permission.ACCESSWIFISTATE** {{ site.data.t[page.lang].opt }}

Access WiFi status

### Library

```
implementation'com.squareup.okhttp3:okhttp:3.9.0'(3.9.0+)
implementation'com.google.code.gson:gson:2.6.2'(2.6.2+)
```

### Confusion

Please add the following code to your obfuscated file, please note the version you quote

#### Exclude OKHTTP

```java
-dontwarn com.squareup.**
-dontwarn okio.**
-keep public class org.codehaus.* {*;}
-keep public class java.nio.* {*;}
```

#### Exclude SDK

```java
-keep public class com.qweather.plugin.bean.** {*;}
-keep public class com.qweather.plugin.view.** {*;}
```

## Instructions

#### Initialize

Initialize the KEY and location

```java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        /**
         * Initialization
         *
         * @param key: user KEY
         * @param location: The city to be queried, using Location ID or comma-separated longitude and latitude. Leave blank to use system positioning.
         */
         QWeatherConfig.init("key","location");
    }
```

### Horizontal layout

![sample](/assets/images/content/wd-sample-h.png)

```java
<com.qweather.plugin.view.HorizonView
    android:id="@+id/horizon_view"
    android:layout_width="match_parent"
    android:layout_height="60dp" />
```

#### Display horizontal layout

```java
//Horizontal layout
HorizonView horizonView = findViewById(R.id.horizon_view);
//Cancel the default background
horizonView.setDefaultBack(false);
//Set the background rounded angle, color, border width, and border color of the layout
horizonView.setStroke(5,Color.BLUE,1,Color.BLUE);
//Add the address text description, the first parameter is text size, unit: sp, the second parameter is the text color, the default is white
horizonView.addLocation(14, Color.WHITE);
//Add warning icon, the parameter is the icon size, unit: dp
horizonView.addAlarmIcon(14);
//Add warning text
horizonView.addAlarmTxt(14);
//Add temperature description
horizonView.addTemp(14, Color.WHITE);
//Add weather icon
horizonView.addWeatherIcon(14);
//Add weather condition
horizonView.addCond(14, Color.WHITE);
//Add wind direction icon
horizonView.addWindIcon(14);
//Add wind description
horizonView.addWind(14, Color.WHITE);
//Add text: AQI
horizonView.addAqiText(14, Color.WHITE);
//Add air quality description
horizonView.addAqiQlty(14);
//Add air quality numerical description
horizonView.addAqiNum(14);
//Add rain icon
horizonView.addRainIcon(14);
//Add rain description
horizonView.addRainDetail(14, Color.WHITE);
//Set the alignment, centered by default
horizonView.setViewGravity(HeContent.GRAVITY_CENTER);
//Set the inner margin, the default is 0
horizonView.setViewPadding(10,10,10,10);
//Display controls
horizonView.show();
```

### Horizontal layout - 12

![sample](/assets/images/content/wd-sample-l1r2.png)

```java
<com.qweather.plugin.view.LeftLargeView
    android:id="@+id/ll_view"
    android:layout_width="match_parent"
    android:layout_height="60dp"/>
```

#### Display horizontal layout - 12

```java
//Large layout on the left, double layout controls on the right
LeftLargeView llView = findViewById(R.id.ll_view);
 
//Get the large layout on the left
LinearLayout leftLayout = llView.getLeftLayout();
//Get the upper right layout
LinearLayout rightTopLayout = llView.getRightTopLayout();
//Get the bottom right layout
LinearLayout rightBottomLayout = llView.getRightBottomLayout();
 
//Set the background fillet angle of the layout (unit: dp), color, border width (unit: px), border color
llView.setStroke(5, Color.parseColor("#313a44"), 1, Color.BLACK);
 
//Add temperature description to the large layout on the left
//The first parameter is the layout that needs to be added
//The second parameter is text size, unit: sp
//The third parameter is the text color, the default is white
llView.addTemp(leftLayout, 40, Color.WHITE);
//Add the temperature icon to the upper right layout, the second parameter is the width and height of the icon (width and height 1: 1, unit: dp)
llView.addWeatherIcon(rightTopLayout, 14);
//Add the warning icon to the upper right layout
llView.addAlarmIcon(rightTopLayout, 14);
//Add the alert description to the upper right layout
llView.addAlarmTxt(rightTopLayout, 14);
//Add text AQI to the upper right layout
llView.addAqiText(rightTopLayout, 14);
//Add air quality to the upper right layout
llView.addAqiQlty(rightTopLayout, 14);
//Add the air quality value to the upper right layout
llView.addAqiNum(rightTopLayout, 14);
//Add address information to the upper right layout
llView.addLocation(rightTopLayout, 14, Color.WHITE);
//Add weather condition to the bottom right layout
llView.add
Cond(rightBottomLayout, 14, Color.WHITE);
//Add the wind direction icon to the lower right layout
llView.addWindIcon(rightBottomLayout, 14);
//Add wind description to the bottom right layout
llView.addWind(rightBottomLayout, 14, Color.WHITE);
//Add rainfall icon to the bottom right layout
llView.addRainIcon(rightBottomLayout, 14);
//Add rainfall description to the bottom right layout
llView.addRainDetail(rightBottomLayout, 14, Color.WHITE);
//Set the alignment, centered by default
llView.setViewGravity(HeContent.GRAVITY_LEFT);
//Display layout
llView.show();
```

### Horizontal layout - 21

![sample](/assets/images/content/wd-sample-l2r1.png)

```java
<com.qweather.plugin.view.RightLargeView
        android:id="@+id/rl_view"
        android:layout_width="match_parent"
        android:layout_height="60dp"/>
```

#### Display horizontal layout - 21

```java
RightLargeView rlView = findViewById(R.id.rl_view);
//Method parameters are the same as (7) Large layout on the left and double layout on the right
LinearLayout rightLayout = rlView.getRightLayout();
LinearLayout leftTopLayout = rlView.getLeftTopLayout();
LinearLayout leftBottomLayout = rlView.getLeftBottomLayout();
 
//Cancel the default background
rlView.setDefaultBack(false);
rlView.setStroke(0, Color.GRAY, 1, Color.WHITE);
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


### Vertical layout

![sample](/assets/images/content/wd-sample-v.png)

```java
<com.qweather.plugin.view.VerticalView
        android:id="@+id/vertical_view"
        android:layout_width="75dp"
        android:layout_height="match_parent"/>
```

#### Display vertical layout

```java
VerticalView verticalView = findViewById(R.id.vertical_view);
verticalView.setDefaultBack(false);
//Method parameters are the same as (6) horizontal layout
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

### Set background color

> The default background displays different background images according to the weather

```java
//Cancel the default background
horizonView.setDefaultBack(false);
//Set the background rounded angle, color, border width, and border color of the layout
horizonView.setStroke(5, Color.parseColor("#313a44"), 1, Color.BLACK);
```

### Replace weather icon

1. Create a resource folder assets under the file directory app/src/main
2. Put the icon of the file name corresponding to the weather code in the app/src/main/assets folder, the file name: weather code + d during the day, weather code + n at night, icon format is ​​.png, for example: 100d.png, 100n .png, please refer to [Weather Icons](/en/docs/resource/icons/) 
3. Call the following method during initialization

```java
   protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    //Replace the weather icon with a local icon
    QWeatherConfig.changeWeatherIcon();
}
```

### Use floating controls

```java
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //If location is not passed or is empty, call Android source location
        QWeatherConfig.init("user key","location");
        //Initialize the floating control
        SuspendView suspendView = new SuspendView(this);
        //Show floating controls
        suspendView.show();
}
```

### Link to mobile page widget

If you need to click and jump to the mobile page widget, you need to configure the following code in **AndroidManifest.xml**

```
<activity android:name="com.qweather.plugin.view.SdkWebViewActivity" />
```

## Property and Method

### Property

| Property      | Description                           | Type                      |
| ------------- | ------------------------------------- | ------------------------- |
| location      | {{ site.data.p.location[page.lang] }} | String                    |
| viewGravity   | Content display alignment<br />`HeContent.GRAVITY_CENTER` **default** <br />`HeContent.GRAVITY_LEFT`<br />`HeContent.GRAVITY_RIGHT`             | ViewGravity (String type) |
| padding       | View's padding                   | dimension                 |
| paddingLeft   | Left padding                   | dimension                 |
| paddingTop    | Top padding                     | dimension                 |
| paddingRight  | Right padding                 | dimension                 |
| paddingBottom | Bottom padding                 | dimension                 |
| viewTextColor | Font color in view<br />`Color.WHITE` **default**                    | color                     |

### Method

**QWeatherConfig.init("key");**

Initialize the KEY.

**QWeatherConfig.init("key", location);**

Initialize the KEY and location.

**setDefaultBack(boolean defaultBack)**

Set whether to display the default background.

-`true` display
-`false` transparent background

**QWeatherConfig.changeWeatherIcon();**

Use your own weather icon.

**setStroke(int radius, int backColor, int strokeWidth, int strokeColor)**

Set the border, parameter 1: rounded corner size (unit: dp) parameter 2: background color parameter 3: border width (unit: px) parameter 4: border color.

**setViewGravity(String viewGravity)**

Set alignment.

**setViewPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom)**

Set the padding.

**addLocation(int textSize, int textColor)**

Add text size (unit: sp) and color of the location name.

**addLocation(int textSize, int textColor, int l, int t, int r, int b)**

Add text size (unit: sp), color, padding of the location name. 

**addLocation(LinearLayout layout, int textSize, int textColor)**

Add the parent layout, text size (unit: sp) and text color of the location name.

**addLocation(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b**

Add the parent layout, text size (unit: sp), text color and padding of the location name.

**addTemp(int textSize, int textColor)**

Add temperature description text size (unit: sp) and text color.

**addTemp(int textSize, int textColor, int l, int t, int r, int b)**

Add temperature description text size (unit: sp), text color and padding.

**addTemp(LinearLayout layout, int textSize, int textColor)**

Add temperature parent layout, text size (unit: sp) and text color.

**addTemp(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b)**

Add temperature parent layout, text size (unit: sp), text color and padding.

**addAqiText(int textSize, int textColor)**

Add text: AQI, text size (unit: sp) and text color.

**addAqiText(int textSize, int textColor, int l, int t, int r, int b)**

Add text: AQI, text size (unit: sp), text color padding.

**addAqiText(LinearLayout layout, int textSize)**

Add AQI text parent layout, text size (unit: sp) and text color.

**addAqiText(LinearLayout layout, int textSize, int l, int t, int r, int b)**

Add AQI text parent layout, text size (unit: sp), text color and padding.

**addWind(int textSize, int textColor)**

Add text size (unit: sp) and text color of wind description.

**addWind(int textSize, int textColor, int l, int t, int r, int b)**

Add text size (unit: sp), text color, padding of wind description.

**addWind(LinearLayout layout, int textSize, int textColor)**

Add wind description parent layout, text size (unit: sp), text color.

**addWind(LinearLayout layout, int textSize, int textColor, int l, int t, int r, int b)**

Add wind description parent layout, text size (unit: sp), text color, padding.

**addCond(int textSize, int textColor)**

Add text size (unit: sp) and text color of the weather condition.

**addCond(int size, int textColor, int l, int t, int r, int b)**

Add text size (unit: sp), text color, padding of the weather condition.

**addCond(LinearLayout layout, int textSize, int textColor)**

Add weather condition parent layout, text size (unit: sp), text color.

**addCond(LinearLayout layout, int size, int textColor, int l, int t, int r, int b)**

Add weather condition parent layout, text size (unit: sp), text color, padding.

**addRainDetail(int textSize, int textColor)**

Add text size (unit: sp) and text color of the rainfall description.

**addRainDetail(int size, int textColor, int l, int t, int r, int b)**

Add text size (unit: sp), text color, padding of the rainfall description.

**addRainDetail(LinearLayout layout, int textSize, int textColor)**

Add rainfall description parent layout, text size (unit: sp), text color.

**addRainDetail(LinearLayout layout, int size, int textColor, int l, int t, int r, int b)**

Add rainfall description parent layout, text size (unit: sp), text color, padding.

**addAlarmTxt(int textSize)**

Add text size of the warning text description (unit: sp).

**addAlarmTxt(int textSize, int l, int t, int r, int b)**

Add warning text description text size (unit: sp), padding.

**addAlarmTxt(LinearLayout layout, int textSize)**

Add warning text description parent layout, text size (unit: sp).

**addAlarmTxt(LinearLayout layout, int textSize, int l, int t, int r, int b)**

Add warning text description parent layout, text size (unit: sp) and padding.
                          
**addAqiQlty(int textSize)**

Add AQI description text size (unit: sp).

**addAqiQlty(int textSize, int l, int t, int r, int b)**

Add AQI description text size (unit: sp) and padding.

**addAqiQlty(LinearLayout layout, int textSize)**

Add AQI description parent layout and text size (unit: sp)

**addAqiQlty(LinearLayout layout, int textSize, int l, int t, int r, int b)**

Add AQI description parent layout, text size (unit: sp) and padding.

**addAqiNum(int textSize)**

Add AQI value text size (unit: sp).

**addAqiNum(int textSize, int l, int t, int r, int b)**

Add AQI value text size (unit: sp) and padding.

**addAqiNum(LinearLayout layout, int textSize)**

Add AQI value parent layout, text size (unit: sp).

**addAqiNum(LinearLayout layout, int textSize, int l, int t, int r, int b)**

Add AQI value parent layout, text size (unit: sp) and padding.

**addWeatherIcon(int mWidth)**

Add weather icon, icon width/height (unit: dp).

**addWeatherIcon(int mWidth, int l, int t, int r, int b)**

Add weather icon, icon width/height (unit: dp) and padding.

**addWeatherIcon(LinearLayout layout, int mWidth)**

Add weather icon parent layout, icon width/height (unit: dp)

**addWeatherIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

Add weather icon parent layout, icon width/height (unit: dp) and padding

**addWindIcon(int mWidth)**

Add wind direction icon, icon width/height (unit: dp)

**addWindIcon(int mWidth, int l, int t, int r, int b)**

Add wind direction icon, icon width/height (unit: dp) and padding.

**addWindIcon(LinearLayout layout, int mWidth)**

Add wind direction icon parent layout, icon width/height (unit: dp)

**addWindIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

Add wind direction icon parent layout, icon width/height (unit: dp) and padding

**addAlarmIcon(int mWidth)**

Add warning icon, icon width/height (unit: dp)

**addAlarmIcon(int mWidth, int l, int t, int r, int b)**

Add warning icon, icon width/height (unit: dp) and padding.

**addAlarmIcon(LinearLayout layout, int mWidth)**

Add warning icon parent layout, icon width/height (unit: dp)

**addAlarmIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

Add warning icon parent layout, icon width/height (unit: dp) and padding

**addRainIcon(int mWidth)**

Add rainfall icon, icon width/height (unit: dp)

**addRainIcon(int mWidth, int l, int t, int r, int b)**

Add rain icon, icon width/height (unit: dp) and padding.

**addRainIcon(LinearLayout layout, int mWidth)**

Add rainfall icon parent layout, icon width/height (unit: dp)

**addRainIcon(LinearLayout layout, int mWidth, int l, int t, int r, int b)**

Add rainfall icon parent layout, icon width/height (unit: dp) and padding