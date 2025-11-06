import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));//achando o diretorio que está o servidor

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

var userIsAuthorised = false;

function passwordCheck(req,res,next){
    var senha = req.body["password"];
    if(senha==="ILoveProgramming"){
        userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck);

app.post("/check", (req,res)=>{
    
    if(userIsAuthorised==true){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.redirect("/")
    }
})



//The password is ILoveProgramming