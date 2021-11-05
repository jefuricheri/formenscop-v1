const { find, findById, findByIdAndUpdate } = require('../models/evenement');
const Evenement = require('../models/evenement');

// Invocation de tout élément de la collection
const evenement_all = (req, res) => {
    Evenement.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const evenement_single = (req, res) => {
    Evenement.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const evenement_delete = (req, res) => {
    Evenement.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const evenement_update = (req, res) => {
    Evenement.findByIdAndUpdate(
      req.params.id,
      { title: `${req.body.title}`,
      start: `${req.body.start}`,
      end: `${req.body.end}`,
      categorie: `${req.body.categorie}`,
      allDay: `${req.body.allDay}`}
    )
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
    }

// Création d'un élément dans la collection
const evenement_create = (req, res) => {
    Evenement.create(
    { title: `${req.body.title}`,
      start: `${req.body.start}`,
      end: `${req.body.end}`,
      categorie: `${req.body.categorie}`,
      allDay: `${req.body.allDay}`}
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
    evenement_all,
    evenement_single,
    evenement_delete,
    evenement_update,
    evenement_create
}