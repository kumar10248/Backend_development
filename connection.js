const mongoose = require('mongoose');
const url="mongodb://localhost:27017/";
mongoose.connect(url).then(()=>{console.log("Connection Created Successfully")}).catch(error=>console.error(error));
module.exports=mongoose;
