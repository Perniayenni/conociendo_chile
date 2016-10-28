;(function(){
	let sticky = false
	let currentPosition = 0
	const imageCounter= $("[data-name='image-counter']").attr("content")
	const email = "perniayennifer@gmail.com"

	$("#contact-form").on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))
		return false
	})

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	setInterval(()=>{
		if (currentPosition < imageCounter) {
			currentPosition++
		}else{
			currentPosition = 0
		}

		$("#galery .inner").css({
			left: "-"+currentPosition*100+"%"
		})
	},3000)

	$(window).scroll(()=>{
		const inBottom = isInBottom()

		if (inBottom && !sticky){
			//Mostrar la navegacion
			sticky = true
			stickNavigation()
		}
		if(!inBottom && sticky){
			// Ocultar la navegcion
			sticky = false
			unSticNavigation()
		}
	})
	function stickNavigation(){
		$("#descripcion").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp("fast")
		$("#sticky-navigation").slideDown("fast")
	}

	function unSticNavigation() {
		$("#descripcion").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown("fast")
		$("#sticky-navigation").slideUp("fast")
	}

	function isInBottom(){
		const $descripcion = $("#descripcion")
		const descripcionHeight = $descripcion.height()

		return $(window).scrollTop() > $(window).height() - (descripcionHeight * 2)
	}

})()
