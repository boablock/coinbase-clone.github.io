
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

// const coins = [
// {
//     name: 'Bitcoin',
//     ticker: 'BTC',
//     img: '../images/btc-log.png',
//     price: 20000,
//     marketcap: 20000000,
//     tokenHolders: 'N',
//     id: 1,
// },
// {
//     name: 'Ethereum',
//     ticker: 'ETH',
//     img: '../images/eth-log.png',
//     price: 2000,
//     marketcap: 10000000,
//     tokenHolders: 'N',
//     id: 2,
// },
// {
//     name: 'Binance',
//     ticker: 'BNB',
//     img: '../images/bnb-log.png',
//     price: 500,
//     marketcap: 5000000,
//     tokenHolders: 'N',
//     id: 3,
// },
// {
//     name: 'Cardano',
//     ticker: 'ADA',
//     img: '../images/ada-log.png',
//     price: 2,
//     marketcap: 4000000,
//     tokenHolders: 'N',
//     id: 4,
// },
// {
//     name: 'Theter',
//     ticker: 'USDT',
//     img: '../images/usdt-log.png',
//     price: 2000,
//     marketcap: 10000000,
//     tokenHolders: 'N',
//     id: 5,
// },

// ];

const btnDisplayCoinList = document.querySelector('#btn-coin-list'); 
const divCoinList= document.querySelector('#div-coin-list');
const ulWatchList= document.querySelector('#ul-watch-list');

let watchList= JSON.parse(localStorage.getItem('watchList')) || [];
//-> la idea es que la variable watchList se cargue con lo que alla en el local storage. 
// || [] ->operador avanzado: si da null, se crear un array vacio. Si el LS con el getitem busca una key qeu no existe, devolvera null. Si esto, el array se cargaba de un null cuando el local storage estaba vacio. 




function createCoinList(){ 

    divCoinList.innerHTML="";
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; 
    fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(coin=>{
        divCoinList.innerHTML +=
         ` 
         <div class="container1 container d-flex justify-content-center">
            <div class="card-content container d-flex justify-content-center ">
                <ul class="container d-flex justify-content-center align-items-center ">
                    <li class=" container d-flex justify-content-center align-items-center">
                        <div class="img-content">
                            <img src="${coin.image}" alt="">
                        </div>
                        <div class="div-coin-name">
                            <span class="coin-name">${coin.id}</span>
                        </div>
                        <button class='btnAddToWatchList' id='btn-add-coin${coin.id}'>Add Watchlist</button>
                    </li>
                </ul>
                
            </div>
        </div>
        `  
    }))
    .catch(error => console.log(error))
    
    addCoinEvent();
}


btnDisplayCoinList.addEventListener('click',()=>{
    createCoinList();
})


function addCoinEvent(){

    data.forEach(coin=>{
        document.querySelector(`#btn-add-coin${coin.id}`).addEventListener('click',()=>{
            addToWatchList(coin);
        })

    })
}

function addToWatchList(coin){
    let exists = watchList.some(coin=>coin.id === coins.id);
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

function watchListRendering(){
    ulWatchList.innerHTML =''; //-> limpia el ul en cada vuelta que da para que no se repita la renderizacion de la lista de seguimiento (para que no persista la carga anterior).
    watchList.forEach(coin=>{
        let li = document.createElement('li');
        li.innerHTML += ` 
        <hr> ${coin.name} - Price: $${coin.price} - Market cap: ${coin.marketcap} - Token Holders: ${coin.tokenHolders} - <button class='btnDelete' id='btn-delete${coin.id}'>Delete </button>  `;
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




