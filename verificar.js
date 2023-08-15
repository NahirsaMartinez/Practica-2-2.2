const inputUsuarioNombre = document.querySelector("#usuario-nombre");
const inputUsuarioContrasenia = document.querySelector("#usuario-contrasenia");

const CLAVE_USUARIOS = "lista usuarios";
const CLAVE_CONTRASENIAS = "lista contrasenias";

function verificar() {
    let nombreRecibido = inputUsuarioNombre.value;
    let contrasenia = inputUsuarioContrasenia.value;
    let listaUsuarios = "def list usuarios";
    let listaContrasenias= "def list contrasnias";
    let usuarioVerificado = false;
   
    listaUsuarios = JSON.parse (localStorage.getItem(CLAVE_USUARIOS));
    
    if (listaUsuarios === null) {
        document.querySelector("p").innerHTML = "No hay cuentas registradas.Intente de nuevo";

    } else{
        listaContrasenias = JSON.parse (localStorage.getItem(CLAVE_CONTRASENIAS));

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i] === nombreRecibido){
                alert("hay un usuario")
                usuarioVerificado=true;
            }
            
        }
    }
}