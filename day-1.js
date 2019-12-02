// --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?

let modules = [
	106404,
	140515,
	142745,
	120767,
	79665,
	54235,
	127391,
	72207,
	70799,
	79485,
	103994,
	129583,
	132791,
	95135,
	121194,
	129425,
	64861,
	123233,
	132805,
	87916,
	111395,
	126625,
	113045,
	61704,
	65413,
	145820,
	75988,
	74717,
	115137,
	85331,
	86833,
	86063,
	85464,
	139738,
	103372,
	101942,
	52741,
	77660,
	112745,
	103109,
	106301,
	141714,
	74546,
	55474,
	106747,
	140234,
	60426,
	145867,
	144810,
	94179,
	101606,
	77763,
	139291,
	104246,
	148513,
	126828,
	64624,
	139058,
	85839,
	86636,
	62198,
	137358,
	76711,
	87848,
	141711,
	114079,
	71639,
	95896,
	104522,
	61929,
	72199,
	142790,
	137736,
	123437,
	91872,
	127661,
	111179,
	51548,
	83452,
	91196,
	117798,
	84484,
	75517,
	83820,
	97407,
	89181,
	71428,
	72758,
	73076,
	109957,
	50601,
	74571,
	65556,
	129765,
	80626,
	126995,
	73480,
	71360,
	103288,
	85670
];

function findSumOfFuel(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let temp = Math.floor(arr[i] / 3) - 2;
		sum += temp;
	}
	return sum;
}


console.log(findSumOfFuel(modules));
//should get 3302760