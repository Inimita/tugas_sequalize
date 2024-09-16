import Customer from "../models/Customer.js";
import Menu from "../models/Menu.js";
import Reservasi from "../models/Reservasi.js";
import Transaksi from "../models/Transaksi.js";


export const getCustomer = async (req,res) =>{ 
    try{
        const customer = await Customer.findAll({
            include : {
                model : Transaksi,
                as :"Transaksis",
                include:{
                    model : Reservasi,
                    as : "Reservasi"
                },
                include:{
                    model : Menu,
                    as : "Menu"
                },
            }
     } );
        res.status(200).json(customer);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getCustomerById = async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findByPk(id);
      if (!customer) return res.status(404).json({ message: "Customer not found" });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createCustomer = async (req,res) =>{
        const {nama_customer, email, no_telfon} = req.body;
        const customer = await Customer.create({
            nama_customer, email, no_telfon
        });
        res.status(200).json(customer);
   
}


export const updateCustomer= async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_customer, email, no_telfon } = req.body;
      const [updated] = await Customer.update(
        { nama_customer, email, no_telfon },
        { where: { id } }
      );
      if (updated) {
        const updateCustomer = await Customer.findByPk(id);
        res.status(200).json(updateCustomer);
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteCustomer = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Customer.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  