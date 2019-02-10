const express = require("express");
const mongoose = require("mongoose");
const {mongo_url} = require("./config");

const app = express();

mongoose.connect(mongo_url,{useNewUrlParser: true}).then(response=>{
    console.log("database connected");
}).catch(error=>{
    console.log(error);
});

app.listen("3000",()=>{
    console.log("server run");
})