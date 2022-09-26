"use strict"
/* Меню бургер */

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if(iconMenu){
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});

}
var swiper = new Swiper(".mySwiper", {
	pagination: {
	  el: ".swiper-pagination",
	},
  });


  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



document.getElementById('video').addEventListener("click", function(){

  document.getElementById('video__row').innerHTML = `   <div class="video__iteam"><video controls src="assets/img/20220926143924.mp4" class="video"></video></div>  `

});

