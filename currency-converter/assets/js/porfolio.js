

class Inversiones{
    constructor(moneda, cantidad,linkInfo){
        this.moneda = moneda;
        this.cantidad = cantidad; 
        this.linkInfo = linkInfo;

    }
}

let nombreUsuario; //-->ingreso del nombre de usuario 

document.getElementById('formulario-usuario').addEventListener('submit', manejadorDeFormularioUsuario); //->podria ser 'click', pero usamos submit para que sea mas representativo, se envia un formulario.

function manejadorDeFormularioUsuario(e){
    console.log(e);
    e.preventDefault(); //-> para que el formulario no se envie por default (previente el comportamiento por defecto del evento).
    nombreUsuario = document.getElementById('user').value;  //->nombreUsuario tendra el valor del input cuyo id es 'user'.
    let listadoDeInversiones = document.getElementById('listadoDeCryptomonedas'); 
    const inversiones = JSON.parse(localStorage.getItem(nombreUsuario)); //->va a ir a buscar algo guardado con el nombre de usuario 'juampi' al local storage
    if(inversiones == null){
        listadoDeInversiones.innerHTML = '<h1> No hay inversiones para mostrar</h1>'
    }else{
        mostrarInversiones(inversiones);
    }
    mostrarPanel();

}

function mostrarInversiones(inversiones){
    let listadoDeInversiones = document.getElementById('listadoDeCryptomonedas'); 
    listadoDeInversiones.innerHTML ='';
}