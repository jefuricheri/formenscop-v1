const { find, findById, findByIdAndUpdate } = require('../models/stagiaire');
const Stagiaire = require('../models/stagiaire');

// Invocation de tout élément de la collection
const stagiaire_all = (req, res) => {
    Stagiaire.find()
    .populate('promo')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const stagiaire_single = (req, res) => {
    Stagiaire.findById(req.params.id)
    .populate('promo')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const stagiaire_delete = (req, res) => {
    Stagiaire.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const stagiaire_update = (req, res) => {
    Stagiaire.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        nom: `${req.body.nom}`,
        prenom: `${req.body.prenom}`,
        role: `${req.body.role}`,
        mail: `${req.body.mail}`,
        tel: `${req.body.tel}`,
        adresse: `${req.body.adresse}`,
        mdp: `${req.body.mdp}`,
        promo: {
          $oid: `${req.body.promo}`
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
const stagiaire_create = (req, res) => {
    Stagiaire.create(
      { 
        nom: `${req.body.nom}`,
        prenom: `${req.body.prenom}`,
        role: `${req.body.role}`,
        mail: `${req.body.mail}`,
        tel: `${req.body.tel}`,
        adresse: `${req.body.adresse}`,
        mdp: `${req.body.mdp}`
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
    stagiaire_all,
    stagiaire_single,
    stagiaire_delete,
    stagiaire_update,
    stagiaire_create
}