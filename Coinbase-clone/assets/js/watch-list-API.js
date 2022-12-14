
const btnDisplayCoinList = document.querySelector('#btn-coin-list'); 
const divCoinList= document.querySelector('#div-coin-list');
const ulWatchList= document.querySelector('#ul-watch-list');

// let watchList = JSON.parse(localStorage.getItem('watchlist')) || []; 
let watchList = [];
//-> The idea is to download watchlist array with the info stored in the localStorage
// || [] ->operador avanzado:  If the LS getitem looking for non.existent key, it will return null. if return null, it will create an empty array. namely, the array is loaded only if the local storage is empty. 

btnDisplayCoinList.addEventListener('click', apiRequest);     

function apiRequest (){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    fetch(url)
        .then(res =>  res.json())
        .then(data => {
            createCoinList(data.Data)
            console.log(data.Data);
        }); 
}
// apiRequest();

function createCoinList(data){  //--> do the same process with append child (you dont need the +=). With map to. 
    divCoinList.innerHTML="";
    divCoinList.classList.add("div-coin-list");
     data.forEach(coin=>{

        const {FullName, Id} = coin.CoinInfo; //-> 404 error when i bring the coins logo images.
    //   console.log(data);
    
        divCoinList.innerHTML +=
         ` 
         <div class="container1 container d-flex justify-content-center">
            <div class="card-content container d-flex justify-content-center ">
                <ul class="container d-flex justify-content-center align-items-center ">
                    <li class=" container d-flex justify-content-center align-items-center">
                        <div class="img-content">
                            <img src="../images/btc-log.png" alt=""> 
                        </div>
                        <div class="div-coin-name">
                            <span class="coin-name">${FullName}</span>
                        </div>
                        <button class='btnAddToWatchList' id='btn-add-coin${Id}'>Add Watchlist</button>
                    </li>
                </ul>
                
            </div>
        </div>
        `  
    })

    addCoinEvent(data);
}

function addCoinEvent(array){ //->  Array of ten objects, each with his CoinInfo.Id, DISPLAY.USD.MKTCP, etc. 
  array.forEach(coin=>{
    // const {Id} = coin.CoinInfo;
        document.querySelector(`#btn-add-coin${coin.CoinInfo.Id}`).addEventListener('click',()=>{
            console.log(coin.CoinInfo.Id);
            addToWatchList(coin);
            console.log(coin.CoinInfo);
            console.log(coin.DISPLAY.USD.MKTCAP);
        })
   
    })
}

function addToWatchList(coin){
    let exist = watchList.some(productoSome => productoSome.CoinInfo.Id === coin.CoinInfo.Id); //-> .some retrun true or false, if the element is in the array or not. if there is a coindicence, it will return true, if not, false. Remember that you are recibing a coin throught the parameter 'coin' (where you called addToWatchList function).
    console.log(exist);
    if( exist === false){
        watchList.push(coin)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This coin is already in your watchlist!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    console.log(watchList);
    watchListRendering(); 
    // localStorage.setItem('watchlist', JSON.stringify(watchList));
}

function watchListRendering(){
    ulWatchList.innerHTML =''; //->  clean the ul in each lap to not repeat the  watchlist renderization; with this, the previuos load doesnt persist
    watchList.forEach(coin=>{ //-> at this level, the watchList must have coins inside (you will called this function at this point, inside 'addToWAtchList' for example).
        let li = document.createElement('li');
        li.innerHTML += `
        <hr> ${coin.CoinInfo.FullName} - Price: ${coin.DISPLAY.USD.PRICE} - VOL 24hs: ${coin.DISPLAY.USD.TOTALVOLUME24H
        } - Max Supply: ${coin.CoinInfo.MaxSupply} - <button class='btnDelete' id='btn-delete${coin.CoinInfo.Id}'>Delete </button>  `;
        ulWatchList.appendChild(li);
        
    })

    deleteCoin();
}

function deleteCoin(){
    watchList.forEach(coin =>{
        document.querySelector(`#btn-delete${coin.CoinInfo.Id}`).addEventListener('click',()=>{
            let indice = watchList.findIndex(element => element.CoinInfo.Id === coin.CoinInfo.Id)
            watchList.splice(indice, 1);
            watchListRendering();

        })
    })
}

