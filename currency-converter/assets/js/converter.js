
//Queries selectors
const moneda_uno = document.querySelector('#moneda-uno');
const moneda_dos = document.querySelector('#moneda-dos');
const cantidad_uno = document.querySelector('#cantidad-uno');
const cantidad_dos = document.querySelector('#cantidad-dos');
const btn_swap = document.querySelector('#btn-swap');
const equivalencia = document.querySelector('#equivalencia');
// Nodo select de prueba
const select_crypto = document.querySelector('#cryptomonedas');

// Prueba select con API coingeko

function createSelect(){
  select_crypto.innerHTML="";
  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; 
    fetch(url)
    .then(response => response.json())
    .then(data => data.forEach(coin=>{
      console.log(data);
      select_crypto.innerHTML +=
        ` 
         <option value="${coin.symbol}">${coin.symbol}</option>

        `  
    }))
    .catch(error => console.log(error))
    
}

select_crypto.addEventListener('click', createSelect);






//Funcion conversor, fetch + API
function converter(){
const monedaUno = moneda_uno.value;
const monedaDos = moneda_dos.value; 
fetch(`https://v6.exchangerate-api.com/v6/a92f12f8a3348cc4b24e521f/latest/${monedaUno}`)
.then(res =>res.json())
.then(data =>{
  console.log(data);
  const taza = data.conversion_rates[monedaDos];
  equivalencia.innerHTML= `1 ${monedaUno} = ${taza} ${monedaDos}`;
  cantidad_dos.value = (cantidad_uno.value * taza).toFixed(2);
  });
}


taza.addEventListener('click',()=>{
  temp = moneda_uno.value;
  moneda_uno.value = moneda_dos.value;
  moneda_dos.value = temp;
  converter();
})

//Listeners
moneda_uno.addEventListener('change', converter);
cantidad_uno.addEventListener('input', converter);
moneda_dos.addEventListener('change', converter);
cantidad_dos.addEventListener('input', converter);
  
converter();