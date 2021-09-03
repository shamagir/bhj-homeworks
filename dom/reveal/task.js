'use strict';

let reveals = Array.from(document.querySelectorAll('.reveal'));

function checkRevealPosition(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    console.log(elementTop, elementBottom, viewportHeight);
    if(elementTop < viewportHeight && elementBottom < viewportHeight && elementBottom >0) {
    	element.classList.add('reveal_active');
    } else {
    	element.classList.remove('reveal_active');
    }
};

reveals.forEach(function(item){
	window.addEventListener('scroll', function() {
		checkRevealPosition(item)
	});
});