const express = require('express');

var app  = express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error:'Page not found',
        name:'Todo app v1.0'
    });
});

app.get('/users',(req,res)=>{
    res.send([{  //array of objects
        name : "kanav",
        age: 20
    },{
        name:"mihika",
        age:16
    },{
        name :"utkarsh",
        age:21
    }]);
});

app.listen(3000);

module.exports = {
    app
}