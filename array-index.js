var numbers = [84, 86, 51, 96, 82, 94];
// 1. get element value by index
var element = numbers[1];
console.log(element);
// 2. set element value by index
numbers[2] = 75;
numbers[3] = 89;
console.log(numbers);
// 3. find index of an element
var positionIndex = numbers.indexOf(86);
console.log(positionIndex);

var indexOfNonIncludedValue = numbers.indexOf(50);
console.log(indexOfNonIncludedValue);