const CACHE_NAME = "v1"
const cache_urls =[
					"offline/offline.html",
					"offline/style.css"
					]
self.addEventListener("install",function(ev){
	console.log("SW instalada")

	caches.open(CACHE_NAME)
		.then(function(cache){
			console.log("cache opened")
			return cache.addAll(cache_urls)
		})
})

self.addEventListener("fetch",function(ev){
	console.log(ev.request)
	ev.respondWith(
			caches.match(ev.request)
				.then(function(response){
					if(response){
						return response
					}

					return fetch(ev.request)

				})
		)
})