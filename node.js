const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A reciclagem reduz o consumo de energia?",
        alternativas: [           
            {
                texto: "Sim",
                afirmacao: "A reciclagem de materiais, como alumínio, economiza energia em comparação com a produção de novos materiais."
            },
            {
                texto:  "Não",
                afirmacao: "Nem todos os processos de reciclagem são eficientes em termos de energia."
            }
        ]
    },
  {
        enunciado: "O desmatamento contribui para as mudanças climáticas?",
        alternativas: [           
            {
                texto: "Sim",
                afirmacao: "O desmatamento aumenta as emissões de CO2, exacerbando as mudanças climáticas."
            },
            {
                texto:  " Não",
                afirmacao: "Apenas se o reflorestamento não for realizado adequadamente."
            }
        ]
    },
  {
        enunciado: "A poluição dos oceanos afeta a vida marinha?",
        alternativas: [           
            {
                texto: "Sim.",
                afirmacao: "A poluição dos oceanos pode levar à morte de diversas espécies marinhas."
            },
            {
                texto:  "Não.",
                afirmacao: "Apenas em áreas muito poluídas."
            }
        ]
    },
  ]
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();