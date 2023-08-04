var fruits = ['Apple', 'Banana', 'Orange'];

var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

console.log(fruits);

var replaceFruitName = 'Watermelon';
fruits[indexOfBanana] = replaceFruitName;

console.log(fruits);
// remove the last element from the array
fruits.pop();
console.log(fruits);

// add new element in the last of an array
fruits.push('Mango');
console.log(fruits);