"use strict";

if (navigator.serviceWorker) {
	navigator.serviceWorker.register("sw.js");
}

;(function () {
	var sticky = false;
	var currentPosition = 0;
	var imageCounter = $("[data-name='image-counter']").attr("content");
	var email = "perniayennifer@gmail.com";

	$("#contact-form").on("submit", function (ev) {
		ev.preventDefault();

		sendForm($(this));
		return false;
	});

	$("#sticky-navigation").removeClass("hidden");
	$("#sticky-navigation").slideUp(0);

	setInterval(function () {
		if (currentPosition < imageCounter) {
			currentPosition++;
		} else {
			currentPosition = 0;
		}

		$("#galery .inner").css({
			left: "-" + currentPosition * 100 + "%"
		});
	}, 3000);

	$(window).scroll(function () {
		var inBottom = isInBottom();

		if (inBottom && !sticky) {
			//Mostrar la navegacion
			sticky = true;
			stickNavigation();
		}
		if (!inBottom && sticky) {
			// Ocultar la navegcion
			sticky = false;
			unSticNavigation();
		}
	});
	function stickNavigation() {
		$("#descripcion").addClass("fixed").removeClass("absolute");
		$("#navigation").slideUp("fast");
		$("#sticky-navigation").slideDown("fast");
	}

	function unSticNavigation() {
		$("#descripcion").removeClass("fixed").addClass("absolute");
		$("#navigation").slideDown("fast");
		$("#sticky-navigation").slideUp("fast");
	}

	function isInBottom() {
		var $descripcion = $("#descripcion");
		var descripcionHeight = $descripcion.height();

		return $(window).scrollTop() > $(window).height() - descripcionHeight * 2;
	}
})();
