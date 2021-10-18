---
title: 开始
description: 和风天气提供了一个强大、现代化、开发友好的天气数据服务，包括天气API/SDK/小插件。如果你是第一次接触我们的天气数据，那么根据下方的步骤和开发文档，就可以快速上手使用了。
ref: 0-start-homepage
---

和风天气提供了一个强大、现代化、开发友好的天气数据服务，包括天气API/SDK/小插件。如果你是第一次接触我们的天气数据，那么根据下方的步骤和开发文档，就可以快速上手使用了。

## 注册成为开发者

在[这里](https://id.qweather.com/#/register?redirect=https://console.qweather.com)注册账号，推荐认证为[开发者](/help/account/#account-type)获取更多数据内容。

## 创建应用

开始正式开发之前，你需要先[创建一个应用和KEY](/docs/resource/get-key/)，这个KEY是你获取天气数据的认证信息。

应用分为商业版和开发版，前者用于商业用途并获获取更多的天气数据，后者用于个人开发项目，你可以查看[商业版与免费版应用的对比](/help/general/#biz-vs-free)。

## 使用API

天气Web API是最常见的获取天气数据的方式，假设你已经完成了以上两个步骤，并创建了一个开发版应用，那么打开你的浏览器，输入下列链接（记得将key替换成你的key），最后按下<kbd>Enter</kbd>或<kbd>Return</kbd>

```
https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的KEY
```

现在你的浏览器中应该出现和下图类似的数据

![Web API sample](/assets/images/content/webapi-sample.png)

恭喜你🎉你已经通过我们的天气API获取到了北京市的实况天气数据。现在，你可以访问[Web API的开发文档](/docs/api/)了解更多数据的用法。

> 如果你在浏览器中没有看到类似的数据返回，请根据返回的`code`去[查看出现了什么问题](/docs/resource/status-code/)

> **Gzip压缩**
> 
> 目前API内容全部使用Gzip压缩，你需要在程序中对获取到的数据进行Gzip解压
{:.bqwarning}

## 使用SDK

如果你希望开发移动端应用，那么可以直接使用我们\的天气SDK，快速集成，开箱即用。

#### 系统要求

iOS 8.0+ 或 Android 4.4+

#### 配置和开发

详细的配置和开发请参考[iOS开发文档](/docs/ios-sdk/) 或 [Android开发文档](/docs/android-sdk/)

> 如果你已经是认证开发者，使用天气SDK目前没有访问量限制

## 创建插件

不想开发？可以试试我们的[免费天气插件](https://widget.qweather.com)，支持网站和移动端应用。网页版插件提供了可视化配置，只需要使用鼠标点击即可完成配置，移动端SDK也提供了丰富的自定义样式和布局。

下方[创建了一个标准网页插件](https://widget.qweather.com/create-standard/)的示例，你可以复制下列代码到你的网页上查看：（请使用你自己的KEY）

```html
<div id="he-plugin-standard"></div>
<script>
WIDGET = {
  "CONFIG": {
    "layout": "1",
    "width": "400",
    "height": 150,
    "background": "3",
    "dataColor": "FFFFFF",
    "borderRadius": "8",
    "key": "7fae2c9a8f5e4c2f9af47941395c4880"
  }
}
</script>
<script src="https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"></script>
```

## 使用天气普拉斯

天气普拉斯是一款开源的天气APP，并提供了多种自定义样式的方法，可以方便的创建一款自己的天气APP。

- [查看iOS版开发文档](/docs/owp/owp-for-ios/)
- [查看Android版开发文档](/docs/owp/owp-for-android/)

> 天气普拉斯默认使用了高德地图SDK进行定位，因此需要你自行申请高德的appkey

## 代码库

很多和风天气的爱好者为大家贡献了很多优秀的示范代码甚至应用代码，或许可以为你提供一些灵感。

我们也欢迎你共享你的代码，我为人人，人人为我 ❤️

访问[代码库](/docs/library/)。

## 其他实用资源

天气数据涉及到了大量专业信息，需要你额外关注，例如：

<ul>
    {%- assign res = site.documents | where: "lang", page.lang | where: "tag", "resource" | sort: "ref" %}
    {%- for item in res %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {%- endfor %}
</ul>