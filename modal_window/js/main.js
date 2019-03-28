// Write your pseudo code here! HAPPY CODING!!
//<button type="button" id="showModal">Click for a Good Time</button>
// <div class="modal-background">
//     <div class="modal-content">
//       <h3>Hi, I'm a Modal</h3>  
//       <p>Use me for content, photos, forms, etc.</p>
//       <button id="close">Close</button>
// let modal = document.querySelector('.modal-content');
// let buttonOpen = document.getElementById('showModal');
// let buttonClose = document.getElementById('close');
document.getElementById('showModal').addEventListener('click',function(){
	document.querySelector('.modal-background').style.display = "block";
	});

document.getElementById('close').addEventListener('click',function(){
	document.querySelector('.modal-background').style.display = "none";
	});



