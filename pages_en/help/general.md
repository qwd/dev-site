---
title: General
tag: faq
description: Having trouble using the QWeather data service? Learn about difference between free and business service? Feel free to visit our help center, where we provide detailed development documentation and help content.
redirect_from: /en/help/
ref: 1-help-general
---

## Commercial use

For different services and products, we have different licenses for.

- To purchase and use the business paid version API/SDK data, you **CAN** use it for any commercial purposes.
- Using the free development version of the API/SDK data, you **CAN NOT** use it for any commercial purposes.
- Using the free weather widget, you **CAN** use it for any commercial purposes.
- [Open Weather Plus](/en/docs/owp/) is under the terms of the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0) .
- QWeather [Icons](/en/docs/resource/icons/) is under the terms of [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/deed.zh) license.

> **Definition of Commercial Purposes:** Using QWeather data service to develop any products for the public, or corporate actions that can directly or indirectly obtain economic benefits.

## Business vs Free {#biz-vs-free}

|&nbsp;|Pro|Performance|Free Dev<br /><small>Registered User</small>|Free Dev<br /><small>Developer</small>|
|--|:---:|:---:|:---:|:---:|
|[City<sup>?</sup>](/en/help/data/#cities)|Worldwide|Worldwide|Worldwide|Worldwide|
|Weather Forecast|3-15 days|3-15 days|3 days|3-15 days|
|Weather Hourly forecast|168hrs|168hrs|&times;|24hrs|
|Real-time Weather|&#10003;|&#10003;|&#10003;|&#10003;|
|POI Weather|&#10003;|&#10003;|&times;|&times;|
|Historical Weather|&#10003;|&#10003;|&times;|&times;|
|Warning|&#10003;|&#10003;|&times;|&#10003;|
|Minutely Precip|&#10003;|&#10003;|&times;|&#10003;|
|Weather Indices|&#10003;|&#10003;|&times;|&#10003;|
|Real-time Air Quality|&#10003;|&#10003;|&#10003;|&#10003;|
|Air Quality Forecast|5 days|5 days|&times;|5 days|
|Sunrise and Sunset|&#10003;|&#10003;|&times;|&#10003;|
|Moonrise and Moonset|&#10003;|&#10003;|&times;|&#10003;|
|Moon Phases|&#10003;|&#10003;|&times;|&#10003;|
|Tide|&#10003;|&#10003;|&times;|&times;|
|Currents|&#10003;|&#10003;|&times;|&times;|
|Typhoon|&#10003;|&#10003;|&times;|&times;|
|Imagery|&#10003;|&#10003;|&times;|&times;|
|Price|[Pay as you go<sup>?</sup>](/en/help/buy/#price)|[Pay as you go<sup>?</sup>](/en/help/buy/#price)|Free|Free|
|API calls|On-demand|On-demand|1000/day|16700/day|
|SDK calls|On-demand|On-demand|1000/day|Unlimited|
|[Global Routing<sup>?</sup>](/en/help/buy/#server-node)|&#10003;|&#10003;|Only China Node|Only China Node|
|Number of KEYs|10/Application|10/Application|3/Application|10/Application|
|[QPM<sup>?</sup>](/en/docs/resource/glossary/#qpm)|3,000|50,000|300|500|
|[Max Connections<sup>?</sup>](/en/docs/resource/glossary/#max-connections)|3,000|50,000|100|100|
|Bandwidth|Shared|Dedicated|Shared|Shared|
|Server|Shared|Dedicated|Shared|Shared|
|Custom API Domains|&times;|&#10003;|&times;|&times;|
|SLA|99.9%|99.95%|95%|95%|
|Support|Ticket<br />Email<br />Phone|Ticket<br />Email<br />Phone|&times;|Ticket|
|[Commercial Use<sup>?</sup>](/en/help/buy/#commercial-use)|&#10003;|&#10003;|&times;|&times;|

## How many cities are supported

QWeather supports weather data for 3000+ cities in China and 150,000+ cities around the world.

## What is the data applications? {#applications}

You can create data applicationss for your products in the [Console](https://console.qweather.com/?lang=en), and create multiple KEYs in the data applicationss for getting weather data.

Please refer to [Create Application and KEY](/en/docs/resource/get-key/) for how to create the data application.

## Do I need to specify the source of the data? {#attribution} 

Yes, according to our [Terms of Use](https://www.qweather.com/en/terms/tos) you are required to indicate the source of the data on the product/service that uses our weather data. 

## When will the free calls be updated? {#free-calls-reset}

Free API Calls are reset at 00:00(UTC+8).

## How often is the weather data updated? {#update-time}

Please refer to [here](/en/docs/resource/glossary#update-time)

## Weather icon

The weather icons are free to use, see [here](/en/docs/resource/icons/).

## Location list

We provide [List of Chinese cities and POI](/en/docs/resource/location-list/), for the rest of the world, please use [GeoAPI](/en/docs/api/geo/) to find more IDs.

## Multiple languages {#language}

Yes, we support [more than 30 languages](/en/docs/resource/language/) and are adding more from time to time. The multi-language feature not only provides multi-language support for weather conditions and other content, but also includes support for global city names and aliases. You can simply add the `lang=xx` parameter to the request to get the corresponding language.

## Disclaimer

QWeather will endeavours to ensure the stability, accuracy, completeness and timeliness of our services, but due to the internet environment, laws and regulations, and current industry technical capabilities, we are unable to make such guarantees, and:

1. QWeather shall not be responsible for any damage resulting from the use of our services.
2. QWeather's geographic data services does not represent our expression of any opinion on the legal status of countries, territories, cities, regions, or their authorities, or on the delimits of their boundaries.
3. We do not guarantee the availability of any hyperlink to a third party on this website, nor do we imply the recognition or recommendation of a third party by QWeather.
   
Please refer to the full [disclaimer](https://www.qweather.com/en/terms/disclaimer/).

> For more help, please submit a ticket in [Console](https://console.qweather.com/?lang=en) or send an email to support@qweather.com