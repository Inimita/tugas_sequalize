import Menu from "../models/Menu.js";
// import clean from "./helpers/clean.js";

const createSeeder = async () => {
    // await clean();
    const menu = await Menu.create({
        nama: "Es Kopi Susu",
        harga: "20.000",
        jenis_menu: "Es Kopi"
    });
    
    const findBookByUser = await Book.findAll({
        where : {
            UserId: user.dataValues.id,
        },
        attributes : ["name", "page", "description", "UserId"],
        include : [{
            model : User,
            as : 'User',
            required : true
        }]
    })
    return {findBookByUser};
} 

const {user, findBookByUser: users} = await 
createSeeder();

console.log ("==== INI ADALAH DATA USER ====");
console.log(user);
console.log("==== INI ADALAH DATA BUKU ====");
users.map((item) => {
    console.log(JSON.stringify(item,4))
})