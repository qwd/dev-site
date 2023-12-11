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

| Language name | API code | iOS SDK  |Android SDK  |
| ----------| -------------- |-------------------- |-- ------ |
| Simplified Chinese | zh-hans, zh |LANGUAGE_TYPE_ZH |ZH_HANS |
| Traditional Chinese | zh-hant |LANGUAGE_TYPE_ZHHANT |ZH_HANT |
| English | en |LANGUAGE_TYPE_EN |ENGLISH |
| German | de |LANGUAGE_TYPE_DE |GERMAN |
| Spanish | es |LANGUAGE_TYPE_ES |SPANISH |
| French | fr |LANGUAGE_TYPE_FR |FRENCH |
| Italian | it |LANGUAGE_TYPE_IT |ITALIAN |
| Japanese | ja |LANGUAGE_TYPE_JP |JAPANESE |
| Korean | ko |LANGUAGE_TYPE_KR |KOREAN |
| Russian | ru |LANGUAGE_TYPE_RU |RUSSIAN |
| Hindi | hi |LANGUAGE_TYPE_IN |HINDI |
| Thai | th |LANGUAGE_TYPE_TH |THAI |
| Arabic | ar |LANGUAGE_TYPE_AR |AR |
| Portuguese | pt |LANGUAGE_TYPE_PT |PT |
| Bengali | bn |LANGUAGE_TYPE_BN |BN |
| Malay | ms |LANGUAGE_TYPE_MS |MS |
| Dutch | nl |LANGUAGE_TYPE_NL |NL |
| Greek | el |LANGUAGE_TYPE_EL |EL |
| Latin | la |LANGUAGE_TYPE_LA |LA |
| Swedish | sv |LANGUAGE_TYPE_SV |SV |
| Indonesian | id |LANGUAGE_TYPE_ID |ID |
| Polish | pl |LANGUAGE_TYPE_PL |PL |
| Turkish | tr |LANGUAGE_TYPE_TR |TR |
| Czech | cs |LANGUAGE_TYPE_CS |CS |
| Estonian | et |LANGUAGE_TYPE_ET |ET |
| Vietnamese | vi |LANGUAGE_TYPE_VI |VI |
| Filipino | fil |LANGUAGE_TYPE_FIL |FIL |
| Finnish | fi |LANGUAGE_TYPE_FI |FI |
| Hebrew | he |LANGUAGE_TYPE_HE |HE |
| Icelandic | is |LANGUAGE_TYPE_IS |IS |
| Norwegian | nb |LANGUAGE_TYPE_NB |NB |