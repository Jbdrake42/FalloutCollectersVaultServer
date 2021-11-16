
const { DataTypes } = require("sequelize");
const db = require("../db");
// Example UserTable Build this out Need more columns add it here
const Vault = db.define("vault", {
    ownerId:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
    NCR_PromoRanger: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    NCR_TopBrass: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    NCR_CoreBox: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    NCR_RangerPatrol: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_Liberty_Prime: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_CoreBox: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_FrontLine: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_Cade_Danse: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_ElderMaxon: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    BOS_PowerArmor1: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
   
    SM_Behemoth: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SM_Skirmishers: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SM_Overlord: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SM_Suicider: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SM_CoreBox: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SM_Hammer: {
        type: DataTypes.BOOLEAN,
        allowNull: true 
    },
    SM_Avaitor: {
        type: DataTypes.BOOLEAN,
        allowNull: true 
    },
    SVR_CoreBox: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },

    SVR_NukaGirl: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_Lorenzo: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_SancturyHills: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_Vault: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_Boston: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_MinuteMen: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_UnusualAllies: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    SVR_X01: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
})

module.exports = Vault;

