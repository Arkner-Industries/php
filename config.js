const express = require("express")                         
const path =require("path")
const ruta = path.join(__dirname,"views")               
const servidor = express()                                 
servidor.listen(4000)                                      

servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.set("view engine","hbs")
const router = express.Router()


servidor.use(router)
module.exports={
    router,
    ruta,
    path
}
