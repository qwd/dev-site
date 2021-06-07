---
title: Web API
tag: overview
description: QWeather web API is a simple RESTful API to access location-based weather data, including geolocation, real-time weather, weather forecasts, air quality, severe weather warnings, minute precipitation, weather index and other weather data services. 
image: /assets/images/di-api-xs.png
toc: false
ref: 0-api-homepage
---

{%- for section in site.data.data-list.api %}
<div class="row api-category">
    <div class="col-md-4 col-sm-4 col-xs-12 category-name">
        <h2>{{ section.group[page.lang] }}</h2>
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

> **No assumptions**
>
> At any time, do not assume that the returned data is complete, or make assumptions about the length and range of the returned data. For example: when our data source lacks some data, it may cause missing fields. In high latitudes area, there may be no sunrise or sunset on a certain day. Weather conditions may add new codes. When our functions are upgraded, it is possible to add new fields or parameters in the data return. Therefore, you must consider how to deal with those issuse in your program.
{:.bqwarning}

> **Gzip compression**
>
> The v7 version API uses gizp compression by default, which can greatly reduce traffic and improve response speed. Please decompress the data you have obtained.

> **Languages**
>
> API v7 supports [31 languages](/en/docs/start/language/).