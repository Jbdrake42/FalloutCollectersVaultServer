const router = require('express').Router();
const { Blog } = require("../models");

const validateSession = require("../middleware/validate-session")

router.post('/', validateSession, (req, res) => {
   
    const blog = {
        title: req.body.blog.title,
        subtitle: req.body.blog.subtitle,
        author: req.body.blog.author,
        blogbody: req.body.blog.blog,
        notes: req.body.blog.notes,
        ownerId: req.user.id
    }
    Blog.create(blog)
    .then(blog => res.status(200).json(blog))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', validateSession, (req,res) =>{
    const updateBlog = {
        title: req.body.blog.title,
        subtitle: req.body.blog.subtitle,
        blogbody: req.body.blog.blog,
        notes: req.body.blog.notes,
    }
   
    const query = { where: { id: req.params.id, ownerId: req.user.id }}
   
    Blog.update(updateBlog, query)
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
    Blog.findAll()
      .then((model) => res.status(200).json(model))
      .catch((err) => res.status(500).json({ error: err }));
  });

router.get('/:id', validateSession, (req,res) =>{
    const query = { where: {id: req.params.id, ownerId: req.user.id }};
    Blog.findAll(query)
.then(blog => res.status(200).json(blog))
        .catch(err => res.status(500).json({ error: err }))
})

router.delete('/:id', validateSession, (req,res) =>{
    const query = { where: {id: req.params.id, ownerId: req.user.id }};
    Blog.destroy(query)
        .then(() => res.status(200).json({ message: ' has been destroyed!!'}))
        .catch((err) => res.status(500).json({ error: err}))
})
module.exports = router;