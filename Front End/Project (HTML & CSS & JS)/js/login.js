let bar = document.querySelector('nav .links .bars .bar');
let Barslinks = document.querySelector('nav .links .bars .bars-links')

bar.addEventListener('click', function(){
    Barslinks.classList.toggle('display-flex')
    
})



let email = document.querySelector('#email')
let password = document.querySelector('#pass')
let loginbtn = document.querySelector('#login')


let data;

if(localStorage.user != null ){
    data = JSON.parse(localStorage.user)
}else{
    data = []
}


let logTitle = document.querySelector('.login h1')
let logSection = document.querySelector('.login')
let logbarNav = document.querySelector('nav .bars-links #login')
let logMainNav = document.querySelector('nav .main-links #login')
loginbtn.addEventListener('click', () => {
    data.map((ob) => {
        if(ob.email == email.value && ob.password == password.value){
           

            logSection.innerHTML = `
                <h1>Welcome ${ob.firstName}</h1>
                <div class="data">
                    <p><span>First Name: </span> ${ob.firstName}</p>
                    <p><span>Last Name: </span> ${ob.lastName}</p>
                    <p><span>Email: </span> ${ob.email}</p>
            
                </div>
            `
            
            
        }else{
            logTitle.innerHTML += `
            <h3 style="background: red; font-size: 16px; color:white; margin: 20px; padding: 10px; border-radius: 4px; display:block; width: 90%; text-align: center;">Invalid Email Or Password</h3>
            `
            email.value = ""
            password.value = ""
            
        }
        
        
    })
    
    
 
    
})  



 

