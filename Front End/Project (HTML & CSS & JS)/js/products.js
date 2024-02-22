// let cards = document.querySelector('.cards')

// async function getitem1(){

//     let item = await fetch('https://fakestoreapi.com/products/2')
//     .then(res=>res.json())
    
//     cards.innerHTML += `
//                 <div class="card">
//                     <img src="${item.image}">
//                     <h3> ${item.title}</h3>
//                     <p><span>Price:</span> ${item.price} <span class="dollar">$</span></p>
//                 </div>
//     `
    
// }
// getitem1()












let bar = document.querySelector('nav .links .bars .bar');
let Barslinks = document.querySelector('nav .links .bars .bars-links')

bar.addEventListener('click', function(){
    Barslinks.classList.toggle('display-flex')
    
})








let navButton = document.querySelector('.nav-button')

window.onscroll = function() {scrollFunction()};

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











// FETCH PRODUCTS
let cards = document.querySelector('.cards')
async function getdata(){
    const data = await fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((d)=>{
        return d
    })
    data.map((r)=>{
        cards.innerHTML += `
            <div class="card">
            <img src="${r.image}">
            <h3> ${r.title}</h3>
            <p><span>Price:</span> ${r.price} <span class="dollar">$</span></p>
            <a href="#" onclick="ayhaga(${r.id})">Read More</a>
            </div> 
        `
    })
}
getdata()



// Fetch One Product 

function ayhaga(ob){
    async function getitem(){

        let item = await fetch(`https://fakestoreapi.com/products/${ob}`)
        .then(res=>res.json())
        
        cards.innerHTML = `
                    <div class="card item">
                        <img src="${item.image}">
                        <div class="item-text">
                            <h3> ${item.title}</h3>
                            <p><span>Price:</span> ${item.price} <span class="dollar">$</span></p>
                            <p><span>category:</span> ${item.category} </p>
                            <p class="desp"><span>description:</span> ${item.description} </p>
                            <a href="file:///E:/Full%20Stack%20Diploma/Front%20End/Project%20(HTML%20&%20CSS%20&%20JS)/products.html">Go Back</a>
                        </div>
                    </div>
        `
      
        
    }
    getitem()
    

        
    




}








