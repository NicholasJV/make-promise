/*----------------------------------------------------------------
Promises Workshop: build the pledge.js deferral-style promise library
----------------------------------------------------------------*/
// YOUR CODE HERE:

var $Promise = function(){
	this.state = "pending";
	this.value = null;
	this.handlerGroups = [];
}



$Promise.prototype.then = function(successH, errorH){
	var handler = {};
	var x = 2;
	console.log("two: " + x);
	console.log("successH: " + successH);

	if (typeof successH === 'function'){
		handler.successCb = successH;
	} else {
		handler.successCb = null;
	}
	if (typeof errorH === 'function'){
		handler.errorCb = errorH;
	} else {
		handler.errorCb = null;
	}
	// console.log('handler props', handler);
	this.handlerGroups.push(handler);

	console.log("hG in THEN: " + this.handlerGroups);
	console.log("handler: " + handler);
}

var Deferral = function(){
	this.$promise = new $Promise();
};

$Promise.prototype.callHandlers = function(status){
	console.log("hG:", this.handlerGroups)
	if (this.state === "pending"){
		return
	}
	if (this.state === "resolved"){
		handlerGroups.reduce(handler){
// WE ARE HERE: write reduce to execute and empty each handler from the array.
		}
	}
}

Deferral.prototype.resolve = function(){
	Array.prototype.slice.call(arguments);
	if (this.$promise.state === "pending"){
		this.$promise.value = arguments[0];
		this.$promise.state = "resolved";
		// this.$promise.callHandlers("success")
	}
}

Deferral.prototype.reject = function(){
	Array.prototype.slice.call(arguments);
	if (this.$promise.state === "rejected"){
		return undefined;
	} 
	if (this.$promise.state !== "resolved"){
		this.$promise.value = arguments[0];
		this.$promise.state = "rejected";
		// this.$promise.callHandlers("error")
	}
}

function defer(){
	return new Deferral(); //(instance of Deferral)
}








/*-------------------------------------------------------
The spec was designed to work with Test'Em, so we don't
actually use module.exports. But here it is for reference:

module.exports = {
  defer: defer,
};

So in a Node-based project we could write things like this:

var pledge = require('pledge');
…
var myDeferral = pledge.defer();
var myPromise1 = myDeferral.$promise;
--------------------------------------------------------*/




