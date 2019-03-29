// Write your pseudo code here! HAPPY CODING! :) 
//Step #3 (in main.js): Toggle the .active class on the .sidebar when the hamburger icon is clicked.
let hamburger = document.querySelector('.hamburger'); 
let navMenu = document.querySelector('.sidebar');
let close = document.querySelector('.close');


hamburger.addEventListener('click', function(){
	navMenu.classList.toggle('active');



});
close.addEventListener('click', function(){
	navMenu.classList.toggle('active');
})

