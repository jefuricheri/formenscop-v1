const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarieSchema = new Schema({
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
    formation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Formation'
    }
}, { timestamps: true });

const Salarie = mongoose.model('Salarie', salarieSchema);
module.exports = Salarie;