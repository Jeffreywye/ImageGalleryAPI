const express = require("express");
const app = express();
const { cloudinary } = require('./utils/cloudinary');
var cors = require("cors")

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb", extended:true}));

app.get("/api/images", cors(),(req, res) => {

});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
});