---
title: 3天预报
---
{:.pre-scrollable}
```
// 北京3天预报 
// 商业版 https://api.heweather.net/v7/weather/3d?location=101010100&key=xxx
// 开发版 https://devapi.heweather.net/v7/weather/3d?location=101010100&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "code": "200",
  "updateTime": "2020-06-14T16:57+08:00",
  "fxLink": "https://www.heweather.com/weather/beijing-101010100.html",
  "daily": [
    {
      "fxDate": "2020-06-14",
      "sunrise": "04:45",
      "sunset": "19:44",
      "moonrise": "01:05",
      "moonset": "12:53",
      "tempMax": "35",
      "tempMin": "22",
      "iconDay": "100",
      "textDay": "晴",
      "iconNight": "150",
      "textNight": "晴",
      "wind360Day": "358",
      "windDirDay": "北风",
      "windScaleDay": "1-2",
      "windSpeedDay": "8",
      "wind360Night": "234",
      "windDirNight": "西南风",
      "windScaleNight": "1-2",
      "windSpeedNight": "6",
      "humidity": "22",
      "precip": "0.0",
      "pressure": "1001",
      "vis": "25",
      "uvIndex": "11"
    },
    {
      "fxDate": "2020-06-15",
      "sunrise": "04:45",
      "sunset": "19:45",
      "moonrise": "01:29",
      "moonset": "13:51",
      "tempMax": "36",
      "tempMin": "22",
      "iconDay": "100",
      "textDay": "晴",
      "iconNight": "150",
      "textNight": "晴",
      "wind360Day": "6",
      "windDirDay": "北风",
      "windScaleDay": "1-2",
      "windSpeedDay": "2",
      "wind360Night": "220",
      "windDirNight": "西南风",
      "windScaleNight": "1-2",
      "windSpeedNight": "5",
      "humidity": "30",
      "precip": "0.0",
      "pressure": "999",
      "vis": "25",
      "uvIndex": "11"
    },
    {
      "fxDate": "2020-06-16",
      "sunrise": "04:45",
      "sunset": "19:45",
      "moonrise": "01:52",
      "moonset": "14:49",
      "tempMax": "35",
      "tempMin": "24",
      "iconDay": "100",
      "textDay": "晴",
      "iconNight": "150",
      "textNight": "晴",
      "wind360Day": "235",
      "windDirDay": "西南风",
      "windScaleDay": "3-4",
      "windSpeedDay": "18",
      "wind360Night": "206",
      "windDirNight": "西南风",
      "windScaleNight": "1-2",
      "windSpeedNight": "5",
      "humidity": "30",
      "precip": "0.0",
      "pressure": "994",
      "vis": "25",
      "uvIndex": "11"
    }
  ],
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