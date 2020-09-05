const express = require('express')
const app = express()

app.get('/health-check',(req,res) =>{
    return res.json({
        ok:true,
        message: "It's alive!"
    });
});

module.exports = app;