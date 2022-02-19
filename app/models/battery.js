const mongoose = require("mongoose");
const { Schema } = mongoose;

const Battery = new Schema(
    { 
        manufactringDate: {
            type: Date,
            required: true,
        },
        brand: {
            type: String, 
            required: true,
        },
        capacity: { 
            type: String, 
            required: true,
        },
        station: {
            type: String, 
            required: true
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Battery", Battery);