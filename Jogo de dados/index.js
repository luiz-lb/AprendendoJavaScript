const estadoSessao = sessionStorage.getItem('estado');//verifica o estado da pagina

const maximo = 5;//gerando dois números aleatorio até 6
const numeroInteiro = Math.floor(Math.random()*maximo) + 1;
const numeroInteiro2 = Math.floor(Math.random()*maximo) + 1;

document.querySelectorAll(".dice")[0].lastElementChild.setAttribute("src", "./images/dice"+numeroInteiro+".png");
document.querySelectorAll(".dice")[1].lastElementChild.setAttribute("src", "./images/dice"+numeroInteiro2+".png");

if(estadoSessao === '1'){
    // Altera o estado para '1' para o próximo recarregamento
    sessionStorage.setItem('estado', '1');
    if(numeroInteiro>numeroInteiro2){
        document.querySelector(".h2-informacao").innerHTML = "Player 1 is winner!"
    }
    else if(numeroInteiro===numeroInteiro2){
        document.querySelector(".h2-informacao").innerHTML = "Game tied"
    }
    else{
        document.querySelector(".h2-informacao").innerHTML = "Player 2 is winner!"
    }

}
else {
    // Altera o estado para '1' para o próximo recarregamento
    sessionStorage.setItem('estado', '1');
}