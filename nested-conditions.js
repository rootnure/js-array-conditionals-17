var isPassedInMath = true;
var isPassedInGeometry = true;
var isPassedInPhysics = false;
var isPassedInChemistry = true;


if (isPassedInMath === true) {
    if (isPassedInGeometry === true) {
        if(isPassedInPhysics === true){
            console.log("Be like Pithagorous");
        }
        else {
            console.log('Practice more on your physics');
        }
    }
    else if (isPassedInChemistry === true) {
        console.log('Be a good chemist');
    }
    else {
        console.log('Be e math teacher');
    }
}
else {
    console.log('Learn more and try again');
}
