const express = require('express') ;
const {MongoClient} = require('mongodb') ;
const mongoose = require('mongoose') ;
const url = 'mongodb://127.0.0.1:27017' ;
const database = 'e-comm' ;
const client = new MongoClient(url) ;

const port = process.env.port || 8080 ;
const app = express() ;
let time = new Date();
//Views
app.set('view engine' , 'ejs')

//Static file[css]
app.use(express.static('public'))

//MONGO DB CONNECTION mongodb://localhost:27017
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm' , {useNewUrlParser: true});
    console.log('=================================================================================');
    console.log(`Mongo DB is  Connect ${time. getHours() + ":" + time}`);
    console.log('=================================================================================');
}


//get dat from mongodb
async function dbConnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('products');
  }


module.exports = dbConnect() 