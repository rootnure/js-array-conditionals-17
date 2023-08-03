var fruits = ['Apple', 'Banana', 'Orange'];

var indexOfBanana = fruits.indexOf('Banana');

// console.log(positionOfBanana);

var replaceFruitName = 'Watermelon';
fruits[indexOfBanana] = replaceFruitName;

console.log(fruits);