---
title: 3天生活指数预报
---
```
// 北京3天运动指数与洗车指数
// 商业版：https://api.qweather.net/v7/indices/3d?type=1,2&location=101010100&key=xxx
// 开发版：https://devapi.qweather.net/v7/indices/3d?type=1,2&location=101010100&key=xxx
// 请将示例请求URL中的KEY更换成你自己的KEY

{
  "code": "200",
  "updateTime": "2020-06-21T12:57+08:00",
  "daily": [
    {
      "date": "2020-06-21",
      "type": "1",
      "name": "运动指数",
      "level": "2",
      "category": "较适宜",
      "txt": "天气较好，但因气温较高且风力较强，请适当降低运动强度并注意户外防风。"
    },
    {
      "date": "2020-06-21",
      "type": "2",
      "name": "洗车指数",
      "level": "2",
      "category": "较不宜",
      "txt": "较不宜洗车，未来一天无雨，风力较大，如果执意擦洗汽车，要做好蒙上污垢的心理准备。"
    },
    {
      "date": "2020-06-22",
      "type": "1",
      "name": "运动指数",
      "level": "2",
      "category": "较适宜",
      "txt": "天气较好，但因气温较高且风力较强，请适当降低运动强度并注意户外防风。"
    },
    {
      "date": "2020-06-22",
      "type": "2",
      "name": "洗车指数",
      "level": "3",
      "category": "较不宜",
      "txt": "较不宜洗车，未来一天无雨，风力较大，如果执意擦洗汽车，要做好蒙上污垢的心理准备。"
    },
    {
      "date": "2020-06-23",
      "type": "1",
      "name": "运动指数",
      "level": "2",
      "category": "较适宜",
      "txt": "天气较好，较适宜进行各种运动，但因天气热，请适当减少运动时间，降低运动强度。"
    },
    {
      "date": "2020-06-23",
      "type": "2",
      "name": "洗车指数",
      "level": "1",
      "category": "适宜",
      "txt": "适宜洗车，未来持续两天无雨天气较好，适合擦洗汽车，蓝天白云、风和日丽将伴您的车子连日洁净。"
    }
  ],
  "refer": {
    "sources": [],
    "license": [
      "commercial license"
    ]
  }
}
```