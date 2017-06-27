var carnivoresListElement = document.getElementById('carnivores-list');

function showCarnivores (carnivores) {
	carnivores.forEach(function(carnivore) {
		carnivoresListElement.innerHTML += `<p>${carnivore}</p>`
	});
}

function showHerbivores (herbivores) {
	herbivores.forEach(function(herbivore) {
		carnivoresListElement.innerHTML += `<p>${herbivore}</p>`
	});

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);