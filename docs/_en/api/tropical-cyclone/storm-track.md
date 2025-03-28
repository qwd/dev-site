---
title: Storm Track
tag: [guide, api, storm, track]
ref: 2-api-storm-track
---

Get the tropical cyclones location, level, pressure, windspeed, and track path of active storm in major ocean basins around the world.

## Endpoint

{% include api-url.html %}

## Parameters

#### Query parameters

{% include params.html p="stormid" %}

## Request example

{% include api-url-example.html %}

## Response

> If `isActive=0`, the `now` does not return. 

{% include api-snippet.html %}

{% include api-response.html group="storm" type="active now track"  prefix="nil now track"%}

## Storm level

GBT 19201-2006

| Tropical cyclone level      | Max Avg. wind speed near the bottom center (m/s) | Max wind near the bottom center (level) |
| --------------------------- | ------------------------------------------------ | --------------------------------------- |
| Tropical pressure (TD)      | 10.8-17.1                                        | 6-7                                     |
| Tropical Storm (TS)         | 17.2-24.4                                        | 8-9                                     |
| Severe Tropical Storm (STS) | 24.5-32.6                                        | 10-11                                   |
| Typhoon (TY)                | 32.7-41.4                                        | 12-13                                   |
| Severe Typhoon (STY)        | 41.5-50.9                                        | 14-15                                   |
| Super Typhoon (SuperTY)     | ≥51.0                                            | 16 or above                             |