let filmsList1 = [
    "сериал благие знамения", 
    "The Last Belle’ by Neil Boyle", 
    "сериал хэппи", 
    "меню 2022", 
    "любовь смерть роботы", 
    "фильм притворство", 
    "на игле", 
    "бойцовский клуб", 
    "люси", 
    "билли эллиот 2000", 
    "из пепла 2003", 
    "девушка из дании", 
    "сериал пронзительно громко"
];

let list = document.querySelector(".list");
let lengthList = 350 * (filmsList1.length - 1);

function createInterface() {
    for(let i = 0; i < filmsList1.length; i++) {
        let name = document.createElement("p");
        name.style.display = "flex";
        name.style.width = "310px";
        name.innerText = `${filmsList1[i]}`;
        list.append(name);
        filmsList1.unshift("????????")
    }
}
createInterface()

document.querySelector(".button").addEventListener("click", () => {
    // console.log(filmsList1[Math.floor(Math.random()*filmsList1.length)])
    console.log(filmsList1.length)
    console.log(Math.floor(Math.random()*filmsList1.length))
    // list.style.right = `${lengthList}px`;
})