const { find, findById, findByIdAndUpdate } = require('../models/note');
const Note = require('../models/note');

// Invocation de tout élément de la collection
const note_all = (req, res) => {
    Note.find()
    .populate('activite')
    .populate('stagiaire')
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Invocation d'un élément précis de la collection
const note_single = (req, res) => {
    Note.findById(req.params.id)
    .populate('note')
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err);
    });
}

// Suppression d'un élément précis de la collection
const note_delete = (req, res) => {
    Note.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.log(err);
      });
}

// Mise à jour d'un élément précis de la collection
const note_update = (req, res) => {
    Note.findByIdAndUpdate(
      { _id: req.params.id },
      {       
        note: `${req.body.note}`,
        mention: `${req.body.mention}`,
        activite: {
          $oid: `${req.body.activite}`
        },
        stagiaire: {
            $oid: `${req.body.stagiaire}`
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
const note_create = (req, res) => {
    Note.create(
      { 
        note: `${req.body.note}`,
        mention: `${req.body.mention}`
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
    note_all,
    note_single,
    note_delete,
    note_update,
    note_create
}