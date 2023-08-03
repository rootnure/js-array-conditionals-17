// part 1
var num1 = 13;
var num2 = 79;
var num3 = 99;

if(num1 > num2 ){
    console.log(num1, 'is larger than', num2);
    if(num1 > num3) {
        console.log(num1, 'is also larger than', num3);
        console.log(num1, 'is the largest among', num1, ',', num2, 'and', num3);
    }
    else {
        console.log(num3, 'is larger than', num1, 'so also larger than', num2);
        console.log(num3, 'is the largest among', num1, ',', num2, 'and', num3);
    }
}
else {
    console.log(num2, 'is larger than', num1);
    if(num2 > num3){
        console.log(num2, 'is also larger than', num3);
        console.log(num2, 'is the largest among', num1, ',', num2, 'and', num3);
    }
    else {
        console.log(num3, 'is larger than', num2, 'so also larger than', num1);
        console.log(num3, 'is the largest among', num1, ',', num2, 'and', num3);
    }
}
