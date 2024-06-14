let ataqueJugador;
let ataqueEnemigo;
let resultadoAtaque;
let vidasJugador = 3;
let vidasEnemigo = 3;
let rutaImagenGoku = "./img/goku.png"
let rutaImagenBills = "./img/bills.png"
let rutaImagenFreezer = "./img/freezer.png"
let rutaImagenKrillin = "./img/krillin.png"
let rutaImagenPicolo = "./img/picoro.png"
let rutaImagenVegueta = "./img/vegueta.png"

function iniciarJuego() {

    let ocultarSecciones1 = document.getElementById('seccion-muestra-seleccion')
    ocultarSecciones1.style.display = "none"

    let ocultarSecciones2 = document.getElementById('select-ataque')
    ocultarSecciones2.style.display = "none"

    let ocultarSecciones3 = document.getElementById('seccion-ataques')
    ocultarSecciones3.style.display = "none"

    let ocultarSecciones4 = document.getElementById('reiniciar')
    ocultarSecciones4.style.display = "none"

    let ocultarSecciones5 = document.getElementById('game-over')
    ocultarSecciones5.style.display = "none"

    //hacer que las imagenes funcionen al click

    let imagenSelect_goku = document.getElementById('goku-select')
    imagenSelect_goku.addEventListener('click', seleccionaImagen_goku)

    let imagenSelect_bills = document.getElementById('bills-select')
    imagenSelect_bills.addEventListener('click', seleccionaImagen_bills)

    let imagenSelect_freezer = document.getElementById('freezer-select')
    imagenSelect_freezer.addEventListener('click', seleccionaImagen_freezer)

    let imagenSelect_krillin = document.getElementById('krillin-select')
    imagenSelect_krillin.addEventListener('click', seleccionaImagen_krillin)

    let imagenSelect_picolo = document.getElementById('picolo-select')
    imagenSelect_picolo.addEventListener('click', seleccionaImagen_picolo)

    let imagenSelect_vegueta = document.getElementById('vegueta-select')
    imagenSelect_vegueta.addEventListener('click', seleccionaImagen_vegueta)

    let btnguerreroJugador = document.getElementById('btn-batalla')
    btnguerreroJugador.addEventListener('click', seleccionarguerreroJugador)

    //hacer que los label funcionen al click

    let labelGoku = document.getElementById('label-goku')
    labelGoku.addEventListener('click', seleccionaImagen_goku)

    let labelbills = document.getElementById('label-bills')
    labelbills.addEventListener('click', seleccionaImagen_bills)

    let labelfreezer = document.getElementById('label-freezer')
    labelfreezer.addEventListener('click', seleccionaImagen_freezer)

    let labelkrillin = document.getElementById('label-krillin')
    labelkrillin.addEventListener('click', seleccionaImagen_krillin)

    let labelpicolo = document.getElementById('label-picolo')
    labelpicolo.addEventListener('click', seleccionaImagen_picolo)

    let labelvegueta = document.getElementById('label-vegueta')
    labelvegueta.addEventListener('click', seleccionaImagen_vegueta)

    //hacer que los botones funcionen

    let botonFuego = document.getElementById('btn-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('btn-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('btn-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('btn-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionaImagen_goku() {
    let inputgoku = document.getElementById('goku');
    inputgoku.checked = true
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a GOKU"
    //  alert('Elegiste a ' + 'GOKU')
}

function seleccionaImagen_bills() {
    let inputbills = document.getElementById('bills');
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a Bills"
    inputbills.checked = true
}

function seleccionaImagen_freezer() {
    let inputfreezer = document.getElementById('freezer');
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a Freezer"
    inputfreezer.checked = true
}
function seleccionaImagen_krillin() {
    let inputkrillin = document.getElementById('krillin');
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a Krillin"
    inputkrillin.checked = true
}
function seleccionaImagen_picolo() {
    let inputpicolo = document.getElementById('picolo');
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a Picolo"
    inputpicolo.checked = true
}
function seleccionaImagen_vegueta() {
    let inputvegueta = document.getElementById('vegueta');
    let eligeGuerrero = document.getElementById('eligiendo-guerrero')
    eligeGuerrero.innerHTML = "Elegiste a Vegueta"
    inputvegueta.checked = true
}

function seleccionarguerreroJugador() {

    let inputgoku = document.getElementById('goku');
    let inputbills = document.getElementById('bills');
    let inputfreezer = document.getElementById('freezer');
    let inputkrillin = document.getElementById('krillin');
    let inputpicolo = document.getElementById('picolo');
    let inputvegueta = document.getElementById('vegueta');
    let spanguerreroJugador = document.getElementById('guerrero-jugador');

    let guerreroElegido = document.getElementById('guerrero-elegido')


    if (inputgoku.checked) {
        spanguerreroJugador.innerHTML = "Goku"
        guerreroElegido.src = rutaImagenGoku
        ocultarSeccionesInicial()

    }
    else if (inputbills.checked) {
        spanguerreroJugador.innerHTML = "Bills"
        guerreroElegido.src = rutaImagenBills

        ocultarSeccionesInicial()
    }
    else if (inputfreezer.checked) {
        spanguerreroJugador.innerHTML = "Freezer"
        guerreroElegido.src = rutaImagenFreezer
        ocultarSeccionesInicial()
    }
    else if (inputkrillin.checked) {
        spanguerreroJugador.innerHTML = "Krillin"
        guerreroElegido.src = rutaImagenKrillin
        ocultarSeccionesInicial()
    }
    else if (inputpicolo.checked) {
        spanguerreroJugador.innerHTML = "Piccolo"
        guerreroElegido.src = rutaImagenPicolo
        ocultarSeccionesInicial()
    }
    else if (inputvegueta.checked) {
        spanguerreroJugador.innerHTML = "Vegueta"
        guerreroElegido.src = rutaImagenVegueta
        ocultarSeccionesInicial()
    }
    else {
        // alert("Debes elegir un guerrero");

        let alertaGuerrero = document.getElementById('eligiendo-guerrero')
        alertaGuerrero.innerHTML = 'Debes elegir un guerrero'
    }

}

function ocultarSeccionesInicial() {
    seleccionarguerreroEnemigo()
    defineVidas()
    let ocultarSecciones1 = document.getElementById('seccion-muestra-seleccion')
    ocultarSecciones1.style.display = 'flex'

    let ocultarSecciones2 = document.getElementById('select-ataque')
    ocultarSecciones2.style.display = 'flex'

    let ocultarSecciones5 = document.getElementById('select-guerrero')
    ocultarSecciones5.style.display = "none"

    let ocultarSeleccionGuerrero = document.getElementById('eligiendo-guerrero')
    ocultarSeleccionGuerrero.style.display = "none"

    let ocultarBotonBatalla = document.getElementById('btn-batalla')
    ocultarBotonBatalla.style.display = "none"
}

function seleccionarguerreroEnemigo() {
    let guerreroAleatorio = aleatorio(1, 6)
    let spanguerreroEnemigo = document.getElementById('guerrero-enemigo')
    let enemigoElegido = document.getElementById('enemigo-elegido')

    if (guerreroAleatorio == 1) {
        spanguerreroEnemigo.innerHTML = "Goku"
        enemigoElegido.src = rutaImagenGoku

    }
    else if (guerreroAleatorio == 2) {
        spanguerreroEnemigo.innerHTML = "Bills"
        enemigoElegido.src = rutaImagenBills

    }
    else if (guerreroAleatorio == 3) {
        spanguerreroEnemigo.innerHTML = "Freezer"
        enemigoElegido.src = rutaImagenFreezer

    }
    else if (guerreroAleatorio == 4) {
        spanguerreroEnemigo.innerHTML = "Krillin"
        enemigoElegido.src = rutaImagenKrillin

    }
    else if (guerreroAleatorio == 5) {
        spanguerreroEnemigo.innerHTML = "Picolo"
        enemigoElegido.src = rutaImagenPicolo

    }
    else if (guerreroAleatorio == 6) {
        spanguerreroEnemigo.innerHTML = "Vegueta"
        enemigoElegido.src = rutaImageenemigo
    }
}

function ataqueFuego() {
    ataqueJugador = "Kame Hame 🔥"
    let spanAtaqueJugador = document.getElementById('ataque-jugador')
    //spanAtaqueJugador.innerHTML = ataqueJugador
    spanAtaqueJugador = ataqueJugador
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Haikyuken 💧"
    let spanAtaqueJugador = document.getElementById('ataque-jugador')
    //spanAtaqueJugador.innerHTML = ataqueJugador
    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "Genki Dama 🌎"
    let spanAtaqueJugador = document.getElementById('ataque-jugador')
    //spanAtaqueJugador.innerHTML = ataqueJugador
    seleccionarAtaqueEnemigo()

}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Kame Hame 🔥"
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Haikyuken 💧"
    }
    else {
        ataqueEnemigo = "Genki Dama 🌎"
    }

    //spanAtaqueEnemigo.innerHTML = ataqueEnemigo

    resultadoFinal()
    let ocultarSecciones3 = document.getElementById('seccion-ataques')
    ocultarSecciones3.style.display = "flex"
}

function crearMensajeAtaqueJugador() {
    let sectionMensajes = document.getElementById('ataque-jugador')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueJugador
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeAtaqueEnemigo(resultado) {
    let sectionMensajes = document.getElementById('ataque-enemigo')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueEnemigo
    sectionMensajes.appendChild(parrafo)
}

function resultadoFinal() {

    let spanResultadoAtaque = document.getElementById('resultado-combate')

    if (ataqueJugador == ataqueEnemigo) {
        // alert("Hay un empate")
        resultadoAtaque = "Hay Un Empate"
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()


    } else if ((ataqueJugador == 'Kame Hame 🔥' && ataqueEnemigo == 'Genki Dama 🌎') || (ataqueJugador == 'Haikyuken 💧' && ataqueEnemigo == 'Kame Hame 🔥') || (ataqueJugador == 'Genki Dama 🌎' && ataqueEnemigo == 'Haikyuken 💧')) {
        resultadoAtaque = "Ganaste"
        // alert("Ganaste")
        vidasEnemigo--
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()
    }
    else {
        // alert("Perdiste")
        resultadoAtaque = "Perdiste"
        vidasJugador--
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()
    }

    spanResultadoAtaque.innerHTML = resultadoAtaque
    revisarVidas()
}

function defineVidas() {

    if ((vidasJugador > 0 && vidasEnemigo > 0)) {
        let spanVidasJugador = document.getElementById('vidas-jugador')
        spanVidasJugador.innerHTML = vidasJugador

        let spanVidasEnemigo = document.getElementById('vidas-enemigo')
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (vidasJugador == 0 || vidasEnemigo == 0) {
        let spanVidasJugador = document.getElementById('vidas-jugador')
        spanVidasJugador.innerHTML = vidasJugador

        let spanVidasEnemigo = document.getElementById('vidas-enemigo')
        spanVidasEnemigo.innerHTML = vidasEnemigo

        let spanFinalizarJuego = document.getElementById('fin-juego')
        spanFinalizarJuego.innerHTML = resultadoAtaque

        let ocultarSecciones5 = document.getElementById('game-over')
        ocultarSecciones5.style.display = 'flex'
    }
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
       //alert("¡GANASTE! ¡FELICIDADES!");
        document.getElementById("btn-fuego").disabled = true;
        document.getElementById("btn-agua").disabled = true;
        document.getElementById("btn-tierra").disabled = true;
        let ocultarSecciones4 = document.getElementById('reiniciar')
        ocultarSecciones4.style.display = "flex"

    } else if (vidasJugador == 0) {
       // alert("¡PERDISTE! LO SIENTO MUCHO");
        document.getElementById("btn-fuego").disabled = true;
        document.getElementById("btn-agua").disabled = true;
        document.getElementById("btn-tierra").disabled = true;
        let ocultarSecciones4 = document.getElementById('reiniciar')
        ocultarSecciones4.style.display = "flex"
    }

}

function reiniciarJuego() {
    location.reload();
}

// Recargar la página
// document.addEventListener("DOMContentLoaded", function () {

//     document.getElementById('btn-reiniciar').addEventListener('click', function () {

//         location.reload();
//     });
// });

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)



