const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outgoingSchema = new Schema({
  Caller: {
    type: String,
    // required: true,
  },
  Time: {
    type: String,
    // required: true,
  },
  Callee: {
    type: String,
    // required: true,
  },
});

module.exports = outgoingSchema;
