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



let textArea = document.querySelector("textArea")
let commentSection = document.querySelector('.comment')
function showComment(){

    commentSection.innerHTML +=  `  <h3><span>Your Comment:</span> ${textArea.value}</h3> `;
}