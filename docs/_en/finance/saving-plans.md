---
title: Saving Plans
tag: [finance, splans]
ref: finance-splans
---

Savings Plans is a discount plan that offers lower pay as you go pricing, in exchange, you need to prepay the committed usage amount.

> **For example:** you commit to spending ¥1,000 per year and upfront for 1 year, your API price will be calculated at a 30% discount, i.e. the price for real-time weather is reduced from ¥0.0007 per request to ¥0.00049 per request. Or it can be understood that you paid ¥1,000 for about 1.6 million requests by default and will get about 2.5 million requests with purchasing a Saving Plans.

## Commitment Amount

The commitment amount is the amount you commit to use within one year, which will expire after 1 year or when it is used up, refer to [Expiration](#expiration). The bill amount for API requests will be paid using the commitment amount in priority.

## Commitment Terms

The commitment term is the total duration to be prepaid, now commitment term supports 1-year.

## Saving Rate

The saving rate is a discount rate for API pricing.

> **For example:** After purchasing a 1-year saving plan, the cost of a single request for real-time weather is: ¥0.0007 x 0.7 savings rate = ¥0.00049

| Commitment Terms | Saving Rate |
| ---------------- | ----------- |
| 1-year           | 0.7         |

## Purchase

Please go to [Console - Finance & Cost - Savings Plans](https://console.qweather.com/saving-plans), set the commitment amount and purchase.

## Price Calculator

Using the [Price Calculator](https://console.qweather.com/price-calculator) will quickly help you calculate the Saving Plans you need to purchase.

## Expiration

The committed amount in the Saving Plans is valid for 1 year or will be used up within 1 year. After the expiration of the Saving Plans, any unused amount will be voided, please refer to the following example.

Assumptions: A Saving Plans(1-year) is purchased on March 20, 2022

| Use up within 1 year                                                                                                                                 | Not used up within 1 year                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| At 2022-12-30 23:00, the full committed amount is used up, and requests from the next hour will no longer enjoy the Saving Plans discount. | At 2023-03-19 23:59:59, there is a remaining commitment amount ¥234 in the Saving Plans, then from 2023-03-20, the remaining ¥234 will be invalid and can no longer be used. |

## Effective

The Saving Plans will be available immediately on the current hour of purchase.

> **For example:** You successfully purchased a Saving Plans at 14:30 on March 20, 2022, all data requests starting at 14:00 on March 20, 2022, will be calculated according to the Saving Rate.

## Discount Rules

Saving Plans are charged according to the corresponding Saving Rate, and discounts are no longer available when the Saving Plans expires or the commitment amount is used up.

> **For example:** If you purchase a Saving Plans with ¥1000 commitment amount and the Saving Rate = 0.7, so the price of real-time weather is: ¥0.0007 per request x 0.7 = ¥0.00049 per request. Within one year, if more than ¥1,000 has been used, the price of real-time weather is: ¥0.001 per request.

## Payment Priority

When purchasing a Saving Plans, the pay-as-you-go subscription bill will be paid using the commitment amount first, and if the commitment amount has been used up, it will be paid from the balance.

If user has purchased more than one Saving Plans, refer to the instructions for multiple Saving Plans.

## Multiple Saving Plans

You can purchase multiple Saving Plans, which can be stacked for more flexible use. Multiple Saving Plans will be used in the order of purchase time. 

## Upgrades, downgrades and renewals

Saving Plans does not support upgrades or downgrades, but you can purchase multiple Saving Plans. If you need to renew your Saving Plans when it expires, simply purchase a new one.

## Cancellation

Once a Saving Plans is purchased, cancellation and refunds are not supported. Please submit a ticket if there are any special circumstances.