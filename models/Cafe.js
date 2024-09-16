import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Transaksi from "./Transaksi.js";

const Cafe = db.define(
    "Cafe",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tables:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    
},{
    tableName: "cafe"
});


// Transaksi.hasMany(Cafe,{
//     onDelete : "CASCADE",
//     onUpdate : "CASCADE"
// })

// Cafe.belongsTo(Transaksi,{
//     foreignKey : "TransaksiId",
//     onDelete : "CASCADE",
//     onUpdate : "CASCADE"
// })


export default Cafe