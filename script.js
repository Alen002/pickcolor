console.log('js is working');
let buttons = document.querySelectorAll('button')


function startGame() {
    times = 0; //is used as a global variable
    
    // Create the color which needs to be guessed  
    let resultRed = Math.floor(Math.random()*256);
    let resultGreen = Math.floor(Math.random()*256);
    let resultBlue = Math.floor(Math.random()*256);

    document.querySelector('#showRGB').innerHTML = (resultRed + ' ' + resultGreen + ' ' + resultBlue);
    
    
    randomColors(); //call randomColors function to create different colors for all six rectangles

    //Create the random array
    randomArrayResult = Math.floor(Math.random()*5);
    console.log(randomArrayResult)
    document.querySelectorAll('button')[randomArrayResult].style.backgroundColor = 'rgb(' +resultRed+ ',' +resultGreen+ ',' +resultBlue+ ')';   
    return times;
}

function randomColors() {
    buttons.forEach((entries) => {
        resultR = Math.floor(Math.random()*256);
        resultG = Math.floor(Math.random()*256);
        resultB = Math.floor(Math.random()*256);
        entries.style.backgroundColor = 'rgb(' +resultR+ ',' +resultG+ ',' +resultB+ ')'; 
    })
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
         document.querySelectorAll('button')[id].style.backgroundColor = 'lightblue';
     }
 }