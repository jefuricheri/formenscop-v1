const { find, findById, findByIdAndUpdate } = require('../models/promo');
const Promo = require('../models/promo');

// Invocation de tout élément de la collection
const promo_all = (req, res) => {
    Promo.find()
    .populate('formation')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const promo_single = (req, res) => {
    Promo.findById(req.params.id)
    .populate('formation')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const promo_delete = (req, res) => {
    Promo.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const promo_update = (req, res) => {
    Promo.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        ville: `${req.body.ville}`,
        formation: {
          $oid: `${req.body.formation}`
        }
      }
      )
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
    }

// Création d'un élément dans la collection
const promo_create = (req, res) => {
    Promo.create(
      { 
        ville: `${req.body.ville}`
      }
    )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}
    
  
// Exportation des éléments
module.exports = {
    promo_all,
    promo_single,
    promo_delete,
    promo_update,
    promo_create
}