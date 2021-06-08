window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  }
  function setCopyrightDate() {
    year = new Date().getYear();
    if (year < 1900) year += 1900;
    document.getElementById("currentYear").innerHTML = year;
  }
  
  setCopyrightDate();
  
  function getDate() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("currentDate").innerHTML = year;
  }
  
  getDate();
  
  
  
  
  
  
 