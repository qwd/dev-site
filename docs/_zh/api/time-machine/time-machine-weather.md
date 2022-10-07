---
title: 天气时光机
tag: [guide, api, time-machine, weather]
redirect_from: /docs/histroical/histroical-weather/
ref: 1-api-historical-weather
---

获取最近10天的天气历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

> 和风天气额外提供了2000年至今的历史再分析气象数据，通过数据文件的形式发送，如需要长时间的历史气象数据数据，请提供下列信息，发送邮件至sales@qweather.com，我们将有专人与你联系:
> 
> * 企业名称
> * 联系方式
> * 所需要的城市或坐标
> * 所需要的时间范围

## 请求URL

{% include api-url.html flag="time-machine-weather" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-id date10back key lang unit" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="his-weather"%}

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
