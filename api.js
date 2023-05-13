const express = require('express') ;
const dbConnect = require('./mongodb')
const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();


//####################ROUTE################
//####################ROUTE################
//GET API
app.get("/" , async (req , resp) => {
    let data = await dbConnect ;
    data = await data.find().toArray() ;
    resp.send(data) ;
})



app.listen(port) ;