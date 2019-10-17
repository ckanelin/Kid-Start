var dropButtons = document.getElementsByClassName("drop-btn");

// Will toggle all dropdown texts in the same node
function toggleDropDown(event){
	var texts = event.srcElement.parentNode.getElementsByClassName("dropdown-text");

	for (i = 0; i < texts.length; i++){
		texts[i].classList.toggle("hide");
	}
	event.preventDefault();
}

for (i = 0; i < dropButtons.length; i++){
	dropButtons[i].addEventListener("click",toggleDropDown, false);
}