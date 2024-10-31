---
title: Pricing
tag: [finance, pricing]
ref: finance-pricing
---

QWeather Develop services are all based on pay as you go billing model, you only pay for the services you actually use, no large upfront, no hidden fees, start and stop whenever you want, and no fees when you stop.

Pay as you go is tiered pricing, with the higher requests, the lower cost per request.

## Specifications 

- **Billing unit:** pre request. See [What is a request](/en/help/#what-is-a-request).
- **Billing cycle:** monthly
- **Accrued charges cycle:** hourly
- **Minimum billing amount:** ¥0.01. Under ¥0.01 will be billed as ¥0.01

> **Example:** you have 1,000,000 requests per month, the monthly cost is: (300,000 requests x ¥0.001) + (700,000 requests x ¥0.00088) = ¥916
>
> *Note: this is an approximation and the final cost may vary slightly due to the actual request volume per hour.*

## Pricing

Pay as you go is tiered pricing, the progressive request volume is calculated as the sum of each data contained in a single service.

> **Example:** you requested 300000 real-time weather, 700000 warnings, 300000 real-time air quality and 100000 air quality forecast in a month, your total requests for the month are: 1,000,000 for weather services and 400,000 for air quality, and the cost for the month is: [(300,000 requests x ¥0.001) + (700,000 requests x ¥0.00088)] + [(300,000 requests x ¥0.001) + (100,000 requests x ¥0.00088)] = ¥1,304
>
> *Note: this is an approximation and the final cost may vary slightly due to the actual request volume per hour.*

[Saving Plans](/en/docs/finance/saving-plans/) can significantly reduce the cost.

For users with a large volume of requests (usually million or more requests per day), please contact our business experts for a better solution.

{% include price-table.html %}

## Restrictions

Pay as you go model is only supported for Standard and Pro subscriptions.