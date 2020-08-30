/* 
==================================================================
==================================================================
		Código para cambio de color del navbar en sroll-down
==================================================================
==================================================================
*/
$(window).scroll(function() {
	if ($("#navbar").offset().top > 56) {
		$("#navbar").addClass("navbar-abajo");
		$("#line-link").addClass("line-link-navbar-abajo");
		$("#toggler").addClass("toggler-navbar-abajo");
		var links = document.querySelectorAll("#navbar #links");
		for (var i = 0; i < links.length; i++){
			links[i].className = "nav-link, links-navbar-abajo";
		}
	} else {
		$("#navbar").removeClass("navbar-abajo");
		$("#line-link").removeClass("line-link-navbar-abajo");
		$("#toggler").removeClass("toggler-navbar-abajo");
		var links = document.querySelectorAll("#navbar #links");
		for (var i = 0; i < links.length; i++){
			links[i].className = "nav-link";
		}
	}
});
/* 
==================================================================
==================================================================
	Fin código para cambio de color del navbar en sroll-down
==================================================================
==================================================================
*/
//----------------------------------------------------------------
/* 
==================================================================
==================================================================
						Código para slider
==================================================================
==================================================================
*/
$(function(){
	$(".slides").slidesjs({
		play: {
			active: true,
			effect: "slide",
        	// [string] Puede ser o "slide" o "fade".
        	interval: 4000,
        	auto: true,
        	pauseOnHover: false,
    	}
	});
});
/* 
==================================================================
==================================================================
					Fin Código para slider
==================================================================
==================================================================
*/
