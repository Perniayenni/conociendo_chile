;(function(){
	class UserLocation{
		static get(callback){
			if (navigator.geolocation){
				navigator.geolocation.getCurrentPosition((location)=>{
					callback({
						lat: location.coords.latitude,
						lng: location.coords.longitude
					})
				})
			}else{
				alert("No pudimos detectar el lugar en el que te encuentras")	
			}
		}
	}
	const my_place ={
		lat: -33.4378439,
		lng: -70.65047959999998
	}
	google.maps.event.addDomListener(window,"load",()=>{
		const map = new google.maps.Map(
			document.getElementById('mapa'),
			{
				center: my_place,
				zoom: 15
			}
		)
		const marker = new google.maps.Marker({
			map: map,
			position: my_place,
			visible: true
		})

		UserLocation.get((coords)=>{
			console.log(coords)
			//calcular distancia al usuario
			let origen = new google.maps.LatLng(coords.lat,coords.lng)//latLNG
			let destino = new google.maps.LatLng(my_place.lat,my_place.lng)
			let service = new google.maps.DistanceMatrixService()
			
			service.getDistanceMatrix({
				origins:[origen],
				destinations: [destino],
				travelMode: google.maps.TravelMode.DRIVING
			},(response,status)=>{
				if(status === google.maps.DistanceMatrixStatus.OK){
					const duration_element = response.row[0].elements[0]
					const duration_viaje = duration_element.duration.text
					console.log(duration_element)
					document.querySelector("#message")
						.innerHTML = `
						Estas a ${duration_viaje} de plaza de Armas
						`
				}
			})

		})
	})

})()