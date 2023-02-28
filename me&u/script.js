const pics = ["catpics/cat1.jpg",
"catpics/cat2.jpg","catpics/cat3.JPG",
"catpics/cat4.JPG","catpics/cat5.jpg",
"catpics/cat6.JPG","catpics/cat7.JPG",
"catpics/cat8.JPG","catpics/cat9.JPG",
"catpics/cat10.JPG","catpics/cat11.JPG",
"catpics/cat12.JPG","catpics/cat13.JPG",
"catpics/cat14.JPG","catpics/cat15.JPG",
"catpics/cat16.JPG","catpics/cat17.JPG",
"catpics/cat18.JPG","catpics/cat19.JPG",
"catpics/cat20.JPG","catpics/cat21.JPG",
"catpics/cat23.JPG","catpics/cat24.JPG",
"catpics/cat25.jpeg","catpics/cat26.jpg",
             "catpics/cat21.JPG",];

const button = document.querySelector("button");
button.addEventListener("click", next);

var change_img = document.getElementById("placeholder");
function next(){
    let i = getRandomInt(0,26);
    change_img.src = pics[i];
}

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
