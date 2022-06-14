

// code for navbar

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};


 
// code for popupbtn

var search = document.querySelector("#search");
var popupbtn = document.querySelector(".popupbtn");

search.addEventListener("click", function () {
  document.body.classList.add("popup-active");
});
popupbtn.addEventListener("click", function () {
    document.body.classList.remove("popup-active");
   });

//   code for side bar 

var req = document.querySelector("#req");
var closebtn = document.querySelector(".closebtn");

req.addEventListener("click", function () {
  document.body.classList.add("sidemenu-active");
});
closebtn.addEventListener("click", function () {
    document.body.classList.remove("sidemenu-active");
});

   function openFunction(){
    document.getElementById("menu").style.width="40vh";
  }
  function closeFunction(){
    document.getElementById("menu").style.width="0px";
  }

  
// code for health slidebar 


const slideshowImages = document.querySelectorAll(".hii .fade");

// const nextImageDelay = 3000;
// let currentImageCounter = 0;

// fade[currentImageCounter].style.display = "block";

// setInterval(nextImage, nextImageDelay);

// function nextImage(){
//   slideshowImages[currentImageCounter].style.display = "none";
//   currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
//   slideshowImages[currentImageCounter].style.display = "block";
// }





let flax = 0;

function controllers(x){
  flax = flax + x;
  slideshows(flax);
}

slideshows(flax);

function slideshows(num){
  let health = document.getElementsByClassName('fade');

  if(num == health.length){
    flax = 0;
    num = 0;
  }
  if(num < 0){
    flax = health.length-1;
    num = health.length-1; 
  }
  
  for(let y of health){
    y.style.display = "none";
  }

  health[num].style.display = "block";
}


// code for health icon box 

let openbtn = document.querySelector(".openbtn");
let opentext = document.querySelector(".opentext");

openbtn.addEventListener('click',() =>{
  if(opentext.style.display === 'none'){
    opentext.style.display = 'block';
  }else{
    opentext.style.display = 'none';
  }
});

let openbtn1 = document.querySelector(".openbtn1");
let opentext1 = document.querySelector(".opentext1");

openbtn1.addEventListener('click',() =>{
  if(opentext1.style.display === 'none'){
    opentext1.style.display = 'block';
  }else{
    opentext1.style.display = 'none';
  }
});

let openbtn2 = document.querySelector(".openbtn2");
let opentext2 = document.querySelector(".opentext2");

openbtn2.addEventListener('click',() =>{
  if(opentext2.style.display === 'none'){
    opentext2.style.display = 'block';
  }else{
    opentext2.style.display = 'none';
  }
});

let openbtn3 = document.querySelector(".openbtn3");
let opentext3 = document.querySelector(".opentext3");

openbtn3.addEventListener('click',() =>{
  if(opentext3.style.display === 'none'){
    opentext3.style.display = 'block';
  }else{
    opentext3.style.display = 'none';
  }
});

let openbtn4 = document.querySelector(".openbtn4");
let opentext4 = document.querySelector(".opentext4");

openbtn4.addEventListener('click',() =>{
  if(opentext4.style.display === 'none'){
    opentext4.style.display = 'block';
  }else{
    opentext4.style.display = 'none';
  }
});

let openbtn5 = document.querySelector(".openbtn5");
let opentext5 = document.querySelector(".opentext5");

openbtn5.addEventListener('click',() =>{
  if(opentext5.style.display === 'none'){
    opentext5.style.display = 'block';
  }else{
    opentext5.style.display = 'none';
  }
});

let openbtn6 = document.querySelector(".openbtn6");
let opentext6 = document.querySelector(".opentext6");

openbtn6.addEventListener('click',() =>{
  if(opentext6.style.display === 'none'){
    opentext6.style.display = 'block';
  }else{
    opentext6.style.display = 'none';
  }
});

let openbtn7 = document.querySelector(".openbtn7");
let opentext7 = document.querySelector(".opentext7");

openbtn7.addEventListener('click',() =>{
  if(opentext7.style.display === 'none'){
    opentext7.style.display = 'block';
  }else{
    opentext7.style.display = 'none';
  }
});

let openbtn8 = document.querySelector(".openbtn8");
let opentext8 = document.querySelector(".opentext8");

openbtn8.addEventListener('click',() =>{
  if(opentext8.style.display === 'none'){
    opentext8.style.display = 'block';
  }else{
    opentext8.style.display = 'none';
  }
});

let openbtn9 = document.querySelector(".openbtn9");
let opentext9 = document.querySelector(".opentext9");

openbtn9.addEventListener('click',() =>{
  if(opentext9.style.display === 'none'){
    opentext9.style.display = 'block';
  }else{
    opentext9.style.display = 'none';
  }
});

let openbtn10 = document.querySelector(".openbtn10");
let opentext10 = document.querySelector(".opentext10");

openbtn10.addEventListener('click',() =>{
  if(opentext10.style.display === 'none'){
    opentext10.style.display = 'block';
  }else{
    opentext10.style.display = 'none';
  }
});

let openbtn11 = document.querySelector(".openbtn11");
let opentext11 = document.querySelector(".opentext11");

openbtn11.addEventListener('click',() =>{
  if(opentext11.style.display === 'none'){
    opentext11.style.display = 'block';
  }else{
    opentext11.style.display = 'none';
  }
});


// code for doctors 

let flag = 0;

function controller(x){
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);
 
function slideshow(num){
  let slides1 = document.getElementsByClassName('docs');

  if(num == slides1.length){
    flag = 0;
    num = 0;
  }
  if(num < 0){
    flag = slides1.length-1;
    num = slides1.length-1;
  }
  
  for(let y of slides1){
    y.style.display = "none";
  }

  slides1[num].style.display = "block";
}



// code for clients

let slidewrapper = document.querySelector('.slide-wrapper');
let slidetracker = document.querySelector('.slide-tracker');

let pressed = false;
let startx;
let x;

slidewrapper.addEventListener('mousedown', (e)=>{
  pressed = true;
  startx = e.offsetX - slidetracker.offsetLeft;
  slidewrapper.style.cursor = 'grabbing'
});

slidewrapper.addEventListener('mouseenter', ()=>{
  slidewrapper.style.cursor = 'grab'
});

slidewrapper.addEventListener('mouseup', ()=>{
  slidewrapper.style.cursor = 'grab'
});

window.addEventListener('mouseup',()=>{
  pressed = false;
});

slidewrapper.addEventListener('mousemove', (e)=>{
  if(!pressed) return;
  e.preventDefault();

  x = e.offsetX

  slidetracker.style.left = `${x - startx}px`;

  checkboundry()
});


  function checkboundry(){
  let outer = slidewrapper.getBoundingClientRect();
  let inner = slidetracker.getBoundingClientRect();

  if(parseInt(slidetracker.style.left) > 0){
    slidetracker.style.left = '0px';
  }else if(inner.right < outer.right){
    slidetracker.style.left = `-${inner.width - outer.width}px` 
  }
}
