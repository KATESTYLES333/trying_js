let array = [1, 2, 2, 0, 6, 5, 4];
let array1 = [6, 2, 3];
let array2 = [4, 5, 1];
let matrix = [[9, 0],[1, 0],[2, 3]];
let emptyArray = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function uniqueEl (arr) {
	let uniqItems = Array.from(new Set(arr));
	return uniqItems;
}

function getMaxOfArray(arr) {
	let temp = Math.max.apply(null, arr);
	return temp;
}

function maxE (arr){
	let max = arr[0];
	for(let i = 0; i != 5; ++i){
		for(let j = 0; j != arr.length; ++j){
			if(max < arr[j]){
				max = arr[j];
			}
		}
		return max;
	}
}

function concatOfArray(arr1, arr2){
	let first = arr1.sort((a, b) => a - b);
	let second = arr2.sort((a, b) => a - b);
	let sortAll = first.concat(second).sort((a, b) => a - b);
	return sortAll;
}

function strangeTask(arr1, arr2, arr3){	
	let first = arr1.sort((a, b) => a - b);
	let second = arr2.sort((a, b) => a - b);
	let new3 = first;
	console.log("new array : " + new3);
}

function allPositiveElements(arr){
	return arr.filter((value) => {return value > 0;});
}

function allNotPositiveElements(arr){
	return arr.filter((value) => {return value < 0;});
}

function equalZeroElements(arr){
	return arr.filter((value) => {return value == 0;});
}

function task6 (arr1, arr2){
	let first = allPositiveElements(arr1);
	let second = allNotPositiveElements(arr1);
	let third = equalZeroElements(array1);
	arr2.push(first, second, third);
	return arr2;
}
