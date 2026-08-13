---
title: About Sun Data
description: Learn about sunrise, sunset, twilight, solar noon, solar midnight, and special cases in solar data.
translationKey: api-astro-sun-guide
---

The Sun appears to rise in the east and set in the west each day, but different solar events are needed to describe when daylight begins, when the Sun reaches its highest point, and when the sky becomes fully dark.

## Sunrise and sunset

**Sunrise** is the moment when the upper edge of the Sun first appears above the horizon, not when the entire solar disk is visible. **Sunset** is the moment when the upper edge of the Sun disappears below the horizon.

Atmospheric refraction makes the Sun near the horizon appear slightly higher than its geometric position. Elevation, terrain, buildings, clouds, and atmospheric conditions also affect observations, so an API time does not guarantee that the Sun will be visible to an observer.

At high latitudes, the Sun may not cross the horizon during an entire local date because of polar day or polar night. In this case, `sunrise` and `sunset` may be `null`. On the first or last day of a polar period, only one of these events may occur. For example, Longyearbyen experiences polar night from approximately November through March, and sunrise and sunset values may be unavailable during this period.

## Solar noon and midnight

**Solar noon** is when the Sun crosses the upper part of the observer's meridian and usually reaches its highest altitude of the day. It is also called the Sun's upper transit.

**Solar midnight** is when the Sun crosses the lower part of the meridian and usually reaches its lowest altitude of the day. It is also called the Sun's lower transit.

Solar noon and solar midnight depend on the observer's longitude and the apparent motion of the Sun. They occur roughly 12 hours apart and are not fixed at 12:00 and 00:00 local time.

## Twilight

When the Sun is below the horizon, scattered sunlight can still illuminate the sky. This transition between daylight and darkness is called **twilight**. Twilight has three stages based on the geometric center of the Sun below the horizon:

| Stage | Solar center altitude | Typical appearance |
| ----- | --------------------- | ------------------ |
| Civil twilight | 0° to -6° | The horizon and objects on the ground are usually still distinguishable |
| Nautical twilight | -6° to -12° | The horizon remains visible and brighter stars are visible |
| Astronomical twilight | -12° to -18° | The sky is very dark but still contains faint scattered sunlight |

Under normal conditions, solar events occur in this order:

```text
Astronomical dawn → Nautical dawn → Civil dawn → Sunrise → Solar noon → Sunset → Civil dusk → Nautical dusk → Astronomical dusk
```

Dawn fields indicate when the corresponding morning stage **begins**, while dusk fields indicate when the corresponding evening stage **ends**. For example, civil dawn lasts from `civilDawn` to `sunrise`, and civil dusk lasts from `sunset` to `civilDusk`.

At high latitudes, the Sun may not cross one or more of these altitude thresholds. Some or all twilight fields may therefore be `null`.

![Twilight and solar altitude diagram](/assets/images/content/twilights-en.svg)

*Twilight diagram. The angles are not drawn to scale so the twilight stages are easier to distinguish. Adapted from [Twilight description full day](https://commons.wikimedia.org/wiki/File:Twilight_description_full_day.svg) by TWCarlson, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en).*
