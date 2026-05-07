const router = require("./config.js")

router.get("/",(req,res)=>{                              // ()=>{} funciones de llave
    res.send()             
})

router.get("/kled",(req,res)=>{
    res.sendFile(path.join (ruta, "/campeon.html"))
})

router.get("/index",(req,res)=>{
    res.sendFile(path.join(ruta, "/index.html"))
})

router.get("/trundle",(req,res)=>{
    res.sendFile(path.join(ruta, "/trundle.html"))
})

router.get("/jax",(req,res)=>{
    res.sendFile(path.join(ruta, "/jax.html"))
})

router.get("/login",(req,res)=>{
    res.sendFile(path.join(ruta, "/login.html"))
})




router.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("ok")
})

router.post("/darius",(req,res)=>{
    console.log(req.body)
    res.send("Uf fantasmal ignite, bien de pito corto")
})

router.post("/volibear",(req,res)=>{
    console.log(req.body)
    res.send("Eres un parasito")
})

router.post("/teemo",(req,res)=>{
    console.log(req.body)
    res.send("De tantos campeones, eliges una rata que caga hongos")
})

router.post("/yasuo",(req,res)=>{
    console.log(req.body)
    res.send("En el late se gana, en efecto, tienes retraso")
})