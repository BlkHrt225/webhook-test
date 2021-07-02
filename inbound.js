const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT||3000
app.get("/",(req,res)=>{
    var val = req.params
    console.log(val)
    
})

app.listen(port,()=>console.log('Running'))