const { find, findById, findByIdAndUpdate } = require('../models/activite');
const Activite = require('../models/activite');

// Invocation de tout élément de la collection
const activite_all = (req, res) => {
    Activite.find()
    .populate('module')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const activite_single = (req, res) => {
    Activite.findById(req.params.id)
    .populate('module')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const activite_delete = (req, res) => {
    Activite.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const activite_update = (req, res) => {
    Activite.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        nom: `${req.body.nom}`,
        module: {
          $oid: `${req.body.module}`
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
const activite_create = (req, res) => {
    Activite.create(
      { 
        nom: `${req.body.nom}`,
        module: {
          $oid: `${req.body.module}`
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
    
  
// Exportation des éléments
module.exports = {
    activite_all,
    activite_single,
    activite_delete,
    activite_update,
    activite_create
}