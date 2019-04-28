var lazyLoad = element => {
	var effect = "fadeIn";

	var img = new Image();
	img.src = element.getAttribute('data-src');

	img.onload = function(){
		element.removeAttribute('data-src');
		setImgOrBg(element,img);
		element.style.animation = effect + " .8s ease-out";
	};
};

var applyToAll = () => [].forEach.call(document.querySelectorAll("*[data-src]"), el => isInWindow(el) ? lazyLoad(el) : false);

var setImgOrBg = (element,img) => element.tagName == "IMG" ? element.src = img.src : element.style.backgroundImage = 'url(' + img.src + ')';

var isInWindow = element => element.getBoundingClientRect().top < window.innerHeight;

window.addEventListener("load",applyToAll);
window.addEventListener("scroll",applyToAll);