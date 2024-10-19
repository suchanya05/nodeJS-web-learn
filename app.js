const express = require('express');
const chalk = require('chalk') //chalk=ใช้ใส่สี
const debug = require('debug')('app'); //debug=ใช้ดูความคืบหน้า
const morgan = require('morgan'); //morgan=ใช้เรียกดูอะไรต่างๆ
const path = require('path')



const app = express();
const port = process.env.port || 3200 || 4000 || 8888;
const productsRouter = require("./src/router/productsRouter")

app.use(morgan('combined'));


app.set("views","./src/views")
app.set("view engine" , "ejs")


app.use("/products", productsRouter)

app.get("/", (req,res)=>{

    res.render('index',{username: 'Warachit', customers : ["best222","suchanya333","111klakhayan"]});

})

app.listen(port, ()=>{
    debug("Listenint on port " + chalk.yellow(  " : " + port));

})

