
document.addEventListener('click', function(){
    let mouseX = event.clientX.toString() + "px";
    let mouseY = event.clientY.toString() + "px";
    let newDiv = document.createElement('div');
    let newPoroImg = document.createElement('img');
    console.log(newPoroImg);
    document.body.style.position = "relative";
    newDiv.style.width = "100vw";
    newDiv.style.position = "relative";
    newPoroImg.style.position = "absolute";
    newPoroImg.src = radnPoro();
    newPoroImg.style.left = mouseX;
    newPoroImg.style.top = mouseY;
    newDiv.appendChild(newPoroImg);
    document.getElementById('poros').appendChild(newDiv);
    console.log(mouseX, mouseY, newPoroImg.style);
});


function radnPoro(){
    let rng = Math.floor(Math.random() * 4 + 1);
    console.log(rng);
    switch(rng){
        case 1:
            return "./assets/poro1.png"
        break;
        case 2:
            return "./assets/devil_poro.png"
        break;
        case 3:
            return "./assets/draven_poro.png"
        break;
        case 4:
            return "./assets/heim_poro.png"
        break;
        case 5:
            return "./assets/ziggs_poro.png"
        break;
    }

}