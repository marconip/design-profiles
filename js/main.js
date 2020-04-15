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
        case "1"://Salário alto, mesmo infatisfeito com o que faço
            web_design++;
            design_grafico++;
            break;
        case "2"://Horário flexível, para eu ter mais tempo para mim mesmo
            design_personagem++;
            design_jogos++;
            break;
        case "3"://Total liberdade em desenvolver ou criar algo
            design_produto++;
            ui_design += 2;
            break;
        case "4"://Ambiente agradável, onde eu me sinta a avontade
            ux_design++;
            design_marca++;
            break;
        case "5"://Satisfação por trabalhar com que gosto
            design_digital++;
            design_editorial++;
            break;

        //PERGUNTA 2
        case "6"://Ler livros/quadrinhos
            design_editorial += 2;
            design_grafico++;
            design_personagem++;
            ux_design++;
            break;
        case "7"://Desenhar
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            ui_design++;
            break;
        case "8"://Assistir filmes/serie
            ux_design++;
            design_digital++;
            web_design++;
            ui_design++;
            break;
        case "9"://Jogar vídeo games
            design_digital++;
            design_jogos += 2;
            web_design++;
            break;
        case "10"://Dormir
            break;

        //PERGUNTA 3
        case "11"://A mão livre
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            break;
        case "12"://Desenho digital
            design_grafico++;
            design_produto++;
            design_personagem += 2;
            design_digital++;
            ui_design++;
            web_design++;
            break;
        case "13"://Desenho vetorial
            design_marca++;
            design_grafico++;
            design_produto++;
            design_digital++;
            design_jogos++;
            ui_design++;
            break;
        case "14"://Em telas de pintura
            design_grafico++;
            design_personagem++;
            break;
        case "15"://Nenhuma das opções acima
            break;

        //PERGUNTA 4
        case "16"://Photoshop
            design_digital++;
            design_jogos++;
            design_produto++;
            web_design++;
            ui_design++;
            break;
        case "17"://Illustrator
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_personagem++;
            design_digital++;
            ui_design++;
            break;
        case "18"://Adobe XD
            ux_design += 2;
            web_design++;
            ui_design++;
            break;
        case "19"://inDesign
            design_editorial += 2;
            design_grafico++;
            break;
        case "20"://Nenhuma das opções acima
            break;

        //PERGUNTA 5
        case "21"://Livros
            design_editorial++;
            ux_design++;
            break;
        case "22"://Quadrinhos
            design_grafico++;
            design_marca++;
            break;
        case "23"://Jogos de video game
            design_jogos++;
            ui_design++;
            break;
        case "24"://Action figure
            design_personagem++;
            design_produto++;
            break;
        case "25"://Equipamento de vídeo e fotografia
            design_digital++;
            web_design++;
            break;

        //PERGUNTA 6
        case "26"://Digital
            design_digital += 2;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "27"://Impresso
            design_marca++;
            design_editorial++;
            design_grafico += 2;
            design_personagem++;
            break;
        case "28"://Internet
            web_design += 2;
            break;
        case "29"://Produto físico
            design_produto += 2;
            break;
        case "30"://Conceitual
            design_marca += 2;
            ui_design++;
            break;

        //PERGUNTA 7
        case "31"://Programação
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "32"://Engenharia em geral
            design_produto++;
            design_personagem++;
            break;
        case "33"://Administração
            design_editorial++;
            ux_design++;
            ui_design++;
            break;
        case "34"://Saúde
            ux_design++;
            break;
        case "35"://Nenhuma das opções acima
            break;

        //PERGUNTA 8
        case "36"://Matemática
            design_jogos++;
            web_design++;
            break;
        case "37"://Ciências
            design_produto++;
            break;
        case "38"://Português
            design_marca++;
            design_editorial++;
            design_grafico++;
            ux_design++;
            break;
        case "39"://História
            design_marca++;
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "40"://Artes
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_jogos++;
            ui_design++;
            break;

        //PERGUNTA 9
        case "41"://Esforçado
            design_editorial++;
            design_personagem++;
            break;
        case "42"://Lógico
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "43"://Curioso
            design_produto++;
            ux_design++;
            design_jogos++;
            break;
        case "44"://Paciente
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "45"://Adaptativo
            design_produto++;
            design_personagem++;
            ux_design++;
            ui_design++;
            break;

        //PERGUNTA 10
        case "46"://Comunicação
            design_marca++;
            design_editorial++;
            design_grafico++;
            ux_design++;
            break;
        case "47"://Ensino
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "48"://Liderança
            ux_design++;
            design_digital++;
            break;
        case "49"://Estrategia
            ux_design++;
            design_digital++;
            design_jogos++;
            break;
        case "50"://Administração
            ux_design++;
            ui_design++;
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
