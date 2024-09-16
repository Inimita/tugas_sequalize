import Cafe from "../models/Cafe.js";
import Transaksi from "../models/Transaksi.js";


export const getCafe = async (req,res) =>{ 
    try{
        const cafe = await Cafe.findAll({
          include : {
            model : Transaksi,
            as : "Transaksis"
          }
        });
        res.status(200).json(cafe);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getCafeById = async (req, res) => {
    try {
      const { id } = req.params;
      const cafe = await Cafe.findByPk(id);
      if (!cafe) return res.status(404).json({ message: "Cafe not found" });
      res.status(200).json(cafe);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createCafe = async (req,res) =>{
        const {nama, alamat, tables} = req.body;
        const cafe = await Cafe.create({
            nama, alamat, tables
        });
        res.status(200).json(cafe);
   
}


export const updateCafe = async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, alamat, tables } = req.body;
      const [updated] = await Cafe.update(
        { nama, alamat, tables },
        { where: { id } }
      );
      if (updated) {
        const updateCafe = await Cafe.findByPk(id);
        res.status(200).json(updateCafe);
      } else {
        res.status(404).json({ message: "Cafe not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteCafe = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Cafe.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Cafe not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  