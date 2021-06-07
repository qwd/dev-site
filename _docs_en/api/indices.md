---
title: Weather Indices
tag: api
data: indices
version: v7
description: QWeather Weather Indices API includes more than 20 kinds of data such as car wash indices, clothing indices, cold indices, allergy indices, ultraviolet indices, fishing indices, etc. 
ref: api-indices
---

Weather Indices API provides real-time and forecast data including:

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

## Request URL

{% include api-url.html flag="indices" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key idx-type lang-zhen" %}

## Response

{% include api-snippet.html flag="indices-1d" %}

{% include api-response.html group="indices" prefix="daily" %}

## Indices Constant

The weather indices level is for reference only, and the level may be adjusted. 

| Name | Type | Level (Category) |
| ---------------------- | ---------- | ------------------------ |
| All indices | 0 | |
| Sports  | 1 | Excellent (1), Good (2), Poor (3) |
| Car Wash  | 2 | Excellent (1), Good (2), At Risk (3), Poor (4) |
| Clothing  | 3 | Freezing (1), Cold (2), Cooler (3), Cool (4), Comfort (5), Hot (6), Heat (7) |
| Fishing  | 4 | Good (1), Moderate (2), Poor (3) |
| UV  | 5 | Very Low (1), Low (2), Moderate (3), High (4), Extreme (5) |
| Travel  | 6 | Excellent (1), Good (2), Moderate (3), Fair (4), Poor (5) |
| Allergy  | 7 | Beneficial (1), Neutral (2), At Risk (3), High Risk (4), Extreme Risk (5) |
| Comfort  | 8 | Excellent (1), Good (2), Moderate (3), Poor (4), Bad (5), Worse (6), Worst (7) ) |
| Cold  | 9 | Healthy (1), Moderate (2), Unhealthy (3), Hazardous (4) |
| Air Pollution  | 10 | Excellent (1), Good (2), Moderate (3), Bad (4), Poor (5) |
| Air-Conditioner | 11 | On (1), Advise (2), Neutral (3), Heating Mode (4) |
| Sunglasses | 12 | No (1), Recommend (2), Advise (3), Need (4), Necessary (5) |
| Makeup  | 13 | Hydrating (1), Moisturizing and sun protection (2), Oil control and sun protection (3), Prevent dehydration and sun protection (4), Oil control (5), Prevent dehydration (6), Sun protection (7), Moisturizing (8) |
| Air-Cure  | 14 | Excellent (1), Good (2), Moderate (3), At Risk (4), Bad (5), Poor (6) |
| Traffic  | 15 | Excellent (1), Good (2), Moderate (3), Poor (4), Bad (5) |
| SPF | 16 | Very Low (1), Low (2), Moderate (3), High (4), Extreme (5) |