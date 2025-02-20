import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup2();

function warmup1() {
    console.log("Exercise week 1");
}

function warmup2() {
    console.log("Exercise week 2");
    let scores = getRandomScores(10);
    const button2a = document.querySelector('#button-2a');
    button2a.addEventListener ('click', function (){
        console.log ('button1 clicked');
        let html = '<ul>';
        scores.forEach(function(score) {
            html += ` <li>${score}</li>` ;
        });
        html += '</ul>';
        document.querySelector('#content-2').innerHTML = html;
    });
    const button2b = document.querySelector('#button-2b');
    button2b.addEventListener ('click', function (){
        console.log ('button2 clicked');
        scores = scores.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });

        const sum = scores.reduce(function (total, current) {
            return total + current;
        });
    });


    
}



function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}