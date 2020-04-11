var body = document.querySelector("body");
var voltar = document.querySelector(".btn-voltar");
var passar = document.querySelector(".btn-proximo");
var resultado = document.querySelector(".btn-resultado");
var comecar = document.querySelector(".btn-nao-deisgn");
var inicio = document.querySelector(".inicio");;
var asPerguntas = document.querySelectorAll("section");
var numPergunta = document.querySelector(".numeros-perguntas");
var numero = 0;
var quest = JSON.parse('[ [] ]')


/*
//quando iniciar direto com perguntas
    window.onload = function () {
    mostrarPerguntas();
}; */

comecar.onclick = function () {
    inicio.classList.add("anime-desaparecer");
    setTimeout(function () {
        inicio.style.display = "none";
        document.querySelector(".controller").style.display = "flex";
    }, 900);
    mostrarPerguntas();
}

//esconde todas as perguntas e mostra somente uma
function mostrarPerguntas() {
    asPerguntas.forEach(function (asPergunta, i) {
        asPergunta.classList.add("anime-desaparecer");
        setTimeout(function () {
            asPergunta.removeAttribute("style");
            asPergunta.removeAttribute("class");
        }, 800);
        if (numero == i) {
            setTimeout(function () {
                asPergunta.style.display = "block";
                asPergunta.classList.add("anime-aparecer");
            }, 800);
            numPergunta.innerHTML = numero + 1 + " de " + asPerguntas.length;
        }
    })
};

//quando clicar no teclados de setas
body.onkeyup = function (e) {
    if (e.code == "ArrowRight") {
        passar.click();
    } else if (e.code == "ArrowLeft") {
        voltar.click();
    }
};

//click no botão passar
passar.addEventListener("click", function () {
    if (quest[numero] && quest[numero].length == 0) {
        alert("É nescessário escolher 1 opção!");
        return false;
    }
    numero++;
    if (numero > asPerguntas.length - 1)
        numero = asPerguntas.length - 1;
    mostrarPerguntas()
    voltar.style.display = "inline-block";
    if (numero == asPerguntas.length - 1) {
        passar.style.display = "none";
        resultado.style.display = "inline-block"
    }
});

//click bo botão voltar
voltar.addEventListener("click", function () {
    numero--;
    if (numero < 0)
        numero = 0;
    mostrarPerguntas();
    if (numero == 0) {
        voltar.style.display = "none";
    } else if (numero < asPerguntas.length - 1) {
        resultado.style.display = "none"
        passar.style.display = "inline-block";
    }
});

resultado.addEventListener("click", function () {

    for (var i = 0; i < numero; i++) {

        if (!quest[i])
            continue;

        console.log("pergunta " + i.toString() + " - " + quest[i]);
        if (quest[i].indexOf("ux_design") != -1)
            console.log("O cara manja das manjarias");
        if (quest[i].indexOf("game_design") != -1)
            console.log("esse se diverte");
    }
});

//Pegar click das respostas
var design_marca = 0;
var web_design = 0;
var design_grafico = 0;
var design_produto = 0;
var ux_design = 0;
var ui_design = 0;
var design_digital = 0;
var design_personagem = 0;
var design_jogos = 0;
var design_editorial = 0;

var array = [
    { key: 'design_marca', value: design_marca },
    { key: 'web_design', value: web_design },
    { key: 'design_grafico', value: design_grafico },
    { key: 'design_produto', value: design_produto },
    { key: 'ux_design', value: ux_design },
    { key: 'ui_design', value: ui_design },
    { key: 'design_digital', value: design_digital },
    { key: 'design_personagem', value: design_personagem },
    { key: 'design_jogos', value: design_jogos },
    { key: 'design_editorial', value: design_editorial }
];

var arrayOrdenado = array.sort((a, b) => b.value - a.value);
resultadoPerfil = arrayOrdenado[0].key;

resultado.onclick = function () {
    var perfil = document.querySelectorAll("article");
    perfil.forEach(function (el) {
        if (el.className === resultadoPerfil) {
            el.style.display = "block";
        }
    });
};

var dataPerfils = document.querySelectorAll("section li");

Array.prototype.forEach.call(dataPerfils, function (dataPerfil) {
    var estePerfil = dataPerfil.getAttribute("data-profissao");

    dataPerfil.addEventListener("click", function (e) {

        for (let item of e.target.parentElement.children) {
            item.classList.remove("selecionado");
        }
        e.target.classList.add("selecionado");

        quest[numero] = [];//limpa o array
        var resposta = [];


        switch (estePerfil) {
            case "1":
                console.log("opção 1");
                resposta = resposta.concat("design_produto");
                resposta = resposta.concat("design_grafico");
                resposta = resposta.concat("design_digital");
                design_produto++;
                break;
            case "2":
                console.log("opção 2");
                resposta = resposta.concat("design_grafico");
                resposta = resposta.concat("design_digital");
                break;
            case "3":
                console.log("opção 3");
                resposta = resposta.concat("design_digital");
                break;
            case "4":
                console.log("opção 4");
                resposta = resposta.concat("ux_design");
                break;
            case "5":
                console.log("opção 5");
                resposta = resposta.concat("game_design");
                break;
            default:
                return false;
        }
        quest[numero] = resposta;
    });
});