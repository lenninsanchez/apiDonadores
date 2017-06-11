var mysql=require('mysql');
var conf=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});
module.exports = {

    'connection' : conf
     
     //Please replace your host file Here : 127.1.1.0 , Express is Collection Name (Database Name)
};