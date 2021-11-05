const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const stagiaireSchema = new Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    role: {
        type: String,
    },
    mail: {
        type: String,
    },
    tel: {
        type: String,
    },
    adresse: {
        type: String,
    },
    mdp: {
        type: String,
    },
    promo: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Promo'
    }
}, { timestamps: true });

const Stagiaire = mongoose.model('Stagiaire', stagiaireSchema);
module.exports = Stagiaire;