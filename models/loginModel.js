const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    role: String
});

module.exports = mongoose.model('Login', loginSchema);;