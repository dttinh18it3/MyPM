const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_Name: { type: String, required: true },
    gender: { type: Number },
    dateOfBirth: { type: Date, required: true },
    cellphone: { type: String, required: true },
    specialization: { type: String, required: true },
    register_email: { type: String, required: true },
    password: { type: String, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);