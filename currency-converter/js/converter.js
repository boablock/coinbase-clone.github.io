
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






/*
    // MASTER
    
    // Array para recolectar los datos de cada usuario
    
    const datosUsuarios =[
      {
          id:1,
          nombre:'Pedro',
          apellido: 'Perez',
          mail:'pedro_montero@gmail.com',
          usuario: 'Pepemonte1',
          contraseña: 'Btc1230',
          cryptoFav: 'BTC',
      },
      {
          id:2,
          nombre:'Juan',
          apellido: 'Gonzales',
          mail:'juan_gonzales@gmail.com',
          usuario: 'Juaneth1',
          contraseña: 'Ethereum293',
          cryptoFav: 'ETH',
      },
      {
          id:3,
          nombre:'Manuel',
          apellido: 'Conde',
          mail:'manu_conde@gmail.com', 
          usuario: 'Manueht12',
          contraseña: 'Ethereum999',
          cryptoFav: 'ETH',
      }
  ]
  // console.log(datosUsuarios);

  //Metodo filter datosUsuarios.cryptoFav
  let userCryptoFav = datosUsuarios.filter(function(datosUsuarios){return datosUsuarios.cryptoFav === 'ETH';})
  console.log(userCryptoFav);

  //Metodo filter datosUsuarios.apellido
  const busqueda = datosUsuarios.filter(dato =>{return dato.apellido  === 'Gonzales';})
  // console.log(busqueda);

  // Array para recolectar las conversiones de cada usuario
  const conversionesUsuarios =[
      {   
          id:1, 
          moneda: 1,
          crypto:1,
          monto: 10000, 
      },
      {
          id:2,
          moneda:2,
          crypto:1,
          monto: 100, 
      }
  ]
  // console.log(conversionesUsuarios);
 
  //Array inversiones de usuarios
  let userInvestments =[
      {
          cryptoComprada: 'BTC',
          cantidadComprada: 0.01, 
          id:1,
      },
      {
          cryptoComprada:'ADA',
          cantidadComprada: 100,
          id:2,
      }
      
  ]
  // console.log(userInvestments);

  // Metodo filter userInvestments.cryptoComprada (HACER)

  //Array monedas
  const monedas = ['USD','ARS',]

  //Array cryptomonedas
  const cryptomonedas = [ 'BTC','ETH','ADA','BNB','USDT']
  // console.log(cryptomonedas);

   // funcion para obtener ID
   function getLastIdUsers(){ //--> averiguar mas procesos para saber ID
    return datosUsuarios.length; //--> . length -> la cantidad de usuarios que tengo. 
}

function getLastIdInvestments(){
    return userInvestments.length;
}
//Funcion para pushear cada usuario ingresado al arrray datosUsuarios (llenar de datos el array)
function newUser (nombre, apellido, mail, usuario, contraseña, cryptoFavorita, id){ //--> Se podrian haber puesto los promps aca adentro(testearlo en una nueva rama).
    datosUsuarios.push({
        nombre,
        apellido,
        mail,
        usuario, 
        contraseña,
        cryptoFavorita,
        id,
    })
    console.log(datosUsuarios);
    // return 'Usuario agregado correctamente ' + id; 
}

//Funcion para pushear cada nueva conversion al array conversionesUsuarios
function newConversion (moneda, crypto, monto){
    conversionesUsuarios.push({
        moneda: monedas[moneda -1],
        crypto: cryptomonedas [crypto -1],
        monto,
    })
    
}
//Funcion para eliminar conversion
function deleteConversion(id){
    conversionesUsuarios = conversionesUsuarios.filter (dato =>dato.id != id);
}

//Funcion para pushear nuevas inversiones del usuario al array userInvestments
function newInvestment (cryptoComprada, cantidadComprada, id){
    userInvestments.push({
        cryptoComprada:cryptomonedas[cryptoComprada -1],//--> cryptoComprada -1 es una posicion de cryptomonedas. 1 de cryptoCompradas equivale a la posicion 0 del array cryptomonedas, de esa forma se hace que coincidan. 
        cantidadComprada,
        id, 
       
    })
    console.log(userInvestments);
}

// Funcion para imprimr todas las inversiones
function getAllInvestments(){
userInvestments.forEach((dato)=> console.log(dato.cantidadComprada + '-' + dato.cryptoComprada)); 
//-->"dato" va a ser cada elemento de userInvestments en cada iteracion (forEach es un bucle que itera x cadaelemento del array). dato. se usa para que no imprima en formato array, si no el dato concreto. 
// 
}


// Funcion para eliminar inversion
function deleteInvestment(id){ //-> estaba querido reasignar una constante (array userInvestments), por eso lo cambie a let. 
    userInvestments = userInvestments.filter (dato => dato.id != id);
}






// const suma = (a,b) => a / b; 
// alert(suma(monto),precioBtc); 

*/