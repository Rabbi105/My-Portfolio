// for nav menu active link
var navmenu = document.querySelectorAll(".nav-menu");
function openMenu(menuName) {
    for(menu of navmenu) {
        menu.classList.remove("activ")
    }
    event.currentTarget.classList.add("activ");
            
}

// for changing text in hero section
let typed = new Typed('#multiple-text', {
    strings: ['Frontend Developer', 'Content Creator', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// for greetings on footer
const time = new Date().getHours();

let greetings = "";
if(time < 10) {
    greetings = "Good Morning";
} else if(time < 18) {
    greetings = "Good Day";
}else{
    greetings = "Good Evening";
}
document.getElementById("greeting").innerHTML = greetings;

// for sub title tab on about section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {

            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
          
// slider======================================================>
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btN");

let currentSlide = 1;

// for manual navigation
var manualNav = function(manual){
    slides.forEach((slide) => {
    slide.classList.remove("active");
    
    btns.forEach((btN) => {
    btN.classList.remove("active");
    });
});

    slides[manual].classList.add("active");
    btns[manual].classList.add("active");
}

btns.forEach((btN, i) => {
btN.addEventListener("click", () =>{
        manualNav(i);
        currentSlide = i;
    });
});

// for autoplay slide
var repeat = function(activeClass){
    let active = document.getElementsByClassName("active");
    let i=1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            btns[i].classList.add("active");
            i++;

            if(slides.length == i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();

// for read me button on about section


let toggleBtn = document.querySelector(".readmore");

let pera = document.querySelector(".hidePera");

function myToggle(){
    if(pera.style.display != "inline"){
        pera.style.display = "inline";
        toggleBtn.innerHTML="Read Less"
    }else{
        pera.style.display = "none";
        toggleBtn.innerHTML="..Read More"
    }
};

toggleBtn.addEventListener("click", myToggle);

// for hamburger menu==================>
let hamburger = document.querySelector(".fa-bars");
let menuList = document.querySelector("ul");
var navmenu = document.querySelectorAll(".nav-menu");
function hamburgerMenu(){
    hamburger.classList.toggle("fa-xmark");
    if(menuList.style.display != "block"){
        menuList.style.display = "block";
    }
    else{
        menuList.style.display = "none";
    }
}

hamburger.addEventListener("click", hamburgerMenu);

// conntact section

let formBtn = document.querySelector(".form-btn");
let nameText = document.getElementById("nameText");
let clearText = document.querySelectorAll(".clear");
formBtn.addEventListener("click", ()=>{
    alert(`Hi! ${nameText.value}. Your message was sent.`);
    clearText.forEach(clear => clear.value="");
        
})