---
title: POI范围搜索
---
{:.pre-scrollable}
```
// 北京市中心附近5公里景点 
// https://geoapi.qweather.net/v2/poi/range?location=116.40528,39.90498&type=scenic&radius=10&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "status": "200",
  "poi": [
    {
      "name": "中山公园",
      "id": "10101010016A",
      "lat": "39.90999985",
      "lon": "116.38999939",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "86",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "故宫博物院",
      "id": "10101010018A",
      "lat": "39.90999985",
      "lon": "116.38999939",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "67",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "北京市规划展览馆",
      "id": "10101010002A",
      "lat": "39.88999939",
      "lon": "116.40000153",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "68",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "老舍茶馆",
      "id": "10101010021A",
      "lat": "39.88999939",
      "lon": "116.38999939",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "86",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "景山公园",
      "id": "10101010012A",
      "lat": "39.91999817",
      "lon": "116.38999939",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "67",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "北京明城墙遗址公园",
      "id": "10101010001A",
      "lat": "39.90000153",
      "lon": "116.43000031",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "70",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "明城墙遗址公园",
      "id": "10101010003A",
      "lat": "39.90000153",
      "lon": "116.43000031",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "85",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "北海公园",
      "id": "10101010010A",
      "lat": "39.91999817",
      "lon": "116.37999725",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "68",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "天坛公园",
      "id": "10101010004A",
      "lat": "39.88000107",
      "lon": "116.41000366",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "68",
      "fxLink": "http://hfx.link/1"
    },
    {
      "name": "南锣鼓巷",
      "id": "10101010005A",
      "lat": "39.93000031",
      "lon": "116.40000153",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "86",
      "fxLink": "http://hfx.link/1"
    }
  ],
  "refer": {
    "sources": [
      "qweather.com"
    ],
    "license": [
      "commercial license"
    ]
  }
}
```