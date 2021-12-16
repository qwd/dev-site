---
title: 实况天气
---

```
// Real-tiem weather for Beijing 
// Pro API:  https://api.qweather.com/v7/weather/now?location=101010100&lang=en&key=YOUR_KEY
// Dev API:  https://devapi.qweather.com/v7/weather/now?location=101010100&lang=en&key=YOUR_KEY

{
  "code": "200",
  "updateTime": "2021-02-14T15:26+08:00",
  "fxLink": "http://hfx.link/2ax1",
  "now": {
    "obsTime": "2021-02-14T15:03+08:00",
    "temp": "3",
    "feelsLike": "1",
    "icon": "104",
    "text": "Overcast",
    "wind360": "225",
    "windDir": "SW",
    "windScale": "2",
    "windSpeed": "6",
    "humidity": "89",
    "precip": "0.0",
    "pressure": "1029",
    "vis": "5",
    "cloud": "98",
    "dew": "2"
  },
  "refer": {
    "sources": [
      "QWeather",
      "NMC",
      "ECMWF"
    ],
    "license": [
      "commercial license"
    ]
  }
}
```