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

| 数据  | 可用语言 |
| --- | --- |
| [天气指数](/docs/api/indices/) | 中文，英文 | 
| [分钟降水](/docs/api/minutely/minutely-precipitation/) | 中文，英文 |   


## 多语言代码 {#language-code}

你可以使用查询参数`lang`设置数据的语言，以下是在API或SDK中的多语言代码。

| 语言名称  | API 代码        | iOS Lang  | Android Lang | 
| ---------- | -------------|-------------- | -------- |
| 简体中文    | zh-hans、zh   | ZH_HANS      | ZH_HANS  |
| 繁体中文    | zh-hant       | ZH_HANT      | ZH_HANT  |
| 英文       | en            | EN           | EN    |
| 德语       | de            | DE           | DE    |
| 西班牙语    | es            | ES           | ES   |
| 法语       | fr            | FR           | FR    |
| 意大利语    | it            | IT           | IT    |
| 日语       | ja            | JA           | JA    |
| 韩语       | ko            | KO           | KO    |
| 俄语       | ru            | RU           | RU    |
| 印地语     | hi            | HI           | HI    |
| 泰语       | th            | TH           | TH     |
| 阿拉伯语   | ar            | AR           | AR       |
| 葡萄牙语   | pt            | PT           | PT       |
| 孟加拉语   | bn            | BN           | BN       |
| 马来语     | ms            | MS           | MS       |
| 荷兰语     | nl            | NL           | NL       |
| 希腊语     | el            | EL           | EL       |
| 拉丁语     | la            | LA           | LA       |
| 瑞典语     | sv            | SV           | SV       |
| 印尼语     | id            | ID           | ID       |
| 波兰语     | pl            | PL           | PL       |
| 土耳其语   | tr            | TR           | TR       |
| 捷克语     | cs            | CS           | CS       |
| 爱沙尼亚语  | et            | ET          | ET       |
| 越南语     | vi            | VI           | VI       |
| 菲律宾语   | fil           | FIL          | FIL     |
| 芬兰语     | fi            | FI           | FI       |
| 希伯来语   | he            | HE           | HE       |
| 冰岛语     | is            | IS           | IS       |
| 挪威语     | nb            | NB           | NB       |


## 示例代码：

Swift
```swift
let _ = Lang.ZH_HANS
```

Objective-C
```objc
Lang lang = LangZH_HANS; 
```

Java
```java
Lang lang = Lang.ZH_HANS; 
```
