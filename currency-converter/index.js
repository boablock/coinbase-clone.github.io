



/*** PASOS DEL CONVERSOR
 * 1)Bienvenida y datos de usuario (funcion login) 
 * 2)Ingresar moneda (USD/ARS) (funcion converter)
 * 3)Ingresar criptomoneda a convertir
 * 4)Ingresar monto en USD/ARS
 * 5)Devolver resultado
 */

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

 

 

 
 const precioBtc = 20000;
 const precioEth = 2000;
 const dolar = 300; 

 function converter(){
     let de;
     let a; 
     let monto; 
     do{
         de = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'))
         a = parseInt (prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
         monto = parseFloat( prompt('Ingrese el monto que desee convertir'));

     } while ((de != 1 && de != 2) || (a !=1 && a != 2)); //--> ¿Como hacer para que continue el ciclo cuando se ingresa un montor = NaN? (que no sea un numero)

     if ( de === 1 && a === 1){
         return ('$' + monto + ' = '+ monto / precioBtc + 'BTC');
     }else if (de === 1 && a === 2){
         return ('$' + monto + ' = '+ monto / precioEth + 'ETH');
     } else if (de  === 2 && a === 1){
         return ('$' + monto + ' = '+ monto / dolar / precioBtc + 'BTC');
     }else if (de === 2 && a === 2){
         return ('$' + monto + ' = '+ monto / dolar / precioEth + 'ETH');
     }
 }

 // console.log (conversor()); // se usa console.log para ver el valor que tiene las variabels o estan trabajando las funciones
 let converResult = converter();

 console.log(converResult);

 alert(converResult);

     