---
title: Glossary
tag: resource
description: QWeather data service uses many professional terms, and we have adopted mostly international standard formats. Here we will explain in detail what QWeather coordinates, administrative divisions, KEY, time format, data update time, and etc.
redirect_from: /en/docs/start/glossary/
ref: res-glossary
---

## Project

**Project** is the container for QWeather Develop Service, which can also be understood as a product you need to develop, such as a "travel app" or a "graduation design". See [how to setup Project](/en/docs/configuration/project-and-key/).

## KEY

**KEY** is the key (or token) to get the QWeather Develop Service, you can create multiple KEYs for different businesses in a Project, for example "for iOS" or "Test Only". [how to setup Key](/en/docs/configuration/project-and-key/).

## Public ID

Public ID is the public key of a certain data KEY of the user. When you use [Signature Authentication](/en/docs/resource/signature-auth/) to obtain data, you need to pass the Public ID.

## Rank

Rank is an indication of the ranking of a city or region, it is calculated based on a variety of factors, such as: population, area, GDP, search popularity, etc. In GeoAPI, the response data will refer to the Rank value of the city in addition to the relevance of the keywords. The range of Rank is 1-10, 1 means that the city or region is more populous, larger or more popular.

## Coordinate

- The GCJ-02 coordinate system should be used in mainland China, and the WGS-84 coordinate system should be used in other regions.
- Query format: `Longitude, Latitude` (Longitude first and latitude second, separated by commas, decimal format, north latitude and east longitude are positive, and south latitude and west longitude are negative). For example: `location=116.41,39.92`

## Administrative

In various countries around the world, there are different administrative levels. In order to facilitate understanding and convenient inquiries about the correct weather information, all cities with QWeather will belong to at least two administrative division levels. Please note that the administrative division level of mild weather is not exactly equal to the actual administrative division level of each country.

- The code `adm1`, which represents the first-level administrative divisions, is generally the first-level administrative divisions of countries, such as provinces/states/prefectures/constituting countries. It is the first administrative division under the country, including municipalities/capitals/special zones, etc.
- The code `adm2`, which represents a sub-administrative division, is generally a direct administrative division of a specific city or region. For example, the sub-administrative division of Yuhang District is Hangzhou City, or the sub-administrative division of Manhattan is New York City. If the direct administrative division of a city is equal to the first-level administrative division, then the direct superior administrative division of the city is the city itself. For example, the first-level administrative division of Shenzhen is Guangdong Province and the secondary administrative division is Shenzhen.

## LocationID

LocationID is the ID of a city, region, or POI point. It is generally composed of numbers or letters + numbers, and is a unique identification of a location. LocationID can be obtained through the GeoAPI. The LocationID of China region and some POI points can also be downloaded through [City List](/en/docs/resource/location-list/).

## Adcode

Adcode is the Chinese administrative division code.

## ISO 3166

[ISO 3166](https://www.iso.org/iso-3166-country-codes.html) is a global country code standard issued by the International Organization for Standardization (ISO). The country code has two-letter codes, three-letter codes, and three-digit codes, and two-letter code (alpha-2) is used for QWeather.

## POI

Point of Interest, the concept of POI in the QWeather includes: airports, ports, railway stations, China's air quality monitoring stations and attractions.

## Date Time

QWeather uses [ISO8601:2004](https://en.wikipedia.org/wiki/ISO_8601) as all date and time expression formats in v7 and above. The date and time are in local time.

- Date format: YYYY-MM-DD, such as 2019-12-30, which represents December 30, 2019.
- Long time format: YYYY-MM-DDTHH:MM±timezone, for example, 2019-12-30T08:35+0800, representing East Eight District at 8:35 AM on December 30, 2019.
- Short time format: HH:MM, for example 20:31

## Timezone

Timezone, the field name in the API is `tz`, it is in tz database format, or [IANA time zone database](https://www.iana.org/time-zones).

## Daylight Saving Time

`isDST` indicates whether it is currently in daylight saving time. The time in the weather data has been adjusted for daylight saving time, so you don't need to do any further conversions.

## UTC Offset

In GeoAPI, `utcOffset` indicates the offset between the current time of the area/city and UTC time. This offset has taken into account the situation of some countries entering the daylight saving time, so this offset is not exactly the same as the time zone offset. For example, the time zone of New York is America/New_York, which is 5 hours away from UTC. When New York enters daylight saving time on the second Sunday of March each year, the local time in New York is different from UTC by -4 hours. At this time, the value of `utcOffset` is `-04:00`

## Public Time

`pubTime` is the time when the observing station or data source is released, and represents the time when the current data is released.

## Update Time

`updateTime` is different from `pubTime`. This time is the time when the QWeather system updates the data and represents the time of the last update of the currently data.

- The same `updateTime` can be used to determine whether the data content has changed, but different update times cannot be used to determine that the data content must have changed. In some cases, the calculation results of the meteorological model may get the same result at different update times .
- Due to weather data is constantly updated, the exact update time cannot be determined. Please refer to the `updateTime` field of the data returned by the API/SDK.

| Data | Update interval |
| ------------------ | ------------------------------ -------- |
| Warning | 5 minutes |
| Daily forecast | 1-8 hour |
| Hourly forecast| 1 hour |
| Weather indices | 1 hour |
| Real-time data | 10-20 minutes |
| Minutely rainfall | 10-20 minutes |
| Imagery | 30-60 minutes |

## iOS Bundle identifier

Check Bundle Identifier in Xcode.

Bundle ID is only support alphanumeric, dashes and underscores.

## Android Package Name

Open the **AndroidManifest.xml** configuration file of the Android project, and the content corresponding to the **package** attribute is the Package Name.

Android Package Name only support alphanumeric, dashes and underscores.

## Max Connections

The Maximum Connections that an API or SDK service can carry. When the connection exceeds the maximum number of connections limited by the current application, the new connection request will be discarded.

## QPM

QPM (Query Per Minute), the number of requests per minute. Requests exceeding the QPM will return an error code and resume after the next minute.

- Refer to [Subscription Comparison](/en/docs/finance/subscription/#comparison) for the value of QPM.. 
- QPM is calculated as separate projects, all data KEYs under one project share QPM, and different projects calculate QPM separately.

## Wind Scale

The Wind Scale is used for direct display and is not recommended as an enumerated item; for example, if a higher level of wind appears in the future or the standard of the wind level is changed, if the enumeration item is used, it will not be matched. Please use it with caution.

The Wind Scale is based on the wind speed, please refer to [Wind Speed ​​and Wind Speed ​​Comparison](https://www.qweather.com/en/blog/wind-speed-vs-wind-scale), and QWeather uses KM/H as the unit.

When the Wind Scale is 0, the wind direction angle is -1, and the wind direction is **no continuous wind direction**.