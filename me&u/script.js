const pics = ["catpics/cat1.jpg",
"catpics/cat2.jpg","catpics/cat3.jpg",
"catpics/cat4.jpg","catpics/cat5.jpg",
"catpics/cat6.jpg","catpics/cat7.jpg",
"catpics/cat8.jpg","catpics/cat9.jpg",
"catpics/cat10.jpg","catpics/cat11.jpg",
"catpics/cat12.jpg","catpics/cat13.jpg",
"catpics/cat14.jpg","catpics/cat15.jpg",
"catpics/cat16.jpg","catpics/cat17.jpg",
"catpics/cat18.jpg","catpics/cat19.jpg",
"catpics/cat20.jpg","catpics/cat22.jpg",
"catpics/cat23.jpg","catpics/cat24.jpg",
"catpics/cat25.jpg","catpics/cat26.jpg",];

const button = document.querySelector("button");
button.addEventListener("click", next);

var change_img = document.getElementById("placeholder");
function next(){
    let i = getRandomInt(0,25);
    change_img.src = pics[i];
}

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }