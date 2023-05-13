const express = require('express') ;
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();

//####################MIDDLEWARE################
//####################MIDDLEWARE################
app.use(express.json())


//####################ROUTE################
//####################ROUTE################
//GET API
app.get("/" , async (req , resp) => {
    let data = await dbConnect ;
    data = await data.find().toArray() ;
    resp.send(data) ;
})

//POST API
app.post('/' , async (req, resp) => {
    let data = await dbConnect ;
    let result = await data.insertOne(req.body)
    console.log(req.body);
    resp.send(result)
})

//PUT API
app.put("/" , async (req, resp) => {
    let data = await dbConnect ;
    let result = await data.updateOne(
        {title: req.body.title} ,
        {$set : req.body}
    )
    resp.send(result)
    console.log(result);
})

//DELETE API
app.delete('/:id' , async (req , resp) => {
    let data = await dbConnect ;
    let result = await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    resp.send(result)
    console.log(result);
})

app.listen(port) ;