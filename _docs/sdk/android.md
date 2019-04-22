---
book: SDK
service: sdk
data: [air, weather, grid, alarm, map, solar]
version: 6.1
title: Android SDK 使用文档
description: 和风天气官方Android SDK，适配4.0版本以上，快速集成和风天气最新天气数据，方便调用
toc: true
---

##  下载

|版本号|更新日期|MD5||
|---|---|---|:---:|
|2.4|2019-04-02| b9c6904e64f791b1f66b48e8f0d67472 |[下载](https://cdn.heweather.com/sdk/HeWeather_Public_Android_V2.4.jar)|

## 适配版本
Andorid 4.0及以上

##  工程配置
* 解压文件,将文件夹内jar放入您的工程,并且引用
* 配置Android Manifest 添加权限

### 权限列表

权限说明 | 代码 | 是否必选
--------- | ------------- | -------------
允许连接网络 | android.permission.INTERNET | 必选
访问设备状态 | android.permission.READ_PHONE_STATE | 可选
访问WIFI状态 | android.permission.ACCESS_WIFI_STATE | 可选
访问网络定位 | android.permission.ACCESS_COARSE_LOCATION  | 可选 ( 如果用到不传递城市参数的方法，此权限为必选，否则无法使用对应的方法 )
访问GPS定位 | android.permission.ACCESS_FINE_LOCATION  | 可选 ( 如果用到不传递城市参数的方法，此权限为必选，否则无法使用对应的方法 )

###  引用库

```java
  compile 'com.squareup.okhttp3:okhttp:3.9.0'  (3.9.0+)
  compile 'com.google.code.gson:gson:2.6.2'   (2.6.2+)
```
 
###  混淆
请在您的混淆文件中加入如下代码，请注意您引用的版本

```java
// 排除okhttp
  -dontwarn com.squareup.**
  -dontwarn okio.**
  -keep public class org.codehaus.* { *; }
  -keep public class java.nio.* { *; }

// 排除HeWeather
  -dontwarn interfaces.heweather.com.interfacesmodule.**
  -keep class interfaces.heweather.com.interfacesmodule.** { *;}
```

##  接口和数据类对照

接口说明 | 接口代码 | 数据类
--------- | ------------- | -----------
城市查询 | getSearch | List&lt;Search&gt;
3-10天天气预报 | getWeatherForecast | List&lt;Forecast&gt;
实况天气 | getWeatherNow | List&lt;Now&gt;
逐小时预报 | getWeatherHourly | List&lt;Hourly&gt;
生活指数 | getWeatherLifeStyle | List&lt;Lifestyle&gt;
常规天气数据集合 | getWeatherDateList | List&lt;Weather&gt;
格点实况天气 | getWeatherGridNow | GridNow
格点7天预报 | getWeatherGridForecast | GridForecast
格点逐小时预报 | getWeatherGirdHourly | GridHourly
分钟级降雨（邻近预报） | getWeatherGirdMinute | GirdMinute
天气灾害预警 | getAlarm | List&lt;Alarm&gt;
天气灾害预警集合 | getAlarmAll | AlarmAll
景点天气预报 | getScenic | List&lt;Scenic&gt;
空气质量实况 | getAirNow | List&lt;AirNow&gt;
空气质量7天预报 | getAirForecast | List&lt;AirForecast&gt;
空气质量逐小时预报 | getAirHourly | List&lt;AirHourly&gt;
空气质量数据集合 | getAir | List&lt;Air&gt;
卫星云图 | getMapCloudMap | Bitmap or File
太阳高度 | getSolarElevationAngle | SolarElevationAngle
日出日落 | getSolarSunriseSunset | List&lt;SolarSunriseSunset&gt;
历史数据 | getWeatherHistorical | Historical

##  数据类属性对照
[请参考这里](/docs/sdk/android-entity)


##  数据访问代码
* v1.x+ 版本，不在提供日志功能， 错误信息可由回调函数 OnError 中的 Throwable 对象提供
* v1.x+ 版本，需提前进行账户初始化（全局执行一次即可）
  
```
    HeConfig.init("Your ID", "Your Key");
```
* 默认使用中国付费节点服务域名  `HeConfig.switchToCNBusinessServerNode();`
* 个人开发者、企业开发者、普通用户等所有使用免费数据的用户需要切换到免费服务域名  `HeConfig.switchToFreeServerNode();`
* 大客户或海外节点使用，请联系客服
* 根据您的需求调用不同的方法，接口回调方法中的参数就是接口返回的数据类

###  示例

```java
/**
 * 实况天气
 * 实况天气即为当前时间点的天气状况以及温湿风压等气象指数，具体包含的数据：体感温度、
 * 实测温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水量、能见度等。
 *
 * @param context  上下文
 * @param location 地址详解
 * @param lang       多语言，默认为简体中文
 * @param unit        单位选择，公制（m）或英制（i），默认为公制单位
 * @param listener  网络访问回调接口
 */
HeWeather.getWeatherNow(this, "CN101010100", Lang.CHINESE_SIMPLIFIED, Unit.METRIC,
        new HeWeather.OnResultWeatherNowBeanListener() {
            @Override
            public void onError(Throwable e) {
                Log.i("Log", "onError: ", e);
            }

            @Override
            public void onSuccess(List<Now> dataObject) {
                Log.i("Log", "onSuccess: " + new Gson().toJson(dataObject));
            }
        });
```


##  地址详解，location参数

权限说明 | 代码
--------- | -------------
不传递地址参数 | SDK自动采用**Android**原生定位
城市ID：城市列表 |  location=CN101010100
经纬度格式：经度,纬度（经度在前，纬度在后英文,分隔，十进制格式，北纬东经为正，南纬西经为负 | location=116.40,39.9
城市名称，城市列表 | location=北京、 location=北京市、 location=beijing
城市名称,上级城市 或 省 或 国家，英文逗号分隔，此方式可以在重名的情况下只获取想要的地区的天气数据，例如 西安,陕西 | location=朝阳,北京、 location=chaoyang,beijing
IP | location=60.194.130.1
根据请求自动判断，根据用户的请求获取IP，通过 IP 定位并获取城市数据 | location=auto_ip(固定参数)