const isScrolling = () => document.documentElement.scrollTop > 1;

function navScroll(){
	let nav = document.querySelector('nav');

	if(isScrolling(nav)){
		nav.addClass('is-scrolling');
		console.log(nav);
	}
	else{
		nav.removeClass('is-scrolling');
	}
}

window.addEventListener('load',navScroll);
window.addEventListener('scroll',navScroll);