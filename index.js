const express = require("express")                         //llamamos al modulo express
const path =require("path")
const ruta = path.join(__dirname,"frontend")               // "__dirname" sirve para mostrar o usar la ruta de la carpeta
const servidor = express()                                 //le paso la configuracion del servidor a la variable servidor
servidor.listen(4000)                                      //El puerto del servidor
servidor.use(express.static(ruta))
servidor.use(express.json())
servidor.get("/",(req,res)=>{                              // ()=>{} funciones de llave
    res.send()             
})

servidor.get("/kled",(req,res)=>{
    res.sendFile(path.join (ruta, "/campeon.html"))
})

servidor.get("/index",(req,res)=>{
    res.sendFile(path.join(ruta, "/index.html"))
})

servidor.get("/trundle",(req,res)=>{
    res.sendFile(path.join(ruta, "/trundle.html"))
})

servidor.get("/jax",(req,res)=>{
    res.sendFile(path.join(ruta, "/jax.html"))
})

servidor.get("/login",(req,res)=>{
    res.sendFile(path.join(ruta, "/login.html"))
})




servidor.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("ok")
})

servidor.post("/darius",(req,res)=>{
    console.log(req.body)
    res.send("Uf fantasmal ignite, bien de pito corto")
})

servidor.post("/volibear",(req,res)=>{
    console.log(req.body)
    res.send("Eres un parasito")
})

servidor.post("/teemo",(req,res)=>{
    console.log(req.body)
    res.send("De tantos campeones, eliges una rata que caga hongos")
})

servidor.post("/yasuo",(req,res)=>{
    console.log(req.body)
    res.send("En el late se gana, en efecto, tienes retraso")
})