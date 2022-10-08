---
title: Protect Key
tag: [bp, protact]
ref: bp-protact
---

KEY is an important and sensitive information to get QWeather data, you have the responsibility to keep it properly and avoid the loss caused by leaking KEY, here are a few ways to protect KEY.

## HTTPS

Since 2014, our API has supported HTTPS encrypted access, and at the end of 2016, we closed all non-HTTPS access. Using HTTPS can help stop sensitive information in requests being disclosed, so please don't skip the HTTPS protection.

## Signature Authentication

Use [Signature Auth](/docs/resource/signature-auth/) for authentication, so that even if someone else crawls your request information, it will be hard to get more valuable content.

## Create separate KEY for each product

We support creating multiple KEYs and projects, so you can create multiple KEYs for different products or platforms. For example, if you want to make a project about travel, you can create different KEYs for iOS, Android and websites.

## Change KEY

If you think your KEY has been compromised or suspect a compromise, you can create a new KEY, then upgrade your program, test and make sure the programs are all running on the new KEY, and finally delete the old KEY.

## Store KEY on the server side

Store the KEY on the server side, then send the weather data you need to the front-end through the server side, so that others can't grab your KEY in the front-end.

## Encrypt KEY

If storing KEY in the front-end is unavoidable, you can obfuscate or encrypt the code and change the KEY occasionally, to make it more difficult for others to access your KEY.

## Do not share with others

It is likely that you will share your code with others during development, so keep your KEY in environment variables or separate files to avoid giving away your KEY when sharing code.

If your code will be distributed in a public source code management system (e.g. Github), make sure that the file where the KEY is saved is included in a `.gitignore` or other similarly configuration file, in other words, keep the KEY out of the source code management system.