import express from "express";
const app = express();
const port = 3001;

app.get("/",(req,res)=>{
    res.send("<h1>Hello night!</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>Sobre mim</h1> <h3><br>My name is Luiz Matheus</h3>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contato</h1> <br> <h3>Ligue para: (11) 97138-8732</h3>")
})

app.listen(port,()=>{
    console.log(`A porta é a ${port}`);
})