---
title: Buy
tag: faq
description: To learn how to purchase data services from QWeather, view price, invoice, renewals, billing, payment and other financial related questions, please visit our financial Help Center.
ref: 2-help-buy
---

## Commercial Use

The purchase of the QWeather data service allows you to use weather data for any commercial purposes and get a commercial license.

> **Definition of Commercial Purposes:** Using QWeather data service to develop any products for the public, or corporate actions that can directly or indirectly obtain economic benefits.

## How to Buy

QWeather uses a per-volume billing model, a.k.a. Pay as You Go, where you only pay for what you actually use, and the purchase process is very simple: 

1. Log in to the [Console](https://console.qweather.com/?lang=en) and [create a Pro Application](/en/docs/start/get-key/)
2. Make sure you have a sufficient balance in your account or have purchased a [Package](#package).
3. Done.

## Price

The price is very simple. You will be billed according to how much you actually use, so please make sure you have enough balance in your account or have purchased the [Package](#package).

| Data                       | Price（CNY/1000 calls）<br /><small>China Node</small> | Price（CNY/1000 calls）<br /><small>Global Node</small> |
| -------------------------- | :----------------------------------------------------: | :-----------------------------------------------------: |
| Real-time weather          |                           1                            |                            2                            |
| 3-day weather forecast     |                           1                            |                            2                            |
| 7-day weather forecast     |                           2                            |                            3                            |
| 10-day weather forecast    |                           3                            |                            4                            |
| 15-day weather forecast    |                           4                            |                            5                            |
| 24-hr weather forecast     |                           1                            |                            2                            |
| 72-hr weather forecast     |                           2                            |                            3                            |
| 168-hr weather forecast    |                           3                            |                            4                            |
| Warning                    |                           1                            |                            2                            |
| Minute Precip              |                           1                            |                            2                            |
| Real-time weather(Grid)             | 1                | 2                |
| 3-day weather forecast(Grid)             | 1                | 2                |
| 7-day weather forecast(Grid)             | 12               | 3               |
| 24-hr weather forecast(Grid)  | 1                | 2                |
| 72-hr weather forecast(Grid)  | 2                | 3                |
| Real-time air quality      |                           1                            |                            2                            |
| Air quality daily forecast |                           2                            |                            3                            |
| Weather indices            |                           1                            |                            2                            |
| Real-time weather (POI)    |                           1                            |                            2                            |
| Daily weather (POI)        |                           2                            |                            3                            |
| Historical                 |                           1                            |                            2                            |
| Sun and Moon               |                           1                            |                            2                            |
| GeoAPI                     |                          0.1                           |                           0.2                           |

> The server node represents the source of access, i.e. access initiated from within China, or access initiated from outside China. Refer to [Global Routing and Server Node](#server-node)
{:.bqwarning}

> Users have visited 5,000 times real-time weather from China and 3,000 real-time weather from France, so you need to pay 1&times;5+2&times;3=11RMB

## Package

For users with a high volume of data requests, it is recommended to purchase a Package to save the cost. Package is a prepaid product with a large discount for per-volume billing, discount up to 80%.
  
Calls Package is used to offset the data request of all Applications under your account, and Package for China Node will cover all requests within mainland China, Package for Overseas Node will cover all requests outside of China.

The Package will not affect the access to other data, which will still be charged on a pay-as-you-go basis.

> Package are valid for 12 months and can be purchased in stacks, giving priority to those purchased first. Package take effect immediately after purchase.
{:.bqwarning}

> For example, if you purchase real-time weather Package for 10,000,000 calls (China node), all Applications in the your account that do not exceed 10 million data request to the real-time weather within 12 months will not need to pay extra. If any calls that exceed that, or request to other data, or request from overseas will be charged according to the actual usage.

For different data, the discount is different, please login to the console to check the specific discount price of the Package.

| Packages  | Discounts  |
| --------- | ---------- |
| 1M calls  | 10%～40%   |
| 5M calls  | 20% ～ 50% |
| 10M calls | 20% ～ 60% |
| 50M calls | 30% ～ 80% |

## More calls

If your business requires large scale reqeusts, such as over 1 million calls per day, send an email to <sales@qweather.com>, we provide additional discounts and performance guarantees for large-scale Applications.

## Performance Application {#hpa}

We provide two different data service performances for business users. The default is the Pro Application（PA）, which is for most usage scenarios. If your have a large number of users, or requires higher stability guarantee, it is recommended to use High Performance Application(HPA).

|                    | Pro       | Performances for China    | HPE for Global       |
| ------------------ | --------- | ------------------------- | -------------------- |  |
| SLA                | 99.9%     | 99.95%                    | 99.95%               |
| Server             | Share   | Dedicated, Clustered      | Dedicated, Clustered |
| Bandwidth          | Share   | Dedicated                 | Dedicated            |
| Custom Domain name | &times;   | Support                   | Support              |
| Max Connections    | 3,000     | 50,000                    | 50,000               |
| QPM                | 3,000     | 50,000                    | 50,000               |
| Global routing     | Automatic | Only Chinese server nodes | Automatic            |

The High Performance Application charges an hourly configuration fee. For long-term use, please send an email to <sales@qweather.com> so that we can offer you an additional discount.

| High Performance for China | High Performance for Global |
| -------------------------- | --------------------------- |
| ¥2/hr                      | ¥6/hr                       |

> Please note: Once you setup the High Performance Application, you will be charged by the hour even if you do not use it. If you no longer need it, please delete the High Performance Edition application.
{:.bqwarning}

## Server Node

Due to the complexity of the Internet, the physical distance determines the speed of access. In order to solve this problem, QWeather has deployed server nodes in 10 countries around the world.

We support automatic global node routing, which allows users to automatically access the nearest server node via the optimal route without any configuration on your part, resulting in faster access speeds and higher connectivity rates.

For example, if you have users all over the world, when they use your product, they will access our global nodes nearby, thus reducing latency and avoiding connection errors.

For further suggestions on the location or selection of server nodes, please [contact us](https://www.qweather.com/en/contact).

## Outstanding Balance

When there is an outstanding balance status, the following happens:

* All Pay as You Go Applications cannot get data, annual and monthly paid Applications are not affected
* No invoice can be issued
* No refunds or withdrawals can be processed
* No new data Applications can be created

## Is the balance shown in real time {#balance} 

Approximate real-time amount, the balance is updated every five minutes, accurate to four decimal places.

## Billing

When you purchase weather data using the per-volume billing model, you can view your consumption bill in the consumption history in the Console. The minimum time granularity of the bill is hourly, and you can also check the total amount spent by day or by month.

Billing is calculated based on the amount of all data KEY calls under your data application.

The bill is generated every hour and records the total number of requests you used and the amount spent in the previous hour. There is some latency, so the bill and the balance you see in the Console will be different.


## Top-up

To purchase the weather data service on a volume-based basis, you need to top-up first. Top-ups can be using Alipay (support debit card, Alipay balance or credit card) or the company transfer.

> If you use company transfer to top up, you cannot withdraw or refund
>
> If you have unpaid fees, the top-up amount will be deducted from the unpaid fee amount in priority
{:.bqwarning}

## Invoice

All prices are tax included, you can apply for invoice at the time of purchase. To apply for invoices, please log in [Console](https://console.qweather.com/?lang=en) and select "Invoice->Apply for Invoices" in the left navigation menu, if you have multiple orders, you can apply for invoices together or separately.

> If you have outstanding payment in your account, or your order is over one year old, you cannot apply for invoices.
{:.bqwarning}

## Payment Method

- **Online payment (Alipay)**
  
  Online payment supports Alipay balance, debit card and credit card, and the order will be effective immediately after successful payment.

- **Company's bank wire transfer**
  
  For [Enterprise Developer](/en/help/account/#account-type), we support payment by company's bank transfer. After the transfer is completed, please upload the statement, and the order will be effective within 24 hours after receiving the statement.

> Unpaid orders will be automatically removed after 15 days.

## Refund

For users who have purchased a Package, we support refunds at any time if the following conditions are met:

- The Package purchased was not invoiced
- The payment was made online and not by company's bank wire transfer
- The Package has not yet been used

> For a refund, please log in to the Console and submit a work order. The refund will include a refund fee of 5% of the actual amount paid.
{:.bqwarning}

## Technical Support

|               | Free users    | Business Edition | High Performance Edition |
| ------------- | ------------- | ---------------- | ------------------------ |
| Eemail        | Support       | Support          | Support                  |
| QQ or WeChat  | &times;       | Support          | Support                  |
| Phone         | &times;       | &times;          | Support                  |
| Service Hours | Workday 10-17 | workday 10-17    | Everyday                 |

We also provide paid technical support services, providing 7x24 hours dedicated technical support (support in Chinese and English), please [contact us](https://www.qweather.com//en/contact).

> If you have any questions about purchasing QWeather data service, please feel free to send an email to <sales@qweather.com>

