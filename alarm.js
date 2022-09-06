let bayo = new Audio("dija.mp3")




const gtime = () => {

    let date = new Date()
    let gHour = (date.getHours())
    let gMinutes = (date.getMinutes())
    let gSeconds = (date.getSeconds())

    wall.innerHTML = `${gHour}: ${gMinutes} : ${gSeconds}`

}
setInterval(gtime, 1000);

const check = () => {
    let hourr = hours.value;
    let minutee = minutes.value
    // let secondd = seconds.value
    let n = new Date()
    showTheTime.innerHTML = `Alarm set to ${hourr}:${minutee} `

    if (hourr == n.getHours() && minutee == n.getMinutes()) {
        bayo.play()
        console.log(hourr + minutee)
  

    }
    setInterval(check, 1000)
}

const stop = () => {
    let hourr = hours.value;
    if (hours.value  ) {
        let person = prompt("Do you want to turn off the alarm? Input 'Turn off' if you want to!");
        if (person == "Turn off") {
            showTheTime.innerHTML = ``
            clearInterval(check)
            location.reload()
        }

        
        else {
            alert("follow the instructions, click Stop")
          if(song.play()){  song.play()}
        }

    }



    else { alert("set your timer") }
}


const whatSyourName = () => {
    let naMes = prompt("What is Your Name", "Kingrexicon")
    if (naMes != null){
        names.innerHTML = ` Hello ${naMes} 🖐`
    }
}