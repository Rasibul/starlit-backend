const mongoose = require("mongoose");
const Schema = mongoose.Schema;;

const loginSchema = new Schema({

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },

}, { timestamps: true })


const MLogin = mongoose.model("User", loginSchema);

module.exports = MLogin;