---
title: 热带气旋（台风）
tag: ios-sdk
version: v4
description: 台风数据iOS SDK提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度，还可查询台风路径和台风预报信息。
toc: true
ref: 91-sdk-ios-tropical
---

台风数据SDK提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度，还可查询台风路径和台风预报信息。

## 台风列表 {#storm-list}

获取全球全球主要海洋流域的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码（枚举）        | 接口     | 数据类             |
| ----------------------- | -------- | ------------------ |
| INQUIRE_TYPE_STORM_LIST | 台风列表 | StormListBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="basin year key-ios" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.basin = BASIN_TYPE_NP;
    QWeatherConfigInstance.year = @"2021";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_STORM_LIST WithSuccess:^(StormListBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### 返回数据

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}

## 台风实况和路径

台风实况和路径提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度。

| 接口代码（枚举） | 接口 | 数据类 |
| ---------------- || -------------- ---------------------- |
| INQUIRE_TYPE_STORM_TRACK| 台风实况和路径   | StormNowTrackBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="stormid-sdk key-ios" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.stormID = @"NP_2102";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_STORM_TRACK WithSuccess:^(StormNowTrackBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### 返回数据

{% include api-response.html group="storm" type="active now track"  prefix="nil now track"%}

## 台风预报

台风预报提供全球主要海洋流域的热带低气压（台风）的预报信息，包括台风预测位置、等级、气压、风力、速度

| 接口代码（枚举）            | 接口     | 数据类                 |
| --------------------------- | -------- | ---------------------- |
| INQUIRE_TYPE_STORM_FORECAST | 台风预报 | StormForecastBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="stormid-sdk key-ios" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.stormID = @"NP_2102";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_STORM_FORECAST WithSuccess:^(StormForecastBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### 返回数据

{% include api-response.html group="storm" type="forecast" prefix="forecast"  %}

## 台风等级

GBT 19201-2006

| 热带气旋等级        | 底层中心附近最大平均风速(m/s) | 底层中心附近最大风力(级) |
| ------------------- | ----------------------------- | ------------------------ |
| 热带气压（TD）      | 10.8-17.1                     | 6-7                      |
| 热带风暴（TS）      | 17.2-24.4                     | 8-9                      |
| 强热带风暴（STS）   | 24.5-32.6                     | 10-11                    |
| 台风（TY）          | 32.7-41.4                     | 12-13                    |
| 强台风（STY）       | 41.5-50.9                     | 14-15                    |
| 超强台风（SuperTY） | ≥51.0                         | 16或以上                 |
