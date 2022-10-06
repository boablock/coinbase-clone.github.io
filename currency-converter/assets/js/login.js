


document.getElementById('form-user').addEventListener('submit', saveUserData);

function saveUserData(e){
    let email = document.getElementById('input-email').value; 
    let password = document.getElementById('input-pass').value;
    // console.log(email, password);

    const userData = {
        email,
        password,
    }; 
   

   if(localStorage.getItem('userDataArray') === null){
    let userDataArray = [];
    userDataArray.push(userData);
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));//-> LO CARGO
   }else{
    let userDataArray = JSON.parse(localStorage.getItem('userDataArray'));
    userDataArray.push(userData); //-> LO ACTUALIZO
    localStorage.setItem('userDataArray', JSON.stringify (userDataArray));

   }

   e.preventDefault();
}

let password = document.getElementById('input-pass');

password.addEventListener('focus', () => {
    Toastify({
        text: "Su contraseña debe tener al menos 5 caracteres",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onclick: function(){
            
        }
        // Callback after click
      }).showToast();
})

