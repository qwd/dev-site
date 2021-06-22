---
title: Start
description: QWeather provides a powerful, modern and development-friendly weather data service, includes weather API/SDK and Widget. You can start getting weather data by following the few steps below and the documentation, which is very simple.
ref: 0-start-homepage
---

QWeather data service includes weather API/SDK and Widget. It is a powerful, modern and development-friendly weather data service. 

You can start getting weather data by following the few steps below and the development documentation, which is very simple.


## Register

Register an account at [here](https://id.qweather.com/#/register?lang=en&redirect=https://console.qweather.com) and recommend enroll as a [developer](/en/help/account/#account-type) for more data.

## Get KEY

[Create an Application and KEY](/en/docs/start/get-key/).

There are two edition for [Application](/en/docs/start/glossary/#application): Pro and Dev, you can check [Pro vs. Dev](/en/help/general/#biz-vs-free).

## Web API

The Weather Web API is the most common way to get weather data. Assuming you have completed the above two steps and created a Dev Application, open your browser, copy and paste the following link (remember to replace the key with your key), and press <kbd>Enter</kbd> or <kbd>Return</kbd>

```
https://devapi.qweather.com/v7/weather/now?location=101010100&key=Your_KEY
```

You should now see data in your browser similar to the image below

![Web API sample](/assets/images/content/webapi-sample.png)

Congratulations 🎉 You have got the real-time weather data of Beijing by API. Now, you can visit [Web API documentation](/en/docs/api/) to learn more about the usage of the data.

> If you don't see the data in your browser, please check [Status Code](/en/docs/start/status-code/)

> **Gzip Compression**
>
> The v7 version API uses gzip compression by default. Please decompress the data you have obtained.
{:.bqwarning}


## SDK

If you are developing a mobile APP, then you can use our weather SDK directly for quick integration and out-of-the-box use.

#### System Requirements

iOS 8.0+ or Android 4.4+

#### Development

For configuration and development, please refer to [iOS SDK documentation](/en/docs/ios-sdk/) or [Android SDK documentation](/en/docs/android-sdk/)

> Weather SDK is currently unlimited calls for developers

## Weather Widget

Don't want to write any code? Try our [Free Weather Widget](https://widget.qweather.com/en/), which supports both web and mobile APP. The web widget provides simple configuration with a single mouse click, and the mobile SDK provides a variety of custom styles and layouts.

Below is an example of the [Standard Widget](https://widget.qweather.com/en/create-standard/), you can copy the following code to your web page to view. （Use your own KEY please.）

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

## Open Weather Plus

Open Weather Plus (OWP) is an open source weather APP and provides several ways to customize the style, making it easy to create a weather APP of your own.

- [Documentation for iOS](/en/docs/owp/owp-for-ios/)
- [Documentation for Android](/en/docs/owp/owp-for-android/)

> OWP uses Amap SDK for positioning by default, so you need to apply an Amap appkey by yourself

## Code Library

Many users of QWeather have contributed a lot of excellent snippets, library or even APP source code for you, which may provide you with some inspiration.

We also welcome you to share your code ❤️

See [Library](/en/docs/library/)

## Utility Resource

{% include list-by-data.html notitle=true %}