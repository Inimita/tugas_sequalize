import db from "../utils/connection.js"
import Menu from "./Menu.js";
import Customer from "./Customer.js";
import Reservasi from "./Reservasi.js";
import Transaksi from "./Reservasi.js";
import Cafe from "./Cafe.js";

await db.sync({});    
