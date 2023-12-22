
const express = require("express");
const router = express.Router();

/*-----------------------------------------------------------------------------------------------*/

const update = require("../multer/multerConfig")
const {allMovies,insertMovie,deleteMovie} = require("../controllers/moviesControllers")

/*-----------------------------------------------------------------------------------------------*/

router.get ("/", allMovies)

router.post ("/insertMovie",update.single("image"),insertMovie)

router.delete ("/deleteMovie", deleteMovie)

/*-----------------------------------------------------------------------------------------------*/

module.exports=router;