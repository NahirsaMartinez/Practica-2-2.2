const inputUsuarioIngresado = document.querySelector("#usuario-ingresado");
const inputContraseniaIngresado = document.querySelector("#contrasenia-ingresada");
const inputVerificarContrasenia = document.querySelector("#contrasenia-verif");



function registrarCuenta() {
    
    let contraseniaUno = inputContraseniaIngresado.value;
    let contraseniaDos = inputVerificarContrasenia.value;

    if (contraseniaUno === contraseniaDos) {
        document.querySelector("a").href = "./index.html";
    }else{
        document.querySelector("a").href = "#";
    }
    
}