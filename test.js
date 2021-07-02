const fetch = require('node-fetch')
let jsondata ={}
    jsondata.CallingAgentNumber= "08918379567"
    jsondata.callerId = "02656708557"
    jsondata.apiKey="K9Pq/RpwxCK2V8ZJHSG/DTgrEYh/omRJIzq+JsRPOGk=";
    jsondata.clientId="f9de0272-1c3c-496f-acb2-3bac282dbfa5";
    jsondata.callType=2;
    jsondata.CallingPartyNumber="245"
    
    console.log(JSON.stringify(jsondata))
    let num="08918379567"
    let jsondata2 = {CallingAgentNumber:`${num}`,
    callerId:"02656708557",
    apiKey:"K9Pq/RpwxCK2V8ZJHSG/DTgrEYh/omRJIzq+JsRPOGk=",
    clientId:"f9de0272-1c3c-496f-acb2-3bac282dbfa5",
    callType:2,
    CalledPartyNumber:"8965"}
    console.log("data 2")
console.log(JSON.stringify(jsondata2))
fetch('http://180.150.251.45:3334/api/bridge/call',{
    method:'POST',
    
    headers:{
        
        'Content-Type':'application/json; charset=utf-8'
    },
    body:JSON.stringify(jsondata2)
}).then(res=>console.log(res)).then(result=>console.log(result)).catch(err=>console.error(err))