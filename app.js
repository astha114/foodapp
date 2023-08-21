const express = require('express')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT ;
const mongoDB = require('./db')


mongoDB();
app.use(express.json())

app.get('/',(req,res)=>{
    res.redirect('/login')
    res.send('hello')
})

app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplyData'));
app.use('/api',require('./Routes/orderdata'));


const path = require('path');

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(_,res){
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


