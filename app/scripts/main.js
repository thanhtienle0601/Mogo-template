// menu
const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function(e) {
    menuHeader.classList.toggle(expandClass);
    e.target.classList.toggle("fa-times");
    e.target.classList.toggle("fa-bars");
});
window.addEventListener("click", function(e) {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
        menuHeader.classList.remove(expandClass);
        menuToggle.classList.remove("fa-times");
        menuToggle.classList.add("fa-bars");
    };
});

// slick slider
$(document).ready(function(){
    $('.quote-container ').slick({
        autoplay:true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false,
              }
            }
          ]
    });
  });