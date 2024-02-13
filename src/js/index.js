
document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById('loader');

    setTimeout(function () {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = 0;
        setTimeout(function () {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});


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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

document.addEventListener('scroll', function () {
    var btnVolverArriba = document.getElementById('btnVolverArriba');
    var footer = document.getElementById('footer');

    var footerRect = footer.getBoundingClientRect();
    var btnRect = btnVolverArriba.getBoundingClientRect();

    var bottomSpace = window.innerHeight - footerRect.top;

    if (bottomSpace > 0) {
        btnVolverArriba.style.bottom = bottomSpace + 20 + 'px';
    } else {
        btnVolverArriba.style.bottom = '20px';
    }
});


