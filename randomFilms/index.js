import { filmsList } from "./allFilms.js";
import {addButton, list, pig, block, numberFilms, del} from "./allLets.js";

// количество елементов и длина списка, они обновляются в update
let numberElem;
if(localStorage.numberElem) {
    numberElem = localStorage.numberElem;
}
let listLength;
if(localStorage.listLength) {
    listLength = localStorage.listLength;
}

let random;

//  перезаписываю исходный массив в новый для работы с ним в локал сторадж
let array = filmsList;
if(localStorage.array) {
    array = localStorage.array.split(",");
}

// создаю список фильмов один раз. Когда локал стордж будет пустой, эта функция сработает снова
function makingMovieList() {
    for(let i = 0; i < array.length; i++) {
        let filmTitle = document.createElement("p");
        filmTitle.style.display = "flex";
        filmTitle.style.width = "310px";
        filmTitle.innerText = `${array[i]}`;
        list.append(filmTitle);
        if(i == array.length - 1) {
            update();
            numberFilms.innerHTML = numberElem;
        }
    }
}
makingMovieList();

//  добавляю новый елемент в массив и сохраняю локалсторадж
    addButton.addEventListener("click", () => {
        if(document.querySelector("input").value.length > 1) {
            array.push(document.querySelector("input").value);
            update();
            saveState();
            location.reload();
        } else {
            return;
        }
    });

// кнопка которая крутит список фильмов
    pig.addEventListener("click", () => {
        pig.style.backgroundSize = "80%";
        setTimeout(() => {pig.style.backgroundSize = "100%";}, 300);

        block.style.display = "none";
        update();
        list.style.right = `${listLength - (random * 350)}px`;
    });

// кнопка удаляющая из списка фильм
    del.addEventListener("click", () => {
        if(block.style.display === "none") {
            del.style.background = "#ff8fe3";
            setTimeout(() => {del.style.background = ""}, 300);
    
            block.style.display = "flex";
            list.children[(listLength - (random * 350)) / 350].remove();
            array = [];
            for(let i = 0; i < list.children.length; i++) {
                array.push(list.children[i].innerText);
            }
            update();
            saveState();
            location.reload();
        } else {
            return
        }
    });

// обновляет изменения в переменных
function update() {
    numberElem = list.children.length;
    listLength = numberElem * 350;
    random = Math.floor(Math.random() * numberElem) + 1;
}

//  сохраняет обновления в локалсторадж
function saveState() {
    localStorage.array = array;
    localStorage.numberElem = numberElem;
    localStorage.listLength = listLength;
}