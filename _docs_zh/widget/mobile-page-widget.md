---
title: 天气H5插件/天气频道页
version: 1.0
tag: widget
toc: false
description: 和风免费的H5天气插件，天气频道插件，包括实况天气、分钟级降水、空气质量、灾害预警、30天预报、生活指数、台风路径等天气内容，支持自定义样式，快速为你的应用创建一个天气频道页。
ref: 3-widget-h5
---

响应式天气H5页面，可用于移动APP、微信分享、公众号等场景，快速创建一个属于你的天气频道页面。

使用网页简约插件不需要编写任何代码，只需要点击下方按钮，通过图形化工具选择需要的数据和样式即可。

<a href="{{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-mobile-page/" class="btn btn-std">{{ site.data.t[page.lang].create-mp }}</a>

----

你也可以在生成的H5网址中额外添加如下参数：

**lg**

H5网页的多语言设置，默认为自动。

- `auto` 根据设备或浏览器语言，目前仅限中文和英文，其他语言的网页以英文显示
- `zh` 简体中文
- `en` 英文

**lc**

H5网页的定位方式，可以选择`auto`、`accu`、[LocationID](/docs/resource/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docs/resource/glossary#coordinate)（十进制），LocationID可通过[城市搜索服务](/docs/api/geo/)获取

- `auto` 根据IP地址获取，IP地址无法保证地址完全准确
- `accu` 根据浏览器精准定位，可能需要弹窗提示用户同意定位权限
- 指定城市的[LocationID](/docs/resource/glossary#locationid) ，可通过[GeoAPI](/docs/api/geo/)获取
- 指定城市的[经度/纬度坐标](/docs/resource/glossary#coordinate)（十进制）

**bg**

H5网页的背景颜色
- `1` 随天气变化，默认，随天气变化，例如晴天、雨天会显示对应的天气背景
- `2` 深色
- `3` 浅色

