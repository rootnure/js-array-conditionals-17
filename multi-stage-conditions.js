var balance = 10+10+20+15;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;
if(danishPrice <= balance) {
    console.log('I will eat danish');
}
else if(butterBread <= balance){
    console.log('I will eat butter bread');
}
else if(toastBiscuit <= balance) {
    console.log('I will eat a toast biscuit');
}
else {
    console.log('I will have just a cup of tea');
}