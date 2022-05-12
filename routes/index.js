var express = require('express');
var router = express.Router();

const api_keys = require('./api_keys');
router.get('/', function (req, res, next) 
  {
    res.render('index', { title: 'Express' });
  });
router.get('/coin',api_keys.get_price);



module.exports = router;
// router.route("/coin/pair/price/v01/").get(function (req, res) {
//         const user_agent = new UserAgent();
//         const signature_object = new Signature();
//         const api_key = "c094f7e4c9028738de7a5a558273529a";
//         const secret  = "5fc7a5373f41bee4ebbd9cf65e66082f";
//         const timestemp_now  = Date.now(); 
//         // generate sign
//         if(req.query.symbol=="lyousdt"){
//             req.query.symbol="lyo1usdt";
//         }
//         var sign = signature_object.toSign(timestemp_now, "GET", "/sapi/v1/klines", "symbol="+req.query.symbol+"&interval=1min", "", secret);
//            const options = {
//             host: 'openapi.lyotrade.com',
//             path: '/sapi/v1/klines?symbol='+req.query.symbol+'&interval=1min',
//             method: 'GET',
//             headers: {
//             "User-Agent": user_agent.toString(),
//             "X-CH-APIKEY": api_key,
//             "X-CH-TS": timestemp_now,
//             "X-CH-SIGN": sign
//             }
//         };
//           const request = https.request(options, resp => {
//             // out of resposone code
//             console.log(`statusCode: ${resp.statusCode}`)
            
//             resp.on('data', d => {
//               console.log(d)
//           })})
// })
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "9h8ePMjjMz8JEKQbgXVdstuD6UCz6m4A");
//     var requestOptions = { method: 'GET', redirect: 'follow',headers: myHeaders };

// fetch("https://api.apilayer.com/exchangerates_data/convert?to=AED&from=USD&amount=1", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// })
        // const user_agent = new UserAgent();
        // const signature_object = new Signature();
        // const api_key = "c094f7e4c9028738de7a5a558273529a";
        // const secret  = "5fc7a5373f41bee4ebbd9cf65e66082f";
        // const timestemp_now  = Date.now(); 
        // // generate sign
        // if(req.query.symbol=="lyousdt"){
        //     req.query.symbol="lyo1usdt";
        // }
       
        // var sign = signature_object.toSign(timestemp_now, "GET", "/sapi/v1/klines", "symbol="+req.query.symbol+"&interval=1min", "", secret);
        // // detail for connection with api
        
        // const options = {
        //     host: 'openapi.lyotrade.com',
        //     path: '/sapi/v1/klines?symbol='+req.query.symbol+'&interval=1min',
        //     method: 'GET',
        //     headers: {
        //     "User-Agent": user_agent.toString(),
        //     "X-CH-APIKEY": api_key,
        //     "X-CH-TS": timestemp_now,
        //     "X-CH-SIGN": sign
        //     }
        // };
        // //var rr="";
        // const request = https.request(options, resp => {
        //     // out of resposone code
        //     console.log(`statusCode: ${resp.statusCode}`)
            
        //     resp.on('data', d => {
            
        //     const obj = JSON.parse(d)
        //     if(obj[0]){

            
        //         connection.query("SELECT symbol FROM order_type WHERE symbol =?",[req.query.symbol], function (err, result, fields) {
        //             if (err) throw err;
        //             if(result.length === 0){
        //                 //insert new symbol with values
        //                 connection.query("INSERT INTO order_type(symbol, high, vol, low, close, open) VALUES(?,?,?,?,?,?)",
        //                 [req.query.symbol,obj[0].high,obj[0].vol,obj[0].low,obj[0].close,obj[0].open], function (err, result, fields) {
        //                     if (err) throw err;
        //                     console.log("item is inserted");
        //                 });
                        
        //             }else{
        //                 //update new symbol with values
        //                 connection.query("UPDATE order_type set high=?, vol=? , low =? , close=? , open=? WHERE symbol=?",
        //                 [obj[0].high, obj[0].vol, obj[0].low, obj[0].close, obj[0].open, req.query.symbol], function (err, result, fields) {
        //                     if (err) throw err;
        //                     console.log("item is updated");
        //                 });


        //             }
        //         });
            
        //     }
           
          
        //    })
            
        // })
        // request.on('error', error => {
        //     console.error(error)
        // })
        // request.end()

        // if(req.query.type){    

        //     connection.query("SELECT "+req.query.type+" FROM order_type WHERE symbol =? ",[req.query.symbol], function (err, result, fields) {
        //         if (err) throw err;
        //         res.status(200).json(result);
                
        //     });
        // }
        // else{

        //     connection.query("SELECT * FROM order_type WHERE symbol =? ",[req.query.symbol], function (err, result, fields) {
        //         if (err) throw err;
        //         res.status(200).json(result);
                
        //     });


       



        //console.log(rr)
        
 
module.exports = router;
