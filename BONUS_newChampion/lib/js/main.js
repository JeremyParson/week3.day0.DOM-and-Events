let mainElement = document.getElementsByClassName('main_container')[0];
let newDiv = document.createElement('div');
newDiv.className = "pyke champ_container";
let newH2 = document.createElement('h2');
newDiv.appendChild(newH2);
newH2.appendChild(document.createTextNode("pyke, the bloodharbor ripper"));
mainElement.appendChild(newDiv);

let pyke = document.getElementsByClassName('pyke')[0];

pyke.style.backgroundImage = "url('./assets/pyke.jpg')";
pyke.style.color = "#92fdfe";