require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const habitRouter = require("./controllers/habitRouter")

let port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use('/api/', habitRouter)

app.listen(port,()=>{
	console.log(`Server listening on ${port}`)
})