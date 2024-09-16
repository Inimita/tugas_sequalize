import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Transaksi = db.define(
    "Transaksi",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    
    jumlah_total:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
//     nama_menu:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     nama_customer:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     tanggal_reservasi:{
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
},{
    tableName: "transaksi"
});



export default Transaksi