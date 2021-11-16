const router = require('express').Router();
const { Model } = require("../models");

const validateSession = require("../middleware/validate-session")

router.post('/', validateSession, (req, res) => {
    const modelEntry = {
        name: req.body.model.name,
        painter: req.body.model.painter,
        notes: req.body.model.notes,
        pic: req.body.model.pic,
        ownerId: req.user.id
    }
    Model.create(modelEntry)
    .then(mods => res.status(200).json(mods))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', validateSession, (req,res) =>{
    const updateModel = {
        name: req.body.model.name,
        notes: req.body.model.notes,
        pic: req.body.model.pic,
    }
   
    const query = { where: { id: req.params.id, ownerId: req.user.id }}
   
    Model.update(updateModel, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

router.get("/", validateSession, (req, res) => {
    const query = { where: { ownerId: req.user.id}}
    Model.findAll(query)
    .then(mods => res.status(200).json(mods))
    .catch(err => res.status(500).json({ error: err }))
})

router.get("/all", (req, res) => {
    Model.findAll()
      .then((model) => res.status(200).json(model))
      .catch((err) => res.status(500).json({ error: err }));
  });

router.get('/:id', validateSession, (req,res) =>{
    const query = { where: {id: req.params.id, ownerId: req.user.id }};
    Model.findAll(query)
.then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
})

router.delete('/:id', validateSession, (req,res) =>{
    const query = { where: {id: req.params.id, ownerId: req.user.id }};
    Model.destroy(query)
        .then(() => res.status(200).json({ message: ' has been destroyed!!'}))
        .catch((err) => res.status(500).json({ error: err}))
})
module.exports = router;