const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formationSchema = new Schema({
    nom: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true });

const Formation = mongoose.model('Formation', formationSchema);
module.exports = Formation;