const toggle = document.querySelector(".toggle_menu");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Language toggle */
$(document).ready(function() {
	$('.ro').hide();

	$('#switch_lang').click(function() {
		$('.ro').toggle();
		$('.en').toggle();
	});
});

/* Toggle mobile menu */
function toggleMenu() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
		} else {
		menu.classList.add("active");
		toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
	  }
	}
	toggle.addEventListener("click", toggleMenu, false);

/* Top button */
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}