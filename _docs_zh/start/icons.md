---
title: 天气图标
tag: start
toc: false
description: 和风天气提供了两套漂亮的天气图标，用于在你的产品上使用图形展示天气状况。在天气图标S1版中我们还提供了.ai格式的源文件，你可以自由的裁剪出适合你的尺寸或者编辑图标的颜色。天气图标采用署名-非商业性使用 4.0 中国大陆 (CC BY-NC 4.0 CN)许可协议授权
ref: 5-start-icons
---

和风天气提供了两套漂亮的天气图标，用于在你的产品上使用图形展示天气状况。在天气图标S1版中我们还提供了`.ai`格式的源文件，你可以自由的裁剪出适合你的尺寸或者编辑图标的颜色。

![图标截图](/assets/images/content/qweather-icon-screenshot.png)

## 下载

```
git clone https://github.com/qwd/WeatherIcon.git
```

或者[访问我们的Github下载](https://github.com/qwd/WeatherIcon){: target="_blank"}

## 使用
* API返回的`icon`即为图标文件名，也等同于为天气代码，文件格式为**PNG**。
* 一些图标适用于白天和夜晚，另一些在白天和夜晚是不同的图标，例如**100.png表示白天的晴**，**150.png表示夜晚的晴**。
* 不建议储存图标代码，天气状况可能会有变更或删减。

## 图标代码和天气对照表

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

## 版权

本页面包含的天气图标由<a xmlns:cc="http://creativecommons.org/ns#" href="https://www.qweather.com" property="cc:attributionName" rel="cc:attributionURL">和风天气</a>采用<a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.zh" target="_blank" rel="noopener noreferrer">知识共享 署名 4.0 国际 许可协议</a>进行许可。

您可以自由地：

- **共享** — 在任何媒介以任何形式复制、发行本作品。
- **演绎** — 修改、转换或以本作品为基础进行创作，在任何用途下，甚至商业目的。 

惟须遵守下列条件：

- **署名** — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书。
- **没有附加限制** — 您不得适用法律术语或者技术措施从而限制其他人做许可协议允许的事情。

