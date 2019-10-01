console.log('js is working');
let buttons = document.querySelectorAll('button')


function startGame() {
    times = 0; //is used as a global variable
    
    // Create the color which needs to be guessed
    let randomRed = Math.random()*256;
    resultRed = Math.floor(randomRed);

    let randomGreen = Math.random()*256;
    let resultGreen = Math.floor(randomGreen);

    let randomBlue = Math.random()*256;
    let resultBlue = Math.floor(randomBlue);

    document.querySelector('#showRGB').innerHTML = (resultRed + ' ' + resultGreen + ' ' + resultBlue);
        
    //Fill all rectangles with random color
    buttons.forEach((entries) => {
        resultR = Math.floor(Math.random()*256);
        resultG = Math.floor(Math.random()*256);
        resultB = Math.floor(Math.random()*256);
        entries.style.backgroundColor = 'rgb(' +resultR+ ',' +resultG+ ',' +resultR+ ')';

    })
    
    //Create the random array
    randomArray = Math.random()*5;
    randomArrayResult = Math.round(randomArray);
    console.log(randomArrayResult)
       
    document.querySelectorAll('button')[randomArrayResult].style.backgroundColor = 'rgb(' +resultRed+ ',' +resultGreen+ ',' +resultRed+ ')';
    return times;
}


 function checkResult(result) {
     
     let id = result;
     times +=1;
     if(id == randomArrayResult ) {
        alert('You guessed it right');
        document.querySelector('#attempts').textContent = 0;
        startGame();
     } else {
         document.querySelector('#attempts').textContent = times;
         document.querySelectorAll('button')[id-1].style.backgroundColor = 'lightblue';
     }
 }