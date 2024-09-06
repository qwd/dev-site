---
title: 常见问题
description: 查看和风天气开发服务的常见问题及解答。
layout: faq
redirect_from: /docs/faq/general/
ref: faq
---

## 一般问题 {#general}

### 什么是和风天气开发服务？ {#what-is-qweather-develop-service}

和风天气开发服务是一项轻松、低成本和开发友好的气象数据开发服务，你可以非常简单的将所需的天气数据植入你的产品，也可以通过丰富的天气数据提供对你业务的决策。

### 什么是控制台？ {#what-is-the-console}

控制台是和风天气开发服务的管理平台，你可以在控制台内进行项目、财务、统计和用户的管理。

### 如何快速开始使用和风天气开发服务？ {#how-to-get-started-quickly-with-qweather-services}

使用和风天气开发服务很简单，请参考[快速开始](/docs/start/)。

### 和风天气服务覆盖了哪些国家和地区？ {#what-countries-and-regions-are-covered-by-the-qweather-service}

不同的数据，覆盖范围有所不同。天气预报、海洋、太阳辐照、天文数据，支持全球范围；天气预警，请参考[预警信息-支持的国家或地区](/docs/resource/warning-info/#supported-regions)；空气质量，请参考[空气质量信息-支持的国家或地区](/docs/resource/air-info/#supported-regions)；分钟降水和热带气旋，支持中国地区。

### 我可以免费试用吗？ {#can-i-try-it-for-free}

所有用户都可以使用[免费订阅](/docs/finance/subscription)免费获取我们的部分天气服务。对于免费订阅不支持的服务，你可以少量充值进行测试。

### 在世界各地都可以使用天气服务吗？ {#is-the-qweather-service-available-anywhere-in-the-world}

是的，基于和风天气全球各国的数据中心和CDN边缘加速能力，你可以在世界任何地方使用我们的天气服务。了解[全球部署](/docs/features/global-deployment/)和[服务性能](/docs/features/performance/)。

## 开发和技术 {#development}

### 出现204/400/401/402/403/404/429状态码 {#status-code-204400401402403404429}

当出现上述状态码时，代表你的请求可能出现了一些问题，请参考[错误状态码](/docs/resource/error-code/)。

### 获取到的数据是乱码 {#the-data-is-garbled}

我们的API采用了Gzip压缩，这将极大减少你的网络流量，因此你需要对获取的数据进行Gzip解压。参考[处理Gzip](/docs/best-practices/gzip/)。

### 免费订阅的API地址是什么？ {#what-is-the-api-url-for-free-subscription}

免费订阅的API地址是`devapi.qweather.com`，更多免费订阅的配置请参考[API配置](/docs/configuration/api-config/)，[iOS配置](/docs/configuration/ios-sdk-config/)和[Android配置](/docs/configuration/android-sdk-config/)。

### 免费订阅请求量用完了会发生什么？ {#what-happens-when-i-run-out-of-free-subscription-requests}

你会收到`402`错误代码。此时你将无法再使用免费订阅请求我们的服务，在每天0点（北京时间），免费订阅的请求量将会重置。请注意，当你收到任何非2xx代码的时候，不要无限制的进行重试，这可能会触发使用限制和违反我们的服务条款而导致帐号冻结。参考[使用限制](/docs/terms/restriction/)。

### 我能否缓存数据？ {#can-i-cache-data}

除地理信息数据以外，可以。你可以参考[缓存数据](/docs/best-practices/cache/)这篇文档，介绍了一些关于缓存数据的经验。但是对于地理信息数据，由于版权限制，你不能进行任何形式的缓存或创建索引。

### 从哪里可以获得城市列表？ {#where-can-i-get-a-list-of-cities}

我们提供中国地区的城市列表，请参考[常见城市列表](/docs/resource/location-list/)。对于全球其他国家和地区，已支持超过50万个城市，但由于版权原因，无法提供完整的城市数据库。

城市数据会根据政府规划或其他原因而变更，建议使用[地理信息服务](/docs/api/geoapi/)获取实时城市信息。

### 是否支持天气图标？ {#do-you-have-weather-icons}

我们的工程师提供了一套开源的天气图标，支持天气状态、月相和天气预警。天气图标是SVG格式，因此你可以自行修改颜色或样式。访问[天气图标代码文档](/docs/resource/icons/)和[天气图标](https://icons.qweather.com/)。

### 天气状态的枚举值是什么？ {#what-is-the-enum-value-of-the-weather-condition}

请参考`icon`字段以及[天气图标代码文档](/docs/resource/icons/)。

### 你们的TLS版本是什么？ {#what-is-your-tls-version}

我们支持TLS 1.0及后续版本。

### 能否批量获取数据？ {#is-it-possible-to-get-data-in-bulk}

请与你的商务客服联系。

### 有没有示例代码？ {#is-there-any-sample-code}

请参考[开发文档](/docs/api/)中的示例，或[作品展示](/showcase/)和[最佳实践](/docs/best-practices/)。

### 其他开发和技术问题 {#more-development-questions}

绝大多数开发问题都可以在文档中找到答案，例如[开始使用](/docs/start/)，[最佳实践](/docs/best-practices/)，[实用资料](/docs/resource/)以及对应数据的开发文档。如果不能解决你的问题，请登录[控制台](https://console.qweather.com)向我们提交工单。

## 授权许可 {#license}

### 我可以将和风天气服务用于商业用途吗？ {#can-i-use-the-qweather-service-for-commercial-purposes}

可以。使用免费订阅、标准订阅和高级订阅，只需满足许可证条件，即可用于任何用途，包括商业用途。了解[许可证](/docs/terms/license/)。

### 是否需要注明来源？ {#is-attribution-required}

是的。无论何种许可证，你都必须根据要求注明来源以及包括一些数据源的声明，这将让你避免版权风险以及符合合规性要求。请参考[注明来源](/docs/terms/attribution/)。

## 财务和费用 {#finance-and-cost}

### 什么是按量计费？ {#what-is-pay-as-you-go}

和风天气开发服务的标准订阅采用按量计费的定价模式，不需要提前预付大量资金，也不需要为用不到的服务买单，你只需要为你实际使用的部分付费即可。当你停止使用的时候，你不需要再支付任何费用。另外，按量计费的定价是阶梯价格，意味着你使用的越多，单价越低。请参考[按量计费定价](/docs/finance/pricing/)和[账单系统](/docs/finance/billing-and-payment/)。

### 什么是订阅？ {#what-is-subscription}

订阅是一种服务模式，类似于你订阅了一份报纸或杂志，在订阅期你都可以持续的使用服务。现在，和风天气服务采用订阅的方式，提供免费订阅、标准订阅和高级订阅。参考[订阅](/docs/finance/subscription/)。

### 账单是什么？ {#what-is-billing}

账单是和风天气计费系统的核心，所有计费项目都将整合进帐单，用户根据帐单金额进行支付。账单同样是你和我们之间的具有法律效力的凭证，我们将根据账单内容向你提供服务并根据账单金额向你收取费用。请参考[账单与支付](/docs/finance/billing-and-payment/)。

### 什么是节省计划？ {#what-is-savings-plan}

节省计划用于抵扣标准订阅产生的费用，是针对数据请求量较多和较稳定的用户所推出的一项折扣计划，它不依赖于具体的数据，只需要用户承诺每年的消费金额就可以获取大量折扣。相比较标准按量计费，节省计划可以节省40%-70%的成本。参考[节省计划](/docs/finance/saving-plans/)。

### 如何预估成本？ {#how-to-estimate-the-cost}

请登录控制台，使用[价格计算器](https://console.qweather.com/#/calculator)估算你的成本。

### 如果我有大量的请求，是否有更多的折扣？ {#are-there-more-discounts-if-i-have-a-high-volume-of-requests}

对于有大量请求的用户（通常指的是日均请求数超过10万次），请发送邮件至<sales@qweather.com>，我们将提供额外的折扣和更多性能保证。

### 什么是请求？ {#what-is-a-request}

当你通过API、SDK或其他方式访问我们的服务并获得数据的行为称之为数据请求。一次请求无论获取多少内容，均算一次请求。如果请求返回的状态码非`2xx`，则不计算请求次数，但是超过合理范围的错误请求，将被冻结帐号。

### 如何查询统计？ {#how-to-check-statistics}

请访问[控制台-数据统计](https://console.qweather.com/#/statistics)。我们提供依据项目或数据的最近24小时（逐小时）、最近30天（逐天）和最近6个月（逐月）的请求量统计。如需要更详细的统计信息，建议你在产品中进行自行统计。

### 支持哪些付款方式？ {#what-payment-methods-are-supported}

对于所有用户，我们都支持在线支付（支付宝）。对于[企业开发者](/docs/account/developers/)，我们还支持对公转账。关于更多支付的信息，请参考[账单与支付](/docs/finance/billing-and-payment/)。

### 退款或提取可用额度 {#refunds-or-withdraw-balance}

对于购买的预付费产品，例如节省计划或资源包，在购买不足7天且未开始使用的情况下，我们支持无条件退款，退款需要收取5%手续费。

对于充值到可用额度的费用，你可以随时申请提取，提取可用额度将退回到你的原支付渠道。提取可用额度将收取5%的手续费。参考[提取可用额度](/docs/finance/billing-and-payment/#withdraw-balance)。

### 价格是否包含增值税？ {#do-the-pricing-include-vat}

是的。对于中国地区的用户，我们的价格均已包含增值税。参考[增值税发票](/docs/finance/vat-invoice/)。

### 能否开具增值税发票？ {#can-you-issue-vat-invoices}

可以。对于中国地区的注册用户和个人开发者，我们支持开具增值税电子普通发票；对于中国地区的企业开发者，我们支持开具增值税电子普通发票和增值税专用发票。对于充值的金额，需要在完成消费后才可开具增值税发票。参考[增值税发票](/docs/finance/vat-invoice/)。

### 我需要一份订单或协议 {#i-need-a-contract}

我们提供电子账单用于你的消费凭证。你可以设置账单的联系方式和语言，账单是你和我们之间的合法凭证，由系统自动生成，因此不需要盖章或签字。参考[账单与支付](/docs/finance/billing-and-payment/)。

## 帐号管理 {#account-management}

### 如何更改帐号信息？ {#how-to-change-the-account-information}

你可以修改帐号联系方式和密码，请参考[帐号管理](/docs/account/)。

### 如何删除我的帐号？ {#how-do-i-delete-my-account}

请访问[和风天气用户中心](https://id.qweather.com/)进行安全的删除。请注意，删除帐号不可恢复，包括你在使用和风天气的其他服务（例如和风天气APP、插件、可视化地图）都将被停止。参考[删除帐号](/docs/account/management/#delete-account)。

### 我的帐号被冻结了 {#my-account-has-been-suspended}

请参考[帐号冻结](/docs/account/suspension/)。

### 我能添加更多联系人以便收到服务通知吗？ {#can-i-add-more-contacts-to-receive-service-notifications}

可以。请访问控制台-设置-通知联系人，你可以为你的帐号最多添加5个通知联系人，他将收到所有相关通知的电子邮件（安全信息除外，例如验证码等）。参考[通知接收人](/docs/account/recipients/)。

### 我忘记了注册邮箱和手机号码 {#lost-registration-information-and-password}

请参考[忘记了注册信息和密码](/docs/account/management/#lost-registration-information-and-password)。

### 如何变更开发者身份？ {#how-to-modify-developer-identification}

个人开发者可以变更为企业开发者，企业开发者可以变更企业信息，参考[修改开发信息](/docs/account/developers/#modify-developers)。

## 法律条款 {#legal-terms}

### 我能做什么和不能做什么 {#what-i-can-and-cannot-do}

为了提供一个公平的环境以及保护你的权利，你需要了解和遵守我们的各项服务条款。参考[条款](/docs/terms/)。


> 如需更多帮助，请提交工单，或发送邮件至<support@qweather.com>，我们将尽快为您解决。