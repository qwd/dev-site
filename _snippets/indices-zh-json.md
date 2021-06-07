---
title: 3天生活指数预报
---
```
// 北京3天运动指数与洗车指数
// 商业版：https://api.qweather.com/v7/indices/1d?type=1,2&location=101010100&key=你的KEY
// 开发版：https://devapi.qweather.com/v7/indices/1d?type=1,2&location=101010100&key=你的KEY

{
  "code": "200",
  "updateTime": "2021-02-06T16:36+08:00",
  "fxLink": "http://hfx.link/2ax2",
  "daily": [
    {
      "date": "2021-02-06",
      "type": "2",
      "name": "洗车指数",
      "level": "2",
      "category": "较适宜",
      "text": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
    },
    {
      "date": "2021-02-06",
      "type": "1",
      "name": "运动指数",
      "level": "3",
      "category": "较不宜",
      "text": "天气较好，但考虑天气寒冷，推荐您进行室内运动，户外运动时请注意保暖并做好准备活动。"
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