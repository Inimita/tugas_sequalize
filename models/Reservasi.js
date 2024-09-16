import { DataTypes} from "sequelize";
import db from "../utils/connection.js";
import Customer from "./Customer.js";
import Transaksi from "./Transaksi.js";
import Menu from "./Menu.js";
import Cafe from "./Cafe.js";


const Reservasi = db.define(
    "Reservasi",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tanggal_reservasi:{
        type: DataTypes.STRING,
        allowNull: false
    },
    kapasitas:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    tableName: "reservasi"
});


Menu.hasMany(Transaksi,{
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

Transaksi.belongsTo(Menu,{
    foreignKey : "MenuId",
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});
Reservasi.hasOne(Transaksi,{
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

Transaksi.belongsTo(Reservasi,{
    foreignKey : "ReservasiId",
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

Customer.hasMany(Transaksi,{
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

Transaksi.belongsTo(Customer,{
    foreignKey : "CustomerId",
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

    
Cafe.hasMany(Transaksi,{
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

Transaksi.belongsTo(Cafe,{
    foreignKey : "CafeId",
    onDelete : "CASCADE",
    onUpdate  : "CASCADE"
});

    

export default Reservasi