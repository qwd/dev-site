---
title: Status Code
tag: resource
toc: false
description: QWeather data status code and error code. When an error occurs, please refer to this table first.
redirect_from: /en/docs/start/status-code/
ref: res-status-code
---

By `code` in the API/SDK, you can get the status of the current request and determine whether the request is successful or an error occurred.

| Code | Description |
| ---- | -------------------------------- |
|200|Successful|
|204|The request is successful, but the area you are querying does not currently have the data you need. |
| 400 | Request error, may contain wrong request parameters or missing required parameters. |
| 401 | Authentication failed, the wrong KEY may be used, [Signature Authentication](/en/docs/resource/signature-auth/) wrong, wrong KEY type (such as using SDK KEY to access Web API). |
| 402 | The requests has been exceeded or the balance is insufficient to support continued access to the service. You can recharge, or wait for the calls to reset. |
| 403 | No access permission, it may be because the PackageName or BundleID are inconsistent, or data that requires additional payment. |
|404| The queried data or region does not exist. |
| 429 | Exceeding the limited QPM, please refer to [QPM](/en/docs/resource/glossary/#qpm) |
| 500 | No response or timeout, service down, please [contact us](https://www.qweather.com/en/contact) |
