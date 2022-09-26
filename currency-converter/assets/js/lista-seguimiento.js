
/**Funcionalidades:
 * 1)Boton crear lista de seguimineto
 * 2)Desplegar lista de monedas
 * 3)Armar lista segun las monedas seleccionadas
 * Metodologia:
 * 1)crear funcion para crear lista de monedas
 * 2)agrego un evento click al boton lista de monedas, para que despliegue la lista de monedas (evento crearListaMonedas).--> ¿como hago para que sea dentro de una card temporal?
 * 3)
 * a-Crear un evento click en el boton agregar de cada moneda, 
 * b-crear array vacio de listaDeSeguimineto 
 * c-creando luego la funcion para agregar esa moneda a la listaDeSeguimiento (function agregaraListaDeSeguimiento, con push al array) 
 * d-invocar la funcion push dentro de la funcion de eventoBtnAgregar
 * 
 */


//Array monedas

const monedas = [
{
    nombre: 'BTC',
    precio: 20000,
    id: 1,
},
{
    nombre: 'ETH',
    precio: 1000,
    id:2,
},
{
    nombre: 'USDT',
    precio: 1,
    id:3,
},
{
    nombre: 'ADA',
    precio: 2,
    id:4,
},
{
    nombre: 'BNB',
    precio: 400,
    id:5,
},
];

const bntListaMonedas = document.querySelector('#btn-lista-monedas'); 
const divListaSeguimiento= document.querySelector('#div-lista-seguimiento');
let listaDeSeguimiento =[];


// 1)
function crearListadoMonedas(){
    monedas.forEach(moneda=>{
        divListaSeguimiento.innerHTML += ` 
        <div>
            <h4>${moneda.nombre}</4>
            <button class='btnAgregaraSeguimiento' id='btn-agregar${moneda.id}'>Agregar</button>
        </div> 
        `
    })
    EventoBntAgregar();
}

//2)
bntListaMonedas.addEventListener('click',()=>{
    crearListadoMonedas();
})

//3)
function EventoBntAgregar(){
    monedas.forEach(moneda=>{
        document.querySelector(`#btn-agregar${moneda.id}`).addEventListener('click',()=>{
            agregaraListaDeSeguimiento(moneda);
        })

    })
}
function agregaraListaDeSeguimiento(moneda){
listaDeSeguimiento.push(moneda);
console.log(listaDeSeguimiento);
renderizarListaDeSeguimiento();
}

function renderizarListaDeSeguimiento(){
    listaDeSeguimiento.forEach(moneda=>{
        divListaSeguimiento.innerHTML += ` 
        <div>
            <h4>${moneda.nombre}</4>
            <p> $${moneda.precio}</p>
            <button class='btnBorrar' id='btn-borrar${moneda.id}'>Borrar</button>
        </div> 
        `
    })
}