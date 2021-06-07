---
title: GeoAPI
tag: api
data: geo
version: v2
toc: false
description: QWeather GeoAPI provides global geographic location and global city search services, supports longitude and latitude coordinates reverse check, multi-language, fuzzy search and other functions.
ref: api-geo
---

Weather data is based on geographic location, so you need to know specific location information before getting the weather. QWeather provides a powerful GeoAPI service, which can obtain the basic information of the location that needs to be queried, including the location ID of the city or POI (you need this ID to query the weather), multilingual name, latitude and longitude, time zone, altitude, Rank value, administrative division, etc.

In addition, the GeoAPI service can also help you:

- Avoid the trouble of the same name city
- Supported fuzzy search
- Return multiple city results based on the name entered by the user in your APP or website
- Display popular cities in your APP or website
- No need to maintain the city list, city information updates are obtained in real time

{% include list-by-data.html %}