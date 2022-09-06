

/*** PASOS DEL CONVERSOR
 * 1)Bienvenida y datos de usuario (funcion login) 
 * 2)Ingresar moneda (USD/ARS) (funcion converter)
 * 3)Ingresar criptomoneda a convertir
 * 4)Ingresar monto en USD/ARS
 * 5)Devolver resultado
 */




    let option;
    const datosUsuario =[
        {
            id:1,
            nombre:'Pedro',
            mail:'pedro_montero@gmail.com',
            userName: 'Pepemonte1',
            passWord: 'Pepe123'
        }
    ]
    while (option !== 4){
        option = Number(prompt('Ingrese una opcion:\n 1) Login/sing-up 2)Conversor crypto\n 3)Seccion favoritos\n 4) Salir'));
        switch(option){
            case 1:
                const nombre = prompt('Ingresa tu mail');
                const mail = prompt('Ingresa tu mail');
                const userName = prompt('Ingresa tu mail');
                const passWord =prompt ('Ingresa tu password')
                const id = getLastID() + 1;
                newUser(nombre, mail, userName, passWord);
                break;
            case 2:
                const moneda = parseInt(prompt('Ingrese la opcion segun su moneda'));
                const crypto = parseInt(prompt('Ingrese la opcion segun la cryptomoneda deseada'));
                const monto = parseFloat( prompt('Ingrese el monto que desee convertir'));

                alert('Ingresaste la opcion 2');
                break;
            case 3:
                alert('Ingresaste la opcion 3');
                break;
            case 4:
                alert('Ingresaste la opcion 4');
                break;
            default:
                alert('La opcion ingresada no es correcta, intente nuevamente');
        }
    }


    function newUser (nombre, mail, usuario, contraseña){
        datosUsuario.push({
            nombre,
            mail,
            usuario,
            contraseña,
        })
    }


/*
    let userAndPass ='';
    function login (){ 
        alert('Bienvenido a ConversorCripto')

        let user = prompt('Ingrese su usuario')
        let passWord = prompt('Ingrese su contraseña')
        while (user === '' || passWord === ''){
            user = prompt('Ingrese su usuario')
            passWord = prompt('Ingrese su contraseña')
        }
        userAndPass = user + passWord
        return userAndPass;
    }
    userAndPass = login();
    console.log(userAndPass);
*/




    






 
//  const precioBtc = 20000;
//  const precioEth = 2000;
//  const dolar = 300; 

//  function converter(){
//      let de;
//      let a; 
//      let monto; 
//      do{
//          de = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'))
//          a = parseInt (prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
//          monto = parseFloat( prompt('Ingrese el monto que desee convertir'));

//      } while ((de != 1 && de != 2) || (a !=1 && a != 2)); //--> ¿Como hacer para que continue el ciclo cuando se ingresa un montor = NaN? (que no sea un numero)

//      if ( de === 1 && a === 1){
//          return ('$' + monto + ' = '+ monto / precioBtc + 'BTC');
//      }else if (de === 1 && a === 2){
//          return ('$' + monto + ' = '+ monto / precioEth + 'ETH');
//      } else if (de  === 2 && a === 1){
//          return ('$' + monto + ' = '+ monto / dolar / precioBtc + 'BTC');
//      }else if (de === 2 && a === 2){
//          return ('$' + monto + ' = '+ monto / dolar / precioEth + 'ETH');
//      }
//  }

//  // console.log (conversor()); // se usa console.log para ver el valor que tiene las variabels o estan trabajando las funciones
//  let converResult = converter();

//  console.log(converResult);

//  alert(converResult);

     