
const express = require("express");
const router = express.Router();

/*-----------------------------------------------------------------------------------------------*/

const {allMovies,insertMovie,deleteMovie} = require("../controllers/moviesControllers")

/*-----------------------------------------------------------------------------------------------*/

router.get ("/", allMovies)

router.post ("/insertMovie",insertMovie)

router.delete ("/deleteMovie", deleteMovie)

/*-----------------------------------------------------------------------------------------------*/

module.exports=router;