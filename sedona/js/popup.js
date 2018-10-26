var btnSearch = document.querySelector(".button-search");
var popup = document.querySelector(".modal");

var adultMin = popup.querySelector("[name=adult-min"); 
var adultMax = popup.querySelector("[name=adult-max"); 
var childMin = popup.querySelector("[name=child-min"); 
var childMax = popup.querySelector("[name=child-max");

var adult =  popup.querySelector("[name=adult");
var people = popup.querySelector("[name=people");

btnSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-active");
	popup.classList.toggle("modal-disactive");
}); 

adultMin.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (adult.value > 0) {
		adult.value--;
	}
});

adultMax.addEventListener("click", function (evt) {
	evt.preventDefault();
	adult.value++;
});

childMin.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (people.value > 0) {
		people.value--;
	}
});

childMax.addEventListener("click", function (evt) {
	evt.preventDefault();
	people.value++;
});
