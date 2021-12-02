const mongoose = require("mongoose")
const catsSchema = mongoose.Schema({

name:{
    type: String,
    minLength: 3,
    maxLength: 100
},

color : {
    type:Number,
},

weight: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("cats",catsSchema)