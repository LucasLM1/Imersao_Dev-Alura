var listaFilmes = ["https://hbomax-images.warnermediacdn.com/images/GYDQXMgVDW8LDGgEAAAAF/tileburnedin?size=1280x720&partner=hbomaxcom&language=pt-br&host=art-gallery-latam.api.hbo.com&w=1280", "https://f.vividscreen.info/soft/596dff4bdba37ffee2737c76f8dc89e8/Watchmen-1280x720.jpg", "https://img.ibxk.com.br/2021/03/18/18120425167122.jpg"];


for (var indice = 0; indice < listaFilmes.length; indice++) {
    //   //document.write("<p>" + indice + "</p>");
    document.write("<img src=" + listaFilmes[indice] + ">");
}


//Abaixo escrita de como funcionam as listas e arrays em JavaScript
// var listaFilmes =["Batman", "Watchmen", "Snyder Cut: Liga da Justiça"];

// //adiciona novos elementos no array
// listaFilmes.push("Mulher Maravilha");

// //indice 4
// listaFilmes.push("Batman- O longo dia das Bruxas Parte 1");
// listaFilmes.push("Coringa");

// //experimentar trocar as tags
// //document.write("<p>" + listaFilmes[0] + "</p>");
// //document.write("<p>" + listaFilmes[1] + "</p>");         
// //document.write("<p>" + listaFilmes[2] + "</p>");
// //document.write("<p>" + listaFilmes[3] + "</p>");

// // valor inicial; condicao; expressao final
// for (var indice = 0; indice < listaFilmes.length; indice++){
//   //document.write("<p>" + indice + "</p>");
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }