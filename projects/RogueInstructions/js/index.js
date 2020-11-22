$(document).ready(function () {

   // pure JS
   var element = document.getElementById('mySwipe'),
   prevBtn = document.getElementById('prev'),
   nextBtn = document.getElementById('next');

window.mySwipe = new Swipe(element, {
 startSlide: 0,
//  auto: 3000,
 draggable: true,
 autoRestart: false,
 continuous: true,
 disableScroll: true,
 stopPropagation: true,
 callback: function(index, element) {},
 transitionEnd: function(index, element) {}
});

// using jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');

prevBtn.onclick = mySwipe.prev;
nextBtn.onclick = mySwipe.next;



$(".accordion").each(function () {

   $(this).click(function () {

       $(this).toggleClass("active");

       var panel = this.nextElementSibling;

       if ($(panel).css("display") === "block") {
           $(panel).css("display", "none")
       } else {
           $(panel).css("display", "block")
       }
   })
});








});