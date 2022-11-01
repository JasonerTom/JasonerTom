*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
印冢
脚本名称:印冢
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/app.cocoeye.org\/\/app\/ucenter\/user\/vip\/isvip\/.+$ url script-response-body https://raw.githubusercontent.com/JasonerTom/JasonerTom/main/yingzhong.js
[mitm] 
hostname = *.app.*
var obj = JSON.parse($response.body);
    obj.data.isVip= true;
    $done({body: JSON.stringify(obj)});
