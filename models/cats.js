const mongoose = require("mongoose")
const catsSchema = mongoose.Schema({name: String,color: String,weight: Number})
module.exports = mongoose.model("cats",catsSchema)