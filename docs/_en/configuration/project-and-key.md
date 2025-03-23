---
title: Project and Credential
tag: [config, project]
description: Project and Credential are important configuration for QWeather API, this document will introduce how to set up them.
ref: config-project
---
**Project** and **Credential** are important configuration for QWeather API, this document will introduce how to set up them.

## Project

**Project** is the container for QWeather API, which can also be understood as a product you need to develop, such as a "travel app" or a "graduation design".

### Create project

1. Go to [Console - Project](https://console.qweather.com/project), and click the "Create Project" button.
2. Set Project name, Project name can be up to 20 characters. You can modify the name later.
3. Select [Subscription](/en/docs/finance/subscription/). If you choose Standard subscription, please ensure that your balance is ≥ ¥10.
4. Click "Create" button.

### Delete Project

> **Warning:** The deletion action is irrevocable, the Project and all credentials in this Project will be permanently deleted, and you can no longer use this Project and credentials for API authentication.
{:.bqdanger}

1. Click "Edit" button on the Project section.
2. Click "Delete" button. 
3. Enter the name of the Project and click “Delete” button to complete the deletion, or click the “Cancel” button to terminate the deletion.

## Credential

**Credentials** are used for API authentication, which include the Ed25519 key (for JWT authentication) and the API KEY. We recommend creating separate credentials for various usage scenarios, such as “For Website” or “Test Only”. Learn more about [API Security Guidelines](/en/docs/best-practices/security-guidelines/) and [API Authentication](/en/docs/authentication/).

### Add credential

1. Go to [Console - Project](https://console.qweather.com/project) and select any Project you want to add credentials to
2. Click the "Add Credential" button on the Credentials section.
3. Select authentication method, we recommend JWT for higher level security. See [JWT](/en/docs/authentication/jwt/) and [API KEY](/en/docs/authentication/apikey/).
4. Set credential name.
5. Click "Create" button.

### Setup restrictions

You can restrict the use of credentials to higher levels of security. See [App Restrictions](/en/docs/best-practices/security-guidelines/#app-restrictions) and [API Restrictions](/en/docs/best-practices/security-guidelines/#app-restrictions).

### Delete credential

> **Warning:** The deletion is irrevocable, and you can no longer use this credential for API authentication.
{:.bqdanger}

1. Select the KEY you want to delete.
2. Click "Delete" button. 
3. Enter the name of the KEY and click “Delete” button to complete the deletion, or click the “Cancel” button to terminate the deletion.

## Other rules

- Up to 10 Projects can be created.
- Up to 20 Credentials can be added to each Project.

