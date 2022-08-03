const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);