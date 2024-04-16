let boton_osorno = document.querySelector("#Osorno")
boton_osorno.addEventListener("click", function(){

    document.getElementById("Osorno1").style.display = "flex";
    document.getElementById("PuertoMontt1").style.display = "none";
    document.getElementById("PuertoVaras1").style.display = "none";
    document.getElementById("Valdivia1").style.display = "none";
    document.getElementById("RioNegro1").style.display = "none";
});
let boton_puerto = document.querySelector("#Puerto-Montt")
boton_puerto.addEventListener("click", function(){

    document.getElementById("Osorno1").style.display = "none";
    document.getElementById("PuertoMontt1").style.display = "flex";
    document.getElementById("PuertoVaras1").style.display = "none";
    document.getElementById("Valdivia1").style.display = "none";
    document.getElementById("RioNegro1").style.display = "none";
});
let boton_varas = document.querySelector("#Puerto-Varas")
boton_varas.addEventListener("click", function(){

    document.getElementById("Osorno1").style.display = "none";
    document.getElementById("PuertoMontt1").style.display = "none";
    document.getElementById("PuertoVaras1").style.display = "flex";
    document.getElementById("Valdivia1").style.display = "none";
    document.getElementById("RioNegro1").style.display = "none";
});
let boton_valdivia = document.querySelector("#Valdivia")
boton_valdivia.addEventListener("click", function(){

    document.getElementById("Osorno1").style.display = "none";
    document.getElementById("PuertoMontt1").style.display = "none";
    document.getElementById("PuertoVaras1").style.display = "none";
    document.getElementById("Valdivia1").style.display = "flex";
    document.getElementById("RioNegro1").style.display = "none";
});
let boton_rio = document.querySelector("#Rio-Negro")
boton_rio.addEventListener("click", function(){

    document.getElementById("Osorno1").style.display = "none";
    document.getElementById("PuertoMontt1").style.display = "none";
    document.getElementById("PuertoVaras1").style.display = "none";
    document.getElementById("Valdivia1").style.display = "none";
    document.getElementById("RioNegro1").style.display = "flex";
});

window.onload = function() {
    setTimeout(function() {
        alert("Cargando Reporte del Clima ☀️");
    }, 200);
};

document.addEventListener('DOMContentLoaded', function() {
    var aceptarBtn = document.querySelector('.btn');
    var footer = document.querySelector('footer');

    aceptarBtn.addEventListener('click', function() {
        footer.style.display = 'none';

        setTimeout(function() {
            alert("Tyler Gregory Okonma, mejor conocido artísticamente como Tyler, the Creator, es un rapero, productor discográfico, director, actor y diseñador de moda estadounidense.");
        }, 200);

    });
});