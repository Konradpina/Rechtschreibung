
var more=document.querySelector(".more")
more.onclick =function(){
    var navbar= document.querySelector(".navbar")
    navbar.classList.toggle("active")
}
function changeh(){
    var navbar= document.querySelector(".navbar")
    navbar.classList.toggle("active")
}

function closeh(){
    var navbar= document.querySelector(".navbar")
    navbar.classList.remove("active")
}