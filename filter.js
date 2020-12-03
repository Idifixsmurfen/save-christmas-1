
function filter(arr, func) {

}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = numbers.filter( x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv

const FilteredNumbers = numbers.filter( x => x < 5)
console.log(FilteredNumbers)

// TEST 3 - skriv själv
const numberz = [4, 10, 3, 12, 99, 55, 36, 33, 75 ,38 ,58, 76, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumberz = numberz.filter( x => 7 < x)
console.log(filteredNumberz)
