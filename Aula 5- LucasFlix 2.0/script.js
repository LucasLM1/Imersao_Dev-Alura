function addFilme() {
    var filmeFav = document.getElementById("filme").value;

    //se filme terminar com .jpg carrega a imagem
    if (filmeFav.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFav)
    }
    else {
        //imprime o erro no console
        console.error("Endereço de filme inválido")
    }
    //limpa o espaço em que a imagem esta sendo inserida
    document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilmeFav = "<img src=" + filmeFav + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes");
    //adiciona mais de um filme quando colocado no input
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFav;
}