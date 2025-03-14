---
title: Solar Elevation Angle
tag: [guide, ios, astronomy, solar-elevation-angle]
ref: 3-sdk-ios-solar-elevation-angle
---

Get global solar elevation angle and azimuth.


| Interface code                   | Interface       | Class            |
| -------------------------------- | ---------- | ----------------- |
| astronomySolarElevationAngle: | Solar elevation angle data | AstronomySolarElevationAngleResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord date time tz alt" %}

### Sample Code

Swift

```swift
   Task {
         do {
            let currentDate = Date()
            let dateFormatter = DateFormatter()
            dateFormatter.dateFormat = "yyyMMdd"
            let date = dateFormatter.string(from: currentDate)
            
            let timeFormatter = DateFormatter()
            timeFormatter.dateFormat = "HHmm"
            timeFormatter.locale = Locale(identifier: "en_US_POSIX")
            let time = timeFormatter.string(from: currentDate)
            
            let parameter = SolarElevationAngleParameter(location: "101120501", date: date, time: time, tz: "0800", alt: "43")
            let response = try await QWeather.instance
                .astronomySolarElevationAngle(parameter)
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
    NSDate * current = [NSDate date];
    NSDateFormatter * formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyyMMdd"];
    NSString * date = [formatter stringFromDate:current];
    
    NSDateFormatter * timeFormatter = [[NSDateFormatter alloc] init];
    [timeFormatter setDateFormat:@"yyyyMMdd"];
    [timeFormatter setLocale:[NSLocale localeWithLocaleIdentifier:@"en_US_POSIX"]];
    NSString * time = [formatter stringFromDate:current];
    
    SolarElevationAngleParameter * parameter = [SolarElevationAngleParameter makeWithLocation:@"116.41,39.92" date:date time:time tz:@"0800" alt:@"43"]；
    [QWeatherObjc astronomySolarElevationAngle:parameter 
                               completionHandler:^(AstronomySolarElevationAngleResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}