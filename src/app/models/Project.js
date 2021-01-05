const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_Name: { type: String, required: true },
    project_Category: { type: Number },
    project_Description: { type: String, required: true },
    project_Privacy: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);