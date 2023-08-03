var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

/* var scoreBoard = {
    direct: {
        myScore: 85,
        tomScore: 66,
        janeScore: 95,
        peterScore: 56,
        johnScore: 40
    },
    individual: [
        {
            name: 'Mine',
            score: 85
        },
        {
            name: 'Tom',
            score: 66
        },
        {
            name: 'Jane',
            score: 95
        },
        {
            name: 'Peter',
            score: 56
        },
        {
            name: 'John',
            score: 40
        }
    ]
}; */

var checkScore = myScore;
/* var checkScore = scoreBoard.direct.myScore;
var checkScore = scoreBoard.individual[0].score; */

if (checkScore >= 80) {
    console.log(checkScore, 'A Grade');
}
else if (checkScore >= 60) {
    console.log(checkScore, 'B Grade');
}
else if (checkScore >= 50){
    console.log(checkScore, 'C Grade');
}
else if (checkScore >= 40) {
    console.log(checkScore, 'D Grade');
}
else {
    console.log(checkScore, 'F Grade');
}