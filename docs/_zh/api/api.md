---
title: 开发文档
description: 和风天气开发服务提供了API、iOS SDK和Android SDK用以访问基于位置的天气数据，包括实况天气、30天预报、逐小时预报、空气质量AQI，灾害预警、分钟级降水、生活指数等天气数据服务。
tag: [guide, overview]
image: /assets/images/di-api-xs.png
permalink: /docs/api/
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

> 如需要查看更早期的版本的开发文档请访问 [S6版本](/docs/legacy/api/s6/)，S6版本的技术支持截止于2020年6月1日。