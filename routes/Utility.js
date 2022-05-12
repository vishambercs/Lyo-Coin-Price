
const axios = require('axios');
var stringify = require('json-stringify-safe');

module.exports = {
    async Get_Request_By_Axios(URL, Headers) {
        response = {}
        await axios.get(
           URL,
        
            {
                params: Headers
            },)
            .then(res => {
                var stringify_response = stringify(res)
                response = { status: 200, data: stringify_response, message: "Get The Data From URL" }
            })
            .catch(error => {
                console.error("Error", error)
                response = { status: 404, data: {}, message: "There is an error.Please Check Logs." };
            })
        return response;
    },


}
