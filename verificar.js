const inputUsuarioNombre = document.querySelector("#usuario-nombre");
const inputUsuarioContrasenia = document.querySelector("#usuario-contrasenia");

const CLAVE_USUARIOS = "lista usuarios";
const CLAVE_CONTRASENIAS = "lista contrasenias";

function verificar() {
    let nombreRecibido = inputUsuarioNombre.value;
    let contraseniaRecibido = inputUsuarioContrasenia.value;
    let listaUsuarios = "def list usuarios";
    let listaContrasenias= "def list contrasnias";
    let ingresoCuenta = false;
   
    listaUsuarios = JSON.parse (localStorage.getItem(CLAVE_USUARIOS));
    
    if (listaUsuarios === null) {
        document.querySelector("p").innerHTML = "No hay cuentas registradas.Intente de nuevo";

    } else{

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i] === nombreRecibido) {
                listaContrasenias = JSON.parse(localStorage.getItem(CLAVE_CONTRASENIAS));
            }
            for (let i = 0; i < listaContrasenias.length; i++) {
                if (listaContrasenias[i] === contraseniaRecibido) {
                    ingresoCuenta = true;
                }

            }            
        }
    }

    if (ingresoCuenta) {
    document.querySelector ("p").innerHTML = "Inicio de sesion correcto";
    } else {
        document.querySelector ("p").innerHTML = "Contraseña y/o usuario incorrecto. Intente de nuevo";
    }
}