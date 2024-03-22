

let firstBtn = document.getElementById("first-btn");

let secondtBtn = document.getElementById("second-btn");

let thirdBtn = document.getElementById("third-btn");

firstBtn.addEventListener("click", () =>{
    document.getElementById("first-btn").classList.add("active");
    document.getElementById("second-btn").classList.remove("active");
    document.getElementById("third-btn").classList.remove("active");
    document.getElementById("image").src="img/slider-pic1.png";
    document.getElementById("slide-pera").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
})

secondtBtn.addEventListener("click", () =>{
    document.getElementById("second-btn").classList.add("active");
    document.getElementById("first-btn").classList.remove("active");
    document.getElementById("third-btn").classList.remove("active");
    document.getElementById("image").src="img/sliderimag2.jpg";
    document.getElementById("slide-pera").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
})
thirdBtn.addEventListener("click", () =>{
    document.getElementById("third-btn").classList.add("active");
    document.getElementById("first-btn").classList.remove("active");
    document.getElementById("second-btn").classList.remove("active");
    document.getElementById("image").src="img/slider imag 3.jpg";
    document.getElementById("slide-pera").innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
})