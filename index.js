let myButtons = document.querySelectorAll(".btn");
for(let i=0; i<myButtons.length; i++){
    myButtons[i].addEventListener("click", toggleRed);
}