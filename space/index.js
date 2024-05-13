let bgdesktop = "md:bg-[url('./assets/home/background-home-desktop.jpg')]"
let bgmobile  =  "bg-[url('./assets/home/background-home-mobile.jpg')]"

const nav = document.querySelector("#nav");
const marte = document.querySelector("#marte");
const jupiter = document.querySelector("#jupiter")
const componentes = document.querySelector("#componentes");

nav.classList.add(bgdesktop);
nav.classList.add(bgmobile);

componentes.onclick = function(){
    console.log("Estoy haciendo click");
    let bgdesktop = "md:bg-[url('./assets/crew/background-crew-desktop.jpg'"
    nav.classList.add(bgdesktop);
}