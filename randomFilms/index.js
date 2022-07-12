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

let newArr = filmsList1;
if(localStorage.newArr) {
    newArr = localStorage.newArr.split(",");
}

let block = document.querySelector(".block");
let list = document.querySelector(".list");
let listLen, lenWithStyle;
let randomNum;
let button = document.querySelector(".button");
let del = document.querySelector(".del");
let copy = document.querySelector(".copy");
let leftoverMovies = document.querySelector(".leftover-movies");
if(localStorage.leftoverMovies) {
    leftoverMovies.innerHTML = Number(localStorage.leftoverMovies);
}

function createInterface(array) {
    for(let i = 0; i < array.length; i++) {
        let name = document.createElement("p");
        name.style.display = "flex";
        name.style.width = "310px";
        name.innerText = `${array[i]}`;
        list.append(name);
    }
}
createInterface(newArr);
button.addEventListener("click", () => {
    block.style.display = "none";
    listLen = list.children.length;
    lenWithStyle = listLen * 350;
    randomNum = Math.floor(Math.random() * listLen) + 1;
    list.style.right = `${lenWithStyle - (randomNum * 350)}px`;
    leftoverMovies.innerHTML = `${listLen}`;
});

del.addEventListener("click", () => {
    block.style.display = "flex";
    list.children[(lenWithStyle - (randomNum * 350)) / 350].remove();
    listLen = list.children.length;
    newArr = [];
    for(let i = 0; i < list.children.length; i++) {
        newArr.push(list.children[i].innerText);
    }
    leftoverMovies.innerHTML = `${listLen}`;
    saveState();
});

copy.addEventListener("click", () => {
    
});

function saveState() {
    localStorage.leftoverMovies = leftoverMovies.innerHTML = `${listLen}`;;
    localStorage.newArr = newArr;
}