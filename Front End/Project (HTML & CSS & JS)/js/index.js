let bar = document.querySelector('nav .links .bars .bar');
let Barslinks = document.querySelector('nav .links .bars .bars-links')

bar.addEventListener('click', function(){
    Barslinks.classList.toggle('display-flex')
    
})








let slider = document.querySelector('.slider');
let leftIcon =document.querySelector('.slider .left-icon ')
let rightIcon =document.querySelector('.slider .right-icon ')





let i = 0;   
let images = ['imgs/1.jpg' , 'imgs/2.jpg' , 'imgs/3.jpg']
let x = 0

let autoSlide = setInterval(function(){
    slider.style.backgroundImage = `url("${images[x]}")`
    x++
    if(x >= images.length){
        x =0
    }
},4000)



function handleChange() {
    slider.style.backgroundImage = `url("${images[i]}")`
    if (i < images.length - 1) {
    i++;
    } else {
    i = 0;
    }
    }

function previous() {
    if (i === 0) {
    i = images.length - 1;
    } else {
    i--;
    }
    slider.style.backgroundImage = `url(${images[i]})`
}

function next() {
    if(i === images.length - 1) {
    i = 0;
    } else {
    i++;
    }
    slider.style.backgroundImage = `url(${images[i]})`
}
window.onload = handleChange ;

// clearInterval(autoSlide)


// FETCH PRODUCTS

// async function getdata(){
//     const data = await fetch("https://fakestoreapi.com/products/1")
//     .then((data)=>data.json())
//     .then((d)=>{
//         return d
//     })
//     data.map((r)=>{
//         theBest.innerHTML += `
//             <div class="card">
//                 <img src="${r.image}">
//                 <h3> ${r.title}</h3>
//                 <p>Price: ${r.price}</p>
//             </div>
//         `
//     })
// }
// getdata()


let cards = document.querySelector('.cards')

async function getitem1(){

    let item = await fetch('https://fakestoreapi.com/products/2')
    .then(res=>res.json())
    
    cards.innerHTML += `
                <div class="card">
                    <img src="${item.image}">
                    <h3> ${item.title}</h3>
                    <p><span>Price:</span> ${item.price} <span class="dollar">$</span></p>
                </div>
    `
    
}
getitem1()




async function getitem2(){

    let item = await fetch('https://fakestoreapi.com/products/3')
    .then(res=>res.json())
    
    cards.innerHTML += `
                <div class="card">
                    <img src="${item.image}">
                    <h3> ${item.title}</h3>
                    <p><span>Price:</span> ${item.price} <span class="dollar">$</span></p>
                </div>
    `
    
}
getitem2()






async function getitem3(){

    let item = await fetch('https://fakestoreapi.com/products/4')
    .then(res=>res.json())
    
    cards.innerHTML += `
                <div class="card">
                    <img src="${item.image}">
                    <h3> ${item.title}</h3>
                    <p><span>Price:</span> ${item.price} <span class="dollar">$</span></p>
                </div>
    `
    
}
getitem3()


let navButton = document.querySelector('.nav-button')

window.onscroll = function() {scrollFunction();};





function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navButton.style.display = "flex";
    } else {
      navButton.style.display = "none";
    }
}
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function getTop(){
    navButton.onclick = function(){
        scroll({
            top: 0,
            behavior: "smooth"
        })
        
    }
}
getTop()

  






            





























