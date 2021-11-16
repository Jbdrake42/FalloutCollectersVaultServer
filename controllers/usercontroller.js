
const validateSession = require("../middleware/validate-session")
const router = require('express').Router();
const { User } = require("../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
router.post('/register', (req, res) => {
    console.log('register function called')
    User.create({
        email: req.body.user.email,
        username: req.body.user.username,
        password: bcrypt.hashSync(req.body.user.password, 15),
        role: req.body.user.role
    })
    .then((user) => {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
        res.json({
            user: user,
            message: 'User Successfully created',
            sessionToken: token
        })})
    .catch( err => {
        res.status(500).json({ error: err})
    })
})

router.post('/login', (req, res) => {
    console.log('%%%%login function called%%%%')
   
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then((user) => {
         
        if(user) {
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if (matches) {
                    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                    res.status(200).json({
                        user:user,
                        message: "User Logged in",
                        sessionToken: token
                })
            } else {
                res.status(502).send({ error: "login Failed"})
            }
            })
        } else {
            res.status(500).json({ error: 'User does not exist'})
        }
       
    })
    .catch( err => {
        res.status(500).json({ error: err})
})})

router.get("/", validateSession, (req, res) => {
    const query = { where: { id: req.user.id}}
    User.findAll(query)
    .then(mods => res.status(200).json(mods))
    .catch(err => res.status(500).json({ error: err }))
})
module.exports = router;