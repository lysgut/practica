const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.ude(bodyParser.json())

app.get("/", (req, res)=>{res.send("holis")})
app.get("/getTour", (req, res)=>{res.send("hola soy un tur")})

app.post("/addNewPost",(req, res)=>{
let nombre= req.body.nombre
let localidad= req.body.localidad
let extension= req.body.extension
let id= nombre+"_"+localidad+"_"+extension
res.send("se creo el tour" + id)
})

app.listen(3000, ()=>{
console.log("se abre el servidor en el puerto 300")
})