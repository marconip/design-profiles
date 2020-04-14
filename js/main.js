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
            design_personagem++;
            ux_design++;
            break;
        case "2"://Desenhar
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_digital++;
            design_jogos++;
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
            break;
        case "5"://Dormir
            break;

        //PERGUNTA 2
        case "6"://A mão livre
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            break;
        case "7"://Desenho digital
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem += 2;
            design_digital++;
            design_jogos++;
            ui_design++;
            web_design++;
            break;
        case "8"://Desenho vetorial
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_digital++;
            design_jogos++;
            ui_design++;
            break;
        case "9"://Em telas de pintura
            design_grafico++;
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
            ui_design++;
            break;
        case "13"://Adobe XD
            ux_design += 2;
            web_design++;
            ui_design++;
            break;
        case "14"://inDesign
            design_editorial += 2;
            design_grafico++;
            break;
        case "15"://Nenhuma das opções acima
            break;

        //PERGUNTA 4
        case "16"://Gerenciar o projeto
            ux_design++;
            break;
        case "17"://Participar de reúniões
            ux_design++;
            design_editorial++;
            break;
        case "18"://Fazer entrevistas
            ux_design += 2;
            break;
        case "19"://Fazer pesquisas
            design_produto++;
            ux_design++;
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "20"://Nenhuma das opções acima
            break;

        //PERGUNTA 5
        case "21"://Digital
            design_digital += 2;
            design_jogos++;
            web_design++;
            ui_design++;
            break;
        case "22"://Impresso
            design_marca++;
            design_editorial++;
            design_grafico += 2;
            break;
        case "23"://Internet
            web_design += 2;
            break;
        case "24"://Produto físico
            design_produto += 2;
            break;
        case "25"://Conceitual
            design_marca += 2;
            ui_design++;
            break;

        //PERGUNTA 6
        case "26"://Programação
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "27"://Engenharia em geral
            design_produto++;
            design_personagem++;
            break;
        case "28"://Administração
            design_editorial++;
            ux_design++;
            ui_design++;
            break;
        case "29"://Saúde
            ux_design++;
            break;
        case "30"://Nenhuma das opções acima
            break;

        //PERGUNTA 7
        case "31"://Matemática
            design_jogos++;
            web_design++;
            break;
        case "32"://Ciências
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "33"://Português
            design_marca++;
            design_editorial++;
            design_grafico++;
            ux_design++;
            break;
        case "34"://História
            design_marca++;
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "35"://Artes
            design_marca++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            design_jogos++;
            ui_design++;
            break;

        //PERGUNTA 8
        case "36"://Esforçado
            design_editorial++;
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "37"://Lógico
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "38"://Curioso
            design_produto++;
            design_personagem++;
            ux_design++;
            design_jogos++;
            break;
        case "39"://Paciente
            design_marca++;
            design_editorial++;
            design_grafico++;
            design_produto++;
            design_personagem++;
            ux_design++;
            break;
        case "40"://Adaptativo
            design_produto++;
            design_personagem++;
            ux_design++;
            break;

        //PERGUNTA 9
        case "41"://Comunicação
            design_marca++;
            design_editorial++;
            design_grafico++;
            ux_design++;
            break;
        case "42"://Ensino
            ux_design++;
            design_digital++;
            design_jogos++;
            web_design++;
            break;
        case "43"://Liderança
            ux_design++;
            design_digital++;
            break;
        case "44"://Estrategia
            ux_design++;
            design_digital++;
            design_jogos++;
            break;
        case "45"://Administração
            ux_design++;
            ui_design++;
            break;

        //PERGUNTA 10
        case "46"://Portugal
            break;
        case "47"://Japão
            design_digital++;
            design_jogos++;
            web_design++;
            ui_design += 2;
            break;
        case "48"://China
            design_marca++;
            design_produto++;
            design_personagem++;
            break;
        case "49"://Itália
            design_editorial++;
            design_grafico++;
            ux_design++;
            break;
        case "50"://Nenhuma das opções acima
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
