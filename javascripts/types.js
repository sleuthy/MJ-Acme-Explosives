"use strict";

var Acme = function(originalAcme){
	let acmeTypes = [];

	originalAcme.sortTypes = (data) => {
		data.types.forEach( (element) => {
			acmeTypes.push(element);
		});
	};

	originalAcme.loadTypes = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					originalAcme.sortTypes(data);
					resolve(acmeTypes);
				} else {
					//something went wrong
					reject(new Error("XMLHttpRequest Error: ", request.statusText));
				}
			};
			request.open("GET", "categories.json");
			request.send();
		})
	}
	return originalAcme;
console.log(acmeTypes);

}(Acme || {});

