---
title: Signature Auth
tag: resource
description: QWeather API support Signature Authentication methods to ensure the security of your key.
redirect_from: /en/docs/start/signature-auth/
ref: res-auth
---

For more security of API request, we recommend that you use the Signature Authentication for access authentication.

## Parameters
  
- `publicid`: public ID, each KEY has a public ID.

- `t`: Timestamp, in seconds

- `sign`: Signature

- `other required parameters of API`



## Create Signature

1. Format the request parameters in "key=value" format, such as "k1=v1", "k2=v2", "k3 =v3".
2. Remove parameters with null values from the request parameters
3. Remove the request parameters with the parameter `sign` (the signature parameter is not involved in the signature algorithm)
4. Arrange the remaining key-value pairs in step 3 in ascending dictionary order and concatenate them with the `&`, e.g. a=1&b=2&m=3&w=4
5. Splice the API key after the string obtained in step 4, assuming the key is `mykey` , the result is: a=1&b=2&m=3&w=4mykey
6. Encrypt the string obtained in step 5 with MD5 (Note: the character set is UTF-8) and get the signature result
7. Add the signature result from step 6 to the request as a parameter named `sign`, i.e. `sign=xxxxxxx`

## PHP Demo 

```php
// String to be signed
$str = '';
// Sort the parameters by the dictionary ascending order of their parameter names
array_filter($params);
unset($params['sign']);
unset($params['key']);
ksort($params);
// Iterate over each key/value pair in the sorted parameter array
foreach($params as $k => $v){
    $str .= $k . '=' . $v . '&';
}
$str = substr($str,0,strlen($str)-1);
// Splice the signature key to the end of the signature string
$str .= $secret;
// Generate an md5 signature for the signature string by the md5 algorithm, which is the value of the sign parameter we want to append
$sign = md5($str);
```

## JAVA Demo 

```java
/**
* @param HashMap params, request parameter set, all parameters must be converted to string type
* @param String secret, private key
* @return signature
* @throws IOException
*/
    public static String getSignature(HashMap<String, String> params, String secret) throws Exception {
        Map<String, String>            sortedParams = new TreeMap<>(params);
        Set<Map.Entry<String, String>> entrys       = sortedParams.entrySet();

        StringBuilder baseString = new StringBuilder();
        for ( Map.Entry<String, String> param : entrys ) {
            //sign参数 和 空值参数 不加入算法
            if ( param.getValue()!=null && !"".equals(param.getKey().trim()) && !"sign".equals(param.getKey  ().trim()) && !"key".equals(param.getKey().trim()) && !"".equals(param.getValue().trim()) ) {
              baseString.append(param.getKey().trim()).append("=").append(param.getValue().trim()).append  ("&");
          }
      }
      if ( baseString.length() > 0 ) {
          baseString.deleteCharAt(baseString.length() - 1).append(secret);
      }
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
parameters['publicid'] = 'PublicID';
parameters['t'] = '1590123123';
// other required parameters of API
parameters['required'] = " ";

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
