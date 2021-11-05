const { find, findById, findByIdAndUpdate } = require('../models/formation');
const Formation = require('../models/formation');

// Invocation de tout élément de la collection
const formation_all = (req, res) => {
    Formation.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const formation_single = (req, res) => {
    Formation.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const formation_delete = (req, res) => {
    Formation.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const formation_update = (req, res) => {
    Formation.findByIdAndUpdate(
    { _id: req.params.id },
    { nom: `${req.body.nom}`,
    description: `${req.body.description}` }
    )
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
    }

// Création d'un élément dans la collection
const formation_create = (req, res) => {
    Formation.create(
    { nom: `${req.body.nom}`,
      description: `${req.body.description}` }
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
    formation_all,
    formation_single,
    formation_delete,
    formation_update,
    formation_create
}