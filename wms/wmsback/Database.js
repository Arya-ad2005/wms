const mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/Wms")

var db = mongoose.connection
db.on('error',(error)=>{
    console.log(error);
    
})
db.once('open',()=>{
    console.log("Database connected");
    
})
module.exports = db