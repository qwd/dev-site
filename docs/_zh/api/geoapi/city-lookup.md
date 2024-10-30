---
title: 城市搜索
tag: [guide, api, geo, city-lookup]
ref: 1-api-city-lookup
---

城市搜索API提供全球地理位位置、全球城市搜索服务，支持经纬度坐标反查、多语言、模糊搜索等功能。

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。使用城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。 

另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

## 请求URL

{% include api-url.html apidata="geo-city-lookup" %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用 `&`进行分隔。

{% include params.html p="location-geo" %}

> **模糊搜索**，当location传递的为文字时，支持模糊搜索，即用户可以只输入城市名称一部分进行搜索，最少一个汉字或2个字符，结果将按照相关性和[Rank值](/docs/resource/glossary/#rank)进行排列，便于开发或用户进行选择他们需要查看哪个城市的天气。例如`location=bei`，将返回与bei相关性最强的若干结果，包括黎巴嫩的贝鲁特和中国的北京市

> **重名**，当location传递的为文字时，可能会出现重名的城市，例如陕西省西安市、吉林省辽源市下辖的西安区和黑龙江省牡丹江市下辖的西安区，此时会根据[Rank值](/docs/resource/glossary/#rank)排序返回所有结果。在这种情况下，可以通过`adm`参数的方式进一步确定需要查询的城市或地区，例如`location=西安&adm=黑龙江`

{% include params.html p="adm" %}

> 如请求参数为`location=chaoyang&adm=beijing`时，返回的结果只包括北京市的朝阳区，而不包括辽宁省的朝阳市
> 
> 如请求参数仅为`location=chaoyang`时，返回的结果包括北京市的朝阳区、辽宁省的朝阳市以及长春市的朝阳区

{% include params.html p="range number lang-def" %}

## 请求示例

{% include api-url-example.html apidata="geo-city-lookup" %}

## 返回数据

{% include api-snippet.html flag="city-lookup" %}

{% include api-response.html group="geo" type="location" prefix="location" update=0 fxlink=0 %}