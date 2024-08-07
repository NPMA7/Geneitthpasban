// HAMBURGER
const burger = document.querySelector('#burger');
const navMenu =  document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
})


// STRUCTURE SLIDER
function sliderStructure() {
    const Structure = document.getElementById("Organization");
    const Picket = document.getElementById("Picket");
    const Schedule = document.getElementById("Schedule");
      Structure.style.display = "block";
      Picket.style.display = "none";
      Schedule.style.display = "none";
  }
  
function sliderPicket() {
  const Structure = document.getElementById("Organization");
  const Picket = document.getElementById("Picket");
  const Schedule = document.getElementById("Schedule");
    Structure.style.display = "none";
    Picket.style.display = "block";
    Schedule.style.display = "none";
  }
function sliderSchedule() {
  const Structure = document.getElementById("Organization");
  const Picket = document.getElementById("Picket");
  const Schedule = document.getElementById("Schedule");
    Structure.style.display = "none";
    Picket.style.display = "none";
    Schedule.style.display = "block";
    
  }


