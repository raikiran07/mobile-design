'use-strict';
const model = document.querySelector(".list-wrapper");
const hamburger = document.querySelector(".ham");
hamburger.addEventListener("click",function(){
    model.classList.toggle("hidden");
})

console.log(model);