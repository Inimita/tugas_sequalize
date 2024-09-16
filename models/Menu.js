import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Menu = db.define(
    "Menu",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama_menu:{
        type: DataTypes.STRING,
        allowNull: false
    },
    harga:{
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_menu:{
        type: DataTypes.STRING,
        allowNull: false 
    }
},{
    tableName: "menu"
});



export default Menu