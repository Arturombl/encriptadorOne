let mensaje;
const letras = ['e', 'i', 'a', 'o', 'u'];
const silavas = ['enter', 'imes', 'ai', 'ober', 'ufat'];

//funcion que permite tener un cuadro de texto dinamico
const textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', e =>{
        let scHeight = e.target.scrollHeight;
        textarea.style.height = 'auto';
        textarea.style.height = `${scHeight}px`; 
    })

//funcion para validar si solo se escribieron letras minusculas sin acento
function validar(){
    const regExp = /[a-z]$/;
    const input = document.forms['formulario']['mensajeUsuario'];
    if(!input.value) {
        return false;
      } else {
        if(!regExp.test(input.value)){
        return false
        }else
        return true;
    }
}

//funcion para encriptar
function encriptar() {
    console.log(validar());
    let isValid = validar();
    mensaje = document.getElementById('mensajeUsuario').value;
    if(isValid === true){
        for(let i=0;i<letras.length; i++){
            mensaje = mensaje.replace(letras[i],silavas[i]);
            console.log(mensaje);
        }
        restablecer();
        return mensaje;
    }else{
        alert('Solo se admiten letras minusculas y sin acentos, Igresa otro mensaje');
    }
    restablecer();
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

//funcion para limpiar el texarea y posicionar el cursor
function restablecer(){
    document.getElementById('mensajeUsuario').focus();
    formulario.reset();
}

//funcion para valores iniciales
function valoresIniciales(){
    document.getElementById('despues').style.display = 'none';
}

valoresIniciales();