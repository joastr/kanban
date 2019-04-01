"use strict";

// ANIMATION 

const fly = document.querySelector('#fly');
const yellowCreature = document.querySelector('#ziggy-yellow');
const orangeFish = document.querySelector('#orange-fish');
const circle = document.querySelector('#circle');
const fishFly =document.querySelector('#fish-fly');

fishFly.addEventListener('click', () => {
	fly.classList.toggle('fly-rotate');
	
});

yellowCreature.addEventListener('click',() =>{
	yellowCreature.classList.toggle('swim-yellow');
});

orangeFish.addEventListener('click',() => {
	orangeFish.classList.toggle('orange-fish');
});




$(document).ready(() => {
	$('#blue').hover(() => {
		$('#blue').addClass('swim');
	}, () => {
		$('#blue').removeClass('swim');
	});
});




