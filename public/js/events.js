const isScrolling = () => document.documentElement.scrollTop > 1;
const isMobile = () => screen.width < 769;

function navScroll(){
	let nav = document.querySelector('nav');

	if(isScrolling(nav)){
		if(!nav.containClass('is-scrolling')){
			nav.addClass('is-scrolling');
		}
	}
	else{
		nav.removeClass('is-scrolling');
	}
}

function toggleSidebar(){
	let sidebar = document.querySelector('.l-sidebar');
	sidebar.toggleClass('is-active');
}

window.addEventListener('load',navScroll);
window.addEventListener('scroll',navScroll);