const express = require('express')
const app = express();
const DataStore = require('nedb')
const InDb = new DataStore({filename:'./db/Incoming',autoload:true})
const OutDb = new DataStore({filename:'./db/OutGoing',autoload:true})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT||3000
app.get("/",(req,res)=>{
   res.send("Hello")
    
})

app.get("/In",(req,res)=>{
    
})
app.get("/incoming",(req,res)=>{
    var record = req.query
    InDb.insert(record,(err,doc)=>{
        if(err) console.log(err)
        if(doc) console.log(doc)
    })
})
app.listen(port,()=>console.log('Running'))