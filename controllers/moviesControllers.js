
const dbConnection = require("../config/dbConnection")

/*-----------------------------------------------------------------------------------------------*/

const allMovies = (req,res) => {
    dbConnection.query("SELECT * FROM movie_info",(error,data)=>{
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

const insertMovie= (req,res) => {
    let {name,genre,duration,rating} = req.body
    dbConnection.query("INSERT INTO movie_info(name, genre, duration, rating) VALUES (?,?,?,?)",[name,genre,duration,rating],(error,data)=> {
        if (error) {
            res.send(error)
        } else {
            res.send("Pelicula cargada")
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

const deleteMovie= (req,res) => {
    let {movieId} = req.body
    console.log(movieId);
    
    dbConnection.query("DELETE FROM movie_info WHERE id=?",[movieId],(error,data)=> {
        if (error) {
            res.send(error)
        } else {
            res.send("Pelicula eliminada")
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

module.exports={allMovies,insertMovie,deleteMovie}