const mongoose = require("mongoose");
const moment = require('moment');

const formSchema = new mongoose.Schema({
    firstName:{
        type: String, 
        trim: true
    },
    dob:{
        type: Date,
        trim: true
    },
    lastName:{
        type: String, 
        trim: true
    },
    gender:{
        type: String, 
        trim: true
    },
    country:{
        type: String, 
        trim: true
    },
    town:{
        type: String, 
        unique: true
    },
    state:{
        type: String, 
        trim: true
    },
    zip:{
        type: String, 
        trim: true
    },
    phone1:{
        type: Number, 
        trim: true
    },
    phone2:{
        type: Number, 
        trim: true
    },
    email:{
        type: String, 
        trim: true
    }
});

module.exports = mongoose.model("Register", formSchema)
