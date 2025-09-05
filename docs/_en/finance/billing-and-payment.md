---
title: Billing and Payment
tag: [finance, billing]
description: Learn how the billing and payment system works for QWeather Develop Services.
ref: finance-billing
---

QWeather Developer Services's billing system based on the pay-as-you-go subscription model, it is a more transparent, simple and competitive pricing scheme. This document describes how the billing and payment system works.

> **Hint**: Price calculations in this document are estimates and final costs may vary slightly.

## Billing

QWeather developer services use a pay-as-you-go model, so you don't need to pay a lot of money up front or for services you don't use, you only need to pay for the part you actually use. In addition, pay as you go is tiered pricing, with the higher requests, the lower cost per request.

All your requests volume and cost will be listed on the bill and you should send us a payment based on the bill amount. Here are important rules for billing:

- **Billing unit:** The billing unit is a single request.
- **Billing cycle:** The billing cycle is one month and is generated before the 1st of each month.
- **Accrued charges:** Accrued charge is your requests and costs for the previous hour, and the total of all accrued charges in a month is your monthly bill.
- **Tiered price progression cycle:** The tiered price progression cycle is one month, which means that at the very beginning of each month, it will start at the first tier of the tiered price.
- **Minimum billing amount:** ¥0.01. Under ¥0.01 will be billed as ¥0.01

For pay-as-you-go pricing, please refer to [Pricing](/en/docs/finance/pricing/).

#### Examples

***30,000 weather API requests in one month***

Next month you will be charged **CNY 0**

```
30,000 requests x CNY 0 = CNY 0
```

***1 million weather API requests and 1 million warning API requests in one month***

Next month you will be charged ** CNY 1,165**

```
50,000 requests x CNY 0 + 950,000 requests x CNY 0.0007 + 1,000,000 requests x CNY 0.0005 = CNY 1,165
```

***150 weather API requests in an hour (with tier 2 prices)***

The accrued charge for this hour is CNY 0.11 (less than ¥0.01 is calculated as ¥0.01)

```
150 requests x CNY 0.0007 = CNY 0.105
```

### Mid-month billing

You may receive a mid-month bill if your accrued charges exceed your [credit limit](#credit-limit) in a month. Typically, you'll have to pay your mid-month bill within 48 hours or your service may be disrupted, see [Overdue](#overdue).

### Credit limit

All developers will be granted a credit limit, if your account balance = 0, it will consume your credit limit. After you make a payment, the credit limit will be restored. The credit limit will dynamically adjust with the payment history, in general, paying your bills on time will increase the credit limit.

### Account balance

Your payment amount will be placed in the account balance and used to pay bills. When the balance is negative it means that you have one or more unpaid bills and you should ensure that the balance is greater than or equal to 0 before the due date.

Please note that positive balances do not support VAT invoice, you can apply for an invoice based on the bill amount after using the balance to pay the bill.

### How can I reduce costs?

Pay-as-you-go model gives you the flexibility to increase or decrease the volume of requests according to your needs and avoid paying large amounts up front. When your request volume is higher or your demand is more stable, you can use Savings plans to reduce your cost significantly. Refer to [Savings plans](/docs/finance/savings-plans/).

For users with a large volume of requests (usually million or more requests per day), please contact our business experts for a better solution.

## Payment

We will automatically attempt to charge your account balance after a bill (including mid-month bills or other bills) has been issued. If the payment fails, you will need to pay the bill manually before the payment date.

We will try to use your balance to pay the bill at the following date:

- Bill date
- Payment date (due date)

### Manual payment

You can make a one-time manual payment, which will increase your balance for unpaid/outstanding bills or other prepaid services.

#### Pay the specified bill

1. [Go to Console - Billing](https://console.qweather.com/finance/billing/)
2. Select the bill to be paid and click the “Pay” button next to the bill.
3. If your balance is greater than the bill amount, you will receive a prompt and click the “Pay” button. Otherwise you will be redirected to the payment page.
4. On the payment page, select a payment method, check the “I understand” box, and click "Pay" button.

You can also follow the instructions in the email you receive to make the payment.

#### Add the balance to pay

1. [Go to Console - Payment](https://console.qweather.com/finance/payment/)
2. Enter the amount.
3. Select the payment method, check the “I understand” box and click "Pay" button.

Payment will be prioritized to fill negative balance, which means unpaid bills that are already in effect (e.g., monthly bills or mid-month bills) will be paid automatically, and the remainder will be placed to your balance.

For bills that are not yet effective (like created savings plan bills), positive balances will not be paid automatically and you will need to use the [Pay the specified bill](/en/docs/finance/billing-and-payment/#pay-the-specified-bill) method.

The minimum amount for each payment is CNY 0.01. If you have a negative balance, the minimum amount must be such that the balance is greater than or equal to zero.

Once again, you cannot apply for a VAT invoice for a positive amount added to your balance, you need to apply for an invoice based on the amount of the bill after paying the bill using your balance.

### Savings plans payment

If you have a [savings plan](/en/docs/finance/savings-plans/), the commitment amount in the savings plan will automatically cover the cost of the pay-as-you-go subscription. If the savings plan expires or the commitment amount is used up, you will need to pay the remaining cost of the month (if any) at the beginning of the next month.

### Payment methods

We offer a variety of payment methods.

**Alipay**

We recommend using Alipay for payment, it support credit and debit cards.

**Bank Transfer** 

For organization developers in China, we support using bank transfer for payment:

- Your bank account name should be the same as your organization developer name, otherwise we will not add the amount to your account balance or refund it within 30 days.
- You need to **specify your Developer ID** when transferring funds so that we can quickly identify and prevent financial fraud, otherwise we will not add the transfer amount to your account balance, in this case **you have to submit a ticket and upload the corresponding bank statement**. 
- When the transfer is completed, you don't need to do anything, we will check the payment information and the amount, then 
- Bank transfer is subject to bank confirmation (may be delayed in case of holidays), real-time payment is not possible. When the transfer is completed, we will add the transfer amount to your account balance and you will get the receipt via email. Bank transfer may be delayed in case of holidays, real-time payment is not possible. 

### Overdue

If a bill is not paid by the due date, it will be marked with a "Overdue" status and your developer services will be disrupted, so please complete payment of your bill as soon as possible.

> **WARNING:** Your account will be suspended if the "outstanding" over 30 days.
{:.bqdanger}

## Refund

You can request a refund for both the savings plans and the positive balance, where the savings plans must not be active and no VAT invoice has been issued. Refund for balance will be made the following month when the pay-as-you-go subscription is billed.

All refunds are subject to a **5% transaction fee** and the refund amount will be issued to the original payment methods. To request a refund, please [submit a ticket](https://console.qweather.com/support/ticket/new/).

Refunds cannot be requested if your account has been suspended or payments have been made for more than 180 days.

## Value added tax

For purchases made by users in mainland China, the bill amount already includes VAT. To apply a VAT invoice, please refer to the [VAT Invoice](/en/docs/finance/vat-invoice/).

For purchases made by users in other countries, the billed amount does not include any taxes.
