<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-12 09:35:35
 * @FilePath: /dev-site/docs/_en/ios-sdk/indices/ios-indices-forecast.md
-->
---
title: Weather Indices Forecast
tag: [guide, ios, indices, forecast]
ref: 1-sdk-ios-indices-forecast
---

Get weather indices forecast data for cities in China and around the world.

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

| Interface code   | Interface             | Class            |
| ---------------- | ------------------ | ---------------- |
| indices1d: | Today Weather Indices           | IndicesResponse |
| indices3d: | Weather Indices 3-days forecast | IndicesResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def idx-type-ios" %}

### Sample Code

Swift

```swift
   Task{
        do {
            let parameter = IndicesParameter(location: "101120501", type: [.CW,.DRSG])

            /**
            * Get 1-day weather indices data
            */
            let _ = try await QWeather.instance.indices1d(parameter)
            
            /**
            * Get 3-day weather indices data
            */
            let _ = try await QWeather.instance.indices3d(parameter)

        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
        }
   }
```

Objective-C

```objc
    IndicesParameter *parameter = [IndicesParameter makeWithLocation:@"101120501" type:@[@(IndicesTypeCW),@(IndicesTypeDRSG)]];

    void (^handler)(IndicesResponse *, NSError *) = ^(IndicesResponse *response,
        NSError *error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    };
    
    /**
    * Get 1-day weather indices data
    */
    [QWeatherObjc indices1d:parameter lang:LangTypeZH_HANS completionHandler:handler];

    /**
    * Get 3-day weather indices data
    */
    [QWeatherObjc indices3d:parameter lang:LangTypeZH_HANS completionHandler:handler];
```

### Response

{% include api-response.html group="indices" prefix="daily" %}

### Index type and level

See [Indices Info](/en/docs/resource/indices-info/).



