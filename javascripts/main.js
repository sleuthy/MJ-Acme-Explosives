"use strict";

console.log("working main.js");

// Create a simple user interface for your product catalog where a user can select a category
// from a dropdown.
// When a category is selected, you must use Promises to read, first, from the categories.json
// to load that array of objects,
// then load types.json, then products.json.

// Once all data is loaded, you need to display the products in a Bootstrap grid.
// Each product must display the string name of its product type, and product category.
// Not the integer id value.

var output = document.getElementById("output");

var Acme = function(originalAcme){
	let acmeItems = [];

	originalAcme.sortCategories = (data) => {
		data.categories.forEach( (element) => {
			acmeItems.push(element);
		});
	};

	originalAcme.loadCategories = () => {
		return new Promise( (resolve, reject) => {
			let request = new XMLHttpRequest();
			request.onload = function(){
				if (request.status === 200){
					var data = JSON.parse(request.responseText);
					originalAcme.sortCategories(data);
					resolve(acmeItems);
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
console.log(acmeItems);

}(Acme || {});


