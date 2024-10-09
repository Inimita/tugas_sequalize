import express from "express";
import { createMenu, deleteMenu, getMenu, getMenuById, updateMenu } from "../Controller/menuController.js";
import { createCustomer, deleteCustomer, getCustomer, getCustomerById, updateCustomer } from "../Controller/customerController.js";
import { createReservasi, deleteReservasi, getReservasi, getReservasiById, updateReservasi } from "../Controller/reservasiController.js";
import { createCafe, deleteCafe, getCafe, getCafeById, updateCafe } from "../Controller/cafeController.js";
import { createTransaksi, getTransaksi, getTransaksiById, updateTransaksi, deleteTransaksi } from "../Controller/transaksiController.js";

const router = express.Router();


//menu controller
router.get("/menu", getMenu);
router.get("/menu/:id", getMenuById)
router.post("/menu/post", createMenu )
router.put("/menu/update/:id", updateMenu )
router.delete("/menu/delete/:id", deleteMenu )


//Customer controller
router.get("/customer", getCustomer)
router.get("/customer/:id", getCustomerById)
router.post("/customer/post", createCustomer )
router.put("/customer/update/:id", updateCustomer )
router.delete("/customer/delete/:id", deleteCustomer )


//Reservasi controller
router.get("/reservasi", getReservasi)
router.get("/reservasi/:id", getReservasiById)
router.post("/reservasi/post", createReservasi )
router.put("/reservasi/update/:id", updateReservasi )
router.delete("/reservasi/delete/:id", deleteReservasi )


//Cafe controller
router.get("/cafe", getCafe)
router.get("/cafe/:id", getCafeById)
router.post("/cafe/post", createCafe )
router.put("/cafe/update/:id", updateCafe )
router.delete("/cafe/delete/:id", deleteCafe )

//Cafe controller
router.get("/transaksi", getTransaksi)
router.get("/transaksi/:id", getTransaksiById)
router.post("/transaksi/post", createTransaksi )
router.put("/transaksi/update/:id", updateTransaksi )
router.delete("/transaksi/delete/:id", deleteTransaksi )

export default route