---
title: 处理Gzip
tag: [bp, gzip]
ref: bp-gzip
---

和风天气的Web API默认采用[Gzip](https://www.gnu.org/software/gzip/)进行压缩，这将极大的减少网络流量，加快请求。

> **提示：**如果使用iOS SDK或Android SDK，不需要考虑处理Gzip。

对于不同开发语言如何处理Gzip，我们在这里给出一些官方参考文档，这些文档可能与你当前使用的版本不一致，请注意它们的区别。

## C#

<https://learn.microsoft.com/zh-cn/dotnet/api/system.io.compression.gzipstream?view=net-6.0>

## Dart

<https://api.dart.cn/stable/2.17.0/dart-io/GZipCodec-class.html>


## Go

<https://pkg.go.dev/compress/gzip>

## Java

<https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/zip/GZIPInputStream.html>

## Python

<https://docs.python.org/zh-cn/3/library/gzip.html>

## Ruby

<https://ruby-doc.org/stdlib-2.7.0/libdoc/zlib/rdoc/Zlib/GzipReader.html>

