
const form = document.querySelector("#form-search");
const moneda = document.querySelector("#moneda");
const criptomoneda = document.querySelector("#criptomonedas");
const formContainer = document.querySelector(".form-side");
const containerAnswer = document.querySelector(".container-answer");


const objBusqueda = { //-> el evento "change" seteara este objeto , evento que tiene asociada (se llamo) a la funcion getValue
    moneda: '',
    criptomoneda: '',
}

    consultarCriptos();

    form.addEventListener('submit', submitForm);
    moneda.addEventListener('change', getValue); //-> the e.target.name of the getValue f(x) will be 'moneda'
    criptomoneda.addEventListener('change', getValue);//-> e.target.name of the getValue f(x) will be 'criptomoneda', and the value will be the user selection: objBusqueda[e.target.name] = e.target.value;
    
function submitForm(e){
    e.preventDefault();
    const {moneda, criptomoneda} = objBusqueda;
    if (moneda === '' || criptomoneda === '' ) {
        showError('Complete todos los campos');
        return;
    }
    consultarAPI(moneda, criptomoneda);
    //console.log(moneda);
    //console.log(criptomoneda);

}


function consultarAPI(moneda, criptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            mostrarCotizacion(resultadoJson.DISPLAY[criptomoneda][moneda]); //-> data response setting
            console.log(resultadoJson.DISPLAY[criptomoneda][moneda]);
        })
        .catch(error => console.log(error));
}

function mostrarCotizacion(data){
    clearHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = data;
    const answer = document.createElement('div');
    answer.classList.add('display-info');
    console.log(PRICE);

    answer.innerHTML = `

        <p class="main-price">Precio: <span>${PRICE}</span></p>
        <p>Precio más alto del día:: <span>${HIGHDAY}</span></p>
        <p>Precio más bajo del día: <span>${LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>
        <p>Última Actualización: <span>${LASTUPDATE}</span></p>
    `;

    containerAnswer.appendChild(answer);
}



function showError(mensage){
    const error = document.createElement('p');
    error.classList.add("error");
    error.textContent = mensage;
    formContainer.appendChild(error);
    setTimeout(() => error.remove(), 3000);
}

function getValue(e){ //-> here you will get the value of the select where the function getValue is called. And then, both values (both selections, moneda y cryptomoneda) will be stored in the 'ObjBusqueda'.
    objBusqueda[e.target.name] = e.target.value;
    console.log(e.target.name); 
}

function consultarCriptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            selectCriptos(respuestaJson.Data);
            //console.log(respuestaJson.Data);
        })
            .catch(error => console.log(error));
    }

function selectCriptos(criptos){
    criptos.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;
        const option = document.createElement("option");
        option.value = Name;
        option.textContent = FullName;
        criptomoneda.appendChild(option);
    });
}

function clearHTML(){
    containerAnswer.innerHTML = '';
}