const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
require ('dotenv/config');
var host = process.env.HOST || '0.0.0.0';
//Import Routes
const authRoute = require('./routes/auth');


//Route middlewares
app.use('/', authRoute);
app.use('/user', authRoute);
app.use('/register', authRoute);
app.use('/api/customers', authRoute);


//Connect to MongoDb 
const url = `mongodb+srv://capa_user:keneth@cluster0-shard-00-01.to8ha.mongodb.net/capa_db?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url, { useNewUrlParser: true}, ()=> console.log('connect to database')
);
    //Create an instance of mongodb client
const client = new MongoClient(url);
const port = 3000;
// Listen on a specific host via the HOST environment variable
app.listen(port, ()=> console.log(`server started on port ${port}`));