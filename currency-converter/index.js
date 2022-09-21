

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
    
    let option;
    let precioBtc = 20000;
    let precioEth = 2000;
    let dolar = 300;
    let moneda;
    let crypto; 
    let monto;
    // Estrucura inicial, condicional base
    while (option !== 4){
        option = Number(prompt('Ingrese una opcion:\n 1) Login/sing-up\n 2)Conversor crypto\n 3) Seccion inversiones \n4) Salir'));
        switch(option){
            case 1:
                const nombre = prompt('Ingresa tu nombre');
                const apellido = prompt('Ingresa tu apellido');
                const mail = prompt('Ingresa tu mail');
                const usuario = prompt('Ingresa tu usuario');
                const contraseña =prompt ('Ingresa tu contraseña');
                const cryptoFav = prompt ('Cual es tu cryptomoneda favorita? \n1)BTC\n2)ETH');
                const creationIdusers = getLastIdUsers() + 1;
                // const id = datosUsuarios.length + 1; //--> se haria de esta forma, pero lo hicimos con una funcion para abstraer y encapsular un comportamiento e invocarlo aca. 
                newUser(nombre, apellido, mail, usuario, contraseña, cryptoFav, creationIdusers); //--> chequear el ultimo id para que sirve. Como pushea el id al array?  
                alert('Bienvenido ' + nombre + 'ID: '+ creationIdusers);
                break;
            case 2:
                moneda = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'));
                crypto = parseInt(prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
                monto = parseInt(prompt('Ingrese el monto que desee convertir'));
                alert(converter(moneda, crypto, monto)); //->sin un alert o console.log no se aprovechaba el return de la funcion converter. Por eso no mostraba nada. 
                newConversion(moneda, crypto, monto);
                break;
           
            case 3:
                alert('Bienvenido a la seccion inversiones')
                optionInvestmentSection = parseInt(prompt('ingrese la opcion que desee:\n1)Agregar inversion \n2)Ver inversiones\n3)Eliminar inversion'));
                if (optionInvestmentSection === 1){
                cryptoComprada = prompt('Ingrese la cryptomoneda que a comprado: \n1) BTC\n2) ETH\n3) ADA \n4)BNB \n 5)USDT');
                cantidadComprada= parseFloat(prompt('Ingrese la cantidad comprada en unidades'));
                let creationIdInvestments = getLastIdInvestments() +1;
                newInvestment(cryptoComprada, cantidadComprada, creationIdInvestments); 
                alert('Usted a agregado la siguiente inversion: \n ' + cryptoComprada  + ' - ' + cantidadComprada + ' ID: ' + creationIdInvestments);
                }else if (optionInvestmentSection === 2){
                    getAllInvestments(); // me tira undefined al final 
                }else if (optionInvestmentSection === 3){
                    let deleteID = Number(prompt('Ingrese el id de la inversion que quiera eliminar'));
                    deleteInvestment(deleteID);
                }

                break;
            case 4:
                alert('Gracias por visitarnos!')
                break; 
            default:
                alert('La opcion ingresada no es correcta, intente nuevamente');
        }
    }
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

    // funcion para realizar laz conversionsz
    function converter(moneda, crypto, monto){
        if ( moneda === 1 && crypto === 1){
            return ('$' + monto + ' = '+ monto / precioBtc + 'BTC');
        }else if (moneda === 1 && crypto === 2){
            return ('$' + monto + ' = '+ monto / precioEth + 'ETH');
        } else if (moneda  === 2 && crypto === 1){
            return ('$' + monto + ' = '+ monto / dolar / precioBtc + 'BTC');
        }else if (moneda === 2 && crypto === 2){
            return ('$' + monto + ' = '+ monto / dolar / precioEth + 'ETH');
        }
    }
  
  


    // const suma = (a,b) => a / b; 
    // alert(suma(monto),precioBtc); 


    