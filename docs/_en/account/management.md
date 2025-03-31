---
title: Management
tag: [account, manage]
ref: account-manage
---

Learn how to register and manage your account information.

## Register

You need to use email and cell phone to [register an account](https://id.qweather.com/register), for account security and getting technical updates, your user information should be real and valid, QWeather developer services do not support the use of temporary/disposable email and cell phone numbers. If your contact information is outdated, please update it in time.

Regarding passwords, we recommend using a password that is at least 18 characters and contains letters, numbers and symbols. If you forget password, just simply [reset password](https://id.qweather.com/#/forget/process/start) with your registered email or cell phone.

## User information

#### Developer ID and API Host

View your developer ID and API Host in [Console Setting](https://console.qweather.com/setting).

#### Name

1. [Go to Console Setting](https://console.qweather.com/setting)
2. Edit your name in the Developer information section at the top of the page.
3. Click "Save" next to it.

#### Contact and password

Please go to [User Center](https://id.qweather.com) to view and edit your email, phone number, social media account and password.

#### Bill information

1. [Go to Console - Bill information](https://console.qweather.com/finance/contact)
2. Edit information
3. Click "Save" button.

#### VAT invoice information

1. [Go to Console - VAT information](https://console.qweather.com/finance/contact)
2. Edit information
3. Click "Save" button.

#### Organization information

See [Change organization information](/docs/account/developers/#change-organization-information).

## Close service

You can close developer services if you no longer using it.

> **Warning:**
> - Close action cannot be undone.
> - All user data, develop data and statistic history will be deleted.
> - Transaction and VAT invoice will be retained for compliance purposes, but the user data contained therein will be removed and unrecoverable.
{:.bqdanger}

In order to protect your rights and account security, the following conditions need to be met to close the service:

1. [Go to Console Setting](https://console.qweather.com/setting)
3. Click “Check” button on the Close Services page.
4. For account security, there are some conditions that need to be met to close the service:
    - Remove all projects: please stop API requests and remove all projects and credentials, complete remove projects need to be synchronized across multiple data nodes, this process may take 1-3 hours.
    - No unpaid bills: if so, please make payment first.
    - No accrued charges: the accrued charges should be 0. Otherwise, please click "Settle" button and pay the bill.
    - No positive balance: the balance should be 0, otherwise please withdraw all positive balance.
    - No VAT invoices in application: please wait for the invoice to be issued or cancel the application.
5. Once all checks have been passed, click “Next”.
6. Enter the verification code to identify yourself.
7. On the final confirmation page, enter your developer ID and click “I confirm close service”.

You will be notified by email when the services are closed.

## Delete account {#delete-account}

You have to close developer services first, and then visit [User Center](https://id.qweather.com) to delete the account afterwards.

Please be aware:

- Delete action cannot be undone
- Delete action will permanently delete all the information in the account, including user information, development information, statistics, QWeather APP sync information, etc.
- You can no longer use this account for other QWeather products and services.
- Even if you re-register your account with the same information, the deleted information will not be available again.

During the deletion process, we will verify your identity to ensure that it is you.


