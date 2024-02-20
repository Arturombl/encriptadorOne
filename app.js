let mensaje;
const letras = ['e', 'i', 'a', 'o', 'u'];
const silavas = ['enter', 'imes', 'ai', 'ober', 'ufat'];

//funcion que permite tener un cuadro de texto dinamico
const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", e =>{
        let scHeight = e.target.scrollHeight;
        textarea.style.height = "auto";
        textarea.style.height = `${scHeight}px`; 
    })

function soloLetras(){
}

//funcion para encriptar
function encriptar() {
    let mensaje = document.getElementById("mensajeUsuario").value;
    for(let i=0;i<letras.length; i++){
        mensaje = mensaje.replace(letras[i],silavas[i]);
        console.log(mensaje);
    }
    formulario.reset();
    return mensaje;
}

//funcion para desencriptar
function desencriptar() {
    let mensaje = document.getElementById('mensajeUsuario').value;
    for(let i=0;i<letras.length; i++){
        mensaje = mensaje.replace(silavas[i],letras[i]);
        console.log(mensaje);
    }
    formulario.reset();
    return mensaje;
}

function valoresIniciales(){
    document.getElementById("despues").style.display = "none";
}

valoresIniciales();