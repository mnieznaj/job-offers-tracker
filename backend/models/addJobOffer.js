const mongoose = require("mongoose");
// const { stringify } = require("querystring");

const Schema = mongoose.Schema;

const addJobOfferSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false,
        trim: true
    },
    link: {
        type: String,
        required: false,
        trim: true
    },
    company: {
        type: String,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: false,
        trim: true
    },
    field: {
        type: String,
        required: false,
        trim: true
    },
    paygrade: {
        type: String || Number,
        required: false,
        trim: true
    },
    favorite: {
        type: Boolean,
        required: false
    },
    applied: {
        type: Boolean,
        required: false
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    stage1: {
        type: Boolean,
        required: false
    },
    stage2: {
        type: Boolean,
        required: false
    },
    stage3: {
        type: Boolean,
        required: false
    },
    gotTheJob: {
        type: Boolean,
        required: false
    },
}, {timestamps: true, collection: 'list-of-offers'});

// module, 1 arg is name, second is type of schema
const AddJobOffer = mongoose.model('AddJobOffer', addJobOfferSchema);

module.exports = AddJobOffer;