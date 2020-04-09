$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function() {
		$('.post').show(500); 
	});
});

// по кнопке #showall,отслеживать событие click с функцией внутри которой в показывать блок с класом post всё по дефолту



// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	items:8
//   });
// });

// if($(window).width() < 420){
// 	$(".owl-carousel").owlCarousel({
//   	items:3
//   });
// }


$(document).ready(function(){
 $(".owl-carousel").owlCarousel({
      loop:true,
      responsiveClass:true,
      responsive:{
            0:{
                items:3,
            },
            600:{
                items:5,
            },
            1000:{
                items:8,
            }
        }
  });
});



$(".owl-carousel").owlCarousel({
    nav: true
});