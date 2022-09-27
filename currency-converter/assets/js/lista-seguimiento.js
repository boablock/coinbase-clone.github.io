
/**FUNCIONALIDADES:
 * 1)Boton crear lista de seguimineto
 * 2)Desplegar lista de monedas
 * 3)Armar lista segun las monedas seleccionadas
 * 4)Poder borrar las monedas de la lista
 * METODOLOGIA:
 * 1)Crear funcion para crear lista de monedas
 * 2)Agrego un evento click al boton lista de monedas, para que despliegue la lista de monedas (evento crearListaMonedas).--> ¿como hago para que sea dentro de una card temporal?
 * 3)
 * a-Crear un evento click en el boton agregar de cada moneda, 
 * b-Crear array vacio de listaDeSeguimineto 
 * c-Creando luego la funcion para agregar esa moneda a la listaDeSeguimiento (function agregaraListaDeSeguimiento, con push al array) 
 * d-Invocar la funcion push dentro de la funcion de eventoBtnAgregar
 * 4)Crear funcion para renderizar la lista de seguimiento en el sitio
 * 5)Funcion borrar moneda de la lista de seguimiento
 * 6)Local storage
 * 
 * --------------DUDAS------------------
 * A)Como hacer para que el boton de lista monedas desplifue la lista solo una vez (que sea temporal).
 * B)Que la lista este dentro de una card (de la misma forma que hiciste la UL).
 */


//Array monedas

const monedas = [
{
    nombre: 'BTC',
    precio: 20000,
    marketcap: 20000000,
    tokenHolders: 'N',
    id: 1,
},
{
    nombre: 'ETH',
    precio: 1000,
    marketcap: 10000000,
    tokenHolders: 'N',
    id:2,
},
{
    nombre: 'USDT',
    precio: 1,
    marketcap: 20000000,
    tokenHolders: 'N',
    id:3,
},
{
    nombre: 'ADA',
    precio: 2,
    marketcap: 600000,
    tokenHolders: 'N',
    id:4,
},
{
    nombre: 'BNB',
    precio: 400,
    marketcap: 300000,
    tokenHolders: 'N',
    id:5,
},
];

const btnDesplegarListaMonedas = document.querySelector('#btn-lista-monedas'); 
const divListadoMonedas= document.querySelector('#div-listado-monedas');
const ulListaDeSeguimiento= document.querySelector('#ul-lista-de-seguimiento');
//3)b-/ 6)
let listaDeSeguimiento = JSON.parse(localStorage.getItem('listaDeSeguimiento')) || [];
//-> la idea es que la variable listaDeSeguimiento se cargue con lo que alla en el local storage. 
// || [] ->operador avanzado: si da null, se crear un array vacio. Si el LS con el getiteim busca una key qeu no existe, devolvera null. Si esto, el array se cargaba de un null cuando el local storage estaba vacio. 


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
    ulListaDeSeguimiento.innerHTML =''; //-> limpia el ul en cada vuelta que da para que no se repita la renderizacion de la lista de seguimiento (para que no persista la carga anterior).
    listaDeSeguimiento.forEach(moneda=>{
        let li = document.createElement('li');
        li.innerHTML += ` 
        <hr> ${moneda.nombre} - Precio: $${moneda.precio} - Market cap: ${moneda.marketcap} - Token Holders: ${moneda.tokenHolders} - <button class='btnBorrar' id='btn-borrar${moneda.id}'>Borrar</button>  `;
        ulListaDeSeguimiento.appendChild(li);
        
    })
    //6)
    localStorage.setItem('listaDeSeguimiento', JSON.stringify(listaDeSeguimiento));
    borrarMoneda();
}
//5)
function borrarMoneda(){
    listaDeSeguimiento.forEach(moneda =>{
        document.querySelector(`#btn-borrar${moneda.id}`).addEventListener('click',()=>{
            let indice = listaDeSeguimiento.findIndex(element => element.id === moneda.id)
            listaDeSeguimiento.splice(indice, 1);
            renderizarListaDeSeguimiento();

        })
    })
}

renderizarListaDeSeguimiento();