var navButton = document.getElementById("menu");

if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector("nav");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} else {
         nav.style.display = "block";
      }
		
	}, false);
}

var navButton = document.querySelector("header");

if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector("nav");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} 
	}, false);
}

var navButton = document.querySelector("article");

if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector("nav");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} 
	}, false);
}
var navButton = document.getElementById("contact");

if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector("nav");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} 
	}, false);
}

var navButton = document.querySelector("footer");

if (navButton.addEventListener) {
	navButton.addEventListener("click", function() {
		var nav = document.querySelector("nav");
		if (nav.style.display === "block") {
			nav.style.display = "";
		} 
	}, false);
}

