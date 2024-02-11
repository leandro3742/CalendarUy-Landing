window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {

    var btn = document.getElementById("btnVolverArriba");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

document.getElementById("btnVolverArriba").onclick = function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0;
};

document.addEventListener('scroll', function () {
    var btnVolverArriba = document.getElementById('btnVolverArriba');
    var footer = document.getElementById('footer');

    var footerRect = footer.getBoundingClientRect();
    var btnRect = btnVolverArriba.getBoundingClientRect();

    var bottomSpace = window.innerHeight - footerRect.top; // Espacio entre el inicio del footer y el final de la ventana

    if (bottomSpace > 0) {
        // Si hay espacio entre el footer y el final de la ventana, ajusta la posición del botón
        btnVolverArriba.style.bottom = bottomSpace + 20 + 'px'; // 20 es el margen original del botón desde el fondo
    } else {
        // Si no, vuelve a la posición original
        btnVolverArriba.style.bottom = '20px';
    }
});
