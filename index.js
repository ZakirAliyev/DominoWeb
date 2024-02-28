let my_array = ['img/00.png', 'img/01.png', 'img/02.png', 'img/03.png', 'img/04.png', 'img/05.png', 'img/06.png', 
                'img/11.png', 'img/12.png', 'img/13.png', 'img/14.png', 'img/15.png', 'img/16.png', 
                'img/22.png', 'img/23.png', 'img/24.png', 'img/25.png', 'img/26.png', 
                'img/33.png', 'img/34.png', 'img/35.png', 'img/36.png', 
                'img/44.png', 'img/45.png', 'img/46.png', 
                'img/55.png', 'img/56.png', 
                'img/66.png']

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
                
let myArray = [1, 2, 3, 4, 5];
myArray = shuffleArray(my_array);

document.addEventListener("DOMContentLoaded", function() {
    
    let canvasElement1 = document.querySelector('.pc-hand');

    for (let i = 1; i <= 7; i++) {
        let button = document.createElement("button");
        button.classList.add("button");
        let firstElement = myArray.shift();
        button.style.backgroundImage = "url('"+ firstElement+"')";
        canvasElement1.appendChild(button);
    }

    let canvasElement2 = document.querySelector('.my-hand');

    for (let i = 1; i <= 7; i++) {
        let button = document.createElement("button");
        button.classList.add("button");
        let firstElement = myArray.shift();
        button.style.backgroundImage = "url('"+ firstElement+"')";
        canvasElement2.appendChild(button);
    }
});
