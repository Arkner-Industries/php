const express = require("express")   //llamamos al modulo express
const servidor = express()           //le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)                //El puerto del servidor
servidor.get("/",(req,res)=>{
    res.send(__dirname)              // "__dirname" sirve para enviar al servidor la direccion del directorio que esto usando
})