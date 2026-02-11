const express = require("express")
const app=express()
const bodyParser = require('body-parser')
const database = require('./Database')
const Router =require('./Router')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use('/',Router)
app.use('/upload',express.static(`${__dirname}/uploads`))
const PORT = 3888;
app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT} `);
    
}) 