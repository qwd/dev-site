---
title: FAQ
layout: faq
description: See FAQ for QWeather Develop Service.
ref: faq
---

## General

### What is QWeather Develop Service?

QWeather Develop Service is an easy, low cost and develop friendly weather data service. You can simply embed the needed weather data into your products or provide decisions about your business with a variety of weather data.

### What is the Console?

The Console is the management platform of the QWeather Develop Service, you can manage projects, finances, statistics and users inside the Console.

### How to get started quickly with QWeather Services?

Using the QWeather Develop Service is simple, please refer to [Quick Start](/en/docs/start/).

### What countries and regions are covered by the QWeather service?

The coverage is varied by data. For Weather/Ocean/Solar Radiation/Astronomy, they are available worldwide. For Warning, refer to [Warning Info - Supported regions](/en/docs/resource/warning-info/#supported-regions). For Air Quality, refer to [Air Quality Info - Supported regions](/en/docs/resource/air-info/#supported-regions). For Minutely Precipitation and Tropical Cyclone, only available in China.

### Can I try it for free?

We offer a free request amount per month, please refer to [Pricing](/docs/finance/pricing/).

### Is the QWeather service available anywhere in the world？

Yes, based on QWeather's global data center and CDN edge acceleration capabilities, you can use our weather service anywhere in the world. Learn about [Global Deployment](/en/docs/features/global-deployment/) and [Service Performance](/en/docs/features/performance/).

## Development

### Status code 204/400/401/402/403/404/429 

When the above status code is retrieved, it means there may be some issues with your request, refer to [Status Code](/en/docs/resource/error-code/).

### The data is garbled

Our API uses Gzip compression, which will greatly reduce your network traffic, so you need to decompress the data with Gzip. Refer to [Gzip](/en/docs/best-practices/gzip/).

### Can I cache data?

Yes, except for GeoAPI data. You can refer to the document [Cache](/en/docs/best-practices/cache/) for more experiences on caching data. However, for GeoAPI, you cannot cache or create indexes due to copyright reasons.

### Where can I get a list of cities?

We provide a list of cities in China, please refer to [Location List](/en/docs/resource/location-list/). For other countries and regions around the world, over 500,000 cities have been supported, but the complete city database is not available due to copyright reasons.

### Do you have weather icons?

Our engineers have provided an open source weather icons that support weather conditions, moon phases and weather warnings. The weather icons are in SVG format, so you can edit the color or style yourself. See [weather icons documentation](/en/docs/resource/icons/) and [Icons](https://icons.qweather.com/).

### What is the enum value of the weather condition?

Please refer to the `icon` field and [Weather Icon](/en/docs/resource/icons/).

### What is your TLS version?

We support TLS 1.0 and subsequent versions.

### Is it possible to get data in bulk?

Please contact your business manager.

### Is there any sample code?

Please refer to the examples in the [development guide](/en/docs/api/) or [showcase](/en/showcase/) and [best-practices](/en/docs/best-practices/).

### More development questions

The answers to most development questions can be found in the documentation, such as [Getting Started](/en/docs/start/), [Best Practices](/en/docs/best-practices/), [Resource](/en/docs/resource/) and the development guide for the corresponding data. If you can't solve your problem, please go to [Console](https://console.qweather.com) and submit a ticket to us.

## License

### Can I use the QWeather service for commercial purposes?

Yes, just follow the [Developer License Agreement](https://www.qweather.com/terms/developers-eula).

### Is attribution required?

Yes. Regardless of the license, you must include attribution and a statement of some data sources as required. Refer to [attribution](/en/docs/terms/attribution/).

## Finance and Cost

### What is Pay as you go?

Standard subscriptions use a pay as you go (a.k.a volume-based) pricing model that doesn't need you to pay a lot of money up front or for services you don't use - you only pay for you actually use. When you stop using it, you don't need to pay anything else. 

In addition, pay as you go pricing is a tiered price, meaning that the more you use, the lower the unit price. Please refer to [Pay-as-you-go Pricing](/en/docs/finance/pricing/) and [Billing System](/en/docs/finance/billing-and-payment/).

### What is subscription?

The subscription is a service model, similar to when you subscribe to a newspaper or magazine, and you have continuous access to the service for the duration of the subscription. QWeather Developer Service now uses a pay-as-you-go subscription model.

### What is Savings Plan?

The Savings Plan is designed to cover the cost of standard subscription and is a discount plan for users with a high volume of data requests. It is not dependent on specific data and only requires the user to commit to an annual amount to get a large discount. Compared to pay as you go billing cost, the Savings Plan can save 40%-70%. Refer to [Savings plans](/en/docs/finance/savings-plans/).

### How to estimate the cost?

Please log in to Console and use the [Price Calculator](https://console.qweather.com/price-calculator?lang=en) to estimate your costs.

### What happens when I run out of free requests?

You can continue to use the developer services and just pay for the actual usage in the next month. Refer to [Billing and Payment](/docs/finance/billing-and-payment/).


### Are there more discounts if I have a high volume of requests?

For users with a high volume of requests (usually defined as more than 1,000,000 requests per day), please send an email to <sales@qweather.com> and we will offer additional discounts and more performance guarantees.

### What is a request?

When you access our service through an API or SDK and get data, it is called a data request. A request is counted as one request no matter how much content is retrieved. If the status code of the response is non `2xx`, the number of requests will not be counted, but incorrect requests that exceed a reasonable range will have the account suspended.

### How to check statistics?

Please visit [Console - Statistics](https://console.qweather.com//statistics). We provide request statistics based on the last 24 hours (hour by hour), the last 30 days (day by day) and the last 6 months (month by month) of the project or data.

### What payment methods are supported?

For all users, we support online payment (Alipay). For [Organization Developers](/en/docs/account/developers/), we also support bank transfer. For more information about payments, see [Billing and Payment](/en/docs/finance/billing-and-payment/).

### Refund

Refer to [Refund](/en/docs/finance/billing-and-payment/#refund).

### Do the pricing include VAT?

Yes. For customers in China, our prices are all inclusive of VAT. Refer to [VAT invoice](/en/docs/finance/vat-invoice/).

### Can you issue VAT invoices?

Yes. For users in China, we support issuing VAT e-invoices; for Organization Developers in China, we support issuing VAT e-invoices and VAT special invoices. Refer to [VAT invoice](/en/docs/finance/vat-invoice/).

## Account Management

### How to change the account information?

You can change your account contact information and password, refer to [Account Management](/en/docs/account/).

### How do I delete my account?

You have to close the developer services first and then go to [QWeather User Center](https://id.qweather.com/) for secure deletion.

Please note that deleting an account is irrevocable, including other services you are using QWeather for (e.g. QWeather App, Widget, Weather Maps Service) will be stopped. See [Delete Account](/en/docs/account/management/#delete-account)

### My account has been suspended

See [Account Suspension](/en/docs/account/suspension/).

### Can I add more contacts to receive service notifications?

Yes. Please visit Console-Settings-Notifications, you can add up to 5 notification contacts for your account, who will receive all relevant notifications by email (except security messages, e.g. authentication codes, etc.). Refer to [Recipients](/en/docs/account/recipients/).

## Legal Terms

### What I can and cannot do

In order to provide a fair environment and to protect your rights, you need to understand and agree to our various terms of service. Refer to [Terms](/en/docs/terms/).


> For more help, please submit a ticket in [Console](https://console.qweather.com/?lang=en) or send an email to support@qweather.com

