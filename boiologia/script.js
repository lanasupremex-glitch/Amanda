const perguntas = [
    {
        pergunta: "Qual organela é responsável pela produção de energia na célula?",
        opcoes: ["Mitocôndria", "Ribossomo", "Lisossomo"],
        correta: 0
    },
    {
        pergunta: "Qual processo as plantas usam para produzir alimento?",
        opcoes: ["Respiração", "Fotossíntese", "Digestão"],
        correta: 1
    },
    {
        pergunta: "Qual é a molécula que carrega informações genéticas?",
        opcoes: ["RNA", "DNA", "ATP"],
        correta: 1
    }
];

let indice = 0;

function carregarPergunta() {
    document.getElementById("resultado").textContent = "";
    const p = perguntas[indice];
    document.getElementById("pergunta").textContent = p.pergunta;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    p.opcoes.forEach((opc, i) => {
        const btn = document.createElement("button");
        btn.textContent = opc;
        btn.onclick = () => verificar(i);
        opcoesDiv.appendChild(btn);
    });
}

function verificar(resposta) {
    const p = perguntas[indice];
    const resultado = document.getElementById("resultado");

    if (resposta === p.correta) {
        resultado.textContent = "✅ Correto!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Errado!";
        resultado.style.color = "red";
    }
}

document.getElementById("proxBtn").addEventListener("click", () => {
    indice = (indice + 1) % perguntas.length;
    carregarPergunta();
});

carregarPergunta();
