---
title: console-finance
---
```json
{
  "asOf": "2024-03-03T12:13Z",
  "currency": "CNY",
  "balance": -39.4,
  "accruedCharges": {
    "previousDay": 110.45,
    "thisMonth": 1311.32,
    "sinceLastBill": 1311.32
  },
  "vatEligibleAmount": 2932.5,
  "pendingBills": [
    {
      "number": "27A4KA3K2D",
      "date": "2024-03-01T02:00Z",
      "type": "pay-as-you-go",
      "status": "unpaid",
      "amount": 861.2,
      "amountDue": 39.4,
      "dueDate": "2024-03-10T15:59Z"
    },
    {
      "number": "639C7E7DC2",
      "date": "2024-03-02T13:34Z",
      "type": "savings plan",
      "status": "unpaid",
      "amount": 2000,
      "amountDue": 2000,
      "dueDate": "2024-03-15T07:59Z"
    }
  ],
  "availableSavingsPlans": [
    {
      "billNumber": "27A4KA3K2D",
      "status": "pending",
      "term": "1",
      "commitments": 2000,
      "utilized": 0,
      "effectiveTime": "2024-03-15T08:00Z"
    }
  ],
  "availableResourcePlans": [
    {
      "billNumber": "6CC7233CBE",
      "status": "active",
      "type": "general",
      "requests": 1000000,
      "utilized": 9876,
      "effectiveTime": "2024-01-04T09:54Z"
    }
  ]
}
```