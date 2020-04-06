var body = document.querySelector("body");
var voltar = document.querySelector(".btn-voltar");
var passar = document.querySelector(".btn-proximo");
var resultado = document.querySelector(".btn-resultado");
var comecar = document.querySelector(".btn-nao-deisgn");
var inicio = document.querySelector(".inicio");;
var asPerguntas = document.querySelectorAll("section");
var numPergunta = document.querySelector(".numeros-perguntas");
var numero = 0;


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


//Pegar click das respostas
var design_produto = "0";
var ux_design = "0";
var design_grafico = "0";
var game_design = "0";
var design_digital = "0";

function diminuir(...respostas) {
    respostas.forEach(function (respostas) {
        if (resposta > 0) {
            resposta--;
        }
    })
}

var dataPerfils = document.querySelectorAll(".pergunta1 li");

Array.prototype.forEach.call(dataPerfils, function (dataPerfil) {
    var estePerfil = dataPerfil.getAttribute("data-profissao");

    dataPerfil.addEventListener("click", function (e) {

        design_produto = diminuir(design_produto); design_grafico--; design_digital--;

        console.clear();
        if (dataPerfils.getAttribute("class") == true) {
            dataPerfil.removeAttribute("class");
        }
        setTimeout(function () {
            e.classList.add("selecionado");
        }, 150);
        switch (estePerfil) {
            case "1":
                console.log("opção 1");
                design_produto++;
                design_grafico++;
                design_digital++;
                break;
            case "2":
                console.log("opção 2");
                design_grafico++;
                design_digital++;
                break;
            case "3":
                console.log("opção 3");
                design_digital++;
                break;
            case "4":
                console.log("opção 4");
                ux_design++;
                break;
            case "5":
                console.log("opção 5");
                game_design++;
                break;
            default:
                alert("É nescessário escolher 1 opção!");
        }
    });
});