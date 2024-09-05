---
title: aq-v1-now-v1
---
```json
{
  "metadata": {
    "tag": "d75a323239766b831889e8020cba5aca9b90fca5080a1175c3487fd8acb06e84"
  },
  "indexes": [
    {
      "code": "us-epa",
      "name": "AQI (US)",
      "aqi": 46,
      "aqiDisplay": "46",
      "level": "1",
      "category": "Good",
      "color": {
        "red": 0,
        "green": 228,
        "blue": 0,
        "alpha": 1
      },
      "primaryPollutant": {
        "code": "pm2p5",
        "name": "PM 2.5",
        "fullName": "Fine particulate matter (<2.5µm)"
      },
      "health": {
        "effect": "No health effects.",
        "advice": {
          "generalPopulation": "Everyone can continue their outdoor activities normally.",
          "sensitivePopulation": "Everyone can continue their outdoor activities normally."
        }
      }
    },
    {
      "code": "qaqi",
      "name": "QAQI",
      "aqi": 0.9,
      "aqiDisplay": "0.9",
      "level": "1",
      "category": "Excellent",
      "color": {
        "red": 80,
        "green": 240,
        "blue": 230,
        "alpha": 1
      },
      "primaryPollutant": {
        "code": "pm2p5",
        "name": "PM 2.5",
        "fullName": "Fine particulate matter (<2.5µm)"
      },
      "health": {
        "effect": "No health implications.",
        "advice": {
          "generalPopulation": "Enjoy your outdoor activities.",
          "sensitivePopulation": "Enjoy your outdoor activities."
        }
      }
    }
  ],
  "pollutants": [
    {
      "code": "pm2p5",
      "name": "PM 2.5",
      "fullName": "Fine particulate matter (<2.5µm)",
      "concentration": {
        "value": 11.0,
        "unit": "μg/m3"
      },
      "subIndexes": [
        {
          "code": "us-epa",
          "aqi": 46,
          "aqiDisplay": "46"
        },
        {
          "code": "qaqi",
          "aqi": 0.9,
          "aqiDisplay": "0.9"
        }
      ]
    },
    {
      "code": "pm10",
      "name": "PM 10",
      "fullName": "Inhalable particulate matter (<10µm)",
      "concentration": {
        "value": 12.0,
        "unit": "μg/m3"
      },
      "subIndexes": [
        {
          "code": "us-epa",
          "aqi": 12,
          "aqiDisplay": "12"
        },
        {
          "code": "qaqi",
          "aqi": 0.5,
          "aqiDisplay": "0.5"
        }
      ]
    },
    {
      "code": "no2",
      "name": "NO2",
      "fullName": "Nitrogen dioxide",
      "concentration": {
        "value": 6.77,
        "unit": "ppb"
      },
      "subIndexes": [
        {
          "code": "us-epa",
          "aqi": 7,
          "aqiDisplay": "7"
        },
        {
          "code": "qaqi",
          "aqi": 0.1,
          "aqiDisplay": "0.1"
        }
      ]
    },
    {
      "code": "o3",
      "name": "O3",
      "fullName": "Ozone",
      "concentration": {
        "value": 0.02,
        "unit": "ppb"
      },
      "subIndexes": [
        {
          "code": "us-epa",
          "aqi": 21,
          "aqiDisplay": "21"
        },
        {
          "code": "qaqi",
          "aqi": 0.2,
          "aqiDisplay": "0.2"
        }
      ]
    },
    {
      "code": "co",
      "name": "CO",
      "fullName": "Carbon monoxide",
      "concentration": {
        "value": 0.25,
        "unit": "ppm"
      },
      "subIndexes": [
        {
          "code": "us-epa",
          "aqi": 3,
          "aqiDisplay": "3"
        },
        {
          "code": "qaqi",
          "aqi": 0.1,
          "aqiDisplay": "0.1"
        }
      ]
    }
  ],
  "stations": [
    {
      "id": "P51762",
      "name": "North Holywood"
    },
    {
      "id": "P58056",
      "name": "Pasadena"
    },
    {
      "id": "P57327",
      "name": "Los Angeles - N. Main Street"
    }
  ]
}
```
