---
title: Wind Info
tag: resource
description: Learn about the relationship between wind speed and wind scale (Beaufort scale), and how to read wind direction in degree, wind 16 direction and wind 8 direction.
ref: res-wind
---

This document will describes the wind direction, wind speed and wind scale in the weather data.

## Wind Direction

Wind direction is generally reported by **the direction from which it originates**. For example, a north or northerly wind blows from the north to the south. In QWeather, we describe the specific wind direction by degree and direction.

In a geographic coordinate system, the wind has a total of 32 different directions, but only 16 directions are commonly used. China generally uses 8 directions to forecast wind directions[^1], so for cities in the China region, we only provide 8 wind directions, and use 16 wind directions for cities outside of China and for all Grid data.

### 16 wind directions

![16 wind direction rose](/assets/images/content/wind-direction-rose.png)
*16 wind direction rose. (Created by QWeather and published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Download [original image](https://github.com/qwd/dev-site/raw/master/assets/images/content/wind-direction-rose.png))*
{:.figimg}

16 wind direction：

| Direction       | Code | Degree(°) | Degree range(°) |
| --------------- | ---- | --------- | --------------- |
| North           | N    | 0         | 348.75 - 11.25  |
| North-Northeast | NNE  | 22.5      | 11.25 - 33.75   |
| Northeast       | NE   | 45        | 33.75 - 56.25   |
| East-Northeast  | ENE  | 67.5      | 56.25 - 78.75   |
| East            | E    | 90        | 78.75 - 101.25  |
| East-Southeast  | ESE  | 112.5     | 101.25 - 123.75 |
| Southeast       | SE   | 135       | 123.75 - 146.25 |
| South-Southeast | SSE  | 157.5     | 146.25 - 168.75 |
| South           | S    | 180       | 168.75 - 191.25 |
| South-Southwest | SSW  | 202.5     | 191.25 - 213.75 |
| Southwest       | SW   | 225       | 213.75 - 236.25 |
| West-Southwest  | WSW  | 247.5     | 236.25 - 258.75 |
| West            | W    | 270       | 258.75 - 281.25 |
| West-Northwest  | WNW  | 292.5     | 281.25 - 303.75 |
| Northwest       | NW   | 315       | 303.75 - 326.25 |
| North-Northwest | NNW  | 337.5     | 326.25 - 348.75 |

### 8 wind directions

8 wind direction is only available for China city weather data.

> **Tips:** In China's city weather, in addition to the 8 wind directions, there are two more wind directions: Rotational wind and no sustained wind direction.

| Direction    | Code       | Degree(°) | Degree range(°) |
| ------------ | ---------- | --------- | --------------- |
| North        | N          | 0         | 337.5 - 22.25   |
| Northeast    | NE         | 45        | 22.25 - 67.5    |
| East         | E          | 90        | 67.5 - 112.5    |
| Southeast    | SE         | 135       | 112.5 - 157.5   |
| South        | S          | 180       | 157.5 - 202.5   |
| Southwest    | SW         | 225       | 202.5 - 247.5   |
| West         | W          | 270       | 247.5 - 292.5   |
| Northwest    | NW         | 315       | 292.5 - 337.5   |
| Rotational   | Rotational | -999      | -               |
| No sustained | None       | -1        | -               |

> **Note:** In the `windDir`, if the language is set to Chinese, the Chinese direction name is responded, if it is set to other languages, the direction code is responded.
{:.bqwarning}

## Wind Speed

Unless otherwise noted, wind speed provided by QWeather are at 10 meters above ground level. Wind speed units are defaulted to kilometers per hour.

## Wind Scale

Wind scale is based on the [Beaufort wind force scale](https://en.wikipedia.org/wiki/Beaufort_scale), which divides the wind scale into 13 classes from 0-12. The Beaufort scale was extended in 1946 when forces 13 to 17 were added. However, forces 13 to 17 were intended to apply only to special cases, such as tropical cyclones. The extended scale is currently used only in a few countries and regions, and the China Meteorological Administration uses the extended scale in tropical cyclones.[^2]

Wind speed on the 1946 Beaufort scale is based on the empirical relationship:

> V = 0.836 ×（B<sup>3/2</sup>）
{:.bqcode}

Where `V` is the equivalent wind speed at 10 metres above the sea surface and `B` is Beaufort scale number. For example, B = 9.5 is related to 24.5 m/s which is equal to the lower limit of "10 Beaufort".

### Scale description

#### Beaufort scale 0-12

| Beaufort number | Description     | Wind Speed                                                   | Wave height | Sea conditions | Land conditions |
| -------- | --------------- | ------------------------------------------------------------ | ----------- | -------------- | --------------- |
| 0        | Calm            | < 1 knot<br> < 1 mph<br> < 2 km/h<br> < 0.5 m/s              | 0 m         | Sea like a mirror           | Smoke rises vertically      |
| 1        | Light air       | 1–3 knots<br> 1–3 mph<br> 2–5 km/h<br> 0.5–1.5 m/s           | 0.1 m       | Ripples with appearance of scales are formed, without foam crests   | Direction shown by smoke drift but not by wind vanes        |
| 2        | Light breeze    | 4–6 knots<br> 4–7 mph<br> 6–11 km/h<br> 1.6–3.3 m/s          | 0.2–0.5 m   | Small wavelets still short but more pronounced; crests have a glassy appearance but do not break   | Wind felt on face; leaves rustle; wind vane moved by wind        |
| 3        | Gentle breeze   | 7–10 knots<br> 8–12 mph<br> 12–19 km/h<br> 3.4–5.5 m/s       | 0.6–1.0 m   | Large wavelets; crests begin to break; foam of glassy appearance; perhaps scattered white horses   | Leaves and small twigs in constant motion; light flags extended       |
| 4        | Moderate breeze | 11–16 knots<br> 13–18 mph<br> 20–28 km/h<br> 5.5–7.9 m/s     | 1.0-1.5 m   | Small waves becoming longer; fairly frequent white horses   | Raises dust and loose paper; small branches moved.        |
| 5        | Fresh breeze    | 17–21 knots<br> 19–24 mph<br> 29–38 km/h<br> 8–10.7 m/s      | 2.0–2.5 m   | Moderate waves taking a more pronounced long form; many white horses are formed; chance of some spray   | Small trees in leaf begin to sway; crested wavelets form on inland waters      |
| 6        | Strong breeze   | 22–27 knots<br> 25–31 mph<br> 39–49 km/h<br> 10.8–13.8 m/s   | 3.0–4.0 m   | Large waves begin to form; the white foam crests are more extensive everywhere; probably some spray   | Large branches in motion; whistling heard in telegraph wires; umbrellas used with difficulty        |
| 7        | Near gale       | 28–33 knots<br> 32–38 mph<br> 50–61 km/h<br> 13.9–17.1 m/s   | 4.0–5.5 m   | Sea heaps up and white foam from breaking waves begins to be blown in streaks along the direction of the wind; spindrift begins to be seen   | Whole trees in motion; inconvenience felt when walking against the wind        |
| 8        | Gale            | 34–40 knots<br> 39–46 mph<br> 62–74 km/h<br> 17.2–20.7 m/s   | 5.5–7.5 m   | Moderately high waves of greater length; edges of crests break into spindrift; foam is blown in well-marked streaks along the direction of the wind   | Twigs break off trees; generally impedes progress       |
| 9        | Strong gale     | 41–47 knots<br> 47–54 mph<br> 75–88 km/h<br> 20.8–24.4 m/s   | 7.0–10.0 m  | High waves; dense streaks of foam along the direction of the wind; sea begins to roll; spray affects visibility       | Slight structural damage (chimney pots and slates removed)        |
| 10       | Storm           | 48–55 knots<br> 55–63 mph<br> 89–102 km/h<br> 24.5–28.4 m/s  | 9.0–12.5 m  | Very high waves with long overhanging crests; resulting foam in great patches is blown in dense white streaks along the direction of the wind; on the whole the surface of the sea takes on a white appearance; rolling of the sea becomes heavy; visibility affected   | Seldom experienced inland; trees uprooted; considerable structural damage        |
| 11       | Violent storm   | 56–63 knots<br> 64–72 mph<br> 103–117 km/h<br> 28.5–32.6 m/s | 11.5–16.0 m | Exceptionally high waves; small- and medium-sized ships might be for a long time lost to view behind the waves; sea is covered with long white patches of foam; everywhere the edges of the wave crests are blown into foam; visibility affected   | Very rarely experienced; accompanied by widespread damage       |
| 12       | Hurricane       | ≥ 64 knots<br> ≥ 73 mph<br> ≥ 118 km/h<br> ≥ 32.7 m/s        | ≥ 14.0 m    | The air is filled with foam and spray; sea is completely white with driving spray; visibility very seriously affected       | Devastation       |


#### Extend Beaufort scale 13-17

| Beaufort number | Wind Speed                                 | Wave height  | Typhoon level[^3] |
| -------- | ------------------------------------------------- | ----- | ---------------- |
| 13       | 72～80 knots<br> 134-149 km/h<br> 37.0-41.4 m/s   | >14 m | Typhoon (TY)          |
| 14       | 81～89 knots<br> 150-166 km/h<br> 41.5-46.1 m/s   | >14 m | Severe Typhoon (STY)       |
| 15       | 90～99 knots<br> 167-183 km/h<br> 46.2-50.9 m/s   | >14 m | Severe Typhoon (STY)       |
| 16       | 100～108 knots<br> 184-201 km/h<br> 51.0-56.0 m/s | >14 m | Super Typhoon (SuperTY) |
| 17       | 109～119 knots<br> 202-220 km/h<br> 56.1-61.2 m/s | >14 m | Super Typhoon (SuperTY) |
| >17      | ≧120 knots<br> ≥221 km/h<br> ≥61.3 m/s            | >14 m | Super Typhoon (SuperTY) |

[^1]: In practice, China's city weather forecasts on the description of wind direction are used 8 directions, the CMA also have a similar introduction: [天气预报用语解释](https://www.cma.gov.cn/kppd/kppdqxsj/kppdqxgc/201212/t20121212_195901.html)，[风矢和风力的等级划分](https://www.cma.gov.cn/2011xzt/kpbd/gale/2018050902/201807/t20180717_473666.html)
[^2]: [扩展的蒲福风力等级表](https://tcdata.typhoon.org.cn/zy_wind.html)，from [Typhoon Online](https://www.typhoon.org.cn)
[^3]: Refer to [《热带气旋等级 GBT 19201-2006》](https://tcdata.typhoon.org.cn/data/doc/TC_std.pdf)







