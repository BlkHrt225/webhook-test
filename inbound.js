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

app.get("/getIn",(req,res)=>{
    InDb.find({status:'ANSWERED'},(err,doc)=>{
        if(err)res.status(500)
        else{console.log(doc);(res.send(doc))}
    })
})
app.get('/getMis',(req,res)=>{
    InDb.find({status:'NOANSWER'},(err,doc)=>{
        if(err)res.status(500)
        if(doc){console.log(doc);res.send(doc)}
    })
})
app.post('/postOut',(req,res)=>{
    const record= {Caller,Callee,Time}= req.body
    OutDb.insert(record,(err,doc)=>{
        if(err) console.log(err)
        if(doc) console.log(doc)
    })
})
app.get("/incoming",(req,res)=>{
    var record = req.query
    InDb.insert(record,(err,doc)=>{
        if(err) console.log(err)
        if(doc) console.log(doc)
    })
})
app.get('/getOut',(req,res)=>{
    InDb.find({},(err,doc)=>{
        if(err)res.status(500)
        if(doc)res.send(doc)
    })
})
app.listen(port,()=>console.log('Running'))