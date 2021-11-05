const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const promoSchema = new Schema({
    ville: {
        type: String,
    },
    formation: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Formation'
    }
}, { timestamps: true });

const Promo = mongoose.model('Promo', promoSchema);
module.exports = Promo;