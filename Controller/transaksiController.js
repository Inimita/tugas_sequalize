import Customer from "../models/Customer.js";
import Menu from "../models/Menu.js";
import Reservasi from "../models/Reservasi.js";
import Transaksi from "../models/Transaksi.js";

export const getTransaksi= async (req, res) => {
    try {
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: Menu,
            as: "Menu",
            required: true,
          },
          {
            model: Reservasi,
            as: "Reservasi",
            required: true,
          },
          {
            model: Customer,
            as: "Customer",
            required: true,
          }
        ],
      });
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const getTransaksiById= async (req, res) => {
    try {
      const {id} = req.params
      const transaksi = await Transaksi.findAll({
        include: [
          {
            model: Menu,
            as: "Menu",
            required: true,
          },
          {
            model: Reservasi,
            as: "Reservasi",
            required: true,
          },
          {
            model: Customer,
            as: "Customer",
            required: true,
          }
        ],
      });
      if (!transaksi) return res.status(404).json({ message: "Transaksi not found" });
      res.status(200).json(transaksi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const createTransaksi = async (req, res) => {
    try {
      const { jumlah_total, MenuId, ReservasiId, CustomerId , CafeId} = req.body;
      const transaksi = await Transaksi.create({
      
          jumlah_total, MenuId : MenuId,  ReservasiId : ReservasiId, CustomerId : CustomerId, CafeId : CafeId
      });
      let menu = await Menu.findByPk(MenuId);
      if (!menu) {
        return res.status(400).json({ message: "Menu not found" });
      }
      let reservasi = await Reservasi.findByPk(ReservasiId);
      if (!reservasi) {
        return res.status(400).json({ message: "Reservasi not found" });
      }
      let customer = await Customer.findByPk(CustomerId);
      if (!customer) {
        return res.status(400).json({ message: "Customer not found" });
      }
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
    }


  export const deleteTransaksi = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Transaksi.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Transaksi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const updateTransaksi = async (req, res) => {
    try {
      const { id } = req.params;
      const { jumlah_total, MenuId, ReservasiId, CustomerId , CafeId } = req.body;
  
      const [updated] = await Transaksi.update(
        { jumlah_total, MenuId : MenuId,  ReservasiId : ReservasiId, CustomerId : CustomerId, CafeId : CafeId },
        { where: { id } }
      );
      if (updated) {
        const updateTransaksi = await Transaksi.findByPk(id);
        res.status(200).json(updateTransaksi);
      } else {
        res.status(404).json({ message: "Transaksi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };