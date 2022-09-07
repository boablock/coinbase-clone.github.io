    
    
    
      let precioBtc = 20000;
      let precioEth = 2000;
      let dolar = 300;
  
      let moneda;
      let crypto; 
      let monto;

    let option;
    const datosUsuario =[
        {
            // id:1,
            nombre:'Pedro',
            mail:'pedro_montero@gmail.com',
            userName: 'Pepemonte1',
            passWord: 'Pepe123',
        }
    ]

    console.log(datosUsuario);

  

    while (option !== 4){
        option = Number(prompt('Ingrese una opcion:\n 1) Login/sing-up\n 2)Conversor crypto\n 3)Seccion favoritos\n 4) Salir'));
        switch(option){
            case 1:
                const nombre = prompt('Ingresa tu nombre');
                const mail = prompt('Ingresa tu mail');
                const userName = prompt('Ingresa tu usuario');
                const passWord =prompt ('Ingresa tu contraseña')
                // const id = getLastID() + 1;
                newUser(nombre, mail, userName, passWord);
                alert('Bienvenido' + nombre + 'tu mail registrado es: ' + mail);
                break;
            case 2:
                moneda = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'));
                crypto = parseInt(prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
                monto = parseInt(prompt('Ingrese el monto que desee convertir'));
                converter(moneda, crypto, monto);
                document.write(monto * precioBtc);
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
    
   

    const suma = (a,b) => a / b; 
    alert(suma(monto),precioBtc); 



    function converter(moneda, crypto, monto){
        
    if ( moneda === 1 && crypto === 1){
        return ('$' + monto + ' = '+ monto / precioBtc + 'BTC');
    }else if (moneda === 1 && crypto === 2){
        return ('$' + monto + ' = '+ monto / precioEth + 'ETH');
    } else if (moneda  === 2 && monto === 1){
        return ('$' + monto + ' = '+ monto / dolar / precioBtc + 'BTC');
    }else if (moneda === 2 && monto === 2){
        return ('$' + monto + ' = '+ monto / dolar / precioEth + 'ETH');
    }
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

     