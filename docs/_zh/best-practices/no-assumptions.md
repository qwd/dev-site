---
title: 不要假设
tag: [bp, na]
toc: false
ref: bp-na
---

天气变化瞬息万变，天气数据也是如此，为了确保你的程序更加强壮，无论任何时候，**请不要假定返回的数据都是完整的，或者对返回数据的长度、范围进行假设**。

天气数据会受到多种因素的影响，并且大多数情况下是完全无法避免的，包括自然和物理现象、行政区划的变更、各国气象部门的发布规则、气象算法的迭代以及我们对数据的升级，这些因素都会导致天气数据的变化。

> **例如：**当我们的数据源缺少某些数据的时候可能会导致字段缺失；高纬度地区某一天可能会出现没有日出日落的情况；预警类型会增加新的代码；当我们的功能升级时，可能在数据返回中增加新的字段或参数。

因此在你的程序中必须考虑如何处理这些问题。

我们的建议有：

- 定期查看我们发布的公告和最新版本的开发文档
- 不要完全依赖枚举值，对新增、删除和变更的值进行适配
- 对新增、删除和变更的字段进行适配
- 对缺省值、空值提前做好适配
- 不要按顺序或字段的数量进行编码
- 了解数据中的状态码及其含义

一般来说，数据的变化我们会提前发布公告，然而请注意，这些变化不一定会向下兼容，如果你没有做好适配，那么你可能必须升级你的程序才能避免发生错误，另外一些更加紧迫性的变更有可能在无法提前通知你的时候发生。