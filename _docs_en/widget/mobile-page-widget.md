---
title: Mobile Page Widget
version: 1.0
tag: widget
toc: false
description: Responsive weather web page, for mini-site or APP, quickly create a weather channel of your own
ref: 3-widget-h5
---

Responsive weather web page, for mini-site or APP, quickly create a weather channel of your own.

There is no need to write any code to use the Mobile Page Widget, just click the button below and set the data and style.

<a href="{{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-mobile-page/" class="btn btn-std">{{ site.data.t[page.lang].create-standard }}</a>

----

You can also add the following parameters for Mobile Page Widget in its URL:

**lg**

Multi-language settings, the default is `auto`.

- `Auto` is currently only available in Chinese and English, depending on the device or browser language. Web pages in other languages are displayed in English
- `zh` Chinese
- `en` English

**lc**

Mobile Page Widget can be located using `auto`, `accu`, [locationID](/en/docs/start/glossary#locationID) or comma-separated [longitude/latitude](/en/docs/start/glossary#coordinate) (decimal). LocationID is available through [GeoAPI](/en/docs/api/geo/)

- `auto` is obtained from the IP address, IP address cannot guarantee that the address is completely accurate
- `accu` may require a popup to prompt the user to agree to the location permissions, depending on the browser
- Specify the city's [locationID](/en/docs/start/glossary#locationID), available through [GeoAPI](/en/docs/api/geo/)
- Specify the city's [longitude/latitude](/en/docs/start/glossary#coordinate) (decimal)

**bg**

Background color of the page
- `1` Auto, default, color will change with weather, for example, sunny day, rainy day will show the corresponding weather background
- `2` Dark
- `3` Light