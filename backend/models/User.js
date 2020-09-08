const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');
// const { stringify } = require("querystring");

const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true, collection: 'list-of-users'});

// module, 1 arg is name, second is type of schema
const user = mongoose.model('User', User);

module.exports = user;