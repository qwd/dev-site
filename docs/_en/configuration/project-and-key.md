---
title: Project and KEY
tag: [config, project]
description: The project is the container that hosts the QWeather service, and the KEY for get the service. The first step to start using the QWeather service is to create the project and KEY.
ref: config-project
---

**Project** is the container for QWeather Develop Service, which can also be understood as a product you need to develop, such as a "travel app" or a "graduation design".

**KEY** is the key (or token) to get the QWeather Develop Service, you can create multiple KEYs for different businesses in a Project, for example "for iOS" or "Test Only".

## Create Project

1. Go to [Console - Project](https://console.qweather.com/#/apps), and click the "Create Project" button.
2. Set Project name, Project name can be up to 20 characters. You can modify the name later.
3. Select [Subscription](/en/docs/finance/subscription/). If you choose Standard subscription, please ensure that your balance is ≥ ¥10.
4. Select the platform of KEY, KEY can not be used across platforms. Create the first KEY at this time, you can create more KEYs later.
5. Set KEY name.
6. Click "Create" button.

## Create KEY

1. Click the "Add KEY" button on the Project card.
2. Select the platform of KEY, KEY can not be used across platforms, means the KEY of Web API cannot be used in Android SDK and vice versa.
3. Enter [iOS Bundle ID](/en/docs/resource/glossary/#ios-bundle-identifier) or [Android Package Name](/en/docs/resource/glossary/#android-package-name) when you select iOS/Android SDK platform.
4. Set KEY name.
5. Click "Create" button.

## Edit Project and KEY

You can edit the name of the Project and KEY, edit the name will not affect your service.

You can also edit the Bundle ID or Package Name, it may take some time to take effect, up to 4 hours, and the original bundle ID or Package Name bound after it takes effect will not be able to get the data again.

## Delete Project

> **Warning:** The deletion action is irrevocable, the Project and all KEYs in this Project will be permanently deleted, and you can no longer get data via this Project and KEYs.
{:.bqdanger}

1. Click "Edit" button on the Project card.
2. Click "Delete" button. 
3. You may need to confirm the delete action again.

## Delete KEY

> **Warning:** The deletion action is irrevocable, and you can not get data through this KEY again.
{:.bqdanger}

1. Select the KEY and click "Edit" button on the right.
2. Click "Delete" button. 
3. You may need to confirm the delete action again.

## Restriction

- Projects
  - You can create up to 10 Projects in your account
  - The subscription for Project cannot be changed, but the Project can be deleted, and the subscription is deleted at the same time.
- KEY
  - You can create up to 20 KEYs per Project.
  - KEY can not be used across platforms, means the KEY of Web API cannot be used in Android SDK and vice versa.

