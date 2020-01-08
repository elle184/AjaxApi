/**
 * Clase para el manejo de peticiones mediante AJAX.
 */
class Ajax {
	/**
	 * Constructor de la clase.
	 */
	constructor() {
		this.xmlHttpRequest = new XMLHttpRequest();
	}

	/**
	 * Método encargado de ejecutar una petición asincrona.
	 * 
	 * @param {String} tipoPeticion: 	El tipo de petición que solicita la página.
	 * @param {String} url:				La URL a invocar.
	 * @return {XMLHttpRequest}:		El objeto con la respuesta de la petición AJAX.
	 */
	ejecutar(tipoPeticion, url) {
		this.xmlHttpRequest.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				JSON.parse(this.responseText);
			}
		}
		
		this.xmlHttpRequest.open(tipoPeticion, url, true);
		this.xmlHttpRequest.send();

		return this.xmlHttpRequest;
	}
}