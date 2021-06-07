---
title: Grid weather daily forecast
---
```
// 坐标116.41,39.92 3天预报
// Pro: https://api.qweather.com/v7/grid-weather/3d?location=116.41,39.92&key=你的KEY

{
  "code": "200",
  "updateTime": "2021-03-12T19:06+08:00",
  "fxLink": "http://hfx.link/1",
  "daily": [
    {
      "fxDate": "2021-03-12",
      "tempMax": "10",
      "tempMin": "8",
      "iconDay": "101",
      "iconNight": "302",
      "textDay": "多云",
      "textNight": "雷阵雨",
      "windDirDay": "西风",
      "windScaleDay": "3-4",
      "windScaleNight": "1-2"
    },
    {
      "fxDate": "2021-03-13",
      "tempMax": "16",
      "tempMin": "7",
      "iconDay": "101",
      "iconNight": "101",
      "textDay": "多云",
      "textNight": "多云",
      "windDirDay": "西风",
      "windScaleDay": "1-2",
      "windScaleNight": "1-2"
    },
    {
      "fxDate": "2021-03-14",
      "tempMax": "15",
      "tempMin": "8",
      "iconDay": "101",
      "iconNight": "154",
      "textDay": "多云",
      "textNight": "阴",
      "windDirDay": "西风",
      "windScaleDay": "3-4",
      "windScaleNight": "1-2"
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