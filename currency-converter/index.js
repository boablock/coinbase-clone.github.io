


  // INCORPORAR-EVENTOS

let precioBtc = 20000;
let precioEth = 2000;
let resultado= 0;  
let monto;

function conversor(){
    monto = parseInt(document.querySelector('#monto').value); 

    if (document.querySelector('#USD').checked && document.querySelector('#BTC').checked){
        return resultado = monto / precioBtc ; 
    }else if (document.querySelector('#ARS').checked && document.querySelector('#BTC').checked){
        return resultado = monto / precioBtc; 
    }else if (document.querySelector('#USD').checked && document.querySelector('#ETH').checked){
        return resultado = monto / precioEth; 
    }else if (document.querySelector('#ARS').checked && document.querySelector('#ETH').checked){
        return resultado = monto / precioEth; 
    }else{
        alert('Tienes que completar todos los inputs');
    }
    const btnConvertir = document.querySelector('#btnConvertir');
}

let resultadoFinal = conversor();
console.log(resultadoFinal); //--> IMPRIME UNDEFINED
console.log(resultado);


//1) traigo el nodo button con id="btnConvertir":
const btnConvertir = document.querySelector('#btnConvertir');
//2) le aplico un evento al boton y por paramentro le asigno un evento click + la funcion para cuando suceda el evento:
btnConvertir.addEventListener('click', () => console.log(conversor()));  //--> HASTA ACA FUNCIONA
//3) accedo al nodo padre donde estara mi nuevo elemento
const padreResultado = document.querySelector('#padreResultado');
//4)creo nodo/ elemento h3
agregandoResultado = document.createElement('div');
//4) le agrego el contendio (resultadoFinal) con inner.HTML
agregandoResultado.innerHTML = `<h3>${resultadoFinal}</h3>`; 
//5) agregar el nodo HIJO al nodo PADRE
document.body.append(agregandoResultado);


// no puedo capturar el resultado de la funcion y ponerla en un nodo. 





     