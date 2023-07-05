import mongoose from "mongoose"

mongoose.connect("mongodb+srv://rafaballerini:PosTech1404@lanchonete.oen1zg8.mongodb.net/?");

let db = mongoose.connection;

export default db;