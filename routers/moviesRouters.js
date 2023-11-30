
const express = require("express");
const router = express.Router();

/*-----------------------------------------------------------------------------------------------*/

const {allMovies,insertMovie} = require("../controllers/moviesControllers")

/*-----------------------------------------------------------------------------------------------*/

router.get ("/", allMovies)

router.post ("/insertMovie",insertMovie)

/*-----------------------------------------------------------------------------------------------*/

module.exports=router;