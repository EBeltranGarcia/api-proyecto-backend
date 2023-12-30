
const dbConnection = require("../config/dbConnection")

/*-----------------------------------------------------------------------------------------------*/

//Traer peliculas de la DB
const allMovies = (req,res) => {
    
    dbConnection.query("SELECT * FROM movie_info",(error,data)=>{
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(200).send(data)
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

//Agregar peliculas al sitio web
const insertMovie= (req,res) => {

    let {name,genre,duration,rating} = req.body
    let image = "http://localhost:3000/image/"+ req.file.filename

    dbConnection.query("INSERT INTO movie_info(name, genre, duration, rating, image) VALUES (?,?,?,?,?)",[name,genre,duration,rating,image],(error,data)=> {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(201).send("Loaded movie")
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

//Eliminar peliculas
const deleteMovie= (req,res) => {

    let {movieId} = req.body
    
    dbConnection.query("DELETE FROM movie_info WHERE id=?",[movieId],(error,data)=> {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(202).send("Deleted movie")
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

//Editar peliculas
const updateMovie = (req,res) => {

    let {fieldToEdit,infoToEdit,id} = req.body

    dbConnection.query(`UPDATE movie_info SET ${fieldToEdit}=? WHERE id=?`,[infoToEdit,id],(error,data)=> {
        if (error) {
            res.status(500).send(error)
        } else {
            res.status(202).send("Updated Movie")
        }
    })
}

module.exports={allMovies,insertMovie,deleteMovie,updateMovie}