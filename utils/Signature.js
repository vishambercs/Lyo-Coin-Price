const crypto = require('crypto');

module.exports = class Signature {
    // function to generate sign
    toSign(timestamp,method,requestPath,queryString,body,secretKey) {
        var per = this.perhash(timestamp, method, requestPath, queryString, body);
        var hash = crypto.createHmac('sha256', secretKey).update(per).digest('hex');
        return hash;
    }
    // merge all data like method and requestpath to one string 
    perhash(timestamp, method, requestPath, queryString, body) {
         var preHash1  = "" + timestamp + method.toUpperCase() + requestPath;
         if(queryString != ""){
            preHash1 += "?"+queryString;
         }
         if (body != "") {
            preHash1 += body;
        }
        return preHash1.toString();
         
    }
}