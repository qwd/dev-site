---
title: Saving Plans
tag: [finance, splans]
ref: finance-splans
---

Savings Plans is a discount plan that offers lower pay as you go pricing, in exchange, you need to prepay the committed usage amount.

> **For example:** you commit to spending ¥1,000 per year and upfront for 3 years, your standard subscription price will be calculated at a 40% discount, i.e. the price for real-time weather is reduced from ¥0.001 per request to ¥0.0004 per request. Or it can be understood that you paid ¥1,000 for about 1 million requests by default and will get about 2.5 million requests with purchasing a 3-year savings plan.

## Commitment Amount

The commitment amount is the amount you commit to use within one year, which will expire after 1 year or when it is used up, refer to [Expiration](#expiration). The bill amount for [Standard subscription](/en/docs/finance/subscription/#standard-subscription) will be paid using the commitment amount in priority.

## Commitment Terms

Commitment Terms includes 1-year and 3-year.

- 1-year: total upfront cost = Commitment Amount x 1 year
- 3-year: total upfront cost = Commitment Amount x 3 years

## Saving Rate

Saving Rate is a discount multiplier for pay as you go pricing.

> **For example:** After purchasing a 1-year saving plan, the cost of a single request for real-time weather is: ¥0.001 x 0.6 savings rate = ¥0.0006

| Commitment Terms | Saving Rate |
| ---------------- | ----------- |
| 1-year           | 0.6         |
| 3-year           | 0.4         |

## Purchase

Please go to [Console - Finance & Cost - Savings Plans](https://console.qweather.com/#/savings), set the commitment amount and purchase.

## Price Calculator

Using the [Price Calculator](https://console.qweather.com/#/calculator) will quickly help you calculate the Saving Plans you need to purchase.

## Expiration

The committed amount in the Saving Plans is valid for 1 year or will be used up within 1 year. After the expiration of the Saving Plans, any unused amount will be voided, please refer to the following example.

#### Commitment Terms = 1-year

Assumptions: A Saving Plans(1-year) is purchased on March 20, 2022

| Use up within 1 year                                                                                                                                 | Not used up within 1 year                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| At 23:00 on December 30, 2022, the full committed amount is used up, and requests from the next hour will no longer enjoy the Saving Plans discount. | At 23:59:59 on March 20, 2023, there is a remaining commitment amount ¥234 in the Saving Plans, then from March 21, 2023, the remaining ¥234 will be invalid and can no longer be used. |

#### Commitment Terms = 3-year

Assumptions: A Saving Plans(3-year) with ¥1,000 commitment amount is purchased on March 20, 2022, and the total upfront amount is ¥1,000  x 3 years = ¥3,000

| Use up within 1 year                                                                                                                                                                                                                                                     | Not used up within 1 year                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| At 23:00 on December 30, 2022, the ¥1,000 commitment amount is used up, and the request from the next hour will no longer enjoy the Saving Plans discount. <br>From March 21, 2023, you can continue to use the ¥1,000 commitment amount for the next period, and so on. | At 23:59:59 on March 20, 2023, there is ¥234 remaining commitment in the first commitment terms, and from March 21, 2023, the remaining ¥234 will be invalid and can no longer be used. <br>From March 21, 2023, you can continue to use the ¥1,000 for the next commitment terms, and so on. |

## Effective

The Saving Plans will be available immediately on the current hour of purchase.

> **For example:** You successfully purchased a Saving Plans at 14:30 on March 20, 2022, all data requests starting at 14:00 on March 20, 2022, will be calculated according to the Saving Rate.

## Discount Rules

Saving Plans are charged according to the corresponding Saving Rate, and discounts are no longer available when the Saving Plans expires or the commitment amount is used up.

> **For example:** If you purchase a Saving Plans(1 year) with ¥1000 commitment amount and the Saving Rate = 0.6, so the price of real-time weather is: ¥0.001 per request x 0.6 = ¥0.006 per request. Within one year, if more than ¥1,000 has been used, the price of real-time weather is: ¥0.001 per request.

## Payment Priority

When purchasing a Saving Plans, the Standard subscription bill will be paid using the commitment amount first, and if the commitment amount has been used up, it will be paid from the balance.

If user has purchased more than one Saving Plans, refer to the instructions for multiple Saving Plans.

## Multiple Saving Plans

You can purchase multiple Saving Plans, which can be stacked for more flexible use. Multiple Saving Plans will be used in the order of purchase time. If the user purchases savings plans with different commitment terms, it will be calculated according to different Saving Rate.

> **For example:** If you purchase a Saving Plans(3-year) on March 20, 2022 and another Saving Plans(1-year) on May 31. The first Saving Plans is used up on October 25, so your Saving Rate will be 0.4 between March 20 and October 25, and 0.6 after October 25, and you will continue to use the first Saving Plans with a Saving Rate of 0.4 starting March 21, 2023.


## Upgrades, downgrades and renewals

Saving Plans does not support upgrades or downgrades, but you can purchase multiple Saving Plans. If you need to renew your Saving Plans when it expires, simply purchase a new one.

## Cancellation

Once a Saving Plans is purchased, cancellation and refunds are not supported. Please submit a ticket if there are any special circumstances.