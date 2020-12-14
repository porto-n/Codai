var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function clickProjetos(){
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickSobre(){
    texto1.style.display = "block";
    texto2.style.display = "none";
}