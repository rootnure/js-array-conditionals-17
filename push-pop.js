var courseCompleted = ['CSE112', 'CSE121', 'CSE122', 'CSE134', 'CSE135', 'CSE214', 'CSE215', 'CSE221', 'CSE222'];
var courseResults = [4.00, 3.50, 3.50, 4.00, 4.00, 4.00, 3.75, 4.00];

// use push to add new element to an array as the last element
// courseCompleted.push('CSE414');
// courseResults.push(3.75);
// courseCompleted.push('CSE415');
// courseResults.push(3.75);
// console.log(courseCompleted);
// console.log(courseResults);

// use pop to get last element
console.log(courseCompleted);
// courseCompleted.pop();
var element = courseCompleted.pop();
console.log('Pop element:', element);
console.log(courseCompleted);

// push()
var vowels = ['a', 'e', 'i']; vowels.push('o'); // vowels = ['a', 'e', 'i', 'o']
// pop()
var vowels = ['a', 'e', 'i', 'o', 'u']; vowels.pop(); // vowels = ['a', 'e', 'i', 'o']
// shift()
var vowels = ['a', 'e', 'i', 'o', 'u']; vowels.shift(); // vowels = ['e', 'i', 'o', 'u']
// unshift()
var vowels = ['e', 'i', 'o', 'u']; vowels.unshift('a'); // vowels = ['a', 'e', 'i', 'o', 'u']

// return value by pop()
var numbers = [10, 15, 20]; var popVal = numbers.pop(); // numbers = [10, 15]; popVal = 20
// return value by shift()
var numbers = [10, 15, 20]; var shiftVal = numbers.shift(5); // numbers = [15, 20]; shiftVal = 10