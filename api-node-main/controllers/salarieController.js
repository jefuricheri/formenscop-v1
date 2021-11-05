const { find, findById, findByIdAndUpdate } = require('../models/salarie');
const Salarie = require('../models/salarie');

// Invocation de tout élément de la collection
const salarie_all = (req, res) => {
    Salarie.find()
    .populate('formation')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const salarie_single = (req, res) => {
    Salarie.findById(req.params.id)
    .populate('formation')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const salarie_delete = (req, res) => {
    Salarie.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const salarie_update = (req, res) => {
    Salarie.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        nom: `${req.body.nom}`,
        prenom: `${req.body.prenom}`,
        role: `${req.body.role}`,
        mail: `${req.body.mail}`,
        tel: `${req.body.tel}`,
        adresse: `${req.body.adresse}`,
        mdp: `${req.body.mdp}`,
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
const salarie_create = (req, res) => {
    Salarie.create(
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
    salarie_all,
    salarie_single,
    salarie_delete,
    salarie_update,
    salarie_create
}