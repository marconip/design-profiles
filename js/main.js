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
        /* voltar.click(); */
    }
};

//click no botão passar
passar.addEventListener("click", function () {
    if (document.getElementsByClassName('anime-aparecer').item(0).getElementsByClassName('selecionado').length === 0) {
        alert("É nescessário escolher 1 opção!");
        return;
    }

    numero++;
    if (numero > asPerguntas.length - 1)
        numero = asPerguntas.length - 1;
    mostrarPerguntas()
    /* voltar.style.display = "inline-block"; */
    if (numero == asPerguntas.length - 1) {
        passar.style.display = "none";
        resultado.style.display = "inline-block"
    }
});
/* 
//click no botão voltar
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
}); */

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



resultado.onclick = function () {
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

    var perfil = document.querySelectorAll("article");
    perfil.forEach(function (el) {
        if (el.className === resultadoPerfil) {
            el.style.display = "block";
        }
    });
}

/* function decrementar(resposta) {
    if (resposta > 0) return resposta -= 1;
    return resposta;
} */

var dataPerfilsList = document.querySelectorAll("section li");
var dataPerfils = Array.from(dataPerfilsList);

dataPerfils.forEach(dataPerfil => {
    var estePerfil = dataPerfil.getAttribute("data-profissao");

    dataPerfil.addEventListener("click", function (e) {

        /* web_design = decrementar(web_design);
        design_grafico = decrementar(design_grafico);
        ui_design = decrementar(ui_design);
        design_digital = decrementar(design_digital);
        design_editorial = decrementar(design_editorial); 
        console.clear();*/

        //Mostra a resposta selecionado
        var perfilJaSelecionado = dataPerfils.filter(p => p.classList.contains("selecionado"));
        if (perfilJaSelecionado.length > 0) {
            perfilJaSelecionado[0].classList.remove("selecionado");
        }
        setTimeout(() => this.classList.add("selecionado"), 150);

        switch (estePerfil) {
            case "1":
                console.log("web_design, ui_design");
                web_design++;
                ui_design++;
                break;
            case "2":
                console.log("design_grafico, ui_design");
                design_grafico++;
                ui_design++;
                break;
            case "3":
                console.log("ui_design");
                ui_design++;
                break;
            case "4":
                console.log("design_digital");
                design_digital++;
                break;
            case "5":
                console.log("design_editorial");
                design_editorial++;
                break;

            case "6":
                console.log("web_design, ui_design");
                web_design++;
                ui_design++;
                break;
            case "7":
                console.log("design_grafico, ui_design");
                design_grafico++;
                ui_design++;
                break;
            case "8":
                console.log("ui_design");
                ui_design++;
                break;
            case "9":
                console.log("design_digital");
                design_digital++;
                break;
            case "10":
                console.log("design_editorial");
                design_editorial++;
                break;

            case "11":
                console.log("web_design, ui_design");
                web_design++;
                ui_design++;
                break;
            case "12":
                console.log("design_grafico, ui_design");
                design_grafico++;
                ui_design++;
                break;
            case "13":
                console.log("ui_design");
                ui_design++;
                break;
            case "14":
                console.log("design_digital");
                design_digital++;
                break;
            case "15":
                console.log("design_editorial");
                design_editorial++;
                break;
            default:
                alert("É nescessário escolher 1 opção!");
        }
    });
});