const superheroes = require("superheroes");
const supervillains = require("supervillains");
try {
	const mySuperHero = superheroes.random();
	const mySuperVillain = supervillains.random();
	console.log(mySuperHero + " vs " + mySuperVillain);
} catch (err) {
	console.log("ih, deu merda");
}
