
const mysql2 = require("mysql2");

const infoDB = {
    host: "localhost",
    user: "root",
    database: "movie-app"
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