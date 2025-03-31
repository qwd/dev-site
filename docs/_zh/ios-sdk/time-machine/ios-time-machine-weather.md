---
title: 天气时光机
tag: [guide, ios, time-machine, weather]
ref: 7-sdk-ios-historical-weather
---

获取最近10天的天气历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

> 和风天气额外提供了2000年至今的历史再分析气象数据，通过数据文件的形式发送，如需要长时间的历史气象数据数据，请提供下列信息，发送邮件至sales@qweather.com，我们将有专人与你联系:
> 
> * 企业名称
> * 联系方式
> * 所需要的城市或坐标
> * 所需要的时间范围

| 接口代码           | 接口          | 数据类                     |
| ---------------   | ----------- | -------------------------- |
| historicalWeather | 历史天气      | HistoricalWeatherResponse |

## 参数

**HistoricalWeatherParameter**

{% include params.html p="location-id date10back lang-def unit-def" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let threeDaysAgo = Calendar.current.date(byAdding: .day, value: -3, to: Date())!
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyyMMdd"
        let date = formatter.string(from: threeDaysAgo)
        let parameter = HistoricalWeatherParameter(location: "101010100", date: date)
        let response = try await QWeather.instance
            .historicalWeather(parameter)
        print(response)
    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
NSDate * threeDaysAgo = [[NSCalendar currentCalendar] dateByAddingUnit:NSCalendarUnitDay value:-3 toDate:[NSDate date] options:0];
NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
[formatter setDateFormat:@"yyyyMMdd"];
NSString * date = [formatter stringFromDate:threeDaysAgo];
HistoricalWeatherParameter *parameter = [HistoricalWeatherParameter instanceWithLocation:@"101010100" date:date lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc historicalWeather:parameter completionHandler:^(HistoricalWeatherResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```
## 返回数据

**HistoricalWeatherResponse**

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
