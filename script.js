const inputUsuarioIngresado = document.querySelector("#usuario-ingresado");
const inputContraseniaIngresado = document.querySelector("#contrasenia-ingresada");
const inputVerificarContrasenia = document.querySelector("#contrasenia-verif");

const CLAVE_USUARIOS = "lista usuarios";
const CLAVE_CONTRASENIAS = "lista contrasenias";

function registrarCuenta() {
    
    let contraseniaUno = inputContraseniaIngresado.value;
    let contraseniaDos = inputVerificarContrasenia.value;
    let listaUsuarios= "def lista usuarios";
    let listaContrasenias = "def lista contrasenias";

    if (contraseniaUno === contraseniaDos) {
        document.querySelector("a").href = "./index.html";
        document.querySelector("p").innerHTML = "Contraseña Ingresada correctamente";
    
        listaUsuarios =JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        listaContrasenias =JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS));
       
        if (listaUsuarios === null) {
            listaUsuarios = [];
            localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(listaUsuarios));
        }
    
        if (listaContrasenias === null) {
            listaContrasenias = [];
            localStorage.setItem(CLAVE_CONTRASENIAS,JSON.stringify(listaContrasenias));
        }
    
        listaUsuarios.push(inputUsuarioIngresado.value);
        localStorage.setItem(CLAVE_USUARIOS,JSON.stringify(listaUsuarios));

        listaContrasenias.push(inputContraseniaIngresado.value);
        localStorage.setItem(CLAVE_CONTRASENIAS,JSON.stringify(listaContrasenias));


    }else{
        document.querySelector("a").href = "#";
        document.querySelector("p").innerHTML = "Las contraseñas no son iguales";

    }
    
}