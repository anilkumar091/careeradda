const bar= document.querySelector(".bar");
const item= document.querySelector(".item");
const links =document.querySelectorAll(".item li");


bar.addEventListener('click',()=> {
item.classList.toggle("open");
})

