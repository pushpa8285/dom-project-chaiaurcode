const clock = document.querySelector('#clock')
setInterval(function(){
    let time = new Date().toLocaleTimeString()
    clock.innerHTML = `<p>${time} </p>`
    // console.log(time)
    // console.log("hello")
}, 1000)
