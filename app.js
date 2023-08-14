const express = require('express')
require('dotenv').config()
const app = express();
const PORT = process.env.PORT ;
const mongoDB = require('./db')

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

mongoDB();
app.use(express.json())

app.get('/',(req,res)=>{
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


