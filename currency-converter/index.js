
  // INCORPORAR-EVENTOS

let precioBtc = 20000;
let precioEth = 2000;
let resultado = 0;
let monto;

function conversor() {
  monto = parseInt(document.querySelector("#monto").value);
  let de = document.querySelector('#de').value;
  let a = document.querySelector ('#a').value;
  let USD = 300;
  if ( de === '1' && a === '1'){
    return (resultado = monto / precioBtc + ' BTC');
  } else if (de === '2' && a === '1'){
    return (resultado = (monto / USD) / precioBtc + ' BTC');
  } else if (de === '1' && a === '2'){
    return (resultado = monto / precioEth + ' ETH');
  } else if (a === '2' && de === '2'){
    return (resultado = (monto / USD) / precioEth + ' ETH');
  } else {
    alert("Tienes que completar todos los inputs");
  }
}

const btnConvertir = document.querySelector("#btnConvertir");
agregandoResultado = document.createElement("div");

btnConvertir.addEventListener("click", () => {
    let resultadoFinal = conversor();
    console.log(resultadoFinal);
    agregandoResultado.innerHTML = `<h1>${resultadoFinal}</h1>`;
});

document.body.append(agregandoResultado);

