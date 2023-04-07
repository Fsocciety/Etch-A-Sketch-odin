let grid = document.createElement("div");
let container = document.querySelector(".container");

grid.classList.add("grid");
grid.setAttribute('style', 'display: grid; border: solid 15px brown;border-radius: 5px; width: 800px; height: 800px;')

container.appendChild(grid);

let slider = document.getElementById("myRange");
let label = document.querySelector(".label");
label.innerHTML = `${slider.value} x ${slider.value}`


const makeGrid = (num) => {
    grid.style.setProperty('grid-template', `repeat(${num}, 1fr) / repeat(${num}, 1fr)`);
    for (let i = 0; i < num * num; i++) {
        let item = document.createElement("div");
        item.classList.add('grid-item');
        grid.appendChild(item);
    }
    hoverColor();
}

const gridEmpty = () => {
    grid.innerHTML = "";
}

let value;

slider.oninput = function() {
    label.innerHTML = `${this.value} x ${this.value}`; 
    console.log(this.value);
    gridEmpty();
    value = this.value;
    makeGrid(value);
}

 

const randomColor = () => {
    let r = Math.floor(Math.random() * 256) + 1;
    let b = Math.floor(Math.random() * 256) + 1;
    let g = Math.floor(Math.random() * 256) + 1;
    return `rgb(${r},${g},${b})`;
}



const hoverColor = () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
            item.style.backgroundColor = randomColor();
        })
    })
    fadeOut();
}



const fadeOut = () => {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('transitionend', () => {
            item.style.backgroundColor = "transparent";
        });
    });
}






