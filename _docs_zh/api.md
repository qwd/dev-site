---
title: API开发文档
tag: overview
description: 和风天气API为用户提供一个简洁的RESTful API接口，用以访问基于位置的天气数据，包括实况天气、30天预报、逐小时预报、空气质量AQI，灾害预警、分钟级降水、生活指数等天气数据服务。
image: /assets/images/di-api-xs.png
toc: false
ref: 0-api-homepage
---

{%- for section in site.data.data-list.api %}
<div class="row api-category">
    <div class="col-md-4 col-sm-4 col-xs-12 category-name">
        <h3>{{ section.group[page.lang] }}</h3>
        <span>{{ section.des[page.lang] }}</span>
    </div>
    <div class="col-md-offset-1 col-md-7 col-sm-8 col-xs-12 category-list">
        <div class="row">
            {%- for item in section.list %}
            {%- assign docs = site.documents | where: "lang", page.lang | where: "ref", item.name | first %}
            <div class="col-xs-6 list-name">
                <a href="{{ docs.url }}">{{ docs.title }}</a>
            </div>
            {%- endfor %}
        </div>
    </div>
</div>    
{%- endfor %}

> **不做假设**
> 
> 无论任何时候，不要假定返回的数据都是完整的，或者对返回数据的长度、范围进行假设。例如：当我们的数据源缺少某些数据的时候可能会导致字段缺失；高纬度地区某一天可能会出现没有日出日落的情况；天气状况可能会增加新的代码；当我们的功能升级时，可能在数据返回中增加新的字段或参数。因此在你的程序中必须考虑如何处理这种问题。
{:.bqwarning}

> **Gzip压缩**
> 
> v7版本API默认采用gizp压缩，可大幅降低流量，提高响应速度，请对你获取到的数据进行解压。

> **多语言**
> 
> 和风天气API v7版本支持[31种主流语言](/docs/start/language/)。

> 如需要查看更早期的版本的开发文档请访问 [S6版本](/docs/legacy/api/s6/)，S6版本的技术支持截止于2020年6月1日。