const { find, findById, findByIdAndUpdate } = require('../models/module');
const Module = require('../models/module');

// Invocation de tout élément de la collection
const module_all = (req, res) => {
    Module.find()
    .populate('formation')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const module_single = (req, res) => {
    Module.findById(req.params.id)
    .populate('formation')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const module_delete = (req, res) => {
    Module.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const module_update = (req, res) => {
    Module.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        nom: `${req.body.nom}`,
        duree: `${req.body.duree}`,
        thematique: `${req.body.thematique}`,
        obj_pedago: `${req.body.obj_pedago}`,
        prerequis: `${req.body.prerequis}`,
        contenus: `${req.body.contenus}`,
        supports: `${req.body.supports}`,
        ressources: `${req.body.ressources}`,
        moda_eva: `${req.body.mode_eva}`,
        validation: `${req.body.validation}`,
        modalite: `${req.body.modalite}`,
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
const module_create = (req, res) => {
    Module.create(
      { 
        nom: `${req.body.nom}`,
        duree: `${req.body.duree}`,
        thematique: `${req.body.thematique}`,
        obj_pedago: `${req.body.obj_pedago}`,
        prerequis: `${req.body.prerequis}`,
        contenus: `${req.body.contenus}`,
        supports: `${req.body.supports}`,
        ressources: `${req.body.ressources}`,
        moda_eva: `${req.body.mode_eva}`,
        validation: `${req.body.validation}`,
        modalite: `${req.body.modalite}`
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
    module_all,
    module_single,
    module_delete,
    module_update,
    module_create
}