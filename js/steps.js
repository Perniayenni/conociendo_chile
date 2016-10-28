;(function(){
	//$(".step:nth-child(1)").addClass("active")
	const selector = "#contact-form"

	$(".step textarea").on("keydown",(ev)=>{
		if (ev.keyCode == 13) {
			ev.preventDefault()
			$(ev.target).blur( )
		}
	})

	$(".path-step").on("click",(ev)=>{
		const $current_circle = $(ev.target)
		$(".path-step.active").removeClass("active")
		$current_circle.addClass("active")

		const posicion = $current_circle.index(".path-step") + 1

		let $test = $(".step:nth-child("+posicion+")")

		siguiente($test )
	})

	$(selector).on("change",(ev)=>{
		const $input = $(ev.target)
		const $next_step = $input.parent().next(".step")
		const is_form_valid = es_valido_formulario()
		
		if(!is_form_valid && $next_step.length > 0){
			siguiente($next_step)
		}else{
			
			validar_formulario() 
		}
		
	})
	//helprs
	function validar_formulario(){
		if(es_valido_formulario()){
			send_form()	
		}else{
			let $fieldsey_invalido = $(selector).find(".input:invalid").first().parent()
			siguiente($fieldsey_invalido)
		}
	}

	function es_valido_formulario(){
		return document.querySelector(selector).checkValidity()
	}

	function siguiente($next_step){
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()

		// coordinar los circulos
		const posicion = $next_step.index(".step") + 1

		$(".path-step.active").removeClass("active")
		$(".path-step:nth-child("+posicion+")").addClass("active")


		//$next_input.focus()
		//validar_formulario()

	}

	function send_form(){
		const $form = $(selector)
		$.ajax({
		    url: $form.attr("action"),
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	$form.slideUp()
		    	$("#info-contacto").html("Envíamos tu mensaje, pronto nos pondremos en contacto contigo")
		    }
		})
	}


})()