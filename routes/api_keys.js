const axios = require('axios');
const Utility = require('./Utility');

module.exports =
{   
    async get_price(req, res) {
        try {
            var lyo_api_url = "https://infoapi.lyotrade.com/coin/pair/price/v01?symbol=" 
            var symbol = "lyo1usdt";
            lyo_api_url += symbol
            let response = await Utility.Get_Request_By_Axios(lyo_api_url,{})
            var lyo_pay_data = JSON.parse(response.data).data
            var type = ""
            var id = ""
            if (req.query.symbol=="lyoaed") {
                id = 7
                type = "AED";
            }
            else if (req.query.symbol=="lyoeur") {
                id = 8
                type = "EUR";
            }
            else if (req.query.symbol=="lyousd") {
                id = 9
                type = "USD";
            }
             var config = {
                method: 'GET',
                url: 'https://api.apilayer.com/exchangerates_data/convert?to='+type+'&from=USD&amount=1',
                headers: {
                  'apikey': '9h8ePMjjMz8JEKQbgXVdstuD6UCz6m4A'
                },
                 
              };
              var rate = 0;
              await axios(config)
              .then(function (response) {
                // console.log(JSON.stringify());
                if(response.data.success == true){
                    rate = response.data.info.rate
                    let price_object = [{
                        "id":id,
                        "symbol":req.query.symbol,
                        high: (parseFloat(rate) * parseFloat(lyo_pay_data[0].high)),
                        low: (parseFloat(rate) * parseFloat(lyo_pay_data[0].low)), 
                        close: (parseFloat(rate) * parseFloat(lyo_pay_data[0].close)), 
                        open: (parseFloat(rate) * parseFloat(lyo_pay_data[0].open)), 
                        vol: (parseFloat(rate) * parseFloat(lyo_pay_data[0].vol)), 
                    }]
                    
                   
                    res.json(price_object)
                }
              })
              .catch(function (error) {
                console.log(error);
                res.json({ })
              });
            
         
            

           
          
        }
        catch (error) {
            console.log(error)
            res.json({ status: 400, data: {}, message: "Error, Please check the log" })
        }
    },


}
