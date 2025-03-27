---
title: Project and Credential
tag: [config, project]
redirect_from: /en/docs/configuration/project-and-key/
ref: config-project
---

Before you start requesting the API, you need to create the project and credentials.

## Project

**Project** is the container for QWeather API, which can also be understood as a product you need to develop, such as a "travel app" or a "graduation design".

### Create project

You can create up to 10 projects.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Click the "Create Project" button in the upper right corner..
3. Set Project name, Project name can be up to 20 characters. You can modify the name later.
4. Click "Save" button.

### Delete Project

> **Warning:** The deletion action is irrevocable, the Project and all credentials in this Project will be permanently deleted, and you can no longer use this Project and credentials for API authentication.
{:.bqdanger}

1. Click the project name you wish to delete.
2. Click the “Delete” button at the bottom of the page.
3. Enter the project name and click “Confirm Delete”.
4. You will receive a verification email, enter the verification code.
5. Complete the deletion

## Credential

**Credentials** are used for API authentication and is your core sensitive data. See [security guidelines](/en/docs/best-practices/security-guidelines/) for a secure request API. See [authentication](/en/docs/configuration/authentication/) for how authentication works.

Depending on the authentication method, there are JWT credentials and API KEY credentials. Up to 20 credentials are created per project.

### Add credential for JWT

To add JWT credentials, you need to create Ed25519 public and private keys first, see [Authentication - Generate Ed25512](/docs/configuration/authentication/#prerequisites).

1. [Go to Console - Project](https://console.qweather.com/project)
2. Choose the project where you want to add the public key.
3. Click the "Add Credential" button in the credential section.
4. Enter the credential name.
5. Select the authentication method: **JSON Web Token**.
6. Use any text editor to open the public key (like ed25519-public.pem which was generated in the previous step), and copy the entire contents of it. The content looks like:
   ```
   -----BEGIN PUBLIC KEY-----
   MCowBQYDK2VwAyEAARbeZ5AhklFG4gg1Gx5g5bWxMMdsUd6b2MC4wV0/M9Q=
   -----END PUBLIC KEY-----
   ```
7. Paste the public key in the textarea.
8. Click "Save" button

You will see the **Create Credential Success** page and it shows the creation date, credential ID and SHA-256. For security reasons, you cannot view this public key in the Console again. However, you can use the SHA-256 value of the public key to compare it with the local SHA-256 in order to confirm that the correct public key was used.

### Add credential for API KEY

It is recommended to use [JWT authentication](/docs/configuration/authentication/#json-web-token) for improved security. We will limit the volume of daily requests for authentication using API KEY from 2027-01-01.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Choose the project where you want to add the public key.
3. Click the "Add Credential" button in the credential section.
4. Enter the credential name.
5. Select the authentication method: **API KEY**.
6. Click "Save" button.

### Security restrictions

For a Higher level of security for credentials, we recommend adding security restrictions to the credentials.

1. [Go to Console - Project](https://console.qweather.com/project)
2. Select the credentials you wish to add security restrictions
3. Scroll down to the App Restrictions section and refer to [App Restrictions](/docs/best-practices/security-guidelines/#app-restrictions) for details and rules.
4. Continue to scroll down to the API Restrictions section and refer to [API Restrictions](/docs/best-practices/security-guidelines/#api-restrictions) for details and rules.


### Delete credential

> **Warning:** The deletion is irrevocable, and you can no longer use this credential for API authentication.
{:.bqdanger}

1. Select the KEY you want to delete.
2. Click "Delete" button. 
3. Enter the key name and click “Confirm Delete”.
4. You will receive a verification email, enter the verification code.
5. Complete the deletion

