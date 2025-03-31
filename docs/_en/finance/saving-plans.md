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

1. [Go to Console - Saving Plans](https://console.qweather.com/saving-plans/)
2. Enter the committed amount
3. Select [Effective Time](/docs/finance/saving-plans/#effective)
4. Click “Next”
5. Review purchase information and click the “Create” button

Please make the payment as soon as possible when the saving plan is successfully created. Overdue payment will be canceled.

You can cancel any unpaid savings plan at any time before payment.

## Price Calculator

Using the [Price Calculator](https://console.qweather.com/price-calculator) will quickly help you calculate the Saving Plans you need to purchase.

## Expiration

The committed amount in the Saving Plans is valid for 1 year or will be used up within 1 year. After the expiration of the Saving Plans, any unused amount will be voided, please refer to the following example.

Assumptions: A Saving Plans(1-year) is purchased on March 20, 2022

| Use up within 1 year                                                                                                                                 | Not used up within 1 year                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| At 2022-12-30 23:00, the full committed amount is used up, and requests from the next hour will no longer enjoy the Saving Plans discount. | At 2023-03-19 23:59:59, there is a remaining commitment amount ¥234 in the Saving Plans, then from 2023-03-20, the remaining ¥234 will be invalid and can no longer be used. |

## Effective

When purchasing a saving plan, you can choose when it will take effect:

**Upon payment**

When you create a saving plan successfully, you have up to 24 hours to make a payment, and the saving plan takes effect immediately after payment.

**Specified time**

When you create a saving plan successfully and complete payment, the saving plan will take effect at the time you specify.

Again, savings plans that are not paid by the payment date will be automatically canceled.

## Multiple Saving Plans

You can purchase multiple Saving Plans, and multiple Saving Plans will be used in the order of purchase time. 