var body = document.querySelector("body");
var passar = document.querySelector(".btn-proximo");
var resultado = document.querySelector(".btn-resultado");
var reiniciar = document.querySelector(".btn-reiniciar");
var comecar = document.querySelector(".btn-nao-deisgn");
var inicio = document.querySelector(".inicio");;
var asPerguntas = document.querySelectorAll("section");
var numPergunta = document.querySelector(".numeros-perguntas");
var numero = 0;
var design_marca = 0;
var design_editorial = 0;
var design_grafico = 0;
var design_produto = 0;
var design_personagem = 0;
var ux_design = 0;
var design_digital = 0;
var design_jogos = 0;
var web_design = 0;
var ui_design = 0;

//somente demostrativo das pontuações das escolhas
console.log(
    "Design_marca " + design_marca + ", " +
    "Design_editorial " + design_editorial + ", " +
    "Design_grafico " + design_grafico + ", " +
    "Design_produto " + design_produto + ", " +
    "Design_personagem " + design_personagem + ", " +
    "Ux_design " + ux_design + ", " +
    "Design_digital " + design_digital + ", " +
    "Design_jogos " + design_jogos + ", " +
    "Web_design " + web_design + ", " +
    "Ui_design " + ui_design
);

//Click de escolha para começar
comecar.onclick = function () {
    inicio.classList.add("anime-desaparecer");
    setTimeout(function () {
        inicio.style.display = "none";
        document.querySelector(".controller").style.display = "flex";
    }, 900);
    mostrarPerguntas();
};


//marca e desmarca a resposta selecionada
var listaRespostas = document.querySelectorAll("section li");
listaRespostas.forEach(function (este) {
    este.addEventListener("click", function (e) {
        passar.removeAttribute("disabled");
        resultado.removeAttribute("disabled");
        var elems = document.querySelector(".selecionado");
        if (elems !== null) {
            elems.removeAttribute("class");
        }
        e.target.className = "selecionado";

    });
});


//adiciona ++ para perfil referente a escolha/resposta
function CalcularRespostas() {
    var elems = document.querySelector(".selecionado");
    console.clear()
    var estePerfil = elems.getAttribute("data-resposta");
    switch (estePerfil) {
        case "1"://Ler livros/quadrinhos
            design_marca++;
            design_editorial += 2;
            design_grafico++;
            ux_design++;
            break;
        case "2"://Desenhar
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "3"://Assistir filmes/serie
            ux_design++;
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "4"://Jogar vídeo games
            design_digital++;
            design_jogos += 2;
            web_design++;
            ui_design++;
            break;
        case "5"://Dormir
            break;

        //PERGUNTA 2
        case "6"://A mão livre
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            break;
        case "7"://Desenho digital
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem += 2;
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "8"://Desenho vetorial
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "9"://Em telas de pintura
            design_produto++;
            design_personagem++;
            break;
        case "10"://Nenhuma das opções acima
            break;

        //PERGUNTA 3
        case "11"://Photoshop
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "12"://Illustrator
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "13"://Adobe XD
            ux_design++;
            web_design++;
            ui_design++;
            break;
        case "14"://inDesign
            design_marca++;
            design_editorial++;
            design_grafico++;
            break;
        case "15"://Nenhuma das opções acima
            break;

        //PERGUNTA 4
        case "16"://
            web_design++;
            break;
        case "17"://
            web_design++;
            design_grafico++;
            break;
        case "18"://
            ui_design++;
            break;
        case "19"://
            design_digital++;
            break;
        case "20"://
            design_editorial++;
            break;

        //PERGUNTA 5
        case "21"://
            web_design++;
            break;
        case "22"://
            web_design++;
            design_grafico++;
            break;
        case "23"://
            ui_design++;
            break;
        case "24"://
            design_digital++;
            break;
        case "25"://
            design_editorial++;
            break;

        //PERGUNTA 6
        case "26"://
            web_design++;
            break;
        case "27"://
            web_design++;
            design_grafico++;
            break;
        case "28"://
            ui_design++;
            break;
        case "29"://
            design_digital++;
            break;
        case "30"://
            design_editorial++;
            break;

        //PERGUNTA 7
        case "31"://
            web_design++;
            break;
        case "32"://
            web_design++;
            design_grafico++;
            break;
        case "33"://
            ui_design++;
            break;
        case "34"://
            design_digital++;
            break;
        case "35"://
            design_editorial++;
            break;

        //PERGUNTA 8
        case "36"://
            web_design++;
            break;
        case "37"://
            web_design++;
            design_grafico++;
            break;
        case "38"://
            ui_design++;
            break;
        case "39"://
            design_digital++;
            break;
        case "40"://
            design_editorial++;
            break;

        //PERGUNTA 9
        case "41"://
            web_design++;
            break;
        case "42"://
            web_design++;
            design_grafico++;
            break;
        case "43"://
            ui_design++;
            break;
        case "44"://
            design_digital++;
            break;
        case "45"://
            design_editorial++;
            break;

        //PERGUNTA 10
        case "46"://
            web_design++;
            break;
        case "47"://
            web_design++;
            design_grafico++;
            break;
        case "48"://
            ui_design++;
            break;
        case "49"://
            design_digital++;
            break;
        case "50"://
            design_editorial++;
            break;
        default:
            alert("É nescessário escolher 1 opção!");
    };
    console.log(
        "Design_marca " + design_marca + ", " +
        "Design_editorial " + design_editorial + ", " +
        "Design_grafico " + design_grafico + ", " +
        "Design_produto " + design_produto + ", " +
        "Design_personagem " + design_personagem + ", " +
        "Ux_design " + ux_design + ", " +
        "Design_digital " + design_digital + ", " +
        "Design_jogos " + design_jogos + ", " +
        "Web_design " + web_design + ", " +
        "Ui_design " + ui_design
    );
};


//click no botão passar
passar.addEventListener("click", function () {
    numero++;
    if (numero > asPerguntas.length - 1)
        numero = asPerguntas.length - 1;
    mostrarPerguntas();
    CalcularRespostas();
    if (numero == asPerguntas.length - 1) {
        passar.style.display = "none";
        resultado.style.display = "inline-block"
    };
});


//próxima tela = esconde todas as perguntas e mostra somente uma
function mostrarPerguntas() {
    asPerguntas.forEach(function (asPergunta, i) {
        asPergunta.classList.add("anime-desaparecer");
        setTimeout(function () {
            asPergunta.removeAttribute("style");
            asPergunta.removeAttribute("class");
        }, 800);
        if (numero == i) {
            passar.setAttribute("disabled", "disabled");
            resultado.setAttribute("disabled", "disabled");
            setTimeout(function () {
                asPergunta.style.display = "block";
                asPergunta.classList.add("anime-aparecer");
            }, 800);
            numPergunta.innerHTML = numero + 1 + " de " + asPerguntas.length;
        }
    })
};


//click final para mostrar o resultado
resultado.onclick = function () {
    CalcularRespostas();
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
            document.querySelector(".anime-aparecer").classList.add("anime-desaparecer");
            setTimeout(function () {
                document.querySelector(".anime-aparecer").style.display = "none";
            }, 800);
            setTimeout(function () {
                el.classList.add("anime-aparecer");
                el.style.display = "block";
            }, 800);
            numPergunta.parentElement.style.display = "none";
            resultado.style.display = "none";
            reiniciar.style.display = "inline-block"
        }
    });
};
