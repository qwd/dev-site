---
title: 热门城市查询
---
{:.pre-scrollable}
```
// 中国热门城市前5位 
// https://geoapi.heweather.net/v2/city/top?number=5&range=cn&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "status": "200",
  "topCityList": [
    {
      "name": "余杭",
      "id": "101210106",
      "lat": "30.42118",
      "lon": "120.30173",
      "adm2": "杭州",
      "adm1": "浙江",
      "cnty": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "25",
      "fxLink": "https://www.heweather.com/weather/yuhang-101210106.html"
    },
    {
      "name": "嘉定",
      "id": "101020500",
      "lat": "31.38352",
      "lon": "121.25033",
      "adm2": "上海",
      "adm1": "上海",
      "cnty": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "23",
      "fxLink": "https://www.heweather.com/weather/jiading-101020500.html"
    },
    {
      "name": "杭州",
      "id": "101210101",
      "lat": "30.28745",
      "lon": "120.15357",
      "adm2": "杭州",
      "adm1": "浙江",
      "cnty": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "11",
      "fxLink": "https://www.heweather.com/weather/hangzhou-101210101.html"
    },
    {
      "name": "上海",
      "id": "101020100",
      "lat": "31.23170",
      "lon": "121.47264",
      "adm2": "上海",
      "adm1": "上海",
      "cnty": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "11",
      "fxLink": "https://www.heweather.com/weather/shanghai-101020100.html"
    },
    {
      "name": "萧山",
      "id": "101210102",
      "lat": "30.16293",
      "lon": "120.27069",
      "adm2": "杭州",
      "adm1": "浙江",
      "cnty": "中国",
      "tz": "Asia/Shanghai",
      "utcOffset": "+08:00",
      "isDst": "0",
      "type": "city",
      "rank": "23",
      "fxLink": "https://www.heweather.com/weather/xiaoshan-101210102.html"
    }
  ]
}
```