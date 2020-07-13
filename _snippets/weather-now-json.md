---
title: 实况天气
---
{:.pre-scrollable}
```
// 北京实况天气 
// 商业版 https://api.heweather.net/v7/weather/now?location=101010100&key=xxx
// 开发版 https://devapi.heweather.net/v7/weather/now?location=101010100&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "code": "200",
  "updateTime": "2020-06-30T22:00+08:00",
  "fxLink": "http://hfx.link/2ax1",
  "now": {
    "obsTime": "2020-06-30T21:40+08:00",
    "temp": "24",
    "feelsLike": "26",
    "icon": "101",
    "text": "多云",
    "wind360": "123",
    "windDir": "东南风",
    "windScale": "1",
    "windSpeed": "3",
    "humidity": "72",
    "precip": "0.0",
    "pressure": "1003",
    "vis": "16",
    "cloud": "10",
    "dew": "21"
  },
  "refer": {
    "sources": [
      "Weather China"
    ],
    "license": [
      "commercial license"
    ]
  }
}
```