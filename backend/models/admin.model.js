const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    user: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;