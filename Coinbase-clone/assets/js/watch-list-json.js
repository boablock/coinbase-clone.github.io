/**FUNCIONALIDADES
 * Desplgar listado de criptomonedas
 * Agregar a lista de seguimiento las coins seleccionadas con su informacion pertinente 
 * Opcion de borrar de la lista de seguimiento
 * Gestion del local storage durante todo el proyecto
 */

/**NOTAS
 * Como guardar la data de la api fuera de las llaves para poder arrastrar la info a otras funciones. 
 * Hacer el primer paso de que funcione con un Json. 
 * in the else of addToWatchlist, add an toastify alert. 
 * agregar link o boton en cada li de watchlist para ver mas info de las monedas.  
 */



const btnDisplayCoinList = document.querySelector('#btn-coin-list'); 
const divCoinList= document.querySelector('#div-coin-list');
const ulWatchList= document.querySelector('#ul-watch-list');

// let watchList = JSON.parse(localStorage.getItem('watchlist')) || []; 
let watchList = [];
//-> la idea es que la variable watchList se cargue con lo que alla en el local storage. 
// || [] ->operador avanzado: si da null, se crear un array vacio. Si el LS con el getitem busca una key qeu no existe, devolvera null. Si esto, el array se cargaba de un null cuando el local storage estaba vacio. 

btnDisplayCoinList.addEventListener('click', apiRequest);     

function apiRequest (){
    const url = '../criptomonedas.json'
    fetch(url)
        .then(res =>  res.json())
        .then(data => {
            createCoinList(data)
            console.log(data)
        }); 
}




function createCoinList(data){  //--> do the same process with append child (you dont need the +=). Tmb con un MAP, luego del retorno del map, hay hacer un inner html
    divCoinList.innerHTML="";

     data.forEach(coin=>{
    //   console.log(data);
        divCoinList.innerHTML +=
         ` 
         <div class="container1 container d-flex justify-content-center">
            <div class="card-content container d-flex justify-content-center ">
                <ul class="container d-flex justify-content-center align-items-center ">
                    <li class=" container d-flex justify-content-center align-items-center">
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
        // console.log(coin.id);
    })
   
    addCoinEvent(data);
}


function addCoinEvent(array){
    
  array.forEach(coin=>{
        document.querySelector(`#btn-add-coin${coin.id}`).addEventListener('click',()=>{
            console.log(coin);
            addToWatchList(coin);
            
        })
   
    })
}

//Aca estoy:minuto 28

function addToWatchList(coin){
    let exist = watchList.some(productoSome => productoSome.id === coin.id); //-> some retrun true or false, if the elemento is in the array or not. if there is a coindicence, it will return true, if not, false. Remember that you are recibing a coin throught the parameter 'coin' (where you called the function addToWatchList).
    console.log(exist);
    if( exist === false){
        watchList.push(coin)
    }else{
        alert('This coin is already in your watch list')
    }
    console.log(watchList);
    watchListRendering(); 
    // localStorage.setItem('watchlist', JSON.stringify(watchList));
}



function watchListRendering(){
    ulWatchList.innerHTML =''; //-> limpia el ul en cada vuelta que da para que no se repita la renderizacion de la lista de seguimiento (para que no persista la carga anterior).
    watchList.forEach(coin=>{ //-> at this level, the watchList must have coins inside (you will called this function at this point, inside 'addToWAtchList' for example).
        let li = document.createElement('li');
        li.innerHTML += ` 
        <hr> <img id="img-wathlist" src='${coin.img}'> ${coin.name} - Price: $${coin.price} - Market cap: ${coin.marketcap} - Token Holders: ${coin.tokenHolders} - <button class='btnDelete' id='btn-delete${coin.id}'>Delete </button>  `;
        ulWatchList.appendChild(li);
        
    })
    // //6)
  
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


 /*
watchListRendering();

createCoinList();


function consultarJson(){
    const jsonFile = '../criptomonedas.json'; 
    fetch(jsonFile)
    .then( function (res){
        return res.json();
    })
    .then (function(data){
        console.log(data); 
    })
}

consultarJson();

*/
