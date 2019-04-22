---
book: 城市搜索
version: 1.0
service: search
data: search
title: 热门城市列表
description: 根据用户访问热度，提供中国和海外热门城市列表，用于开发者可以为用户提供热门城市查询天气的功能
toc: true
---
## 数据介绍

根据用户访问热度，我们可提供中国和海外热门城市列表，用于开发者可以为用户提供热门城市查询天气的功能

> 本数据接口不计入访问量

## 请求URL
```
https://search.heweather.net/top?{parameters}
```

`parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

> 请注意，在替换`{parameters}`对应值的时候，URL中不要包含大括号`{}`

## 请求参数

| 参数 | 描述 | 可选 | 示例值|
| --- | --- | --- | --- |
|group|热门城市分组，可选择中国、海外及全球范围，默认为全球热门城市<br />特殊值：`world`，返回全球热门城市<br />特殊值：`cn`，返回中国热门城市<br />特殊值：`overseas`，查询海外热门城市（不含中国）|必选| group=world（默认值）<br /> group=cn<br /> group=overseas|
|key|用户认证key，登录[控制台](https://console.heweather.com)可查看|必选|key=xxxxxxxxxxxxxx|
|number|返回热门城市的数量，默认返回20个，可选1-50个|可选|number=10（默认值）
|lang|多语言，默认为简体中文。详见[多语言参数](/docs/refer/i18n)|可选|lang=en|

## 返回参数和数值说明

### `basic` 基础信息

|参数|描述|示例值 |
|---|---|---|
|location|地区／城市名称|卓资|
|cid|地区／城市ID|CN101080402|
|lat|地区／城市纬度|40.89576|
|lon|地区／城市经度|112.577702|
|parent_city|该地区／城市的上级城市|乌兰察布
|admin_area|该地区／城市所属行政区域|内蒙古
|cnty|该地区／城市所属国家名称|中国
|tz|该地区／城市所在时区|+8.0|
|type|该地区／城市的属性，目前有`city`城市和`scenic`中国景点|city|

### `satuts` 接口状态

|参数|描述|示例值|
|---|---|---|
|status|接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code)|ok|

## 数据返回示例

```json
{
    "HeWeather6": [
        {
            "basic": [
                {
                    "cid": "CN101010100",
                    "location": "北京",
                    "parent_city": "北京",
                    "admin_area": "北京",
                    "cnty": "中国",
                    "lat": "39.90498734",
                    "lon": "116.4052887",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101020100",
                    "location": "上海",
                    "parent_city": "上海",
                    "admin_area": "上海",
                    "cnty": "中国",
                    "lat": "31.23170662",
                    "lon": "121.47264099",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101210701",
                    "location": "温州",
                    "parent_city": "温州",
                    "admin_area": "浙江",
                    "cnty": "中国",
                    "lat": "28.00057411",
                    "lon": "120.67211151",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101280101",
                    "location": "广州",
                    "parent_city": "广州",
                    "admin_area": "广东",
                    "cnty": "中国",
                    "lat": "23.12517738",
                    "lon": "113.28063965",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101280601",
                    "location": "深圳",
                    "parent_city": "深圳",
                    "admin_area": "广东",
                    "cnty": "中国",
                    "lat": "22.54700089",
                    "lon": "114.08594513",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101020900",
                    "location": "松江",
                    "parent_city": "上海",
                    "admin_area": "上海",
                    "cnty": "中国",
                    "lat": "31.03046989",
                    "lon": "121.22354126",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101210101",
                    "location": "杭州",
                    "parent_city": "杭州",
                    "admin_area": "浙江",
                    "cnty": "中国",
                    "lat": "30.28745842",
                    "lon": "120.15357971",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101190101",
                    "location": "南京",
                    "parent_city": "南京",
                    "admin_area": "江苏",
                    "cnty": "中国",
                    "lat": "32.04154587",
                    "lon": "118.76741028",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101200101",
                    "location": "武汉",
                    "parent_city": "武汉",
                    "admin_area": "湖北",
                    "cnty": "中国",
                    "lat": "30.5843544",
                    "lon": "114.29856873",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101270101",
                    "location": "成都",
                    "parent_city": "成都",
                    "admin_area": "四川",
                    "cnty": "中国",
                    "lat": "30.65946198",
                    "lon": "104.06573486",
                    "tz": "+8.00",
                    "type": "city"
                }
            ],
            "status": "ok"
        }
    ]
}
```
