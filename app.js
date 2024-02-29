let mensaje;
const letras = ['e', 'i', 'a', 'o', 'u'];
const silavas = ['enter', 'imes', 'ai', 'ober', 'ufat'];

//funcion que permite tener un textArea dinamico
const textarea = document.querySelector('textarea');
    textarea.addEventListener('DOMContentLoaded', () => {
        area.forEach((elemento) => {
          elemento.style.height = `${elemento.scrollHeight}px`
        })
      })    

//funcion para validar si solo se escribieron letras minusculas sin acento
function validar(){
    const regExp = /[A-Z]/;
    const input = document.forms['formulario']['mensajeUsuario'];
    console.log(!input.value)
    console.log(!regExp.test(input.value))
    if(!input.value) {
        return false;
      } else {
        if(regExp.test(input.value)){
        return false
        }else
        return true;
    }
}

//funcion para encriptar
function encriptar() {
   encriptarDesencriptar(letras, silavas, 'ent');
}

//funcion para desencriptar
function desencriptar() {
    encriptarDesencriptar(silavas, letras, 'des')
}

//funcion proceso de encriptado y desencriptado
function encriptarDesencriptar(arreglo1, arreglo2, tipo){
    console.log(tipo);
    alerta(tipo);
    let isValid = validar();
    mensaje = document.getElementById('mensajeUsuario').value;
    if(isValid === true){
        for(let i=0;i<letras.length; i++){
            mensaje = mensaje.replaceAll(arreglo1[i],arreglo2[i]);
            console.log(mensaje);
        }

        restablecer();
        return mostrarMensaje(mensaje)
    }else{
       // alert('Solo se admiten letras minusculas y sin acentos, Igresa otro mensaje');
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "solo letras minusculas, intente de nuevo!",
      });
      restablecer();
    }
    restablecer();
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

//Funcion para mostrar el mensaje
function mostrarMensaje(texto){
    document.getElementById('antes').style.display = 'none'
    document.getElementById('despues').style.display = 'block'
    document.getElementById('parrafo').textContent = texto;
}

function copiarTexto(){
    let content = document.getElementById('parrafo');
    content.select();
    content.setSelectionRange(0,99999);
    navigator.clipboard.writeText(content.value);
    alerta('cop');
}
function alerta(tipo){
    console.log(tipo);
    let mensajeAlerta;
    switch (tipo){
        case 'enc':
            mensajeAlerta = 'Encriptado Exitoso';
            break;
        case 'des':
            mensajeAlerta = 'Desencriptado Exitoso';
            break;
        case 'cop':
            mensajeAlerta = 'Copiado Exitoso';
            break;
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: mensajeAlerta,
        showConfirmButton: false,
        timer: 1500
      });
      return;
}