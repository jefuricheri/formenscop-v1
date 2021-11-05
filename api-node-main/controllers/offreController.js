const { find, findById, findByIdAndUpdate } = require('../models/offre');
const Offre = require('../models/offre');

// Invocation de tout élément de la collection
const offre_all = (req, res) => {
    Offre.find()
    .populate('entreprise')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const offre_single = (req, res) => {
    Offre.findById(req.params.id)
    .populate('entreprise')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const offre_delete = (req, res) => {
    Offre.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const offre_update = (req, res) => {
    Offre.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        titre: `${req.body.titre}`,
        descriptif: `${req.body.descriptif}`,
        date: `${req.body.date}`,
        type_contrat: `${req.body.type_contrat}`,
        domaine: `${req.body.domaine}`,
        entreprise: {
          $oid: `${req.body.entreprise}`
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
const offre_create = (req, res) => {
    Offre.create(
      { 
        titre: `${req.body.titre}`,
        descriptif: `${req.body.descriptif}`,
        date: `${req.body.date}`,
        type_contrat: `${req.body.type_contrat}`,
        domaine: `${req.body.domaine}`
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
    offre_all,
    offre_single,
    offre_delete,
    offre_update,
    offre_create
}