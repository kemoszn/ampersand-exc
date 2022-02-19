//import mongoose and its utitilities 
const mongoose = require("mongoose");
const { Schema } = mongoose;

//driver object structure 
const Driver = new Schema(
    { 
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String, 
            required: true,
        },
        licenseNo: { 
            type: String, 
            required: true,
        },
        registrationDate: {
            type: Date, 
            required: true
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Driver", Driver); //export object schema for usage 