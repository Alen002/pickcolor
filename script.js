console.log('js is working');
let buttons = document.querySelectorAll('button')

function startGame() {
    // Create the color which needs to be guessed
    let randomRed = Math.random()*255;
    resultRed = Math.round(randomRed);

    let randomGreen = Math.random()*255;
    let resultGreen = Math.round(randomGreen);

    let randomBlue = Math.random()*255;
    let resultBlue = Math.round(randomBlue);

    document.querySelector('#showRGB').textContent = (resultRed + ' ' + resultGreen + ' ' + resultBlue);
        
    //Fill all rectangles with random color
    buttons.forEach((entries) => {
        resultR = Math.round(Math.random()*255);
        resultG = Math.round(Math.random()*255);
        resultB = Math.round(Math.random()*255);
        entries.style.backgroundColor = 'rgb(' +resultR+ ',' +resultG+ ',' +resultR+ ')';

    })
    
    //Create the random array
    randomArray = Math.random()*5;
    randomArrayResult = Math.round(randomArray);
    console.log(randomArrayResult)
       
    document.querySelectorAll('button')[randomArrayResult].style.backgroundColor = 'rgb(' +resultRed+ ',' +resultGreen+ ',' +resultRed+ ')';
}

 function checkResult(result) {
     let id = result;
     
     if(id == randomArrayResult ) {
        alert('You guessed it right');
     }
 }