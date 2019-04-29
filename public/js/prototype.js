Element.prototype.addClass = function(...classes){
	this.classList.add(...classes);
};

Element.prototype.removeClass = function(...classes){
	this.classList.remove(...classes);
};

Element.prototype.containClass = function(classe){
	return this.classList.contains(classe);
};

Element.prototype.toggleClass = function(classe){
	this.classList.toggle(classe);
};