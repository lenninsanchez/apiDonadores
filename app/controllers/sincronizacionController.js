var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
var configDB=require('../../config/database');

exports.obtenerCiudades=function(req,res){
    configDB.connection.query("select 1+1 as solution",function (err,rows,fields) {
       if(err) throw err;
       res.send(rows[0]);
    });
}

exports.usuario=function(req,res) {
    var user_id=req.body.id;
    var token=req.body.token;
    var geo=req.body.geo;
    var json=JSON.parse(req.body.jsonData);
    console.log("json",json[0].data.$color);
    res.send(user_id);
}