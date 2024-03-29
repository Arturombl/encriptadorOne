let mensaje;
const letras = ['e', 'i', 'a', 'o', 'u'];
const silavas = ['enter', 'imes', 'ai', 'ober', 'ufat'];
const verificacion = [];

//funcion que permite tener un textArea dinamico
const textarea = document.querySelector('textarea');
    textarea.addEventListener('DOMContentLoaded', () => {
        area.forEach((elemento) => {
          elemento.style.height = `${elemento.scrollHeight}px`
        })
      })    

//funcion para validar si solo se escribieron letras minusculas sin acento
function validar(){
    const regExp = /[a-z]/;
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
   encriptarDesencriptar(letras, silavas, 'enc');
}

//funcion para desencriptar
function desencriptar() {
    encriptarDesencriptar(silavas, letras, 'des')
}

//funcion proceso de encriptado y desencriptado
function encriptarDesencriptar(arreglo1, arreglo2, tipo){
    alerta(tipo);
    let isValid = validar();
    let temporal = document.getElementById('mensajeUsuario').value;
    mensaje = temporal.toLowerCase();
    if(isValid === true){
        for(let i=0;i<letras.length; i++){
           if(mensaje.includes(arreglo1[i]))
           verificacion.push(i);    
        }
        console.log(verificacion);
        for(let i=0;i<verificacion.length; i++){
            mensaje = mensaje.replaceAll(arreglo1[verificacion[i]],arreglo2[verificacion[i]]);
            console.log(mensaje);
        }

        restablecer();
        return mostrarMensaje(mensaje)
    }else{
       // alert('Solo se admiten letras minusculas y sin acentos, Igresa otro mensaje');
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "solo letras, intente de nuevo!",
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
        position: "center",
        icon: "success",
        title: mensajeAlerta,
        showConfirmButton: false,
        timer: 1500
      });
      return;
}