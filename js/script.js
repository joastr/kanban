"use strict";

// ANIMATION 

var fly = document.querySelector('#fly');
var yellowCreature = document.querySelector('#ziggy-yellow');
var orangeFish = document.querySelector('#orange-fish');
var circle = document.querySelector('#circle');
var fishFly =document.querySelector('#fish-fly');

fishFly.addEventListener('click',function(){
	fly.classList.toggle('fly-rotate');
	
});

yellowCreature.addEventListener('click',function(){
	yellowCreature.classList.toggle('swim-yellow');
});

orangeFish.addEventListener('click',function(){
	orangeFish.classList.toggle('orange-fish');
});




$(document).ready(function() {
	$('#blue').hover(function() {
		$('#blue').addClass('swim');
	}, function() {
		$('#blue').removeClass('swim');
	});
});




