const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activiteSchema = new Schema({
    nom: {
        type: String,
    },
    module: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Module'
    }
}, { timestamps: true });

const Activite = mongoose.model('Activite', activiteSchema);
module.exports = Activite;