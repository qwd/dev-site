---
book: 示例代码
version: 6.1
title: C#调用代码
description: 使用C#调用和风天气数据的官方示例代码
---

本文介绍了使用PHP调用和风天气数据的示例代码

```c#

using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace ApiSnippet
{
    class Program
    {
        static string GetSignature(string parameters, string secret)
        {
            string[] unsorted = parameters.Split('&');
            List<string> sorted = new List<string>();
            string sortedParams = "";

            //Removing unwanted parameters
            for (int i = 0; i < unsorted.Length; i++) {
                if (!unsorted[i].Contains('=')) {
                    continue;
                }
                string[] keyVal = unsorted[i].Split('=');
                if (keyVal[0].Equals("sign") || keyVal[1].Length == 0) {
                    continue;
                }

                sorted.Add(unsorted[i]);
            }

            if (sorted.Count == 0) {
                return null;
            }

            //Sorting the remaining parameters
            sorted.Sort();

            //Building the sorted parameters string
            for (int i = 0; i < sorted.Count; i++) {
                if(i < sorted.Count-1) {
                    sorted[i] += '&';
                }
                sortedParams += sorted[i];
            }

            sortedParams += secret;

            //Encoding
            byte[] encodedPassword = new UTF8Encoding().GetBytes(sortedParams);
            byte[] hash = ((HashAlgorithm)CryptoConfig.CreateFromName("MD5")).ComputeHash(encodedPassword);
            string encoded = BitConverter.ToString(hash).Replace("-", String.Empty).ToLower();

            return encoded;
        }

        static void Main(string[] args)
        {
            string secret = "your key";
            string parameters = "username=your username&t=1477455132&location=beijing";
            parameters = String.Concat(parameters, "&sign=", GetSignature(parameters, secret));
            string url = String.Concat("https://free-api.heweather.com/s6/weather/now?", parameters);
           
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";
            request.Timeout = 5000;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            string jsonString;
            using (Stream stream = response.GetResponseStream())   
            {
                StreamReader reader = new StreamReader(stream, System.Text.Encoding.UTF8);
                jsonString = reader.ReadToEnd();
            }

            //Response
            Console.WriteLine(jsonString);   
        }
    }
}
```