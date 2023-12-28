
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
    let image = "http://localhost:3000/image/"+ req.file.filename

    dbConnection.query("INSERT INTO movie_info(name, genre, duration, rating, image) VALUES (?,?,?,?,?)",[name,genre,duration,rating,image],(error,data)=> {
        if (error) {
            res.send(error)
        } else {
            res.send("Loaded movie")
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
            res.send("Deleted movie")
        }
    })
}

/*-----------------------------------------------------------------------------------------------*/

const updateMovie = (req,res) => {

    let {fieldToEdit,infoToEdit,id} = req.body
    console.log(req.body);

    dbConnection.query(`UPDATE movie_info SET ${fieldToEdit}=? WHERE id=?`,[infoToEdit,id],(error,data)=> {
        if (error) {
            res.send(error)
        } else {
            res.send("Updated Movie")
        }
    })
}

module.exports={allMovies,insertMovie,deleteMovie,updateMovie}