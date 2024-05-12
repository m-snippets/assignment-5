
//1
console.log("Hello WOrld");
// 2
let temperature = 5;
if (temperature < 20) {
	console.log("its cold");
}
//3
let apples = 10;
console.log("You give away 3");
apples -= 3;
console.log("now you have apples:");
console.log(apples);
//4
let firstname = "syed";
let lastname = "taha";
let fullname = `${firstname + lastname}`;
console.log(fullname);
//5

if (5 > 3) console.log("yes");

//6
function calculatearea(rad: any): any {
	const pi = 2.7143;
	let area = pi * rad * 2;
	return area;
}
let radius: number = 5;
calculatearea(radius);

//7
let a;
for (a = 1; a <= 50; a++) {
	console.log(a);
	if (a % 5 == 0) {
		console.log("fizz");
	} else if (a % 3 == 0) {
		console.log("buzz");
	}
}

//8
let x;
let temp = [5, 10, 7, 9, 10];
let highest = temp[0];
for (x = 0; x > 5; x++) {
	if (temp[x] > highest) {
		highest = temp[x];
	}
	console.log(highest);
}
console.log(highest);

//9
let age1 = 5;
if (age1 >= 18) {
	console.log("adult");
} else {
	console.log("minor");
}

//10
let array = [7, 8, 7, 59, 6];
function array1(arr: number[]): any {
	let count = 0;
	for (let x = 0; x < 5; x++) {
		if (x > 0) {
			count++;
		}
		return count;
	}
}

console.log(array1(array));

//11
let word1 = ["bubuh", "akhsdh", "slakjs", "aaaaa"];
function word(words: string[]): any {
	const aWords = words.filter((word) => word.startsWith("a"));
	return aWords;
}
const wordsArray = ["apple", "banana", "apricot", "cherry", "avocado"];
const filteredArray = word(wordsArray);
console.log(filteredArray);

//12
let fruits = ["apple", "banan", "apricot", "strawberry"];
const arraylength = [fruits.length - 2];
console.log(arraylength);

//13
let simple = [1, 2, 2, 8, 3];
let squared = [0];
function squaring(a: number[]): any {
	for (let h = 0; h < 5; h++) {
		squared[h] = Math.pow(a[h], 2);
	}
}
console.log(squaring(simple));

//14

function reverse(g: number[]): number[] {
	let rev: number[] = [];
	for (let i = g.length - 1; i >= 0; i--) {
		rev.push(g[i]);
	}
	return rev;
}

console.log(reverse([1, 2, 3, 4]));

//15
let scores=[10, 5, 20, 20, 4, 5, 2, 25, 1]
let maxLimit = 20;
let minLimit = 5;
let countExceedMax = 0;
let countExceedMin = 0;

for (let i = 0; i < scores.length; i++) {
	if (scores[i] > maxLimit) {
		countExceedMax++;
	}
	if (scores[i] < minLimit) {
		countExceedMin++;
	}
}

console.log(`Number of times the score exceeds the maximum limit: ${countExceedMax}`);
console.log(`Number of times the score exceeds the minimum limit: ${countExceedMin}`);

//16
function removeFalseyValues(arr: any[]): any[] {
	return arr.filter((value) => !!value);
}

const array2 = [false, null, 0, "", undefined, NaN, "hello", 42];
const filteredArray1 = removeFalseyValues(array);
console.log(filteredArray);

//17
const arr = [1, 2, 3];
const arr1 = [4, 5, 6];
const concatenatedArray = arr.concat(arr1);
console.log(concatenatedArray);

//18
