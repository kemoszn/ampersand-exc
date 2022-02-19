const mongoose = require("mongoose");
const { Schema } = mongoose;

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
        registartionDate: {
            type: Date, 
            required: true
        }
    }, 
    { timestamps: true }
);

module.expoets = mongoose.model("Driver", Driver);