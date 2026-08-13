---
title: About Moon Data
description: Learn about moonrise, moonset, lunar transit, moon phases, and special cases in lunar data.
translationKey: api-astro-moon-guide
---

The Moon is not visible only at night, and moonrise and moonset do not both occur on every local date. The Moon's orbit, the observer's location, and calendar date boundaries can produce lunar data that may initially appear unusual.

## Moonrise and moonset

**Moonrise** is the moment when the upper edge of the Moon rises above the horizon. **Moonset** is the moment when the upper edge of the Moon disappears below the horizon. Terrain, buildings, clouds, and atmospheric refraction can affect when the Moon is actually visible.

Moonrise and moonset vary more from day to day than sunrise and sunset. The following are common cases.

#### Why does the moonrise in the morning? 

Why might moonrise occur at 9:00 in the morning if the Moon is associated with night?

*The Moon is not limited to the nighttime sky.*

The Moon takes about 27.3 days to orbit Earth relative to the stars, so it moves eastward by approximately this angle each day:

```
360° / 27.3 days ≈ 13.2°
```

After Earth completes one rotation, it must rotate through this additional angle before the Moon returns to a similar position in the sky:

```
13.2° / 15° × 60 minutes ≈ 52.8 minutes
```

This explains why moonrise occurs about 50 minutes later each day on average. The actual difference varies with the Moon's orbit, Earth's axial tilt, and the observer's latitude.

Near a new moon, the Moon rises and sets at roughly the same times as the Sun and is difficult to see in daylight. Near a full moon, it rises around sunset and sets around sunrise.

> **Note:** These calculations are illustrative rather than precise. Moonrise may occur approximately 30–70 minutes later than on the previous day.

#### Why is there a Moon all day long?

The Moon's orbital plane does not align with Earth's equatorial plane. At high latitudes, the Moon may remain above the horizon for more than 24 hours or remain below it throughout a local date. If it does not cross the horizon during that date, both `moonrise` and `moonset` may be `null`.

![Earth and Moon orbits](/assets/images/content/earth-moon-orbit-en.png)

*Earth and Moon orbits. Original image: [Earth-Moon-zh-Hant](https://commons.wikimedia.org/wiki/File:Earth-Moon-zh-Hant.PNG), NASA.*

#### Only Moonrise or Only Moonset {#only-moonrise-or-moonset}

Because moonrise and moonset occur later on average each day, an event near midnight may move from late on one date to shortly after midnight on the next date. The local date between them then contains no occurrence of that event. This is a normal result of calendar date boundaries, not missing data.

A date may therefore contain only `moonrise`, only `moonset`, or neither event.

> ![Moonrise and moonset table for Beijing](/assets/images/content/moon-rise-set-beijing-2022.jpg)
>
> *Moonrise and moonset times for Beijing in 2022. A blank cell means that the event did not occur during that 24-hour local date.*

## Upper and Lower Lunar Transit {#moon-transit-and-underfoot}

As Earth rotates, the Moon crosses the observer's meridian twice each day:

**Upper lunar transit** occurs when the Moon crosses the part of the meridian closer to the observer's zenith. In most cases, this is when the Moon reaches its highest altitude of the day.

**Lower lunar transit** occurs when the Moon crosses the opposite side of the meridian. In most cases, the Moon is below the horizon and reaches its lowest altitude of the day.

Lunar events normally occur in this order:

```text
Moonrise → Upper transit → Moonset → Lower transit → Next moonrise
```

This sequence shows the usual event order, not the Moon's physical trajectory. At high latitudes, the Moon may not cross the horizon even though upper or lower transit still occurs.

## Moon Phase {#moon-phase}

A moon phase is the visible shape of the Moon's illuminated portion as seen from Earth. The Moon does not produce its own light; the Sun always illuminates half of it, while the visible illuminated fraction changes with the relative positions of the Sun, Earth, and Moon. A complete phase cycle, or synodic month, averages about 29.5 days.

![Moon phases](/assets/images/content/moon-phases-en.jpg)

*Relative positions of the Sun, Earth, and Moon during different phases as viewed from the Northern Hemisphere. The apparent shapes are reversed left to right in the Southern Hemisphere. Original image: [Moon phases en](https://commons.wikimedia.org/wiki/File:Moon_phases_en.jpg) by Orion 8, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en).*

At full moon, Earth is approximately between the Sun and Moon, so the side facing Earth appears almost fully illuminated. At new moon, the Moon is approximately between the Sun and Earth, so the side facing Earth appears almost completely dark. Moon phases are not normally caused by Earth's shadow; Earth's shadow covers the Moon only during a lunar eclipse.

#### Dominant Moon Phase

The moon phase can change during a local date, for example from waxing crescent to first quarter. QWeather uses a **dominant moon phase** for daily data. If new moon, first quarter, full moon, or last quarter occurs at any time during the local 24-hour date, that exact phase is used as the dominant phase. Otherwise, the phase at 12:00 local time is used.

#### Moon Phase Examples

The following table shows examples of the moon phases. Because the Moon's orbit is closer to the ecliptic than the celestial equator, the Northern and Southern Hemisphere distinction is, strictly speaking, divided by the ecliptic.

{{< moon-phases-table >}}

#### Learn More {#learn-more}

- This visualization shows hourly moon phase changes and the Moon's position relative to Earth during 2022: [Moon Phase and Libration, 2022](https://svs.gsfc.nasa.gov/4955)
- This video explains how the Moon's orbit produces its phases as viewed from space: [The Moon's Phases as Seen from Space](https://www.eso.org/public/videos/moon_phases-1/)
