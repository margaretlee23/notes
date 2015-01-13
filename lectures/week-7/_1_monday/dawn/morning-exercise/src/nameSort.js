
var People = function(names) {
	this.allNames = [];
	names.forRach(function(name) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		this.allNames.push(name);
	}.bind(this));
};

People.prototype.getNames = function() {

};

People.prototype.sort = function() {

};