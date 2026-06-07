---
title: City Lookup
tag:
- guide
- api
- geo
- city-lookup
ref: 1-api-city-lookup
translationKey: 1-api-city-lookup
type: docs
---

City Lookup provides reverse geocoding, geolocation lookup services, supports multi-language, fuzzy search and other functions.

With the City Lookup, you can get the basic information of the city, including the Location ID of the city (you need this ID to get the weather), multilingual name, latitude and longitude, time zone, altitude, rank, administrative, etc.

In addition, GeoAPI - City Lookup can also help you to implement fuzzy search in your APP, users only need to type 1 or 2 words to get results.

## Endpoint

{{< api-url apidata="geo-city-lookup" >}}

## Parameters

#### Query parameters

{{< params p="location-geo" >}}

> **Fuzzy search**, when the location passed as text, fuzzy search is supported, users can only enter a part of the city name to search, at least one Chinese character or 2 characters, and the results are sorted by correlation and [Rank](/en/docs/resource/glossary/#rank). It is easy for developers or users to choose which city they need to see the weather. For example, `location=bei` will return some of the most relevant results to **bei**, including Beirut in Lebanon and Beijing in China

> **Duplicate name**, when the location is passed as text, cities with the same name may appear, such as Xi'an in Shaanxi Province, Xi'an District under Liaoyuan City in Jilin Province, and Xi'an District under Mudanjiang City in Heilongjiang Province. At this time, all results will be returned according to the [Rank](/en/docs/resource/glossary/#rank). In this case, you can use the `adm` parameter to further determine the city or region that needs to be queried, for example, `location=Xi’an&adm=Heilongjiang`

{{< params p="adm" >}}

> If with `adm`, like `location=chaoyang&adm=beijing`, the returned results only include Chaoyang District in Beijing, not Chaoyang City in Liaoning Province
>
> If without `adm`, like `location=chaoyang`, the returned results include Chaoyang District in Beijing, Chaoyang City in Liaoning Province, and Chaoyang District in Changchun City

{{< params p="range number lang-def" >}}

## Request example

{{< api-url-example apidata="geo-city-lookup" >}}

## Response

{{< api-snippet >}}

{{< api-response group="geo" type="location" prefix="location" update="0" fxlink="0" >}}
