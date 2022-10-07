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

For weather data, we support 200+ countries and regions worldwide, for warning data, refer to [warning-info-supported-countries-or-regions](/en/docs/resource/warning-info/#supported-regions), for minutely precipitation and air quality, Mainland China is supported.

### Can I try it for free?

All users can access limited weather services for free with [Free Subscription](/docs/finance/subscription). For services that are not supported by the free subscription, you can test them with a small payment.

### Is the QWeather service available anywhere in the world？

Yes, based on QWeather's global data center and CDN edge acceleration capabilities, you can use our weather service anywhere in the world. Learn about [Global Deployment](/en/docs/features/global-deployment/) and [Service Performance](/en/docs/features/performance/).

## Development

### 204/400/401/402/403/404/429 status code

When the above status code is retrieved, it means there may be some issues with your request, refer to [Status Code](/en/docs/resource/status-code/).

### The data is garbled

Our API uses Gzip compression, which will greatly reduce your network traffic, so you need to decompress the data with Gzip. Refer to [Gzip](/en/docs/best-practices/gzip/).

### What is the API url for Free Subscription?

The API url for Free Subscription is `devapi.qweather.com`, for more configuration of free subscription, please refer to [API configuration](/en/docs/configuration/api-config/), [iOS configuration](/en/docs/configuration/ios-sdk- config/) and [Android-config](/en/docs/configuration/android-sdk-config/).

### What happens when I run out of free subscription requests?

You will receive a `402` error code. In this case, you will no longer be able to request our service with free subscriptions, and at 0:00 (UTC+8) every day, the free subscription request volume will be reset. Please note that when you receive any non `2xx` code, do not retry indefinitely, this may violate the usage restrictions and terms of service and get your account suspended. Refer to [Usage Restrictions](/en/docs/terms/restriction/).

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

Please refer to the examples in the development guide or [showcase](/en/showcase/) and [best-practices](/en/docs/best-practices/).

### More development questions

The answers to most development questions can be found in the documentation, such as [Getting Started](/en/docs/start/), [Best Practices](/en/docs/best-practices/), [Resource](/en/docs/resource/) and the development guide for the corresponding data. If you can't solve your problem, please go to [Console](https://console.qweather.com) and submit a ticket to us.

## License

### Can I use the QWeather service for commercial purposes?

Yes. With Free/Standard and Pro subscriptions, you can use it for any purpose, including commercial use, as long as you follow the license conditions. Learn about [license](/en/docs/terms/license/).

### Is attribution required?

Yes. Regardless of the license, you must include attribution and a statement of some data sources as required. Refer to [attribution](/en/en/docs/terms/attribution/).

## Finance and Cost

### What is Pay as you go?

Standard subscriptions use a pay as you go (a.k.a volume-based) pricing model that doesn't need you to pay a lot of money up front or for services you don't use - you only pay for you actually use. When you stop using it, you don't need to pay anything else. 

In addition, pay as you go pricing is a tiered price, meaning that the more you use, the lower the unit price. Please refer to [Pay-as-you-go Pricing](/en/docs/finance/pricing/) and [Billing System](/en/en/docs/finance/billing-and-payment/).

### What is subscription?

The subscription is a service model, similar to when you subscribe to a newspaper or magazine, and you have continuous access to the service for the duration of the subscription. QWeather Develop Service now uses a subscription model, offering Standard subscription, Pro subscription and Free subscription. Refer to [Subscription](/en/docs/finance/subscription/).

### What is billing?

Billing is the core of the QWeather finance system. All billable items will be integrated into the billing and users will pay according to the billing amount. The billing is also a legally valid agreement between you and us, we will provide you with services based on the contents of the billing and charge you based on the billing amount. Please refer to [billing and payment](/en/docs/finance/billing-and-payment/).


### What is Savings Plan?

The Savings Plan is designed to cover the cost of standard subscription and is a discount plan for users with a high volume of data requests. It is not dependent on specific data and only requires the user to commit to an annual amount to get a large discount. Compared to pay as you go billing cost, the Savings Plan can save 40%-70%. Refer to [saving plans](/en/docs/finance/saving-plans/).

### How to estimate the cost?

Please log in to Console and use the [Price Calculator](https://console.qweather.com/#/calculator?lang=en) to estimate your costs.

### Are there more discounts if I have a high volume of requests?

For users with a high volume of requests (usually defined as more than 1,000,000 requests per day), please send an email to <sales@qweather.com> and we will offer additional discounts and more performance guarantees.

### What is a request?

When you access our service through an API or SDK and get data, it is called a data request. A request is counted as one request no matter how much content is retrieved. If the status code of the response is non `2xx`, the number of requests will not be counted, but incorrect requests that exceed a reasonable range will have the account suspended.

### How to check statistics?

Please visit [Console - Statistics](https://console.qweather.com/#/statistics?lang=en). We provide request statistics based on the last 24 hours (hour by hour), the last 30 days (day by day) and the last 6 months (month by month) of the project or data.

### What payment methods are supported?

For all users, we support online payment (Alipay). For [Organization Developers](/en/docs/account/developers/), we also support bank transfer. For more information about payments, see [Billing and Payment](/en/docs/finance/billing-and-payment/).

### Refunds or withdraw balance

For prepaid products purchased, such as Savings Plans or Resource Plans, we support refunds within 7 days and have not started using them, refunds are charged a 5% processing fee.

For balance, you can apply for withdrawal at any time and the withdrawn amount will be returned to your original payment method. A 5% processing fee will be charged for withdrawing the balance. Refer to [Withdraw balance](/en/docs/finance/billing-and-payment/#withdraw-balance).

### Do the pricing include VAT?

Yes. For customers in China, our prices are all inclusive of VAT. Refer to [VAT invoice](/en/docs/finance/vat-invoice/).

### Can you issue VAT invoices?

Yes. For users in China, we support issuing VAT e-invoices; for Organization Developers in China, we support issuing VAT e-invoices and VAT special invoices. Refer to [VAT invoice](/en/docs/finance/vat-invoice/).

### I need a contract

We provide billings for your consumption vouchers. You can set the contact information and language of the billing. The billing is a legal agreement between you and us and is automatically generated by the system, so no stamp or signature is required. Refer to [billing and payment](/en/docs/finance/billing-and-payment/).

## Account Management

### How to change the account information?

You can change your account contact information and password, refer to [Account Management](/en/docs/account/).

### How do I delete my account?

Please go to [QWeather User Center](https://id.qweather.com/) for secure deletion. Please note that deleting an account is irrevocable, including other services you are using QWeather for (e.g. QWeather App, Widget, Weather Maps Service) will be stopped. See [Delete Account](/en/docs/account/management/#delete-account)

### My account has been suspended

See [Account Suspension](/en/docs/account/suspension/).

### Can I add more contacts to receive service notifications?

Yes. Please visit Console-Settings-Notifications, you can add up to 5 notification contacts for your account, who will receive all relevant notifications by email (except security messages, e.g. authentication codes, etc.). Refer to [Notification Contacts](/en/docs/account/recipients/).

### Lost registration information and password

See [Lost registration information and password](/en/docs/account/management/#lost-registration-information-and-password).

### How to modify developer identification?

Individual developers can change to organization developers, and organization developers can update their organization information, refer to [Modify develpoers information](/en/docs/account/developers/#modify-developers).

## Legal Terms

### What I can and cannot do

In order to provide a fair environment and to protect your rights, you need to understand and agree to our various terms of service. Refer to [Terms](/en/docs/terms/).


> For more help, please submit a ticket in [Console](https://console.qweather.com/?lang=en) or send an email to support@qweather.com

