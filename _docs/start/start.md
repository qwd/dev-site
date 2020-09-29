---
title: 快速开始
tag: [start]
type: intro
version: 2
description: 和风天气的天气数据开发是一个强大、现代化、开发友好的天气数据服务。如果你是第一次接触我们的天气数据，那么认真读完本片章内容即可快速上手使用了。
permalink: /docs/start/
redirect_from: /docs/
lang-ref: start-start
---

和风天气数据包含了天气API、天气SDK和天气插件，是一个强大、现代化、开发友好的天气数据服务。你可以根据下方件的几个步骤就开始第一次获取到天气数据，非常简单。

<div class="row start-flow-chart">
    {% for item in site.data.list.flow %}
    <div class="col-md-4 col-sm-4 col-xs-12">
        <img src="/assets/images/{{ item.img }}.png" />
        <div class="start-flow-des">
            <h3>{{ item.title }}</h3>
            <p><a href="{{ item.link }}">{{ item.des }}</a></p>
        </div>
    </div>
    {% endfor %}
</div>

## 查看详细文档 {#documentation}

你可以参考以下更多文档内容，构建你的天气应用

{% for section in site.data.list.doc-list %}
<div class="row category">
    <div class="col-md-4 col-sm-2 col-xs-12">
        <h3 class="category-title">{{ section.group }}</h3>
    </div>
    <div class="col-md-8 col-sm-10 col-xs-12">
        <ul class="category-list">
            {% for item in section.list %}
            <li class="category-list-item"><a href="{{ item.link }}">{{ item.title }}</a></li>
            {% endfor %}
        </ul>
    </div>
</div>
{% endfor %}