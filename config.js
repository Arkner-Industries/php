const express = require("express")                         //llamamos al modulo express
const path =require("path")
const ruta = path.join(__dirname,"frontend")               // "__dirname" sirve para mostrar o usar la ruta de la carpeta
const servidor = express()                                 //le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)                                      //El puerto del servidor

const router = express.Router()

servidor.use(router)
servidor.use(express.static(ruta))
servidor.use(express.json())

module.exports={
    router,
}
