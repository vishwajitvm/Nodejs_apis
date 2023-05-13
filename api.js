const express = require('express') ;
const dbConnect = require('./mongodb')
const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();

//GET DATA FROM MONGO DB
  const getData = async () => {
    let data = await dbConnect ;
    data = await data.find().toArray() ;
    console.log(data);
  }
  getData();


app.listen(port) ;