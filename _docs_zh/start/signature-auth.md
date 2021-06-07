---
title: 加密签名认证
tag: start
description: 和风天气API和SDK支持加密签名认证方式，本文档详细介绍如何使用加密签名的方法
ref: 7-start-auth
---

为了提供更安全的API认证，我们推荐你使用数字签名认证方式进行接口访问的认证，数字签名方式是一种替代单独API KEY的更安全的接口访问方式，它会对请求参数加密后得到的签名字串进行身份验证。

## 签名参数
  
`publicid`: 公共ID，每个KEY都对应一个公共ID，可在[控制台](https://console.qweather.com)查看

`t`: 时间戳，秒级
  
`sign`: 数字签名

## 创建签名

1. 将请求参数格式化为“key=value”格式，如“k1=v1”、“k2=v2”、“k3=v3”；
2. 去除请求参数中值为空的参数
3. 去除请求参数中参数为`sign` 的参数 ( 签名参数不参与签名算法 )
4. 将第3步剩余的键值对以字典序升序排列，并用 & 符号连接，如 a=1&b=2&m=3&w=4
5. 将第4步得到的字符串后拼接上API密钥, 假设密钥为 abc , 则 结果为:   a=1&b=2&m=3&w=4abc
6. 将第5步得到的字符串进行MD5加密 ( 注 ：字符集为 UTF-8 )，得到签名结果
7. 将第6步得到的签名结果 作为参数添加至请求中，参数名为 <code>sign</code>, 即 <code>sign=xxxxxxx</code>

## PHP Demo

```php
// 待签名字符串
$str = '';
// 先将参数以其参数名的字典序升序进行排序
array_filter($params);
unset($params['sign']);
unset($params['key']);
ksort($params);
// 遍历排序后的参数数组中的每一个key/value对
foreach($params as $k => $v){
    $str .= $k . '=' . $v . '&';
}
$str = substr($str,0,strlen($str)-1);
// 将签名密钥拼接到签名字符串最后面
$str .= $secret;
// 通过md5算法为签名字符串生成一个md5签名，该签名就是我们要追加的sign参数值
$sign = md5($str);
```

## JAVA Demo

```java
/**
     * 和风天气签名生成算法-JAVA版本
     * @param HashMap params 请求参数集，所有参数必须已转换为字符串类型
     * @param String secret 签名密钥（用户的认证key）
     * @return 签名
     * @throws IOException
     */
    public static String getSignature(HashMap<String, String> params, String secret) throws Exception {
        // 先将参数以其参数名的字典序升序进行排序
        Map<String, String>            sortedParams = new TreeMap<>(params);
        Set<Map.Entry<String, String>> entrys       = sortedParams.entrySet();

        // 遍历排序后的字典，将所有参数按"key=value"格式拼接在一起
        StringBuilder baseString = new StringBuilder();
        for ( Map.Entry<String, String> param : entrys ) {
            //sign参数 和 空值参数 不加入算法
            if ( param.getValue()!=null && !"".equals(param.getKey().trim()) && !"sign".equals(param.getKey  ().trim()) &&!"key".equals(param.getKey().trim()) && !"".equals(param.getValue().trim()) ) {
                baseString.append(param.getKey().trim()).append("=").append(param.getValue().trim()).append  ("&");
            }
        }
        if ( baseString.length() > 0 ) {
            baseString.deleteCharAt(baseString.length() - 1).append(secret);
        }
        // 使用MD5对待签名串求签
        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            byte[] bytes = md5.digest(baseString.toString().getBytes("UTF-8"));
            return new String(encodeHex(bytes));
        } catch (GeneralSecurityException ex) {
            throw ex;
        }
    }
    
public static char[] encodeHex(byte[] data) {
   int    l        = data.length;
   char[] out      = new char[l << 1];
   int    i        = 0;
   char[] toDigits = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
    for ( int var5 = 0; i < l; ++i ) {
        out[var5++] = toDigits[(240 & data[i]) >>> 4];
        out[var5++] = toDigits[15 & data[i]];
    }
    return out;
}
```

## JavaScript Demo
  
```js
let privateKey = 'XXXXX';
let parameters = {};
parameters['location'] = '101010100';
parameters['username'] = 'PublicKey';
parameters['t'] = '1590123123';
parameters['w'] = " ";

function getSignature(parameterObject, privateKey) {
    var keys = [];
    for (let k in parameterObject) {
        if (k !== 'key' && k !== 'sign' && !/^\s+$/.test(k) && !/^\s+$/.test(parameterObject[k])) {
            keys.push(k);
        }
    }

    keys.sort();

    let str = '';
    for (let i in keys) {
        let k = keys[i];
        if (!/\s+/.test(parameterObject[k])) {
            str += k + '=' + parameterObject[k] + '&';
        }
    }
    str = str.substr(0, str.length - 1) + privateKey;
    return md5(str);
}
```
