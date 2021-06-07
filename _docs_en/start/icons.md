---
title: Weather Icons
tag: start
toc: false
description: QWeather provides 2 beautiful sets of icons for our weather APIs and SDK, we also provide the .ai source file, so you can edit them freely.
ref: 5-start-icons
---

QWeather provides two sets of beautiful weather icons, which are used to display weather conditions in graphics on your products. In the weather icon S1 version, we also provide source files in `.ai` format. You can freely crop out the size or edit the color of the icon.

![Icon screenshot](/assets/images/content/qweather-icon-screenshot.png)

## Download

```
git clone https://github.com/qwd/WeatherIcon.git
```

Or [download from Github](https://github.com/qwd/WeatherIcon){: target="_blank"}

## Use

- The parameter `iconCode` in API/SDK is the icon file name, with file format is .png
- Some icons are different during the day and night, such as `100.png` for sunny day and `150.png` for clear night.
- Weather icon and code will be changed or deleted, please update in time.

## Icon code

| 图标代码 icon code | 天气状况         | weather                 | 白天 day | 夜晚 night |
| ------------------ | ---------------- | ----------------------- | -------- | ---------- |
| 100                | 晴               | Sunny                   | &bull;   | &times;    |
| 101                | 多云             | Cloudy                  | &bull;   | &bull;     |
| 102                | 少云             | Few Clouds              | &bull;   | &bull;     |
| 103                | 晴间多云         | Partly Cloudy           | &bull;   | &times;    |
| 104                | 阴               | Overcast                | &bull;   | &times;    |
| 150                | 晴               | Clear                   | &times;  | &bull;     |
| 153                | 晴间多云         | Partly Cloudy           | &times;  | &bull;     |
| 154                | 阴               | Overcast                | &times;  | &bull;     |
| 300                | 阵雨             | Shower Rain             | &bull;   | &times;    |
| 301                | 强阵雨           | Heavy Shower Rain       | &bull;   | &times;    |
| 302                | 雷阵雨           | Thundershower           | &bull;   | &bull;     |
| 303                | 强雷阵雨         | Heavy Thunderstorm      | &bull;   | &bull;     |
| 304                | 雷阵雨伴有冰雹   | Thundershower with hail | &bull;   | &bull;     |
| 305                | 小雨             | Light Rain              | &bull;   | &bull;     |
| 306                | 中雨             | Moderate Rain           | &bull;   | &bull;     |
| 307                | 大雨             | Heavy Rain              | &bull;   | &bull;     |
| 308                | 极端降雨         | Extreme Rain            | &bull;   | &bull;     |
| 309                | 毛毛雨/细雨      | Drizzle Rain            | &bull;   | &bull;     |
| 310                | 暴雨             | Storm                   | &bull;   | &bull;     |
| 311                | 大暴雨           | Heavy Storm             | &bull;   | &bull;     |
| 312                | 特大暴雨         | Severe Storm            | &bull;   | &bull;     |
| 313                | 冻雨             | Freezing Rain           | &bull;   | &bull;     |
| 314                | 小到中雨         | Light to moderate rain  | &bull;   | &bull;     |
| 315                | 中到大雨         | Moderate to heavy rain  | &bull;   | &bull;     |
| 316                | 大到暴雨         | Heavy rain to storm     | &bull;   | &bull;     |
| 317                | 暴雨到大暴雨     | Storm to heavy storm    | &bull;   | &bull;     |
| 318                | 大暴雨到特大暴雨 | Heavy to severe storm   | &bull;   | &bull;     |
| 399                | 雨               | Rain                    | &bull;   | &bull;     |
| 350                | 阵雨             | Shower Rain             | &times;  | &bull;     |
| 351                | 强阵雨           | Heavy Shower Rain       | &times;  | &bull;     |
| 400                | 小雪             | Light Snow              | &bull;   | &bull;     |
| 401                | 中雪             | Moderate Snow           | &bull;   | &bull;     |
| 402                | 大雪             | Heavy Snow              | &bull;   | &bull;     |
| 403                | 暴雪             | Snowstorm               | &bull;   | &bull;     |
| 404                | 雨夹雪           | Sleet                   | &bull;   | &bull;     |
| 405                | 雨雪天气         | Rain And Snow           | &bull;   | &bull;     |
| 406                | 阵雨夹雪         | Shower Snow             | &bull;   | &times;    |
| 407                | 阵雪             | Snow Flurry             | &bull;   | &times;    |
| 408                | 小到中雪         | Light to moderate snow  | &bull;   | &bull;     |
| 409                | 中到大雪         | Moderate to heavy snow  | &bull;   | &bull;     |
| 410                | 大到暴雪         | Heavy snow to snowstorm | &bull;   | &bull;     |
| 499                | 雪               | Snow                    | &bull;   | &bull;     |
| 456                | 阵雨夹雪         | Shower Snow             | &times;  | &bull;     |
| 457                | 阵雪             | Snow Flurry             | &times;  | &bull;     |
| 500                | 薄雾             | Mist                    | &bull;   | &bull;     |
| 501                | 雾               | Foggy                   | &bull;   | &bull;     |
| 502                | 霾               | Haze                    | &bull;   | &bull;     |
| 503                | 扬沙             | Sand                    | &bull;   | &bull;     |
| 504                | 浮尘             | Dust                    | &bull;   | &bull;     |
| 507                | 沙尘暴           | Duststorm               | &bull;   | &bull;     |
| 508                | 强沙尘暴         | Sandstorm               | &bull;   | &bull;     |
| 509                | 浓雾             | Dense fog               | &bull;   | &bull;     |
| 510                | 强浓雾           | Strong fog              | &bull;   | &bull;     |
| 511                | 中度霾           | Moderate haze           | &bull;   | &bull;     |
| 512                | 重度霾           | Heavy haze              | &bull;   | &bull;     |
| 513                | 严重霾           | Severe haze             | &bull;   | &bull;     |
| 514                | 大雾             | Heavy fog               | &bull;   | &bull;     |
| 515                | 特强浓雾         | Extra heavy fog         | &bull;   | &bull;     |
| 900                | 热               | Hot                     | &bull;   | &bull;     |
| 901                | 冷               | Cold                    | &bull;   | &bull;     |
| 999                | 未知             | Unknown                 | &bull;   | &bull;     |

## Copyright

<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">The weather icons in this page are created</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://www.qweather.com" property="cc:attributionName" rel="cc:attributionURL">QWeather</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

You are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially. 

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. 
- **No additional restrictions** - You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. 