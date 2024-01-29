function reverseString(inputStr){
    return inputStr.split('').reverse().join('');
}

function reverseWithDelay(inputStr){
    setTimeout(()=>{
        let reversedStr = reverseString(inputStr);
        console.log(reversedStr);
    },2000)
}

let input = 'maps';

reverseWithDelay(input);
