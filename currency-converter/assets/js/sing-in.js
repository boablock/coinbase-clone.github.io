
const userName = document.querySelector('#input-name');
const eMail = document.querySelector('#input-email');
const password = document.querySelector('#input-password');
const reEnterPassword = document.querySelector('#input-re-enter-password');
const btn = document.querySelector('#btn');

function textFieldValidate(element) {
    if (!isNaN(element.value|| element.value ==='')) {
        element.setCustomValidity('This field must not contain numbers or be empty.');
        element.style.border = '3px solid crimson'; 
    } else{
        element.setCustomValidity('');
        element.style.border ='none';
        element.style.border ='1px solid #182026';
    }
}

document.addEventListener('focusout', ()=> {
    textFieldValidate(userName);
    textFieldValidate(eMail);
    textFieldValidate(password);
    textFieldValidate(reEnterPassword);
    
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInfo ={
        userName: userName.value,
        eMail: eMail.value,
        password: password.value,
        reEnterPassword: reEnterPassword.value,
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    console.log(userInfo);
});





