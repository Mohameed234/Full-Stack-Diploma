let right = document.querySelector(".right");
let left = document.querySelector(".left");

function overRight(){
    right.style.width = "70vw";
    left.style.width = "30vw";
    right.style.transition = "1s"
    left.style.transition = "1s"
}

function outRight(){
    right.style.width = '50vw';
    left.style.width = '50vw';
    right.style.transition = "1s"
    left.style.transition = "1s"

}

function overLeft(){
    left.style.width = "70vw";
    right.style.width = "30vw";
    right.style.transition = "1s"
    left.style.transition = "1s"
}

function outLeft(){
    right.style.width = '50vw';
    left.style.width = '50vw';
    right.style.transition = "1s"
    left.style.transition = "1s"
}
