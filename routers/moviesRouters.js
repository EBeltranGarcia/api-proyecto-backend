
const express = require("express");
const router = express.Router();

/*-----------------------------------------------------------------------------------------------*/

const update = require("../multer/multerConfig")
const {allMovies,insertMovie,deleteMovie,updateMovie} = require("../controllers/moviesControllers")

/*-----------------------------------------------------------------------------------------------*/

router.get ("/", allMovies)

router.post ("/insertMovie",update.single("image"),insertMovie)

router.delete ("/deleteMovie", deleteMovie) 

router.put ("/updateMovie", updateMovie)

/*-----------------------------------------------------------------------------------------------*/

module.exports=router;