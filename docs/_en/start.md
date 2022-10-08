---
title: Start
tag: [start, overview]
description: QWeather provides a powerful, modern and development-friendly weather data service, includes weather API/SDK and Widget. You can start getting weather data by following the few steps below and the documentation, which is very simple.
permalink: /en/docs/start/
ref: start-overview
---

Welcome to QWeather Develop Service, this document will introduce some basic steps and concepts for getting started and understanding how we work.
## Getting Started

#### Step 1 Register an account

You need a QWeather account first, please refer to [Account Management](/en/docs/account/) for more details.

<a href="https://id.qweather.com/#/register?redirect=https%3A%2F%2Fconsole.qweather.com" target="_blank" rel="noopener noreferrer">Sign up now!</a>

#### Step 1  Create a Project and KEY

Go to [Console - Project](https://console.qweather.com/#apps)，click the "Create Project" button in the upper right corner. Refer to [Project and KEY](/en/docs/configuration/project-and-key/).

When you create a Project, you need to choose a subscription, for example, Free subscription or Standard subscription. Refer to [Subscription](/en/docs/finance/subscription/).

#### Step 3 Retrieve Data

Enter the following API URL in your browser (please replace the last KEY with the one you created in the previous step):

```
https://devapi.qweather.com/v7/weather/now?location=101010100&key=Your-KEY
```

If you chose a Standard subscription in the previous step, please ensure that your account balance > 0 and enter the following API URL in your browser:

```
https://api.qweather.com/v7/weather/now?location=101010100&key=Your-KEY
```

Now, you should be able to get real-time weather data for Beijing. However, please note that the Free subscription only supports a limited data and requests, please refer to [Subscription comparison](/en/docs/finance/subscription/#comparison).

#### Step 4 More Data

Follow the [Develop Guide](/en/docs/api/) to get more data.

## Cost

You will need to pay for a Standard subscription or Pro subscription.

Our billing is Pay-as-you-go model with tiered pricing, meaning that the more requests you make, the lower unit price, and you pay nothing when you stop using it. Please refer to [Pricing](/en/docs/finance/pricing/) and [Billing and Payment](/en/docs/finance/billing-and-payment/).

If you have a high volume of requests, you can also use Saving Plans to significantly reduce your costs, learn about [Saving Plans](/en/docs/finance/saving-plans/).

For users in mainland China, our price is VAT included, please refer to [VAT Invoice](/en/docs/finance/vat-invoice/).

## More Resources

These useful resources can help you get your work done more efficiently during the development process.

#### Features

Learn about the many features available with QWeather Develop Service. See [Features](/en/docs/features/).

#### Development Configuration

Before using the API or SDK, you will need to do some simple configuration, and for those using the free subscription, some additional configuration will be required. See [Configuration](/en/docs/configuration/).

#### Resources

You can find status codes, weather icons, multi-language, city list and etc at [Resource](/en/docs/resource/).

#### Best Practices

Here are some common practices and experiences when using our services so you can get the data quickly and easily. See [Best Practices](/en/docs/best-practices/).

#### Terms and licenses

In order to provide a fairer, more efficient and compliant development environment, you need to agree to our various terms of service. See [Terms](/en/docs/terms/).


