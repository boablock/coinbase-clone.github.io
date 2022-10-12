
/**FUNCIONALIDADES
 * Desplgar listado de criptomonedas
 * Agregar a lista de seguimiento las coins seleccionadas con su informacion pertinente 
 * Opcion de borrar de la lista de seguimiento
 * Gestion del local storage durante todo el proyecto
 */

/**NOTAS
 * 
 * 
 */
//Array objetos - coins

const coins = [
{
    name: 'Bitcoin',
    acronym: 'BTC',
    img: '../images/btc-log.png',
    precio: 20000,
    marketcap: 20000000,
    tokenHolders: 'N',
    id: 1,
},
{
    name: 'Ethereum',
    acronym: 'ETH',
    img: '../images/eth-log.png',
    precio: 2000,
    marketcap: 10000000,
    tokenHolders: 'N',
    id: 1,
},
{
    name: 'Binance',
    acronym: 'BNB',
    img: '../images/bnb-log.png',
    precio: 500,
    marketcap: 5000000,
    tokenHolders: 'N',
    id: 1,
},
{
    name: 'Cardano',
    acronym: 'ADA',
    img: '../images/ada-log.png',
    precio: 2,
    marketcap: 4000000,
    tokenHolders: 'N',
    id: 1,
},
{
    name: 'Theter',
    acronym: 'USDT',
    img: '../images/usdt-log.png',
    precio: 2000,
    marketcap: 10000000,
    tokenHolders: 'N',
    id: 1,
},

];

const btnDisplayCoinList = document.querySelector('#btn-coin-list'); 
const divCoinList= document.querySelector('#div-coin-list');
const ulWatchList= document.querySelector('#ul-watch-list');
//3)b-/ 6)
let watchList= JSON.parse(localStorage.getItem('watchList')) || [];
//-> la idea es que la variable watchList se cargue con lo que alla en el local storage. 
// || [] ->operador avanzado: si da null, se crear un array vacio. Si el LS con el getitem busca una key qeu no existe, devolvera null. Si esto, el array se cargaba de un null cuando el local storage estaba vacio. 


// 1)Creo la lista tomando los datos de mi array y confeccionandola con templete strings
function createWatchList(){ //-->aca iria la API? para poder recorrerla y crear al lista?
    divCoinList.innerHTML="";
    coins.forEach(coin=>{

        divCoinList.innerHTML +=
         ` 
         <div class="container1">
            <div class="card-content d-flex row">
                <ul class="container">
                    <li class="d-flex justify-content-start align-items-center">
                        <div class="img-content">
                            <img src="${coin.img}" alt="">
                        </div>
                        <div class="div-coin-name">
                            <span class="coin-name">${coin.name}</span>
                        </div>
                        <button class='btnAddToWatchList' id='btn-add-coin${coin.id}'>Add Watchlist</button>
                    </li>
                </ul>
                
            </div>
        </div>
        `  
    })
    addCoinEvent();
}

//2)Evento click al boton para desplegar la lista, aqui invocare a la funcion que crea la lista.
btnDisplayCoinList.addEventListener('click',()=>{
    createWatchList();
})

//3)a-Aqui creo un evento localizado dentro de mi lista dinamica, para poder crea la lista de seguimiento de mi usuario en funcion a la primer lista desplegada (es importante que la primer lista sea una API ya que necesito muchas coins).
function addCoinEvent(){

    coins.forEach(coin=>{
        document.querySelector(`#btn-add-coin${coin.id}`).addEventListener('click',()=>{
            addToWatchList(coin);
        })

    })
}
//3)c- (VER SI FUNCIONA EL PUSH). Aqui creo la funcion de mi evento listener que finalmente agregara la coin a la lista de seguimiento final. Es importante hacer la logica para identificar si la coin ya esta en la lista o aun no fue agregada. 
function addToWatchList(coin){
    let exists = watchList.some(coin=>coin.id === coin.id);
    if (exists === false){ //-> la coin va a entrar a la lista de seg por este if solo si no existiese la coin en el array. 
        coin.cantidad = 1; //-> propiedad creada en el ejemplo del after
        watchList.push(coin);
    }
    else{
        let findCoin = watchList.find(coin => coin.id === coin.id) // 
        findCoin.cantidad++;
    }
    console.log(watchList);
    watchListRendering(); //-->voy a querer que se renderice la lista cada vez que se agregue un producto a la misma (al array listaDeSeguimietno).
}
//4)Finalmente se renderiza la lista de seguimiento en funcion ah:
//-> con esta funcion deja de pushear.
function watchListRendering(){
    ulWatchList.innerHTML =''; //-> limpia el ul en cada vuelta que da para que no se repita la renderizacion de la lista de seguimiento (para que no persista la carga anterior).
    watchList.forEach(coin=>{
        let li = document.createElement('li');
        li.innerHTML += ` 
        <hr> ${coin.nombre} - Price: $${coin.precio} - Market cap: ${coin.marketcap} - Token Holders: ${coin.tokenHolders} - <button class='btnDelete' id='btn-delete${coin.id}'>Delete </button>  `;
        ulWatchList.appendChild(li);
        
    })
    //6)
    localStorage.setItem('watchList', JSON.stringify(watchList));
    deleteCoin();
}
//5)
function deleteCoin(){
    watchList.forEach(coin =>{
        document.querySelector(`#btn-delete${coin.id}`).addEventListener('click',()=>{
            let indice = watchList.findIndex(element => element.id === coin.id)
            watchList.splice(indice, 1);
            watchListRendering();

        })
    })
}

watchListRendering();


/*                
        ` 
        <div class="container d-flex justify-content-center ">
            <h4>${coin.nombre}</4>
            <button class='btnAddToWatchList' id='btn-add-coin${coin.id}'>Add</button>
        </div> 
        `
*/