const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evenementSchema = new Schema({
    title: {
        type: String,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    categorie: {
        type: String,
    },
    allDay: {
        type: Boolean,
    }
},
{ timestamps: true });

const Evenement = mongoose.model('Evenement', evenementSchema);
module.exports = Evenement;