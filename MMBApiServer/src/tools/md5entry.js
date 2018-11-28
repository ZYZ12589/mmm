//负责进行字符串加密
'use strict'

const crypto = require('crypto'); 

const secret = 'czbk01'; //加密的盐

//实现MD5的加密
exports.MD5Entry = function(normalString)
{
   
const hash = crypto.createHmac('MD5', secret)
                   .update(normalString)
                   .digest('hex'); //以16进制的方式输出

   return hash;
}