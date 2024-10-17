let container = document.querySelector(".container");
function renderGrid(size) {
	container.innerHTML = "";
	for (i = 0; i < size; i++) {
		let row = document.createElement("div");
		row.classList.add("row");
		for (j = 0; j < size; j++) {
			let square = document.createElement("div");
			square.classList.add("square");
			row.appendChild(square);
		}
		container.appendChild(row);
	}
}

container.addEventListener("mouseover", (e) => {
	let target = e.target;
	if (target.classList.contains("square")) {
		let randomColor =
			"#" + (Math.random().toString(16) + "000000").substring(2, 8);
		target.style.backgroundColor = randomColor;
		let opacity = window.getComputedStyle(target).opacity * 1;
		opacity -= 0.1;
		target.style.opacity = opacity;
	}
});

let sizeButton = document.querySelector(".gridSize");
sizeButton.addEventListener("click", () => {
	let newSize = parseInt(prompt("Choose a new grid size"));
	if (newSize > 100 || Number.isInteger(newSize) == false || newSize < 0) {
		alert("This number is not allowed!");
	} else {
		renderGrid(newSize);
	}
});
