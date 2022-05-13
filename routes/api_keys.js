const axios = require('axios');
const Utility = require('./Utility');
var d2 = new Date();
var json_varable =  [{
    "id": 0,
    "symbol": "",
    high: 0,
    vol: 0,
    last: 0,
    low: 0,
    buy: 0,
    sell: 0,
    rose:0,
    time:0,
    open:0,
    "msDiff" : 0   
}]
module.exports =
{
    async get_price(req, res) {
        try {
            var lyo_api_url = "https://openapi.lyotrade.com/sapi/v1/ticker?symbol="
            var symbol = "lyo1usdt";
            lyo_api_url += symbol
            let response = await Utility.Get_Request_By_Axios(lyo_api_url, {})
            var lyo_pay_data = JSON.parse(response.data).data
            var type = ""
            var id = ""
            if (req.query.symbol == "lyoaed") {
                id = 7
                type = "AED";
            }
            else if (req.query.symbol == "lyoeur") {
                id = 8
                type = "EUR";
            }
            else if (req.query.symbol == "lyousd") {
                id = 9
                type = "USD";
            }
            var d1 = new Date(); // 2014-01-20 12:30:00
           
               
            // Difference between d2 and d1 in milliseconds (50400000)
            var msDiff =  ((d1 - d2)/60000) ;
            if(msDiff > 60 || json_varable[0].id == 0  ){
            d2 = new Date()
            var config = {
                method: 'GET',
                url: 'https://api.apilayer.com/exchangerates_data/convert?to=' + type + '&from=USD&amount=1',
                headers: {
                    'apikey': 'wRQcpTwedoJ68iv5ibftbEmo8p1kDlq8'
                },
            };
            var rate = 0;
            await axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify());
                    if (response.data.success == true) {
                        rate = response.data.info.rate
                        let price_object = [{
                            "id": id,
                            "symbol": req.query.symbol,
                            high: (parseFloat(rate) * parseFloat(lyo_pay_data.high)),
                            vol: (parseFloat(rate) * parseFloat(lyo_pay_data.vol)),
                            last: (parseFloat(rate) * parseFloat(lyo_pay_data.last)),
                            low: (parseFloat(rate) * parseFloat(lyo_pay_data.low)),
                            buy: (parseFloat(rate) * parseFloat(lyo_pay_data.buy)),
                            sell: (parseFloat(rate) * parseFloat(lyo_pay_data.sell)),
                            rose: (parseFloat(rate) * parseFloat(lyo_pay_data.rose)),
                            time: (parseFloat(rate) * parseFloat(lyo_pay_data.time)),
                            open: (parseFloat(rate) * parseFloat(lyo_pay_data.open)),
                            "msDiff" : msDiff   
                        }]
                        json_varable = price_object
                        res.json(price_object)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    res.json({})
                });

            }
            else
            {
                json_varable[0]["msDiff"] = msDiff
                res.json(json_varable)  
            }




        }
        catch (error) {
            console.log(error)
            res.json({ status: 400, data: {}, message: "Error, Please check the log" })
        }
    },


}
