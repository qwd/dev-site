---
title: 天气灾害预警
tag: [guide, ios, warning, now]
ref: 1-sdk-ios-weather-warning
---

天气灾害预警iOS SDK可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。


| 接口代码（枚举）     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| INQUIRE_TYPE_WARNING | 灾害预警 | WarningBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-warning" %}

### 示例代码

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNING WithSuccess:^(WarningBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### 返回数据

{% include api-response.html group="warning" type="warning" prefix="warning" %}


### 预警类型和等级

查看[预警类型和等级](/docs/resource/warning-info/)