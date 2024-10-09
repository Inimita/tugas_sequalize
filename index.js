// import db from "./utils/connection.js";
import express from "express";
import "dotenv/config"
import router from "./Routes/route.js"
import bodyParser from "body-parser";
import cors from "cors"
import "./models/index.js"
import db from "./utils/connection.js";
const app = express();
// await db.sync({force: true});
const port = process.env.PORT;
// app.use(express.json());
app.use(bodyParser.json())
app.use(cors());   
app.use("/", router)
app.listen(port, () => {
    console.log ("server running at http://localhost:" + port)
})