const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    nom: {
        type: String,
    },
    duree: {
        type: String,
    },
    thematique: {
        type: String,
    },
    obj_pedago: {
        type: String,
    },
    prerequis: {
        type: String,
    },
    contenus: {
        type: String,
    },
    supports: {
        type: String,
    },
    ressources: {
        type: String,
    },
    moda_eva: {
        type: String,
    },
    validation: {
        type: String,
    },
    modalite: {
        type: String,
    },
    formation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Formation'
    }
}, { timestamps: true });

const Module = mongoose.model('Module', moduleSchema);
module.exports = Module;