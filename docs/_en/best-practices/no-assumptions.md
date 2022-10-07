---
title: No Assumptions
tag: [bp, na]
toc: false
ref: bp-na
---

Weather changes rapidly, as does weather data, and to ensure that your program is strong at all times, **please do not assume that all responses are complete, or make assumptions about the length or range of response data**.

Weather data can be affected by a variety of factors, and in most cases are completely unavoidable, including natural and physical phenomena, changes in administrative boundaries, publication rules of national meteorological services, iterations of weather algorithms, etc., which can cause changes in weather data.

> **For example:** when our data source is missing some data it may cause null values to be returned; there may be no sunrise or sunset on a particular day in high latitudes; new codes may be added to the warning type; new parameters may be added when our service is upgraded.

Therefore it is important to consider how to handle these issues in your program.

Our recommendations are

- Regularly check our announcements and the latest development documentation
- Enumerations are great, but you also need to adapt for new, deleted and changed values
- Adapt new, deleted and changed fields
- Adapt default values and null values in advance
- Do not coding by order or number of fields
- Understand the status codes

Generally, changes to data are announced in advance, however please note that these changes are not always backwards compatible and if you have not adapted properly then you may have to upgrade your application to avoid errors. Additionally some more urgent changes may be deployed when you cannot be notified in advance.