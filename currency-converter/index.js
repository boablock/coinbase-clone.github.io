
  // INCORPORAR-EVENTOS

let precioBtc = 20000;
let precioEth = 2000;
let resultado = 0;
let monto;

function conversor() {
  monto = parseInt(document.querySelector("#monto").value);

  if ( document.querySelector("#USD").checked && document.querySelector("#BTC").checked){
    return (resultado = monto / precioBtc);
  } else if (document.querySelector("#ARS").checked && document.querySelector("#BTC").checked){
    return (resultado = monto / precioBtc);
  } else if (document.querySelector("#USD").checked &&document.querySelector("#ETH").checked){
    return (resultado = monto / precioEth);
  } else if (document.querySelector("#ARS").checked && document.querySelector("#ETH").checked){
    return (resultado = monto / precioEth);
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

     