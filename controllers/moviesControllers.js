
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

module.exports={allMovies}