const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    var val = req.params
    console.log(val)
    
})

app.listen(3000,()=>console.log('Running'))