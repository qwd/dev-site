---
title: Indices Info
tag: resource
description: Learn about Weather Indices type/level and supported countries or regions.
ref: res-indices
---

Learn about Weather Indices type/level and supported countries or regions.

## Supported Regions

Weather indices are not available for all countries or regions. Currently, for China (including Hong Kong, Macau and Taiwan), all weather indices are available. For other countries or regions, the sports, car wash, clothing, UV index and fishing are available.

## Index Type

> If "All indices" is selected, no other indices can be selected.
{:.bqwarning}

| Index types     | Web API | iOS SDK           | Android SDK |
| --------------- | ------- | ----------------- | ----------- |
| All indices     | 0       | INDICES_TYPE_all  | ALL         |
| Sports          | 1       | INDICES_TYPE_spt  | SPT         |
| Car Wash        | 2       | INDICES_TYPE_cw   | CW          |
| Dressing        | 3       | INDICES_TYPE_drsg | DRSG        |
| Fishing         | 4       | INDICES_TYPE_fis  | FIS         |
| UV Index        | 5       | INDICES_TYPE_uv   | UV          |
| Travel          | 6       | INDICES_TYPE_tra  | TRA         |
| Allergy         | 7       | INDICES_TYPE_ag   | AG          |
| Comfort         | 8       | INDICES_TYPE_comf | COMF        |
| Flu             | 9       | INDICES_TYPE_flu  | FLU         |
| Air Pollution   | 10      | INDICES_TYPE_ap   | AP          |
| Air-Conditioner | 11      | INDICES_TYPE_ac   | AC          |
| Sun Glasses     | 12      | INDICES_TYPE_gl   | GL          |
| Make Up         | 13      | INDICES_TYPE_mu   | MU          |
| Air-Cure        | 14      | INDICES_TYPE_dc   | DC          |
| Traffic         | 15      | INDICES_TYPE_ptfc | PTFC        |
| SPF             | 16      | INDICES_TYPE_spi  | SPI         |

## Index Level

> Level is possible to be changed.


| Indices           | Level (Category)                                           |
| --------------- | ------------------------------------------------------------ |
| Sports          | Excellent (1), Good (2), Poor  (3)                           |
| Car Wash        | Excellent (1), Good (2), At Risk (3), Bad (4)                |
| Dressing        | Freezing (1), Cold (2), Cooler  (3), Cool (4), Comfort (5), Hot (6), Heat (7) |
| Fishing         | Good (1), Moderate (2), Poor  (3)                            |
| UV Index        | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)  |
| Travel          | Excellent (1), Good (2),  Moderate (3), Fair (4), Poor (5)   |
| Allergy         | Beneficial (1), Neutral (2), At  Risk (3), High Risk (4), Extreme Risk (5) |
| Comfort         | Excellent (1), Good (2),  Moderate (3), Fair (4), Bad (5), Worse (6), Worst (7) |
| Flu             | Healthy (1), Moderate (2),  Unhealthy (3), Hazardous (4)     |
| Air Pollution   | Excellent (1), Good (2),  Moderate (3), Bad (4), Very Bad (5)    |
| Air-Conditioner | On (1), Advise (2), Neutral  (3), Heating Mode (4)           |
| Sun Glasses     | No (1), Recommend (2), Advise  (3), Need (4), Necessary (5)  |
| Make Up         | Hydrating (1), Moisturizing and  sun protection (2), Oil control and sun protection (3), Prevent dehydration  and sun protection (4), Oil control (5), Prevent dehydration (6), Sun  protection (7), Moisturizing (8) |
| Air-Cure        | Excellent (1), Good (2),  Moderate (3), At Risk (4), Bad (5), Very Bad (6) |
| Traffic         | Excellent (1), Good (2),  Moderate (3), Bad (4), Very Bad (5)    |
| SPF             | Very Low (1), Low (2), Moderate  (3), High (4), Extreme (5)  |

