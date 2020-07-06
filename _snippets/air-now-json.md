---
title: 空气质量实况
---
```
// 北京空气质量实况 
// 商业版：https://api.heweather.net/v7/air/now?location=101010100&key=xxx
// 开发版：https://devapi.heweather.net/v7/air/now?location=101010100&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "code": "200",
  "updateTime": "2020-06-21T11:44+08:00",
  "fxLink": "https://www.heweather.com/air/beijing-101010100.html",
  "now": {
    "pubTime": "2020-06-21T11:00+08:00",
    "aqi": "82",
    "category": "良",
    "primary": "O3",
    "pm10": "82",
    "pm2p5": "39",
    "no2": "16",
    "so2": "5",
    "co": "0.7",
    "o3": "185"
  },
  "station": [
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "万寿西宫",
      "stationId": "CNA1001",
      "aqi": "64",
      "level": "2",
      "category": "良",
      "primary": "PM10",
      "pm10": "77",
      "pm2p5": "36",
      "no2": "17",
      "so2": "3",
      "co": "0.5",
      "o3": "166"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "定陵",
      "stationId": "CNA1002",
      "aqi": "103",
      "level": "3",
      "category": "轻度污染",
      "primary": "O3",
      "pm10": "95",
      "pm2p5": "35",
      "no2": "15",
      "so2": "3",
      "co": "0.7",
      "o3": "206"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "东四",
      "stationId": "CNA1003",
      "aqi": "102",
      "level": "3",
      "category": "轻度污染",
      "primary": "O3",
      "pm10": "67",
      "pm2p5": "36",
      "no2": "12",
      "so2": "5",
      "co": "0.6",
      "o3": "203"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "天坛",
      "stationId": "CNA1004",
      "aqi": "69",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "76",
      "pm2p5": "38",
      "no2": "12",
      "so2": "5",
      "co": "0.7",
      "o3": "175"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "农展馆",
      "stationId": "CNA1005",
      "aqi": "73",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "77",
      "pm2p5": "35",
      "no2": "13",
      "so2": "4",
      "co": "0.6",
      "o3": "178"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "官园",
      "stationId": "CNA1006",
      "aqi": "83",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "77",
      "pm2p5": "39",
      "no2": "15",
      "so2": "5",
      "co": "0.5",
      "o3": "186"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "海淀区万柳",
      "stationId": "CNA1007",
      "aqi": "97",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "74",
      "pm2p5": "36",
      "no2": "17",
      "so2": "6",
      "co": "0.7",
      "o3": "197"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "顺义新城",
      "stationId": "CNA1008",
      "aqi": "101",
      "level": "3",
      "category": "轻度污染",
      "primary": "O3",
      "pm10": "67",
      "pm2p5": "32",
      "no2": "18",
      "so2": "5",
      "co": "0.5",
      "o3": "202"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "怀柔镇",
      "stationId": "CNA1009",
      "aqi": "99",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "102",
      "pm2p5": "53",
      "no2": "26",
      "so2": "4",
      "co": "0.7",
      "o3": "199"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "昌平镇",
      "stationId": "CNA1010",
      "aqi": "78",
      "level": "2",
      "category": "良",
      "primary": "NA",
      "pm10": "106",
      "pm2p5": "57",
      "no2": "17",
      "so2": "3",
      "co": "0.7",
      "o3": "163"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "奥体中心",
      "stationId": "CNA1011",
      "aqi": "67",
      "level": "2",
      "category": "良",
      "primary": "PM10",
      "pm10": "84",
      "pm2p5": "30",
      "no2": "15",
      "so2": "3",
      "co": "0.5",
      "o3": "164"
    },
    {
      "pubTime": "2020-06-21T11:00+08:00",
      "stationName": "古城",
      "stationId": "CNA1012",
      "aqi": "67",
      "level": "2",
      "category": "良",
      "primary": "O3",
      "pm10": "72",
      "pm2p5": "33",
      "no2": "13",
      "so2": "5",
      "co": "0.6",
      "o3": "173"
    }
  ],
  "refer": {
    "sources": [
      "cnemc"
    ],
    "license": [
      "commercial license"
    ]
  }
}
```
{:.pre-scrollable}