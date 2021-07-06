const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DataStore = require("nedb");
const InDb = new DataStore({ filename: "./db/Incoming", autoload: true });
const OutDb = new DataStore({ filename: "./db/OutGoing", autoload: true });

const conn = mongoose.createConnection(
  "mongodb+srv://rahul:vArE7Bc6H3TiGMIn@blkhrt.qw8ai.mongodb.net/test_DB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const callerDB = conn.model("User", require("./db/callerInfo.schema"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/getIn", (req, res) => {
  callerDB.find({ status: "ANSWERED" }, (err, doc) => {
    if (err) res.status(500);
    else {
      console.log(doc);
      return res.send(doc);
    }
  });
});
app.get("/getMis", (req, res) => {
  callerDB.find({ status: "NOANSWER" }, (err, doc) => {
    if (err) res.status(500);
    if (doc) {
      console.log(doc);
      res.send(doc);
    }
  });
});
app.post("/postOut", (req, res) => {
  //   const record = ({ Caller, Callee, Time } = req.body);
  const { Caller, Callee, Time } = req.body;
  callerDB.create({ Caller, Callee, Time }, (err, doc) => {
    if (err) console.log(err);
    if (doc) console.log(doc);
  });
});
app.get("/incoming", async (req, res) => {
  const { caller, time, agent, agentNo, status } = req.query;
  const callerInfo = await callerDB.create({
    caller,
    time,
    agent,
    agentNo,
    status,
  });
  console.log(callerInfo);
  if (callerInfo) {
    return res.json(callerInfo);
  }
});
app.get("/getOut", (req, res) => {
  callerDB.find({}, (err, doc) => {
    if (err) res.status(500);
    if (doc) res.send(doc);
  });
});
app.listen(port, () => console.log("Running"));
