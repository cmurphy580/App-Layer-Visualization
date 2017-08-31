
const pic = document.querySelector('.mtn'); 
const phone_b = document.querySelector('.phone-b'); 

const arrow = document.querySelector('.fa-arrow-left'); 
const share = document.querySelector('.share'); 

const text = document.querySelector('.text'); 

const navB = document.querySelector('.main'); 
const topOfNav = navB.offsetTop - phone_b.offsetHeight;

function fixNav() {
	//console.log(topOfNav, window.scrollY); 
	if (window.scrollY >= topOfNav) { //add a class to the body instead of the specific element, that way it easier to target any of the children elements 
		document.body.style.marginBottom = (navB.offsetHeight + 'px');
		document.body.classList.add('fixed-nav');

		navB.style.marginTop = (phone_b.offsetHeight + 'px'); 
		phone_b.style.backgroundColor = 'rgba(0,168,255,1.0)';

		arrow.style.paddingTop = 5 + 'px'; 
		share.style.paddingTop = 5 + 'px';

		text.style.paddingTop = (navB.offsetHeight + 'px');   
	} else {
		document.body.style.paddingTop = 0; 
		document.body.classList.remove('fixed-nav');

		navB.style.marginTop = 0
		phone_b.style.backgroundColor = 'rgba(0,0,0,1.0)';

		arrow.style.paddingTop = 12 + 'px'; 
		share.style.paddingTop = 12 + 'px';

		text.style.paddingTop = 0; 
	}

}

window.addEventListener('scroll', fixNav); 