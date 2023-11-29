
const express = require("express");
const app = express();
const puerto = 3000;

app.listen(puerto,()=>{
    console.log("probando el server en el puerto " + puerto);
});