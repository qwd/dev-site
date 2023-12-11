---
title: 多语言
tag: resource
description: 和风天气支持30+种主流语言及所在地区的官方语言，包括中英德法西意日韩俄泰等多语言，你可以使用lang参数随时调用。
redirect_from: /docs/start/language/
ref: res-lang
---

和风天气支持30+种主流语言以及所在国家或地区的官方语言。

## 默认语言 {#default-language}

多语言是可选项，默认值是所在国家或地区的官方语言，如不存在官方语言或有多种官方语言，我们将选择其中最为流行或使用人数较高的语言，例如：

- 纽约：英语
- 蒙特利尔：英语
- 班加罗尔：印地语

## 回退顺序 {#fallback-order}

如果一些数据无法响应你的语言设置时，将按照下列规则回退到下一个所支持的语言：

**没有设置**多语言时，将使用默认语言，顺序是：

```
官方语言 > 英语
```

**设置**了一个指定语言时，顺序是：

```
指定语言 > 官方语言 > 英语
```

## 例外 {#exception}

大部分数据支持多语言和官方语言，但是一些数据可能不支持所有的语言选项，请参考下列表格查看哪些数据无法完全支持多语言。

| 数据  | 可用语言 | 备注  |
| --- | --- | --- |
| [天气指数](/docs/api/indices/) | 中文，英文 |     |
| [天气预警](/docs/api/warning/) | 部分多语言 | 参考[预警信息-多语言](/docs/resource/warning-info/#supported-language) |
| [分钟降水](/docs/api/minutely/minutely-precipitation/) | 中文，英文 |     |


## 多语言代码 {#language-code}

你可以使用查询参数`lang`设置数据的语言，以下是在API或SDK中的多语言代码。

| 语言名称  | API 代码        | iOS SDK常量属性       |Android SDK常量属性 | 
| ----------| --------------  |-------------------- |-------- |
| 简体中文  | zh-hans、zh  |LANGUAGE_TYPE_ZH     |ZH_HANS  |
| 繁体中文  | zh-hant       |LANGUAGE_TYPE_ZHHANT |ZH_HANT  |
| 英文      | en            |LANGUAGE_TYPE_EN     |ENGLISH  |
| 德语      | de            |LANGUAGE_TYPE_DE     |GERMAN   |
| 西班牙语  | es            |LANGUAGE_TYPE_ES     |SPANISH  |
| 法语      | fr            |LANGUAGE_TYPE_FR     |FRENCH   |
| 意大利语  | it            |LANGUAGE_TYPE_IT     |ITALIAN  |
| 日语      | ja            |LANGUAGE_TYPE_JP     |JAPANESE |
| 韩语      | ko            |LANGUAGE_TYPE_KR     |KOREAN   |
| 俄语      | ru            |LANGUAGE_TYPE_RU     |RUSSIAN  |
| 印地语    | hi            |LANGUAGE_TYPE_IN     |HINDI    |
| 泰语      | th            |LANGUAGE_TYPE_TH     |THAI     |
| 阿拉伯语  | ar            |LANGUAGE_TYPE_AR     |AR       |
| 葡萄牙语  | pt            |LANGUAGE_TYPE_PT     |PT       |
| 孟加拉语  | bn            |LANGUAGE_TYPE_BN     |BN       |
| 马来语    | ms            |LANGUAGE_TYPE_MS     |MS       |
| 荷兰语    | nl            |LANGUAGE_TYPE_NL     |NL       |
| 希腊语    | el            |LANGUAGE_TYPE_EL     |EL       |
| 拉丁语    | la            |LANGUAGE_TYPE_LA     |LA       |
| 瑞典语    | sv            |LANGUAGE_TYPE_SV     |SV       |
| 印尼语    | id            |LANGUAGE_TYPE_ID     |ID       |
| 波兰语    | pl            |LANGUAGE_TYPE_PL     |PL       |
| 土耳其语  | tr            |LANGUAGE_TYPE_TR     |TR       |
| 捷克语    | cs            |LANGUAGE_TYPE_CS     |CS       |
| 爱沙尼亚语| et            |LANGUAGE_TYPE_ET     |ET       |
| 越南语    | vi            |LANGUAGE_TYPE_VI     |VI       |
| 菲律宾语  | fil           |LANGUAGE_TYPE_FIL    |FIL     |
| 芬兰语    | fi            |LANGUAGE_TYPE_FI     |FI       |
| 希伯来语  | he            |LANGUAGE_TYPE_HE     |HE       |
| 冰岛语    | is            |LANGUAGE_TYPE_IS     |IS       |
| 挪威语    | nb            |LANGUAGE_TYPE_NB     |NB       |
