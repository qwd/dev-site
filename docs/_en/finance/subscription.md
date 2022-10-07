---
title: Subscription
tag: [finance, subscription]
ref: finance-subscription
---

QWeather Develop Service now uses a subscription model, including:

- Standard subscription
- Pro subscription
- Free subscription
  
When you create a Project, you need to choose at least one subscription.

## Free subscription

> **Tips:** Free subscription requires additional configuration, please refer to [API Configuration](/en/docs/configuration/api-config/), [iOS SDK Configuration](/en/docs/configuration/ios-sdk-config/) and [Android SDK configuration](/en/docs/configuration/android-sdk-config/).

For individual developers and small business, the free subscription provides basic weather services. Under the free subscription, you can use most of the weather services with a limited requests volume per day. 

Free subscription is under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) license, means as long as you follow the license terms, then you are free to share and adapt for any purpose, even for commercial purposes. Learn more about [License](/en/docs/terms/license/).

Please see [Subscription Comparison](#comparison) below for the weather services and other specifications available with a free subscription.

## Standard subscription

> **Tip:** When using the Standard subscription for the first time, you need to ensure that your [balance](/en/docs/finance/billing-and-payment/#balance) is greater than or equal to ¥10.

With Standard subscription, you can get all the services of QWeather without any request volume limit, support global acceleration and automatic routing, so your applications can be deployed around the world without worrying about response speed.

Standard subscription use pay-as-you-go tiered pricing, which means the more you request, the lower the unit price. Refer to [Pay-As-You-Go and Pricing](/en/docs/finance/pricing/) or use the [Price Calculator](https://console.qweather.com/#/calculator) to estimate your costs. Standard subscription also support Saving Plans that can reduce your costs. Learn about [Saving Plans](/en/docs/finance/saving-plans/).

For organization developers, Standard subscription also support recurring payments, learn about [recurring payments](/en/docs/finance/billing-and-payment/#payment).

Please see [Subscription Comparison](#comparison) for the specific specifications of Standard subscription.

## Pro subscription

Pro subscription is for enterprise customers with high request volume (generally 1 million requests per day) or customers who have strict requirements on performance and stability. Pro subscription includes all the features of Standard subscription, in addition, it also provides more powerful services and network performance: independent, scalable network and server, up to 50,000 QPM, SLA 99.9%, custom API domain name, CDN edge acceleration across the globe.

Compared with more powerful performance, Pro subscriptions provide a lower unit price for your large request volume business.

If interested in Pro subscription, please [contact us](https://www.qweather.com/en/contact) and we will customize a solution for you.

Please see [Subscription Comparison](#comparison) for the specific specifications of Pro subscription.

## Comparison

| **Items** | **Free** | **Standard** | **Pro** |
| --- | --- | --- | --- |
| **Price** | Free | Pay as you go | On Demand |
| **Requests** | 1000 requests per day | On Demand | On Demand |
| **GeoAPI** | &#10003; | &#10003; | &#10003; |
| **Weather** | Real-time<br>Hourly forecast(24h)<br>Daily forecast(3-7d) | Real-time<br>Hourly forecast(24-168h)<br>Daily forecast(3-30d) | Real-time<br>Hourly forecast(24-168h)<br>Daily forecast(3-30d) |
| **Minutely-Precipitation** | &#10003; | &#10003; | &#10003; |
| **Grid Weather** | &#10003; | &#10003; | &#10003; |
| **Warning** | &#10003; | &#10003; | &#10003; |
| **Indices** | &#10003; | &#10003; | &#10003; |
| **Air Quality** | &#10003; | &#10003; | &#10003; |
| **Sun and Moon** | &#10003; | &#10003; | &#10003; |
| **Time Machine** | &times; | &#10003; | &#10003; |
| **Tropical Cyclone** | &times; | &#10003; | &#10003; |
| **Ocean** | &times; | &#10003; | &#10003; |
| **Solar Radiation** | &times; | &times; | &#10003; |
| **Server** | Shared | Shared for business     | Dedicated |
| **SLA** | &times; | 99.5% | 99.95% |
| **QPM** | 100 | 3000 | 50000+ |
| **Max Connection** | 100 | 5000 | 50000+ |
| **Network** | Shared  | Shared for business | Dedicated |
| **Auto Routing** | &#10003; | &#10003; | &#10003; |
| **Data Center** | 2  | 4  | 10 |
| **Edge Acceleration** | &times; | &times; | &#10003; |
| **Custom API URL** | &times; | &times; | &#10003; |
| **License** | CC BY-SA 4.0 | QWeather EULA   | QWeather EULA  |
| **Support** | &times; | &times; | &#10003; |
| **Contract** | &times; | &times; | On Demand |

## Restriction

- Only one Free subscription can be created per account.
- To use a Standard subscription for the first time, your balance must be greater than or equal to ¥10. 
- Free subscription do not support pay as you go or Saving Plans.
- You cannot switch subscriptions, but you can remove a subscription by deleting the Project, create a new Project and select the appropriate subscription.
