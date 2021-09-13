let res = document.getElementById('res')
let nota1 = document.getElementById('n1')
let nota2 = document.getElementById('n2')
let nota3 = document.getElementById('n3')
let nota4 = document.getElementById('n4')

function calcular() {
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let n4 = Number(nota4.value)

    let notaFinal = ((n1 + n2 + n3 + n4 / 4).toFixed(1))
    if(notaFinal >= 7) {
        resposta.innerHTML = `<p>Sua nota é: ${notaFinal}, você foi aprovado!</p>`
    }
    else {
        resposta.innerHTML = `<p>Sua nota é: ${notaFinal}, você foi rerovado!</p>`
    }

}