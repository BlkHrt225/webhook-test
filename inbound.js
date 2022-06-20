const express = require("express");
const app = express();

const cors = require("cors");

const os = require("os");
// const conn = mongoose.createConnection(
//   "mongodb+srv://rahul:vArE7Bc6H3TiGMIn@blkhrt.qw8ai.mongodb.net/test_DB?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const conn = mysql.createConnection({
//   host:'159.89.172.29',
//   database:'wbypeudnns',
//   user:'wbypeudnns',
//   password:'tKRxE8hynR',
// })
//  conn.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// const callerDB = conn.model("User", require("./db/callerInfo.schema"));
// const outgoingDB = conn.model("outgoing", require("./db/outgoing.schema"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  console.log(req);
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
app.post("/postOut", async (req, res) => {
  const { Caller, Callee, Time } = req.body;

  const outgoingCallerInfo = await outgoingDB.create({ Caller, Callee, Time });
  console.log(outgoingCallerInfo);
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
app.get("/getOut", async (req, res) => {
  var result = await outgoingDB.find({});

  return res.json(result);
});
app.post("/github", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello Angular" });
});
app.listen(port, () => {
  console.log(`Running on ${port}`);
  console.log(os.networkInterfaces());
});
