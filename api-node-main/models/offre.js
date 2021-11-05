const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const offreSchema = new Schema({
    titre: {
        type: String,
    },
    descriptif: {
        type: String,
    },
    date: {
        type: String,
    },
    type_contrat: {
        type: String,
    },
    domaine: {
        type: String,
    },
    entreprise: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Entreprise'
    }
}, { timestamps: true });

const Offre = mongoose.model('Offre', offreSchema);
module.exports = Offre;