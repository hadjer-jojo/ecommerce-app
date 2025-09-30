const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mailSchema = new Schema({
    mail: { type: String, required: true }
});


const Mail = model("mail", mailSchema);

module.exports = Mail; 