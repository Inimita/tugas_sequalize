import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Customer = db.define(
    "Customer",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama_customer:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telfon:{  
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},{
    tableName: "customer"
});



export default Customer