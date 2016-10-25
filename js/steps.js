;(function(){
	$(".step:nth-child(1)").addClass("active")

	const selector = "#contact-form"

	$(selector).find(".input").on("change",(ev)=>{
		let $input = $(ev.target)
		let $next_step = $input.parent().next()
		enfocar_siguiente_step($next_step)
		 console.log(es_valido_formulario) 

	})
	//helprs
	function validar_formulario(){

	}

	function es_valido_formulario(){
		return document.querySelector(selector).checkValidity()
	}

	function enfocar_siguiente_step($next_step){
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()
		//$next_input.focus()

	}

})()