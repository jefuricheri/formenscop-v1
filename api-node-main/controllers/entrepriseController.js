const { find, findById, findByIdAndUpdate } = require('../models/entreprise');
const Entreprise = require('../models/entreprise');

// Invocation de tout élément de la collection
const entreprise_all = (req, res) => {
    Entreprise.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const entreprise_single = (req, res) => {
    Entreprise.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const entreprise_delete = (req, res) => {
    Entreprise.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const entreprise_update = (req, res) => {
    Entreprise.findByIdAndUpdate(
    { _id: req.params.id,
     nom: `${req.body.nom}`,
     siret: `${req.body.siret}`,
     adresse: `${req.body.adresse}`,
     tel: `${req.body.tel}`,
     gerant: `${req.body.gerant}` }
     )
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
    }

// Création d'un élément dans la collection
const entreprise_create = (req, res) => {
    Entreprise.create(
    { nom: `${req.body.nom}`,
    siret: `${req.body.siret}`,
    adresse: `${req.body.adresse}`,
    tel: `${req.body.tel}`,
    gerant: `${req.body.gerant}` }
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
    entreprise_all,
    entreprise_single,
    entreprise_delete,
    entreprise_update,
    entreprise_create
}