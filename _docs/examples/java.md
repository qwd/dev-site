---
book: 示例代码
version: 6.1
title: JAVA调用代码
description: 使用JAVA调用和风天气数据的官方示例代码, 另外还有JAVA SDK可供使用
---

## JAVA
### 根据key值请求

```java
    //参数字符串，如果拼接在请求链接之后，需要对中文进行 URLEncode   字符集 UTF-8
    String param = "key=xxxxxxxxxxxxxxxxxxx&location=北京";
    StringBuilder sb = new StringBuilder();
    InputStream is = null;
    BufferedReader br = null;
    PrintWriter out = null;
    try {
        //接口地址
        String url = "https://api.heweather.net/s6/weather";
        URL    uri = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) uri.openConnection();
        connection.setRequestMethod("POST");
        connection.setReadTimeout(5000);
        connection.setConnectTimeout(10000);
        connection.setRequestProperty("accept", "*/*");
        //发送参数
        connection.setDoOutput(true);
        out = new PrintWriter(connection.getOutputStream());
        out.print(param);
        out.flush();
        //接收结果
        is = connection.getInputStream();
        br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
        String line;
        //缓冲逐行读取
        while ( ( line = br.readLine() ) != null ) {
            sb.append(line);
        }
        System.out.println(sb.toString());
    } catch ( Exception ignored ) {
    } finally {
        //关闭流
        try {
            if(is!=null){
                is.close();
            }
            if(br!=null){
                br.close();
            }
            if (out!=null){
                out.close();
            }
        } catch ( Exception ignored ) {}
    }
```

### 根据sign请求

```java
    //参数字符串，如果拼接在请求链接之后，需要对中文进行 URLEncode   字符集 UTF-8
    String params="sign=xxxxxxxxxxxxxxxxxxxx&username=xxxxxxxxxxxxxxxxxxx&location=北京&t=秒级时间戳";
    StringBuilder sb = new StringBuilder();
    InputStream is = null;
    BufferedReader br = null;
    PrintWriter out = null;
    try{
        //接口地址
        String url = "https://api.heweather.net/s6/weather";
        URL uri = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) uri.openConnection();
        connection.setRequestMethod("POST");
        connection.setReadTimeout(5000);
        connection.setConnectTimeout(10000);
        connection.setRequestProperty("accept", "*/*");
        //发送参数
        connection.setDoOutput(true);
        out = new PrintWriter(connection.getOutputStream());
        out.print(params);
        out.flush();
        //接收结果
        is = connection.getInputStream();
        br = new BufferedReader(new InputStreamReader(is));
        String line;
        //缓冲逐行读取
        while ( (line = br.readLine()) != null ) {
            sb.append(line);
        }
        System.out.println(sb.toString());
        } catch ( Exception ignored ) {
        } finally {
            //关闭流
            try {
                if ( is != null ) {
                    is.close();
                }
                if ( br != null ) {
                    br.close();
                }
                if ( out != null ) {
                    out.close();
                }
            } catch (Exception ignored) {}
        }
    }


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
            if ( param.getValue()!=null && !"".equals(param.getKey().trim()) && !"sign".equals(param.getKey().trim()) && !"key".equals(param.getKey().trim()) && !"".equals(param.getValue().trim()) ) {
                baseString.append(param.getKey().trim()).append("=").append(param.getValue().trim()).append("&");
            }
        }
        if ( baseString.length() > 0 ) {
            baseString.deleteCharAt(baseString.length() - 1).append(secret);
        }
        // 使用MD5对待签名串求签
        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            byte[] bytes = md5.digest(baseString.toString().getBytes("UTF-8"));
            return new BASE64Encoder().encode(bytes);
        } catch (GeneralSecurityException ex) {
            throw ex;
        }
    }
```
