var btnIncrease=document.querySelector(".btn-increase")
var btnReset=document.querySelector(".btn-reset")
var btnDecrease=document.querySelector(".btn-decrease")
var counterCount=document.querySelector(".counter")

let c=0;


function getIncrease(){

    c=c+1;
    counterCount.innerText=c;
    counterCount.style.color="green"
    
}
function getReset(){

    c=0;
    counterCount.innerText=c;
    counterCount.style.color="black"
    

}
function getDecrease(){

    c=c-1;
    counterCount.innerText=c;
    counterCount.style.color="red"

}

btnIncrease.addEventListener("click",getIncrease)
btnReset.addEventListener("click",getReset)
btnDecrease.addEventListener("click",getDecrease)
