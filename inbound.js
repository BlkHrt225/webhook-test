const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT||3000
app.get("/",(req,res)=>{
   res.send("Hello")
    
})


app.get("/incoming",(req,res)=>{
    console.log(req.query)
})
app.listen(port,()=>console.log('Running'))