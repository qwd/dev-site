---
title: 请求量统计
tag: [guide, api, console, stats]
ref: 1-api-console-stats
---

查询最近24小时的API请求量统计。

> **提示：**返回的数据截止至上一个小时或更早时候，它与控制台中显示的数据相比可能有1个小时或更长的延迟。

## 获取权限 {#privileges}

访问本接口必须由帐号所有者在控制台为凭据开通权限。

1. [前往控制台-项目管理](https://console.qweather.com/project)
2. 点击需要启用控制台API的凭据
3. 向下滑动至“控制台权限”
4. 在“指标和统计”中勾选所需要的权限：
   - “允许访问请求量汇总统计”，汇总所有项目和凭据的请求量，包括已删除的
   - “允许访问指定项目的请求量统计”，使用`project`参数过滤
   - “允许访问指定凭据的请求量统计”，使用`credential`参数过滤
5. 点击“保存”按钮

请注意：已删除的项目或凭据无法单独查询（例如使用`project`或`credential`参数），但其请求量仍计入汇总统计中。

## 请求路径 {#endpoint}

{% include api-url.html flag="console-stats" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="q-stats-proj q-stats-cred" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="console" type="stats" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" %}

## API名称

| Code             | 描述             |
| ---------------- | ---------------- |
| Geo              | [地理信息](/docs/api/geoapi/)         |
| Weather          | [天气](/docs/api/weather/)             |
| MinutelyForecast | [分钟降水预报](/docs/api/minutely/)     |
| WeatherIndices   | [天气指数](/docs/api/indices/)         |
| WeatherAlert     | [天气预警](/docs/api/warning/)         |
| AirQuality       | [空气质量](/docs/api/air-quality/)         |
| TimeMachine      | [时光机](/docs/api/time-machine/)           |
| Storm            | [热带气旋（台风）](/docs/api/tropical-cyclone/) |
| Astronomy        | [天文](/docs/api/astronomy/)             |
| SolarIrradiation | [太阳辐照](/docs/api/solar-radiation/)         |
| Ocean            | [海洋](/docs/api/ocean/)             |
| Console          | [控制台API](/docs/api/console/)           |

