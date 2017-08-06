(function() {

function Toggler(selector) {
	if( !(this instanceof Toggler) ) {
		return new Toggler(selector);
	}

	this._elem = document.querySelector(selector);


}

Toggler.prototype.getElem = function() {
	return this._elem;
};

Toggler.prototype.show = function() {
	this.getElem().style.display = "";
};

Toggler.prototype.hide = function() {
	this.getElem().style.display = "none";
};


var elem = Toggler("#section"),
	button = document.querySelector("#button");

	elem.hide();

button.addEventListener("click", function(){

	if(elem.getElem().style.display == "none") {
		elem.show();
		button.textContent = button.dataset.hide;

	} else {
		elem.hide();
		button.textContent = button.dataset.show;

	}
}, false);


})();