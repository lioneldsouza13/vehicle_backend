const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const addVehicle = require('./Routes/addVehicle') 
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_PROD,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully ");
});

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/api',addVehicle)

app.listen(process.env.PORT,()=>{
    console.log(`Listening to PORT ${process.env.PORT}`)
})