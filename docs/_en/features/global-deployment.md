---
title: Global Deployment
tag: [feat, global]
ref: feat-global
---

QWeather Developer Services provides the global deployment capability, so you no longer have to struggle with different cultural and localization issues in each country or complex network environments around the world.

Using the global deployment capability does not require additional configuration on your part, it's all almost automatic.

## Multi-language

QWeather Developer Services supports 30+ languages and native languages, you just need to simply add multilingual parameters to your request.

See [Supported languages](/en/docs/resource/language/).

## Unit Conversion

QWeather Developer Services provides options for metric and imperial units, for users in different countries and regions, you can set the appropriate units for them.

See [Unit](/en/docs/resource/unit/).

## Global City Coverage

We currently provide weather services for over 200,000 cities around the world. Use our GeoAPI service to easily access information about these cities.

Check out [GeoAPI](/en/docs/api/geoapi/).

## Global Acceleration

![global-server](/assets/images/content/global-server-flow.png)

Behind your access to API services, there are 10 data centers and hundreds CDN nodes around the world for QWeather, which allows your Apps to get weather services fast and stable.

- **Automatic Routing:** No matter where your Apps is deployed, your data requests are automatically routed to the nearest data center.
- **Load Balancing:** When one data center fails or the load is high, your requests will be automatically assigned to the data center that is running normally, ensuring your Apps is always online.
- **CDN Edge Acceleration:** For regions without a data center, we will provide CDN edge acceleration capability for stable delivery of your requests.
- **Custom Data Center:** For enterprise developers, we offer to build dedicated data centers in specified countries or regions, which will greatly accelerate your local requests.
