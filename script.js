var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.className = "delete";
	button.appendChild(document.createTextNode("Delete"));
	var div = document.createElement("div");
	div.appendChild(li);
	div.appendChild(button);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOffItem(index) {
	liList[index].classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function (event) {
	var target = event.target;
	if (target.tagName === "LI") {
		target.classList.toggle("done");
	} else if (target.tagName === "BUTTON") {
		target.parentElement.parentElement.removeChild(target.parentElement);
	}
});