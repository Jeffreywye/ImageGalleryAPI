const express = require("express");
const app = express();
const { cloudinary } = require('./utils/cloudinary');
var cors = require("cors")

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb", extended:true}));

app.get("/api/images", cors(),(req, res) => {

});

app.post("/api/upload", cors(), (req,res)=>{
    try{
        const fileStr = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'Image-Gallery-API'
        });
        console.log(uploadedResponse);
        res.json({msg: "File Uploaded"});
    }
    catch (error){
        console.log(error);
        res.status(500).json({error : "upload failed"})
    }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
});