

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

    let precioBtc = 20000;
    let precioEth = 2000;
    let dolar = 300;
  
    let moneda;
    let crypto; 
    let monto;

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
                alert('Bienvenido ' + nombre);
                break;
            case 2:
                moneda = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'));
                crypto = parseInt(prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
                monto = parseInt(prompt('Ingrese el monto que desee convertir'));
                alert(converter(moneda, crypto, monto));
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
  
  


    // const suma = (a,b) => a / b; 
    // alert(suma(monto),precioBtc); 

    // function suma (a,b){
    //     return a/b; 
    // }

    // console.log(suma(100,10));




     