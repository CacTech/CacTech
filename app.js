if ('serviceWorker' in navigator) {
	//Let's register the ServiceWorker
	navigator.serviceWorker.register('/sw.js').then(function () {
	  //We're good to go
	  console.log("Service Worker Registrado Exitosamente.");
	}).catch(function (err) {
	  console.log("Hubo un error en la instalación del Service Worker: " + err);
	});
  }