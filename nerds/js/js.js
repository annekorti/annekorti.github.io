var i1 = document.querySelector(".i1");
var i2 = document.querySelector(".i2");
var i3 = document.querySelector(".i3");

var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");

var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) { 
	  	if (popup.classList.contains("modal-show")) {
	  		popup.classList.remove("modal-show");
	  		}
	  	}
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) { 
	  	if (mapPopup.classList.contains("modal-show")) {
	  		apPopup.classList.remove("modal-show");
	  		}
	  	}
});

i1.addEventListener("click", function(evt) {
	evt.preventDefault();
	i1.classList.add("active");
	i2.classList.remove("active");
	i3.classList.remove("active");
	item1.classList.remove("visually-hidden");
	item2.classList.add("visually-hidden");
	item3.classList.add("visually-hidden");
});
i2.addEventListener("click", function(evt) {
	evt.preventDefault();
	i2.classList.add("active");
	i1.classList.remove("active");
	i3.classList.remove("active");
	item2.classList.remove("visually-hidden");
	item1.classList.add("visually-hidden");
	item3.classList.add("visually-hidden");
});
i3.addEventListener("click", function(evt) {
	evt.preventDefault();

	i3.classList.add("active");
	i1.classList.remove("active");
	i2.classList.remove("active");
	item3.classList.remove("visually-hidden");
	item2.classList.add("visually-hidden");
	item1.classList.add("visually-hidden");
});