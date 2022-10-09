
/**FUNCIONALIDADES:
 * Vendria a ser como un excel para entender que monedas tengo, que valor en usd o en arg tengo, y de ahi 
 * sumarle cosas (que % del porfolio son x ponedas de tanto MC).
 * 
 * 
 * METODOLOGIA:
 * 
 * 
 * 
 * 
 * -----------DUDAS---------------
 * 
 * 
 * 
 * Anotaciones: preventdefault para la recarga del formulario (prevenir el envio).
 */





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

function manejadorDeFormularioUsuario(e){ //-->evento (e): contiene informacion del evento. Por defecto, cuando se agrega un manejador a un evento (una funcion), ese manejador recibe un parametro por defecto (puede tener cualquier nombre). 
    console.log(e);
    e.preventDefault(); //-> metodo prevenDeFault: para que el formulario no se envie por default (previente el comportamiento por defecto del evento).
    nombreUsuario = document.getElementById('user').value;  //->nombreUsuario tendra el valor del input cuyo id es 'user'(.value es la clave).
    const contenedorDeInversiones = document.getElementById('contenedorDeInversiones'); //-->me traje el listado de inversiones y lo guarde en una variable.
    const inversiones = JSON.parse(localStorage.getItem(nombreUsuario)); //->va a ir a buscar algo guardado con el nombre de usuario 'juampi' al local storage
    if(inversiones == null){
        contenedorDeInversiones.innerHTML = '<h1> No hay inversiones para mostrar</h1>'
    }else{
        mostrarInversiones(inversiones);
    }
    mostrarPanel();

}

function mostrarInversiones(inversiones){ //--> el parametro son  las inversiones que traje del local storage.
    let contenedorDeInversiones = document.getElementById('contenedorDeInversiones'); 
    contenedorDeInversiones.innerHTML ='';

    inversiones.forEach(inversion => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr> ${inversion.moneda.toUpperCase()} - ${inversion.cantidad} unidades - 
        <a href="${inversion.linkInfo}" target="blank"> Ver info </a>`;
        const botonBorrar = crearBotonEliminar(inversion);
        li.appendChild(botonBorrar);
        contenedorDeInversiones.appendChild(li);
      });
}

function crearBotonEliminar(inversion){
    const botonBorrar = document.createElement("button");// <button>Borrar</button>
      botonBorrar.innerText = "Borrar";
      botonBorrar.addEventListener("click", () => {
        eliminarInversion(inversion);
      })
      return botonBorrar;
  }

  function mostrarPanel() {
    const opciones = document.getElementById("opciones");
  
    opciones.innerHTML =
      `<h3>Bienvenido ${nombreUsuario}</h3>
      <form id="formulario-inversion">
        <input type="text" id="titulo" placeholder="Moneda">
        <input type="number" id="duracion" placeholder="Cantidad">
        <input type="text" id="linkTrailer" placeholder="Link info">
        <button type="submit">Guardar inversion</button>
      </form>`;
  
    document.getElementById("formulario-inversion").addEventListener("submit", agregarInversion);
  }

  function validarCampos(inversion) {
    if(inversion.titulo == ""){
      alert("El titulo no puede ser vacio")
    }
  }

  function agregarInversion(e) {
    e.preventDefault();
    const moneda = document.getElementById("titulo").value;
    const cantidad = document.getElementById("duracion").value;
    const linkInfo = document.getElementById("linkTrailer").value;
  
    const inversion = new Inversiones(moneda, cantidad, linkInfo);
  
    validarCampos(inversion)
  
    const inversionesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));

    // validarCampos(inversion);
  
    // 1) me traigo las cosas que necesito del locaslStorage
    // 2) Agregago mi cosa
    // 3) vuelvo a subir al localStorage.
  
    if (inversionesEnLocalStorage == null) {
      localStorage.setItem(nombreUsuario, JSON.stringify([inversion]));
      mostrarInversiones([inversion]);
    } else {
      inversionesEnLocalStorage.push(inversion);
      localStorage.setItem(nombreUsuario, JSON.stringify(inversionesEnLocalStorage));
      mostrarInversiones(inversionesEnLocalStorage);
    }
    e.target.reset(); //-> limpia y recetea los campos luego del evento submit
  }

  function eliminarInversion(inversion) {
    const inversionesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = inversionesEnLocalStorage.filter(item => item.titulo != inversion.titulo);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarInversiones(nuevoArray);
  }