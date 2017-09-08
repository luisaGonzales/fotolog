/*aquí va tu código*/
$(document).ready(function () {
    var comentarios = [];

    if (!localStorage.currenData) {
        localStorage.currenData = [];
    } else {
        comentarios = JSON.parse(localStorage.currenData);
    }

    for (var i = 0; i < comentarios.length; i++) {
        agregarComentario(comentarios[i]);
    }

    $("#btnComentar").click(function () {
        if ($("#mensaje").val() != "") {
            var objeto = {
                "nombre": $("#nombre").val(),
                "mensaje": $("#mensaje").val()
            };
            comentarios.push(objeto);
            localStorage.currenData = JSON.stringify(comentarios);
            agregarComentario(objeto);
            $("#nombre").val("");
            $("#mensaje").val("");
        }
    });

    $("#btnLimpiar").click(function () {
        localStorage.clear();
        // var divEspacio = document.getElementById("espacio");
        // var sectionPadre = divEspacio.parentNode;
        // sectionPadre.removeChild(divEspacio);
        // var divEspacioText = document.createTextNode("");
        // sectionPadre.appendChild(divEspacioText);
    });
});

function agregarComentario(objeto) {
    var divEspacio = document.getElementById("espacio");
    var bgComentario = document.createElement("div");
    bgComentario.classList.add("fondo");
    var bgComentarioTitle = document.createElement("div");
    bgComentarioTitle.classList.add("nombre");
    var comentario = document.createElement("div");
    comentario.classList.add("comentario");
    var contenidoNombre = document.createTextNode(objeto.nombre);
    var contenidoMensaje = document.createTextNode(objeto.mensaje);

    comentario.appendChild(contenidoMensaje);
    bgComentarioTitle.appendChild(contenidoNombre);
    bgComentario.appendChild(bgComentarioTitle);
    bgComentario.appendChild(comentario);
    divEspacio.appendChild(bgComentario);
}