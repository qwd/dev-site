---
title: Sun and Moon Info
tag: resource
ref: res-sunmoon
---

Generally, we can see the sun and moon every day, but if you look closely, you will find that in some regions and on special dates, the sun or moon does not appear. This documentation will introduce the special case about [Sun and Moon](/en/docs/api/astronomy/).

> **Note:** You need to adapt sunrise/set or moonrise/set to return null to avoid program failure.

## Sunrise and sunset

Sunrise is the moment when the upper rim of the Sun appears on the horizon in the morning. The sunrise time is the moment at which the upper limb of the Sun appears tangent to the horizon.

Sunset is the daily disappearance of the Sun below the horizon due to Earth's rotation. The sunset time is defined in astronomy as the moment when the upper limb of the Sun disappears below the horizon.

For people living in high latitudes(60+ degrees) areas, sunrise and sunset times are seen differently than in other areas. Sunrise and sunset data may not exist at high latitudes areas due to polar days and nights.

For example, in the city of Longyearbyen, between November and March each year, there is a polar night period, so `sunrise` and `sunset` will be null.

And at the beginning and end of polar day or night, `sunrise` or `sunset` will be null.

## Moonrise and moonset

Moonrise and moonset are more complex and variable, and we have listed some common scenarios.

### Why does the moon rise in the morning?

Why does the moon sometimes rise at 9:00 a.m.? Doesn't the moon only appear at night? You have made a mistake in your data...

***Actually, the moon does not appear only at night.***

The rotation period of the Moon is about 29.53 days, so for the Earth, the Moon moves every day at an angle of:

```
 360° / 29.53 days ≈ 12.2°
```

This results the Earth must move 12.2° after completing one rotation for the Moon to be visible. And how long does it take for the Earth to move 12.2°? We know that the Earth's rotation period is about 24 hours, which means that we move 360° / 24 hours = 15° per hour, so obviously the Earth moves 12.2° needs:

```
12.2° / 15° * 60 minutes ≈ 48.8 minutes
```

This means that each day's moonrise is delayed by about 50 minutes compared to the previous day.

So if you see the moon rise at 9 pm, then in about 15 days, you will find the moon rising at 9 am. Generally speaking, around the new moon, the moon appears almost only during the day, while around the full moon, the moon is there all night long.

> **Note:** The above calculations and data are for example only and are not rigorous. In practice, the Moon rises 30 to 70 minutes later each day/night than the day/night before.

### Why is there a Moon all day long?

Unlike most satellites of other planets, the Moon's orbital plane is closer to the ecliptic plane than to the planet's equatorial plane, you can understand that the Moon is tilted to rotate around the Earth, so at high latitude areas, there is at least one day in each month that the Moon is not visible at all, and at least one day that the Moon appears throughout the day. In this case, `moonrise` and `moonset` will be null.

