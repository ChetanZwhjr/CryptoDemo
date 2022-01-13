import HTTP from './http';

class APIList {
	constructor() { }

	getCryptoList(){
		console.log("getCryptoList called")
		return HTTP.GET("cryptocurrency/listings/latest?start=1&limit=100&convert=USD");
	}
	getCryptoDetail(){
		return HTTP.GET("cryptocurrency/listings/latest?start=1&limit=100&convert=USD");
	}
	


	
}

export default new APIList();
