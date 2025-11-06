import express from "express";
import ejs from "ejs";

const port = 3000;
const app = express();
const hoje = new Date(); // Cria um objeto Date com a data e hora atuais
const diaDaSemana = hoje.getDay(); //Pega o dia da semana
let diaDaSemana1 = "";
let localIr = "";

app.listen(port,()=>{
    console.log(`Sua porta de entrada é ${port}`);
});

app.get("/", (req,res)=>{
    if(diaDaSemana>0 && diaDaSemana<6){
        diaDaSemana1 = "work hard"
        localIr = "work hard!"
    }
    else{
        diaDaSemana1 = "the weekend"
        localIr = "have fun!"
    }
    res.render("index.ejs",
        {diaSemana:diaDaSemana1, vaiPara:localIr}
    );
});
