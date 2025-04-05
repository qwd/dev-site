---
title: Develop Guide
description: QWeather web API is a simple RESTful API to access location-based weather data, including geolocation, real-time weather, weather forecasts, air quality, severe weather warnings, minute precipitation, weather index and other weather data services. 
tag: [guide, overview]
image: /assets/images/di-api-xs.png
permalink: /en/docs/api/
ref: 0-api-overview
---

{{ page.description | markdownify }}

<div class="row">
{%- assign product_group = site.data.contents.reference_docs | where: "overview", "0-api-overview" -%}
{%- for section in product_group -%}
{%- for item in section.list -%}
{%- assign overview = site.documents | where: "lang", page.lang | where: "ref", item.name | first -%}
    <div class="col-12 col-lg-4 col-md-6 mb-4">
        <div class="data p-3">
            <h3 class="mb-4"><a href="{{ overview.url}}">{{ overview.title }}</a></h3>
            <p class="mb-4">{{ overview.description }}</p>
        </div>
    </div>
{%- endfor -%} 
{%- endfor -%}  
</div>

*See [Deprecated](/en/docs/deprecated/) for deprecated API/SDK.*