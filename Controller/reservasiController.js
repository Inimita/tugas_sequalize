import Reservasi from "../models/Reservasi.js";


export const getReservasi = async (req,res) =>{ 
    try{
        const reservasi = await Reservasi.findAll();
        res.status(200).json(reservasi);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getReservasiById = async (req, res) => {
    try {
      const { id } = req.params;
      const reservasi = await Reservasi.findByPk(id);
      if (!reservasi) return res.status(404).json({ message: "Reservasi not found" });
      res.status(200).json(reservasi);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }   
  };
  

export const createReservasi = async (req,res) =>{
        const {tanggal_reservasi, kapasitas} = req.body;
        const reservasi = await Reservasi.create({
            tanggal_reservasi, kapasitas
        });
        res.status(200).json(reservasi);
   
}


export const updateReservasi = async (req, res) => {
    try {
      const { id } = req.params;
      const { tanggal_reservasi, kapasitas } = req.body;
      const [updated] = await Reservasi.update(
        { tanggal_reservasi, kapasitas },
        { where: { id } }
      );
      if (updated) {
        const updatedReservasi = await Reservasi.findByPk(id);
        res.status(200).json(updatedReservasi);
      } else {
        res.status(404).json({ message: "Reservasi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteReservasi = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Reservasi.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Reservasi not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  