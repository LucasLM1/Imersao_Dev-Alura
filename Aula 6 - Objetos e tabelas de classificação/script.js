var LM1 = { nome: "LM1", vitorias: 5, empates: 2, derrotas: 0, pontos: 19 };
var RSC = { nome: "RSC", vitorias: 5, empates: 1, derrotas: 1, pontos: 18 };

//cada vitória soma 3 pontos e cada empate soma 1 ponto
function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

LM1.pontos = calculaPontos(LM1);
RSC.pontos = calculaPontos(RSC);

var jogadores = [LM1, RSC];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    //criação de tabela completa com JavaScript
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento +=
            "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento +=
            "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento +=
            "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}
