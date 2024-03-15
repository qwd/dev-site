---
title: aq-v1-now-v1
---
```json
{
  "code": "200",
  "updateTime": "2023-02-11T10:20+08:00",
  "aqi": [
    {
      "code": "cn-mee-1h",
      "name": "AQI-1H (CN)",
      "defaultLocalAqi": true,
      "value": 37,
      "valueDisplay": "37",
      "level": "1",
      "category": "优",
      "color": "0,228,0",
      "health": {
        "effect": "空气质量令人满意，基本无空气污染。",
        "advice": {
          "generalPopulation": "各类人群可正常活动。",
          "sensitivePopulation": "各类人群可正常活动。"
        }
      }
    },
    {
      "code": "cn-mee",
      "name": "AQI (CN)",
      "defaultLocalAqi": false,
      "value": 55,
      "valueDisplay": "55",
      "level": "2",
      "category": "良",
      "color": "255,255,0",
      "primaryPollutant": {
        "code": "pm10",
        "name": "PM 10",
        "fullName": "颗粒物（粒径小于等于10µm）"
      },
      "health": {
        "effect": "空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响。",
        "advice": {
          "generalPopulation": "一般人群可正常活动。",
          "sensitivePopulation": "极少数异常敏感人群应减少户外活动。"
        }
      }
    }
  ],
  "pollutant": [
    {
      "code": "pm2p5",
      "name": "PM 2.5",
      "fullName": "颗粒物（粒径小于等于2.5µm）",
      "concentration": {
        "value": 25.0,
        "unit": "μg/m3"
      },
      "subIndex": {
        "value": 37,
        "valueDisplay": "37"
      }
    },
    {
      "code": "pm10",
      "name": "PM 10",
      "fullName": "颗粒物（粒径小于等于10µm）",
      "concentration": {
        "value": 36.0,
        "unit": "μg/m3"
      },
      "subIndex": {
        "value": 37,
        "valueDisplay": "37"
      }
    },
    {
      "code": "no2",
      "name": "NO2",
      "fullName": "二氧化氮",
      "concentration": {
        "value": 41.0,
        "unit": "μg/m3"
      },
      "subIndex": {
        "value": 21,
        "valueDisplay": "21"
      }
    },
    {
      "code": "o3",
      "name": "O3",
      "fullName": "臭氧",
      "concentration": {
        "value": 49.0,
        "unit": "μg/m3"
      },
      "subIndex": {
        "value": 16,
        "valueDisplay": "16"
      }
    },
    {
      "code": "so2",
      "name": "SO2",
      "fullName": "二氧化硫",
      "concentration": {
        "value": 6.0,
        "unit": "μg/m3"
      },
      "subIndex": {
        "value": 3,
        "valueDisplay": "3"
      }
    },
    {
      "code": "co",
      "name": "CO",
      "fullName": "一氧化碳",
      "concentration": {
        "value": 0.5,
        "unit": "mg/m3"
      },
      "subIndex": {
        "value": 6,
        "valueDisplay": "6"
      }
    }
  ],
  "station": [
    {
      "id": "P5697",
      "name": "普陀"
    },
    {
      "id": "P54852",
      "name": "十五厂"
    },
    {
      "id": "P57823",
      "name": "虹口"
    },
    {
      "id": "P55605",
      "name": "徐汇上师大"
    },
    {
      "id": "P53057",
      "name": "杨浦四漂"
    },
    {
      "id": "P5663",
      "name": "静安监测站"
    },
    {
      "id": "P53991",
      "name": "浦东川沙"
    },
    {
      "id": "P53763",
      "name": "浦东新区监测站"
    },
    {
      "id": "P5659",
      "name": "浦东张江"
    },
    {
      "id": "P54024",
      "name": "宝山庙行"
    },
    {
      "id": "P51755",
      "name": "崇明上实东滩"
    },
    {
      "id": "P59043",
      "name": "嘉定南翔"
    },
    {
      "id": "P5991",
      "name": "金山新城"
    },
    {
      "id": "P56226",
      "name": "闵行浦江"
    },
    {
      "id": "P56748",
      "name": "青浦徐泾"
    },
    {
      "id": "P56697",
      "name": "松江图书馆"
    },
    {
      "id": "P56700",
      "name": "长宁仙霞"
    },
    {
      "id": "P52014",
      "name": "浦东惠南"
    },
    {
      "id": "P51966",
      "name": "奉贤南桥新城"
    }
  ],
  "source": [
    "中国环境监测总站 (CNEMC)。数据仅为当天参考值，未经过完整的审核程序进行修订和确认，不适用评价达标状况或任何正式评估。"
  ]
}
```
