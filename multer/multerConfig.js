const multer = require("multer");

const storage=multer.diskStorage({

    destination:(req,file,callback)=>{
        callback(null,"./images")
    },
    filename:(req,file,callback)=>{
        const ext=file.originalname.split(".").pop(); 

        const newFileName="image-"+Date.now()+"."+ext;

        callback(null,newFileName)
    }
});

const update=multer({storage})

module.exports=update;