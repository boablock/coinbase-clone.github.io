
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
 * 4) Crear funcion para renderizar la lista de seguimiento en el sitio
 * 
 */


//Array monedas

const monedas = [
{
    nombre: 'BTC',
    precio: 20000,
    marketcap: 20000000,
    id: 1,
},
{
    nombre: 'ETH',
    precio: 1000,
    marketcap: 10000000,
    id:2,
},
{
    nombre: 'USDT',
    precio: 1,
    marketcap: 20000000,
    id:3,
},
{
    nombre: 'ADA',
    precio: 2,
    marketcap: 600000,
    id:4,
},
{
    nombre: 'BNB',
    precio: 400,
    marketcap: 300000,
    id:5,
},
];

const btnDesplegarListaMonedas = document.querySelector('#btn-lista-monedas'); 
const divListadoMonedas= document.querySelector('#div-listado-monedas');
const divListaDeSeguimiento= document.querySelector('#div-lista-de-seguimiento');
//3)b-
let listaDeSeguimiento =[]; //-> ERROR: me muestra solo la primer moneda seleccionada 


// 1)
function crearListadoMonedas(){
    monedas.forEach(moneda=>{
        divListadoMonedas.innerHTML += ` 
        <div>
            <h4>${moneda.nombre}</4>
            <button class='btnAgregaraSeguimiento' id='btn-agregar${moneda.id}'>Agregar</button>
        </div> 
        `
    })
    EventoBtnAgregar();
}

//2)
btnDesplegarListaMonedas.addEventListener('click',()=>{
    crearListadoMonedas();
})

//3)a-
function EventoBtnAgregar(){
    monedas.forEach(moneda=>{
        document.querySelector(`#btn-agregar${moneda.id}`).addEventListener('click',()=>{
            agregaraListaDeSeguimiento(moneda);
        })

    })
}
//3)c- (VER SI FUNCIONA EL PUSH)
function agregaraListaDeSeguimiento(moneda){
    let existe = listaDeSeguimiento.some(mon=>mon.id === moneda.id);
    if (existe === false){ //-> la moneda va a entrar a la lista de seg por este if solo si no existiese la moneda en el array. 
        moneda.cantidad = 1; //-> propiedad creada en el ejemplo del after
        listaDeSeguimiento.push(moneda);
    }
    else{
        let monFind = listaDeSeguimiento.find(mon => mon.id === moneda.id) // 
        monFind.cantidad++;
    }
    console.log(listaDeSeguimiento);
    renderizarListaDeSeguimiento(); //-->voy a querer que se renderice la lista cada vez que se agregue un producto a la misma (al array listaDeSeguimietno).
}
//4)
//-> con esta funcion deja de pushear.
function renderizarListaDeSeguimiento(){
    divListaDeSeguimiento.innerHTML ='';
    listaDeSeguimiento.forEach(moneda=>{
        let li = document.createElement('li');
        li.innerHTML += ` 
        <hr> ${moneda.nombre} - Precio: $${moneda.precio} - Market cap: ${moneda.marketcap} - <button class='btnBorrar' id='btn-borrar${moneda.id}'>Borrar</button> `;
        divListaDeSeguimiento.appendChild(li);
        
        // divListaDeSeguimiento.innerHTML += `<div>
        //     <h4>${moneda.nombre}</4>
        //     <p>Precio: $${moneda.precio}</p>
        //     <p>Market cap: ${moneda.marketcap}</p>
        //     <p>Cantidad: ${moneda.cantidad}</p>
        //     <button class='btnBorrar' id='btn-borrar${moneda.id}'>Borrar</button>
        // </div> `
    })
}