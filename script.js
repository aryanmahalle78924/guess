'use strict';


let secretNumber = Math.trunc((Math.random()*20)+1);
let score = 20;
let highscore=0;

    const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
    };

    document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);    
    if(!guess){
        //document.querySelector('.message').textContent='⛔️ No number!';
        displayMessage('⛔️ No number!');
    }else if(guess===secretNumber){
        //document.querySelector('.message').textContent='🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('.highscore').textContent=score;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }   
//     else if(guess>secretNumber){
//         if(score>1){
//             document.querySelector('.message').textContent='📈 Too high!';
//         score--;
//         document.querySelector('.score').textContent=score;
//         }else{
//             document.querySelector('.message').textContent="💥 You lost the game bro!!"
//             document.querySelector('.score').textContent=0;
//         }    
//     }else if(guess<secretNumber){
//         if(score>1){
//             document.querySelector('.message').textContent='📉 Too low!';
//         score--;
//         document.querySelector('.score').textContent=score;
//         }else{
//             document.querySelector('.message').textContent="you lost the game bro!!"
//             document.querySelector('.score').textContent=0;
//         }
//     }
    else if(guess!==secretNumber){
         if(score>1){
            //document.querySelector('.message').textContent=guess>secretNumber?'📉 Too high!':'📈 Too high!';
             displayMessage(guess>secretNumber?'📉 Too high!':'📈 Too high!');
            score--;
            document.querySelector('.score').textContent = score;
         }else{
//          //document.querySelector('.message').textContent="💥 You lost the game bro!!"
            displayMessage('💥 You lost the game bro!!');
            document.querySelector('.score').textContent=0;
         }
    }
});


document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value='';
    //document.querySelector('.message').textContent='start guessing...';
    displayMessage('start guessing...');
    document.querySelector('.number').textContent='?';
    document.querySelector('.highscore').textContent=0;
})


//Garbage
// document.querySelector('.message').textContent = 'hurray';
// document.querySelector('.score').textContent='100'
// document.querySelector('.number').textContent='20'

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=13;
