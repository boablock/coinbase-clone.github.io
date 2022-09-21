
//SEGUNDA-ENTREGA
class Inversiones{
    constructor(moneda, cantidad,linkInfo){
        this.moneda = moneda;
        this.cantidad = cantidad; 
        this.linkInfo = linkInfo;

    }
}

let nombreUsuario; //-->ingreso del nombre de usuario 

document.getElementById('formulario-usuario').addEventListener('submit', manejadorDeFormularioUsuario); //->podria ser 'click', pero usamos submit para que sea mas representativo, se envia un formulario. No lo guardo en una variable.

function manejadorDeFormularioUsuario(e){ //-->evento (e): contiene informacion del evento. Por defecto, cuando se agrega un manejador a un evento, ese manejador recibe un parametro por defecto (puede tener cualquier nombre)
    console.log(e);
    e.preventDefault(); //-> metodo prevenDeFault: para que el formulario no se envie por default (previente el comportamiento por defecto del evento).
    nombreUsuario = document.getElementById('user').value;  //->nombreUsuario tendra el valor del input cuyo id es 'user'(.value es la clave).
    const listadoDeInversiones = document.getElementById('listadoDeInversiones'); //-->me traje el listado de inversiones y lo guarde en una variable.
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

    inversiones.forEach(inversion => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr> ${inversion.moneda.toUpperCase()} - ${inversion.cantidad} minutos - 
        
        <a href="${inversion.linkInfo}" target="blank"> Ver info </a>`;
        const botonBorrar = crearBotonEliminar(inversion);
        li.appendChild(botonBorrar);
        listadoDeInversiones.appendChild(li);
      });
}