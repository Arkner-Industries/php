const express = require("express") //llamamos al modulo express
const servidor = express() //le paso la configuracion del servidor a la variable servidor
servidor.listen(4000) //El puerto del servidor
servidor.get("/",(req,res)=>{
    res.send("alv funciona mi primera pagina, maricones que usan barrera con un adc, y escoria que usan adcs en top")
})