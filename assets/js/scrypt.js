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



document.getElementById('video').onclick = function(){
  document.getElementById('video__row').innerHTML = ` <div class="video__row">
  <video controls src="assets/img/20220926143924.mp4" class="video"></video>
  <div id="close"><img src="https://cdn-icons-png.flaticon.com/512/106/106830.png" alt="" class="close" ></div>
</div>`;

document.getElementById('close').onclick = function(){
  console.log('close');
    document.getElementById('video__row').innerHTML = ` <img src="assets/img/content4-img.png" alt="" class="content3__row-img" id="video">
     <div class="content3__row-text">WATCH OUR STORY</div>`;

  } 

}






