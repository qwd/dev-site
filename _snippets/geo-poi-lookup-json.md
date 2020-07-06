---
title: POI信息搜索
---
{:.pre-scrollable}
```
// 使用模糊搜索关键字jings 
// https://geoapi.heweather.net/v2/poi/lookup?type=scenic&location=jings&mode=fuzzy&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "status": "200",
  "poi": [
    {
      "name": "景山公园",
      "id": "10101010012A",
      "lat": "39.91999",
      "lon": "116.38999",
      "adm2": "北京",
      "adm1": "北京",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "67",
      "fxLink": "-999"
    },
    {
      "name": "静思园",
      "id": "10119040702A",
      "lat": "31.15999",
      "lon": "120.68000",
      "adm2": "苏州",
      "adm1": "苏州",
      "country": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "scenic",
      "rank": "86",
      "fxLink": "-999"
    }
  ]
}
```