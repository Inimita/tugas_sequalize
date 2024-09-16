import Menu from "../models/Menu.js";

export const getMenu = async (req,res) =>{ 
    try{
        const menu = await Menu.findAll();
        res.status(200).json(menu);
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getMenuById = async (req, res) => {
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id);
      if (!menu) return res.status(404).json({ message: "Menu not found" });
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

export const createMenu = async (req,res) =>{
        const {nama_menu, harga, jenis_menu} = req.body;
        const menu = await Menu.create({
            nama_menu, harga, jenis_menu
        });
        res.status(200).json(menu);
   
}


export const updateMenu = async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_menu, harga, jenis_menu } = req.body;
      const [updated] = await Menu.update(
        { nama_menu, harga, jenis_menu },
        { where: { id } }
      );
      if (updated) {
        const updatedMenu = await Menu.findByPk(id);
        res.status(200).json(updatedMenu);
      } else {
        res.status(404).json({ message: "Menu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteMenu = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Menu.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Menu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  