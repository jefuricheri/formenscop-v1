const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrepriseSchema = new Schema({
    nom: {
        type: String,
    },
    siret: {
        type: String,
    },
    adresse: {
        type: String,
    },
    tel: {
        type: String,
    },
    gerant: {
        type: String,
    }
}, { timestamps: true });

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);
module.exports = Entreprise;