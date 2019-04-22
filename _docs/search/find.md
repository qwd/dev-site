---
book: 城市搜索
version: 1.0
service: search
data: search
title: 城市搜索
description: 支持模糊搜索的全球位置/城市搜索服务，支持多语言、模糊搜索等功能。
toc: true
---

##  数据介绍
支持模糊搜索的全球城市搜索服务

> 本数据接口不计入访问量

## 请求URL
```
https://search.heweather.net/find?{parameters}
```
`parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。下面的列举了请求参数及其使用规则。

> 请注意，在替换`{parameters}`对应值的时候，URL中不要包含大括号`{}`

## 请求参数

| 参数 | 描述 | 可选 | 示例值|
| --- | --- | --- | --- |
|location|输入需要查询的城市名称，支持模糊搜索，可输入中文（至少一个汉字）、英文（至少2个字母）、IP地址、坐标（经度在前纬度在后，英文`,`分割）、ADCode|必选|location=北<br />location=北京<br />location=beij<br />location=60.194.130.1<br />location=116.4,39.1|
|key|用户认证key，登录[控制台](https://console.heweather.com)可查看|必选|key=xxxxxxxxxxxxxx|
|mode|查询方式（模糊检索 or 精准检索）|可选|可选值: equal、match，默认：match |
|group|城市查询分组，默认为全球城市，可按照任意国家范围进行查询，国家名称需使用[ISO 3166 所定义的国家代码](https://www.heweather.com/blog/iso-3166)<br />特殊值：`world`，查询全球城市<br />特殊值：`scenic`，查询中国4A和5A级景点地区<br />特殊值：`overseas`，查询除中国以外的全部海外城市<br />查询分组可最多设置20个值，多个值用英文`,`连接|可选|group=world 查询全球城市（默认值）<br /> group=cn 仅查询中国城市 <br /> group=us,scenic 查询美国城市和中国景点地区<br /> group=cn,us,ru 查询中国、美国和俄罗斯城市|
|number|搜索查询返回的数量，默认返回10个与查询城市或的确相关性最强的结果，可选1-20个，当使用IP地址或坐标查询时，仅返回一个结果|可选|number=10（默认值）<br />number=3<br />number=7<br />number=19|
|lang|多语言，默认为简体中文，详见[多语言参数](/docs/refer/i18n)|可选|lang=en|


## 返回参数和数值说明
### `basic` 基础信息

|参数|描述|示例值 |
|---|---|---|
|location|地区／城市名称|卓资|
|cid|地区／城市ID|CN101080402|
|lat|地区／城市纬度|40.89576|
|lon|地区／城市经度|112.577702|
|parent_city|该地区／城市的上级城市|乌兰察布|
|admin_area|该地区／城市所属行政区域|内蒙古
|cnty|该地区／城市所属国家名称|中国
|tz|该地区／城市所在时区|+8.0|
|type|该地区／城市的属性，目前有`city`城市和`scenic`中国景点|city|

### `satuts` 接口状态

|参数|描述|示例值|
|---|---|---|
|status|接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code)|ok|

##  数据返回示例
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
                    "cid": "CN101210410",
                    "location": "北仑",
                    "parent_city": "宁波",
                    "admin_area": "浙江",
                    "cnty": "中国",
                    "lat": "29.90943909",
                    "lon": "121.83130646",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101301301",
                    "location": "北海",
                    "parent_city": "北海",
                    "admin_area": "广西",
                    "cnty": "中国",
                    "lat": "21.4733429",
                    "lon": "109.11925507",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101040800",
                    "location": "北碚",
                    "parent_city": "重庆",
                    "admin_area": "重庆",
                    "cnty": "中国",
                    "lat": "29.82542992",
                    "lon": "106.43786621",
                    "tz": "+8.00",
                    "type": "city"
                },
                {
                    "cid": "CN101070706",
                    "location": "北镇",
                    "parent_city": "锦州",
                    "admin_area": "辽宁",
                    "cnty": "中国",
                    "lat": "41.59876251",
                    "lon": "121.79595947",
                    "tz": "+8.00",
                    "type": "city"
                }
            ],
            "status": "ok"
        }
    ]
}
```
