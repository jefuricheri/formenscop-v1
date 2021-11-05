const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const noteSchema = new Schema({
    note: {
        type: Number,
    },
    mention: {
        type: String,
    },
    activite: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Activite'
    },
    stagiaire: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Stagiaire'
    }
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;