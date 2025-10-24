---
title: weather-alert-v1-current-en
---

```json
{
    "metadata": {
        "tag": "0940b1221a969f15219673d1eaef532ec683bde88522f32155e6025d63fa1747",
        "zeroResult": false,
        "attributions": [
            "https://developer.qweather.com/attribution.html",
            "Alert data may be delayed or out of date. Refer to official sources for the latest data."
        ]
    },
    "alerts": [
        {
            "id": "202510162100007104337971",
            "senderName": "Meteorological Service of New Zealand Limited",
            "issuedTime": "2025-10-16T21:00Z",
            "messageType": {
                "code": "update",
                "supersedes": [
                    "202510160638008946296098"
                ]
            },
            "latestChange": null,
            "eventType": {
                "name": "wind",
                "code": "2551"
            },
            "urgency": "future",
            "severity": "moderate",
            "certainty": "likely",
            "icon": "2551",
            "color": {
                "code": "orange",
                "red": 255,
                "green": 13,
                "blue": 24,
                "alpha": 1
            },
            "effectiveTime": "2025-10-17T10:00Z",
            "onsetTime": "2025-10-17T10:00Z",
            "expireTime": "2025-10-18T00:00Z",
            "headline": "Strong Wind Warning - Orange",
            "description": "Severe gale northwesterlies gusting 130km/h in exposed places. Impact: Damage to trees, powerlines, and unsecured structures possible. Driving may be difficult, especially for high-sided vehicles and motorcycles. Chance of upgrading to a Red Warning: Minimal. Changes: Watch upgraded to an Orange Warning.",
            "criteria": "Widespread severe gales with a minimum mean speed of 90km/h or frequent gusts exceeding 110km/h.",
            "responseTypes": [
                "monitor"
            ],
            "instruction": "Action: Prepare your property by securing items that can be picked up by strong winds. Drive cautiously."
        }
    ]
}
```