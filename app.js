
const express = require("express");
const cors = require("cors")
const app = express();
const puerto = 3000;

/*-----------------------------------------------------------------------------------------------*/

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/image",express.static("./images"));

/*-----------------------------------------------------------------------------------------------*/

require("./config/dbConnection");
const moviesRouter = require("./routers/moviesRouters")

/*-----------------------------------------------------------------------------------------------*/

app.use("/movies", moviesRouter)

/*-----------------------------------------------------------------------------------------------*/

app.listen(puerto,()=>{
    console.log("probando el server en el puerto " + puerto);
});