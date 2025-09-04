var gamePattern = [];//variavel para seguir a sequencia
var randomChosenColour;//para registrar
var gameLevel = -1, seqn;

function nextSequence(){
    // cria um numero aleatorio, seleciona a cor e o audio correspondente
    switch (Math.floor(Math.random()*4)){ 
        case 0: 
            randomChosenColour = "yellow";
            break;
        case 1: 
            randomChosenColour = "blue";
            break;
        case 2: 
            randomChosenColour = "red";
            break;
        case 3: 
            randomChosenColour = "green";
            break;
        default:
            console.log("Numero aleatorio fora das casas previstas.");
    }

    gamePattern.push(randomChosenColour);//adicionando cor nova ao padrão

    botaoSelecionado(randomChosenColour)
}

function botaoSelecionado(color){
    switch(color){
        case "yellow": 
            var audioSelect = new Audio("./sounds/yellow.mp3");
            break;
        case "blue": 
            var audioSelect = new Audio("./sounds/blue.mp3");
            break;
        case "red": 
            var audioSelect = new Audio("./sounds/red.mp3");
            break;
        case "green": 
            var audioSelect = new Audio("./sounds/green.mp3");
            break;
        default:
            console.log("Nenhuma cor selecionada no switch");
    }

    audioSelect.play()//dando play no efeito sonoro
    $("#" + color).addClass("pressed");//tirando e colocando sombra
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    },100)
}

$(document).keydown(function(){
    if(gameLevel===-1){
        gameLevel=1;
        nextSequence();
        seqn=0;
    }
    $("h1").text("Level " + gameLevel);
})

$(".btn").click(function(){
    botaoSelecionado(this.id);

    if(this.id==gamePattern[seqn]){
        if(seqn!==gameLevel){
            seqn++;
            if(seqn==gameLevel){
                console.log(seqn);
                seqn=0;
                console.log(seqn);
                setTimeout(function(){
                    nextSequence();
                },500)
                gameLevel++;
                $("h1").text("Level " + gameLevel)
            }
        }
        
    }
    else{
        $("h1").text("Press A Key to Start");
        audioSelect = new Audio("./sounds/wrong.mp3");
        audioSelect.play();
        $("body").addClass("errou");
        setTimeout(function(){
            $("body").removeClass("errou");
        },100)
        gameLevel=-1;
        gamePattern = [];
        seqn = 0;
    }
    
})


    