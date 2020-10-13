const mongoose = require("mongoose");
// const { stringify } = require("querystring");

const Schema = mongoose.Schema;

const addJobOfferSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    // offers: [
        // {
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
            paygrade: {
                type: Number,
                required: false,
                trim: true
            },
            currency: {
                type: String,
                required: false,
                trim: true
            },
            favRating: {
                type: Number,
                required: false
            },
            description: {
                type: String,
                required: false,
                trim: true
            },
            status: {
                type: String,
                required: false
            }
        // }
    // ]
}, {timestamps: true, collection: 'list-of-offers'});

// module, 1 arg is name, second is type of schema
const AddJobOffer = mongoose.model('AddJobOffer', addJobOfferSchema);

module.exports = AddJobOffer;