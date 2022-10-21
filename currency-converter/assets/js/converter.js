
  // SEGUNDA-ENTREGA


let precioBtc = 20000;
let precioEth = 2000;
let resultado = 0;
let monto;

const moneda = document.querySelector('#moneda').value;
const crypto = document.querySelector ('#crypto').value;

function conversor() {
  monto = parseInt(document.querySelector("#monto").value);

  let USD = 300;
  if ( moneda === '1' && crypto === '1'){
    return (resultado = monto / precioBtc + ' BTC');
  } else if (moneda === '2' && crypto === '1'){
    return (resultado = (monto / USD) / precioBtc + ' BTC');
  } else if (moneda === '1' && crypto=== '2'){
    return (resultado = monto / precioEth + ' ETH');
  } else if (crypto === '2' && moneda === '2'){
    return (resultado = (monto / USD) / precioEth + ' ETH');
  } else {
    alert("Tienes que completar todos los inputs");
  }


}

// Agregando listener en el boton convertir que mostrar resultado en h3:
const btnConvertir = document.querySelector("#btnConvertir");
agregandoResultado = document.createElement("div");

btnConvertir.addEventListener("click", () => {
    let resultadoConversion = conversor();
    console.log(resultadoConversion);
    agregandoResultado.innerHTML = `<h1>${resultadoConversion}</h1>`;

});

document.body.append(agregandoResultado);



  class Conversiones{
    constructor(moneda, crypto, monto){
      this.moneda = moneda;
      this.crypto = crypto;
      this.monto = monto; 
    }
  }

  // Como hago para capturar la seleccion de la moneda y mandar el dato a un array de conversiones?

//   const selectMoneda = document.querySelector('#de');
  
//   selectMoneda.addEventListener('click',convert); 
//   function convert (){
//     console.log(selectMoneda);
//   }


  
