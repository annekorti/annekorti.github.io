 var siteList = document.querySelector('.site__list');
 var toggle = document.querySelector('.main__nav__toggle');

toggle.addEventListener('click', function() {
 	if (siteList.classList.contains('hide')) {
 			toggle.classList.add('open');
 			siteList.classList.remove('hide');
      siteList.classList.add('show');
    } else {
      siteList.classList.add('hide');
      toggle.classList.remove('open');
      siteList.classList.remove('show');
    }
  });

/*window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) { 
		if (siteList.classList.contains('show')) {
			siteList.classList.remove('show');
			siteList.classList.add('hide');
		}
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) { 
		if (siteList.classList.contains('show')) {
			siteList.classList.remove('show');
			siteList.classList.add('hide');
		}
	}
});
*/
