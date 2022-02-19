const mongoose = require("mongoose");
const { Schema } = mongoose;

const Moto = new Schema(
    { 
        plateNo: {
            type: String,
            required: true,
        },
        driver: {
            type: Schema.Types.ObjectId, 
            required: false,
        },
        battery: { 
            type: Schema.Types.ObjectId, 
            required: true,
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("Moto", Moto);