![Earth and moon orbits](/assets/images/content/earth-moon-orbit-en.png)
*Earth and moon orbits（original image [Wikimedia](https://commons.wikimedia.org/wiki/File:Earth-Moon-zh-Hant.PNG)）*
{:.figimg}

### Only moonrise or moonset

Remember we said above that every day the moonrise is 50 minutes later than the previous day? So when the moonrise on a given day at 23:10-23:59, then the next moonrise is delayed until 00:00-00:49 on the third day. Typically, each month has one day with only a moonrise and one day with only a moonset, and it usually occurs around when the moon phase is first quarter and last quarter.

![Moonrise and moonset table for Beijing](/assets/images/content/moon-rise-set-beijing-2022.jpg)
*Moonrise and moonset table for Beijing in 2022. Blank spaces in the table indicate that a rising or a setting did not occur during that 24 hr interval.*
{:.figimg}

## Moon phase

Moon phase(or Lunar phase) is the shape of the Moon's directly sunlit portion, which can be expressed quantitatively using areas or angles, or described qualitatively using the terminology of the 4 major phases: new moon, first quarter, full moon, last quarter and 4 minor phases: waxing crescent, waxing gibbous, waning gibbous, and waning crescent.

![Moon phase](/assets/images/content/moon-phases-en.jpg)
*This image represents the relative positions of the Sun, Earth, and Moon for different moon phase, at this time the observer is located in the northern hemisphere, if the observer is located in the southern hemisphere, the shape of the moon phase seen is inverted from left to right.（original image [Wikimedia](https://commons.wikimedia.org/wiki/File:Moon_phases_en.jpg) by [Orion 8](https://commons.wikimedia.org/wiki/User:Orion_8)）*
{:.figimg}

The table below shows examples for moon phases.

> **Note:** The shape of the moon phase as viewed in the northern and southern hemispheres is inverted from left to right, but the name is the same. The data in `moonPhase.icon` is already adapted. For example, when it is in waxing crescent, `moonPhase.icon = 801` for the northern hemisphere and `moonPhase.icon = 807` for the southern hemisphere.

| Moon phase | Northern Hemisphere Visibility | Southern Hemisphere Visibility | Avg. Moonrise | Avg. Moonset | Northern Hemisphere Illustration  | Southern Hemisphere Illustration |
|---|---|---|---|---|---|---|
| New Moon | Invisible   | Invisible | 06:00 | 18:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8"/></svg> |
| Waxing crescent | Right side 1–49% | Left side 1–49% | 09:00 | 21:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-801" viewBox="0 0 16 16"><path d="M8 0a7.955 7.955 0 0 0-.795.04 7.985 7.985 0 0 0-.631.094c-.043.008-.087.011-.13.02a7.998 7.998 0 0 0 0 15.692c.043.009.087.012.13.02.208.037.417.073.631.094A8 8 0 1 0 8 0zm0 15.5a7.46 7.46 0 0 1-1.668-.188 8.497 8.497 0 0 0 0-14.623A7.5 7.5 0 1 1 8 15.5z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-807" viewBox="0 0 16 16"><path d="M9.555.154C9.513.145 9.47.142 9.426.134A7.983 7.983 0 0 0 8.795.04 8 8 0 1 0 8 16a7.955 7.955 0 0 0 .795-.04c.214-.021.423-.057.631-.094.043-.008.087-.011.13-.02a7.998 7.998 0 0 0 0-15.692zm.113 15.158A7.5 7.5 0 1 1 8 .5a7.44 7.44 0 0 1 1.668.189 8.497 8.497 0 0 0 0 14.623z"/></svg> |
| First quarter | Right side 50% | Left side 50% | 12:00 | 00:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-802" viewBox="0 0 16 16"><path d="M8 0a8.031 8.031 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001A7.952 7.952 0 0 0 8 16 8 8 0 0 0 8 0zm0 15.5a6.836 6.836 0 0 1-.725-.04A24.01 24.01 0 0 0 8.5 7.5 25.697 25.697 0 0 0 7.593.514C7.734.504 7.868.5 8 .5a7.5 7.5 0 0 1 0 15z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-806" viewBox="0 0 16 16"><path d="M8 0a8.031 8.031 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001A7.952 7.952 0 0 0 8 16 8 8 0 0 0 8 0zM1 8a7.008 7.008 0 0 1 6.204-6.951A25.25 25.25 0 0 1 8 7.5a24.131 24.131 0 0 1-1.067 7.41A7.005 7.005 0 0 1 1 8z"/></svg> |
| Waxing gibbous |Right side 51–99% | Left side 51–99% | 15:00 | 03:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-803" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a6.73 6.73 0 0 1-.948-.072.486.486 0 0 1-.24-.106A8.838 8.838 0 0 1 3.962 8 8.868 8.868 0 0 1 6.76 1.22a.702.702 0 0 1 .359-.157A6.613 6.613 0 0 1 8 1a7 7 0 0 1 0 14z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-805" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 0 8-8 8 8 0 0 0-8 8zm1 0a7.008 7.008 0 0 1 7-7 6.613 6.613 0 0 1 .881.063.702.702 0 0 1 .36.157A8.868 8.868 0 0 1 12.036 8a8.838 8.838 0 0 1-2.849 6.822.486.486 0 0 1-.24.106A6.73 6.73 0 0 1 8 15a7.008 7.008 0 0 1-7-7z"/></svg> |
| Full Moon | 100% | 100% | 18:00 | 06:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-804" viewBox="0 0 16 16"><path d="M8 1a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7m0-1a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-804" viewBox="0 0 16 16"><path d="M8 1a7 7 0 1 1-7 7 7.008 7.008 0 0 1 7-7m0-1a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></svg> |
| Waning gibbous | Left side 99–51% | Right side 99–51%  | 21:00 | 09:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-805" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 0 8-8 8 8 0 0 0-8 8zm1 0a7.008 7.008 0 0 1 7-7 6.613 6.613 0 0 1 .881.063.702.702 0 0 1 .36.157A8.868 8.868 0 0 1 12.036 8a8.838 8.838 0 0 1-2.849 6.822.486.486 0 0 1-.24.106A6.73 6.73 0 0 1 8 15a7.008 7.008 0 0 1-7-7z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-803" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a6.73 6.73 0 0 1-.948-.072.486.486 0 0 1-.24-.106A8.838 8.838 0 0 1 3.962 8 8.868 8.868 0 0 1 6.76 1.22a.702.702 0 0 1 .359-.157A6.613 6.613 0 0 1 8 1a7 7 0 0 1 0 14z"/></svg> |
| Last quarter | Left side 50% | Right side 50% | 00:00 | 12:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-806" viewBox="0 0 16 16"><path d="M8 0a8.031 8.031 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001A7.952 7.952 0 0 0 8 16 8 8 0 0 0 8 0zM1 8a7.008 7.008 0 0 1 6.204-6.951A25.25 25.25 0 0 1 8 7.5a24.131 24.131 0 0 1-1.067 7.41A7.005 7.005 0 0 1 1 8z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-802" viewBox="0 0 16 16"><path d="M8 0a8.031 8.031 0 0 0-1.065.079 7.992 7.992 0 0 0-.354 15.788h.001A7.952 7.952 0 0 0 8 16 8 8 0 0 0 8 0zm0 15.5a6.836 6.836 0 0 1-.725-.04A24.01 24.01 0 0 0 8.5 7.5 25.697 25.697 0 0 0 7.593.514C7.734.504 7.868.5 8 .5a7.5 7.5 0 0 1 0 15z"/></svg> |
| Waning crescent | Left side 49–1% | Right side 49–1% | 03:00 | 15:00 | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-807" viewBox="0 0 16 16"><path d="M9.555.154C9.513.145 9.47.142 9.426.134A7.983 7.983 0 0 0 8.795.04 8 8 0 1 0 8 16a7.955 7.955 0 0 0 .795-.04c.214-.021.423-.057.631-.094.043-.008.087-.011.13-.02a7.998 7.998 0 0 0 0-15.692zm.113 15.158A7.5 7.5 0 1 1 8 .5a7.44 7.44 0 0 1 1.668.189 8.497 8.497 0 0 0 0 14.623z"/></svg> | <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="qi-801" viewBox="0 0 16 16"><path d="M8 0a7.955 7.955 0 0 0-.795.04 7.985 7.985 0 0 0-.631.094c-.043.008-.087.011-.13.02a7.998 7.998 0 0 0 0 15.692c.043.009.087.012.13.02.208.037.417.073.631.094A8 8 0 1 0 8 0zm0 15.5a7.46 7.46 0 0 1-1.668-.188 8.497 8.497 0 0 0 0-14.623A7.5 7.5 0 1 1 8 15.5z"/></svg> |

**Learn more:**

- The video in this article represents the hourly changes in the moon phase and the Moon's position relative to Earth in 2022: [Moon Phase and Libration, 2022](https://svs.gsfc.nasa.gov/4955)
- This video provides an illustration of how the Moon passes through its phases — a product of its orbit, which allows different parts of its surface to be illuminated by the Sun over the course of a month. The camera is locked to the Moon as the Earth rapidly rotates in the foreground: [The Moon's Phases as Seen from Space](https://www.eso.org/public/videos/moon_phases-1/)
