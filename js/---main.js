var body = document.querySelector("body");
var passar = document.querySelector(".btn-proximo");
var resultado = document.querySelector(".btn-resultado");
var reiniciar = document.querySelector(".btn-reiniciar");
var comecar = document.querySelector(".btn-nao-deisgn");
var inicio = document.querySelector(".inicio");;
var asPerguntas = document.querySelectorAll("section");
var numPergunta = document.querySelector(".numeros-perguntas");
var numero = 0;

var design_marca = 18
var design_editorial = 18
var design_grafico = 18

var design_produto = 18
var design_personagem = 19

var ux_design = 18

var design_digital = 18
var design_jogos = 17

var web_design = 18
var ui_design = 18

//somente demostrativo das pontuações das escolhas
console.log(
    "Web_design " + web_design + " - " +
    "Design_grafico " + design_grafico + " - " +
    "Ui_design " + ui_design + " - " +
    "design_digital " + design_digital + " - " +
    "design_editorial " + design_editorial
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


//função para pegar apenas 1 click na escolha
function decrementar(resposta) {
    if (resposta > 0) return resposta -= 1;
    return resposta;
}


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

        //Chama função para pegar apenas 1 click na escolha
        design_marca = decrementar(design_marca);
        web_design = decrementar(web_design);
        design_grafico = decrementar(design_grafico);
        design_produto = decrementar(design_produto);
        ux_design = decrementar(ux_design);
        ui_design = decrementar(ui_design);
        design_digital = decrementar(design_digital);
        design_personagem = decrementar(design_personagem);
        design_jogos = decrementar(design_jogos);
        design_editorial = decrementar(design_editorial);

        //adiciona ++ para perfil referente a escolha/resposta
        console.clear()
        var estePerfil = este.getAttribute("data-resposta");
        switch (estePerfil) {
            case "1":
                web_design++;
                break;
            case "2":
                web_design++;
                design_grafico++;
                break;
            case "3":
                ui_design++;
                break;
            case "4":
                design_digital++;
                break;
            case "5":
                design_editorial++;
                break;

            //pergunta 2
            case "6":
                web_design++;
                break;
            case "7":
                web_design++;
                design_grafico++;
                break;
            case "8":
                ui_design++;
                break;
            case "9":
                design_digital++;
                break;
            case "10":
                design_editorial++;
                break;

            //pergunta 3
            case "11":
                web_design++;
                break;
            case "12":
                web_design++;
                design_grafico++;
                break;
            case "13":
                ui_design++;
                break;
            case "14":
                design_digital++;
                break;
            case "15":
                design_editorial++;
                break;
            default:
                alert("É nescessário escolher 1 opção!");
        };
        console.log(
            "Web_design " + web_design + " - " +
            "Design_grafico " + design_grafico + " - " +
            "Ui_design " + ui_design + " - " +
            "design_digital " + design_digital + " - " +
            "design_editorial " + design_editorial);
    });
});


//click no botão passar
passar.addEventListener("click", function () {
    numero++;
    if (numero > asPerguntas.length - 1)
        numero = asPerguntas.length - 1;
    mostrarPerguntas();
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
