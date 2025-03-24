---
title: Language
tag: resource
description: QWeather supports 30+ popular languages and the official language of the country or region where it is located, ​​including Chinese, English, German, French, Spanish, Italian, Japanese, Korean, Russian, Thai, etc., and can be called at any time with the lang parameter.
redirect_from: /en/docs/start/language/
ref: res-lang
---

QWeather supports 30+ languages and the official language of the country or region where it is located.

## Default language

Multi-language is optional, the default value is the official language of the country or region, if there is no official language or there are multiple official languages, we will choose the most popular or widely used language, for example:

- New York: English
- Montreal: English
- Bengaluru: Hindi

## Fallback order

If some data does not respond to your language setting, it will fall back to the next supported language in the following order:

Multi-language **is not set**, the default language will be used, the order is:

```
Official language > English
```

A specified language **is set**, the order is: 

```
Specified language > Official language > English
```

## Exception

Most of the data supports multi-language and official languages, the following table lists which data cannot fully support multi-language.

| Data  | Supported Languages | Note  |
| --- | --- | --- |
| [Weather Indices](/en/docs/api/indices/) | Chinese, English |     |
| [Weather Warning](/en/docs/api/warning/) | Partial | See [Warning Info - Supported language](/en/docs/resource/warning-info/#supported-language) |
| [Minutely Forecast](/en/docs/api/minutely/minutely-precipitation/) | Chinese, English |     |

## Language code

You can specify the language of the data using the query parameter `lang`, here is the multi-language code in the API or SDK.

| Language name | API code | iOS Lang |Android Lang  |
| --------------| -------------| ------------- | ----------- |
| Simplified Chinese | zh-hans, zh |ZH |ZH_HANS |
| Traditional Chinese | zh-hant |ZHHANT |ZH_HANT |
| English | en |EN |EN |
| German | de |DE |DE |
| Spanish | es |ES |ES |
| French | fr |FR |FR |
| Italian | it |IT |IT |
| Japanese | ja |JA |JA |
| Korean | ko |KO |KO |
| Russian | ru |RU |RU |
| Hindi | hi |HI |HI |
| Thai | th |TH |TH |
| Arabic | ar |AR |AR |
| Portuguese | pt |PT |PT |
| Bengali | bn |BN |BN |
| Malay | ms |MS |MS |
| Dutch | nl |NL |NL |
| Greek | el |EL |EL |
| Latin | la |LA |LA |
| Swedish | sv |SV |SV |
| Indonesian | id |ID |ID |
| Polish | pl |PL |PL |
| Turkish | tr |TR |TR |
| Czech | cs |CS |CS |
| Estonian | et |ET |ET |
| Vietnamese | vi |VI |VI |
| Filipino | fil |FIL |FIL |
| Finnish | fi |FI |FI |
| Hebrew | he |HE |HE |
| Icelandic | is |IS |IS |
| Norwegian | nb |NB |NB |

## Sample Code：

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