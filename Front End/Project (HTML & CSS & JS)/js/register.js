let bar = document.querySelector('nav .links .bars .bar');
let Barslinks = document.querySelector('nav .links .bars .bars-links')

bar.addEventListener('click', function(){
    Barslinks.classList.toggle('display-flex')
    
})

let registerSec = document.querySelector('.register')
let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let email = document.querySelector('#email')
let password = document.querySelector('#pass')
let submitbtn = document.querySelector('.submit-btn')

let data;
if(localStorage.user != null){
    data = JSON.parse(localStorage.user)
}else{
    data = []
}

let regTitle = document.querySelector('.register h1')
submitbtn.onclick = function(){
    regTitle.innerHTML = `<h1>Register</h1>`
    let newdata = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,

    }
    data.push(newdata)
    localStorage.setItem('user', JSON.stringify(data))
    firstName.value = '' 
    lastName.value = '' 
    email.value = '' 
    password.value = '' 
    regTitle.innerHTML += ` <h3 style="background: green; font-size:20px; color:white; margin: 20px; padding: 10px; border-radius: 4px; display:block; width: 80%; text-align: center;">Success Register</h3>
    `
}






