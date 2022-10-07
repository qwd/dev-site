---
title: Cache
tag: [bp, cache]
ref: bp-cache
---

Weather data is generally time-sensitive, however you can still consider setting up flexible and reasonable caching, which can effectively reduce server and bandwidth consumption and speed up user access.

> **Note:** Cache is not a mandatory requirement, please read this document carefully and then evaluate it fully based on your product, otherwise it may cause serious errors to your product. **Do not use cache if you are not sure, or if you cannot handle all scenarios.**
{:.bqwarning}

> **Warning:** You cannot cache or store all data provided in GeoAPI, this would violate our [terms of service](https://www.qweather.com/en/terms/developers-tos) and infringe copyright, and the copyright owner of such data may take legal action against you.
{:.bqdanger}

## Reasonable

For time-sensitive data, you should not set too long a cache time, for example, real-time weather, if you set more than 1 hour cache, it may cause the user to view the cooler temperature in the morning at noon.

> **Hint:** The interval between cached data and the original data is at most 2 times different, for example, your cache time and the update frequency of QWeather are both 60 minutes, QWeather released new data at 15:00, users access your product from 15:59, at 16:59 users get through your cache is still the data released at 15:00, in this case the interval between the cached data and the original data reaches 119 minutes.

## Flexible

Caching should be flexible, you should not set the same caching policy for all data or all times, otherwise your program can have fatal errors or crashes, so you must pay attention to the following scenarios.

- Cross-day, users may not be able to view the full weather data or may cause your app to have fatal errors.
  > **For example:** For daily forecasts, users view the 7-day forecast at 23:00, after 00:00, if you do not refresh the cache, the first day of the 7-day forecast that users see will become the previous day or only the 6-day forecast, and in extreme cases, your program may also report an error.
- Daylight saving time, to avoid time errors at the beginning and end of daylight saving time.
- Time zone, if you use caching on the server side, you need to pay attention to time zones. Each country will have a different time zone, and the flexible cache you set up should ensure that it works properly in different time zones.

## Clear cache

You should design a feature for your products that allows you to clear the cache immediately without having to re-release a new version.

## Recommended cache time

For different data caching times, we recommend the following. Less cache time allows for more timely data response and also includes additional fixes and optimizations we make to the data.

> **Note:** We increase the update frequency when the published data needs to be repaired.

> **Note:** The recommended cache times are not applicable to all scenarios and requirements and should be evaluated by your product. QWeather's data update times may also change.
{:.bqwarning}

| Products                    | Recommended cache time           | QWeather update interval |
| --------------------------- | -------------------------------- | ------------------------ |
| Weather: real-time          | 10-30min                         | 5-10min                  |
| Weather: hourly forecast    | 30-60min                         | 60min                    |
| Weather: daily forecast     | 1-6hrs                           | 60min                    |
| Warning                     | 5-20min                          | 3min                     |
| Indices                     | 6-12hrs                          | 60min                    |
| Minutely precip             | 5-10min                          | 5min                     |
| Air quality: real-time      | 30-60min                         | 30-60min                 |
| Air quality: daily forecast | 8-12hrs                          | 1-6hrs                   |
| Tide and currents           | 8-12hrs                          | 8hrs                     |
| Tropical cyclone            | Active 20min<br />Inactive 60min | 10-60min                 |
| Solar radiation             | 6hrs                             | 3-6hrs                   |

## Restrictions

You **CAN NOT** cache, store all the data provided in GeoAPI, which would be against our [Usage Restriction](/en/docs/terms/restriction/) and [Terms of Service](https://www.qweather.com/en/terms/developers-tos).

GeoAPI data comes from multiple Geo service providers with various copyright licenses. Most providers (almost all) license you to use it in real time, but prohibit you from bulk or permanent storage of this data, otherwise you may face serious legal risks.
