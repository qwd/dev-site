---
title: Time Machine for Weather
tag: [guide, ios, time-machine, weather]
ref: 7-sdk-ios-historical-weather
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> QWeather also provides historical reanalysis weather data from 2000 to present. If you need more historical weather data data, please provide the following information to <sales@qweather.com>.
> 
> * Company name
> * Contact information
> * City or coordinates
> * Date range

| Interface code      | Interface              | Class                      |
| ------------------- | ---------------------- | -------------------------- |
| historicalWeather:      | Historical weather     | HistoricalWeatherResponse      |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back lang-def unit-def" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let threeDaysAgo = Calendar.current.date(byAdding: .day, value: -3, to: Date())!
            let formatter = DateFormatter()
            formatter.dateFormat = "yyyyMMdd"
            let date = formatter.string(from: threeDaysAgo)
            let parameter = HistoricalWeatherParameter(location: "101120501", date: date)
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

Objective-C

```objc
    NSDate * threeDaysAgo = [[NSCalendar currentCalendar] dateByAddingUnit:NSCalendarUnitDay value:-3 toDate:[NSDate date] options:0];
    NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSString * date = [formatter stringFromDate:threeDaysAgo];
    HistoricalWeatherParameter *parameter = [HistoricalWeatherParameter instanceWithLocation:@"101120501" date:date lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
    [QWeatherObjc historicalWeather:parameter completionHandler:^(HistoricalWeatherResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
