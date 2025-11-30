const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        console.log(button.id)
        if (button.id === "grey"){
            body.style.backgroundColor = button.id
        }
        if (button.id === "white"){
            body.style.backgroundColor = button.id
        }
        if (button.id === "blue"){
            body.style.backgroundColor = button.id
        }
        if (button.id === "yellow"){
            body.style.backgroundColor = button.id
        }
    })
})