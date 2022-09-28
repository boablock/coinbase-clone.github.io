


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

