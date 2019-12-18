const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express()

//Add body parser
app.use(bodyParser.json());

//config
const config=require('./config/keys');
const Logger=require('./log/logger');
const log=new Logger();

//Connect to db
mongoose
    .connect(config.mongoURI)
    .then(()=>log.info("MongoDB connected"))
    .catch(err=>log.error(err));

const port=process.env.PORT||5000;

app.listen(port, ()=>log.info(`Server started on port ${port}`));
