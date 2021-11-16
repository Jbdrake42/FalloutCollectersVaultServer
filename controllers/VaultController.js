const router = require('express').Router();
const { Vault } = require("../models");
const validateSession = require("../middleware/validate-session")

router.post('/', validateSession, (req, res) => {
    const vaultEntry = {
        ownerId: req.user.id,
        NCR_PromoRanger: false,
        NCR_TopBrass: false,
        NCR_CoreBox: false,
        NCR_RangerPatrol: false,
        BOS_Liberty_Prime: false,
        BOS_CoreBox: false,
        BOS_FrontLine: false,
        BOS_Cade_Danse: false,
        BOS_ElderMaxon: false,
        BOS_PowerArmor1: false,
        SM_Behemoth: false,
        SM_Skirmishers: false,
        SM_Overlord: false,
        SM_Suicider: false,
        SM_CoreBox: false,
        SM_Hammer: false,
        SM_Avaitor: false,
        SVR_CoreBox: false,
        SVR_NukaGirl: false,
        SVR_SancturyHills: false,
        SVR_Vault: false,
        SVR_Boston: false,
        SVR_MinuteMen: false,
        SVR_Lorenzo: false,
        SVR_UnusualAllies: false,
        SVR_X01: false,
    }
    Vault.create(vaultEntry)
    .then(mods => res.status(200).json(mods))
    .catch(err => res.status(500).json({ error: err}))
})


router.put('/:id', validateSession, (req,res) =>{
    const updateVault = {
        NCR_PromoRanger: req.body.vault.NCR_PromoRanger,
        NCR_TopBrass: req.body.vault.NCR_TopBrass,
        NCR_CoreBox: req.body.vault.NCR_CoreBox,
        NCR_RangerPatrol: req.body.vault.NCR_RangerPatrol,
        BOS_Liberty_Prime: req.body.vault.BOS_Liberty_Prime,
        BOS_CoreBox: req.body.vault.BOS_CoreBox,
        BOS_FrontLine: req.body.vault.BOS_FrontLine,
        BOS_Cade_Danse: req.body.vault.BOS_Cade_Danse,
        BOS_ElderMaxon: req.body.vault.BOS_ElderMaxon,
        BOS_PowerArmor1: req.body.vault.BOS_PowerArmor1,
        SM_Behemoth: req.body.vault.SM_Behemoth,
        SM_Skirmishers: req.body.vault.SM_Skirmishers,
        SM_Overlord: req.body.vault.SM_Overlord,
        SM_Suicider: req.body.vault.SM_Suicider,
        SM_CoreBox: req.body.vault.SM_CoreBox,
        SM_Hammer: req.body.vault.SM_Hammer,
        SM_Avaitor: req.body.vault.SM_Avaitor,
        SVR_CoreBox: req.body.vault.SVR_CoreBox,
        SVR_NukaGirl: req.body.vault.SVR_NukaGirl,
        SVR_SancturyHills: req.body.vault.SVR_SancturyHills,
        SVR_Vault: req.body.vault.SVR_Vault,
        SVR_Boston: req.body.vault.SVR_Boston,
        SVR_MinuteMen: req.body.vault.SVR_MinuteMen,
        SVR_Lorenzo: req.body.vault.SVR_Lorenzo,
        SVR_UnusualAllies: req.body.vault.SVR_UnusualAllies,
        SVR_X01: req.body.vault.SVR_X01,
    }
   
    const query = {where: {id: req.params.id}};
   
    Vault.update(updateVault, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

router.put('/NCR/:id', validateSession, (req,res) =>{
    const updateVault = {
        NCR_PromoRanger: req.body.vault.NCR_PromoRanger,
        NCR_TopBrass: req.body.vault.NCR_TopBrass,
        NCR_CoreBox: req.body.vault.NCR_CoreBox,
        NCR_RangerPatrol: req.body.vault.NCR_RangerPatrol,
        ownerId: req.user.id
    }
   
    const query = {where: {id: req.params.id}};
   
    Vault.update(updateVault, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

   router.put('/BOS/:id', validateSession, (req,res) =>{
    const updateVault = {
        BOS_Liberty_Prime: req.body.vault.BOS_Liberty_Prime,
        BOS_CoreBox: req.body.vault.BOS_CoreBox,
        BOS_FrontLine: req.body.vault.BOS_FrontLine,
        BOS_Cade_Danse: req.body.vault.BOS_Cade_Danse,
        BOS_ElderMaxon: req.body.vault.BOS_ElderMaxon,
        BOS_PowerArmor1: req.body.vault.BOS_PowerArmor1,
        
    }
   
    const query = {where: {id: req.params.id}};
   
    Vault.update(updateVault, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

   router.put('/SVR/:id', validateSession, (req,res) =>{
    const updateVault = {
        SVR_CoreBox: req.body.vault.SVR_CoreBox,
        SVR_NukaGirl: req.body.vault.SVR_NukaGirl,
        SVR_SancturyHills: req.body.vault.SVR_SancturyHills,
        SVR_Vault: req.body.vault.SVR_Vault,
        SVR_Boston: req.body.vault.SVR_Boston,
        SVR_MinuteMen: req.body.vault.SVR_MinuteMen,
        SVR_Lorenzo: req.body.vault.SVR_Lorenzo,
        SVR_UnusualAllies: req.body.vault.SVR_UnusualAllies,
        SVR_X01: req.body.vault.SVR_X01,
    }
   
    const query = {where: {id: req.params.id}};
   
    Vault.update(updateVault, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

  

   router.put('/SM/:id', validateSession, (req,res) =>{
    const updateVault = {
        SM_Behemoth: req.body.vault.SM_Behemoth,
        SM_Skirmishers: req.body.vault.SM_Skirmishers,
        SM_Overlord: req.body.vault.SM_Overlord,
        SM_Suicider: req.body.vault.SM_Suicider,
        SM_CoreBox: req.body.vault.SM_CoreBox,
        SM_Hammer: req.body.vault.SM_Hammer,
        SM_Avaitor: req.body.vault.SM_Avaitor
    }
   
    const query = {where: {id: req.params.id}};
   
    Vault.update(updateVault, query)
    .then(() => res.status(200).json({message: "Log Updated"}))
    .catch((err) => res.status(500).json({error: err}))
   })

router.get("/", validateSession, (req, res) => {
    const query = { where: { ownerId: req.user.id}}
    Vault.findAll(query)
    .then(mods => res.status(200).json(mods))
    .catch(err => res.status(500).json({ error: err }))
})

// router.get('/:id', validateSession, (req,res) =>{
//     const query = { where: {id: req.params.id, ownerId: req.user.id }};
//     Model.findAll(query)
// .then(logs => res.status(200).json(logs))
//         .catch(err => res.status(500).json({ error: err }))
// })

router.delete('/:id', validateSession, (req,res) =>{
    const query = { where: {id: req.params.id, ownerId: req.user.id }};
    Model.destroy(query)
        .then(() => res.status(200).json({ message: ' has been destroyed!!'}))
        .catch((err) => res.status(500).json({ error: err}))
})



module.exports = router;