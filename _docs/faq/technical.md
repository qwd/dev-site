---
title: 开发常见问题
tag: [faq]
description: 在使用和风天气API的时候如果遇到技术问题？可以在此查看常见的开发问题，查阅开发文档了解如何解析和风天气API，或者随时与我们联系。
toc: true
---

### 注意事项 {#notes}

- 无论任何时候，不要假定返回的数据都是完整的，或者对返回数据的长度、范围进行假设。例如：当我们的数据源缺少某些数据的时候可能会导致字段缺失；高纬度地区某一天可能会出现没有日出日落的情况；天气状况可能会增加新的代码；当我们的功能升级时，可能在数据返回中增加新的字段或参数。因此在你的程序中必须考虑如何处理这种问题。
- 如非必要，不要缓存数据，确保每次获取的都是最新的数据，最新的城市ID或最新的天气状况代码。
- 所有预报数据都不能保证100%准确，因此可能会出现实况温度要高于或低于当天预报的最高/最低温度。
- 实况数据均为近实时数据，相比真实的物理世界会5-20分钟的延迟，请根据实况数据中的`obsTime`确定数据对应的准确时间。
- v7版本API默认采用gizp压缩，可降低你的设备带宽流量，提高响应速度。
- 使用移动端或服务端SDK，可以大幅减轻你的工作量。

### 发生了错误 {#error-occurred}

当你发现天气数据并没有像往常一样正常的返回数据，那么一定是哪个地方出现了错误：

- 请检查返回的错误状态码并查看[它们的具体含义](https://dev.heweather.com/docs/start/status-code)，如果返回的值是200，则检查你的程序。
- 在我们提供的API调试页面尝试调用接口，如果一切正常，请检查你的程序。
- 本地测试正常，但是生产环境出现错误的时候，请检查你的程序或咨询你的服务器管理员，我们的数据服务无法知道自己在什么环境之中。

如果问题不能解决，请登录[控制台](https://console.heweather.com)提交技术工单。

### iOS Bundle identifier

Xcode切换到Info下，可查看Bundle Identifier。

请注意Bundle ID仅限英文字母、数字、短横线和下划线，且在每一段开头必须使用英文字母，每一段的结尾必须使用英文字母或数字。

- abc.xyz.def **Good**{:.good}
- abc.xyz   **Good**{:.good}
- abc.x1.y-z   **Good**{:.good}
- abc.1x.2y.3z **Bad**{:.bad}
- 1a.xyz.def **Bad**{:.bad}
- abc.xyz_ **Bad**{:.bad}

### Android Package Name

打开Android 应用工程的**AndroidManifest.xml**配置文件，**package**属性所对应的内容为应用包名。

请注意Android Package Name仅限英文字母、数字、短横线和下划线，且在每一段开头必须使用英文字母，每一段的结尾必须使用英文字母或数字。

- abc.xyz.def **Good**{:.good}
- abc.xyz   **Good**{:.good}
- abc.x1.y-z   **Good**{:.good}
- abc.1x.2y.3z **Bad**{:.bad}
- 1a.xyz.def **Bad**{:.bad}
- abc.xyz_ **Bad**{:.bad}

### 数字签名 {#signature-authentication}

为了接口调用的安全性，我们推荐你使用数字签名认证方式进行接口访问的认证，数字签名方式是一种替代单独API KEY的更安全的接口访问方式，它会对请求参数加密后得到的签名字串进行身份验证。虽然我们一直强制要求使用HTTPS加密的接口调用方式，已经足够确保你的安全性，但加密签名的方式则避免了API KEY由于各种原因泄露给第三方而导致的风险。

- **数字签名所需要的参数**
  
  `publicid`: 公共ID，每个KEY都对应一个公共ID，可在[控制台](https://console.heweather.com)查看

  `t`: 时间戳，秒级
  
  `sign`: 数字签名

- **创建数字签名**
  1. 将请求参数格式化为“key=value”格式，如“k1=v1”、“k2=v2”、“k3=v3”；
  2. 去除请求参数中值为空的参数
  3. 去除请求参数中参数为`sign` 的参数 ( 签名参数不参与签名算法 )
  4. 将第3步剩余的键值对以字典序升序排列，并用 & 符号连接，如 a=1&b=2&m=3&w=4
  5. 将第4步得到的字符串后拼接上API密钥, 假设密钥为 abc , 则 结果为:   a=1&b=2&m=3&w=4abc
  6. 将第5步得到的字符串进行MD5加密 ( 注 ：字符集为 UTF-8 )，得到签名结果
  7. 将第6步得到的签名结果 作为参数添加至请求中，参数名为 <code>sign</code>, 即 <code>sign=xxxxxxx</code>

- **数字签名PHP版本**

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

- **数字签名JAVA版**

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
              if ( param.getValue()!=null && !"".equals(param.getKey().trim()) && !"sign".equals(param.getKey  ().trim()) && !"key".equals(param.getKey().trim()) && !"".equals(param.getValue().trim()) ) {
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

- **数字签名JavaScript版**
  
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

### 天气数据的更新频率是多少 {#update-time}

|天气种类|更新频率|
|---|---|
|灾害预警|5分钟|
|逐天天气预报|1小时|
|逐小时天气|1小时| 
|生活指数|每天更新3次，分别在8，11，18点左右更新|
|实况天气|10-20分钟|
|空气质量实况|1小时|
|空气质量预报|1小时|
|格点天气实况|20-40分钟|
|格点天气逐天预报|1小时|
|格点天气逐小时预报|1小时|
|分钟级降雨|10-20分钟|
|卫星云图|30-60分钟|

请注意：由于天气数据的特殊性以及数据更新的持续性，无法确定精确的更新时间，请以接口返回数据的`updateTime`字段为准

### 支持多语言吗 {#language}

我们[支持30+种语言](/docs/start/language)，并不断新增中。你可以在你的API请求中添加`lang=xx`来获取对应的语言。

### 有没有天气图标 {#weather-icons}

有，免费使用，在[这里](/docs/start/icons)

### 有没有城市ID？ {#city-list}

有，我们可以提供[中国城市、中国景点等ID信息](/docs/start/location-list)，针对海外城市，由于数量众多，请使用[城市信息搜索API](/docs/api/geo/)去查询详细的ID。

### 遇到其他技术问题怎么办 {#more-questions}

如遇到更多技术问题，请登录控制台后发送工单，将有技术支持团队为你解答。也可以加入我们的开发者QQ群，和广大开发者进行交流沟通。

- 开发1群：257314412（已满）
- 开发2群：728024289（已满）
- 开发3群：613617443