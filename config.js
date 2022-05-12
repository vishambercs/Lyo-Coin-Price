let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'infoapi_user_db',
  password: 'jus7d_?UhA7h',
  database: 'infoapi_coin_price'
});

module.exports=connection;