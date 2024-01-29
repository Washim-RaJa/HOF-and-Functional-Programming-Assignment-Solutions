function randomNumber(){
    return Math.random()*Math.pow(10,17);
}

function randomNumberWithDelay(delay){
    let countdown = delay;
    let msg = setInterval(()=>{
        console.log(`The remaining time is ${countdown} second`);
        countdown--;

        if(countdown===0){
            clearInterval(msg);
            console.log(`Your generated random number is ${randomNumber()}`);
        }
    },1000)
}

randomNumberWithDelay(3);
