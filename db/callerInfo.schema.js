const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callerInfoSchema = new Schema({
  caller: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  agent: {
    type: String,
    required: true,
  },
  agentNo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = callerInfoSchema;