
require("dotenv").config();
const mysql2 = require("mysql2");

const infoDB = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
};

const dbConnection = mysql2.createConnection(infoDB);

dbConnection.connect((error)=>{
    if (error) {
        console.log(error);
    } else {
        console.log("Conexión exitosa");
    }
});

module.exports=dbConnection;