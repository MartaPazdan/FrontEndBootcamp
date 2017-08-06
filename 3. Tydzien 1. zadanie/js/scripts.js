(function() {

var button = document.querySelector("#button");

button.addEventListener("click", function(e) {

	if(!navigator.geolocation) return;
		button.textContent = "Czekaj..."

		button.setAttribute("disabled", true);

		navigator.geolocation.getCurrentPosition(function(position) {

			  var coords = position.coords,
					 mapLink = document.createElement("a");

				console.log(coords);

				mapLink.classList.add("button");
				mapLink.setAttribute("href", "http://bing.com/maps/default.aspx?cp=" + coords.latitude + "~" + coords.longitude);
				mapLink.textContent = "Zobacz na mapie";

				button.parentNode.appendChild(mapLink);
				button.parentNode.removeChild(button);
		});

}, false);


})();