
// function pinValidate(){

// }

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const newPin = pin + '';
    return newPin;
}

document.getElementById('btn-pin-generate').addEventListener('click',function(){
    document.getElementById('typed-number-field').value = '';
    const newPin = getPin();
    if(newPin.length == 4){
        
     document.getElementById('show-pin-field').value = newPin;
    }
    else{
        // console.log("Sorry your pin is less than 4 digits",newPin)
        getPin();
    }
    document.getElementById('notify-wrong').style.display = "none";
    document.getElementById('notify-success').style.display = "none";
})


function checkNumber(number){
    const splitNumber = number.split('');
    // console.log("SplitNumber",splitNumber);
    const newStringAfterPop = splitNumber.pop();
    // console.log("Popped Number",newStringAfterPop);
    const newNumber = splitNumber.join("");
    // console.log(newNumber);
    return newNumber;

}

document.getElementById('typed-numbers').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number-field');

    if(isNaN(number)){
        if(number == '<'){
            const newValueAfterPop = checkNumber(typedNumberField.value);
            // checkNumber()
            typedNumberField.value = newValueAfterPop;
        }
        else if(number == 'C'){
            typedNumberField.value = ''
        }
    }
    
    else{
        // typedNumberField.value = typedNumber;
        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})

document.getElementById('btn-submit').addEventListener('click',function(){
    const pinNumber = document.getElementById('show-pin-field').value;
    const pinGivenByUser = document.getElementById('typed-number-field').value;


    if(pinNumber == pinGivenByUser){
        document.getElementById('notify-wrong').style.display = "none";
        document.getElementById('notify-success').style.display = "block";
        document.getElementById('typed-number-field').value = '';
        document.getElementById('show-pin-field').value = '';
    }
    else{
        document.getElementById('notify-wrong').style.display = "block";
        document.getElementById('notify-success').style.display = "none";
    }

})






// document.getElementById('notify-wrong').style.display = "none";
// document.getElementById('notify-success').style.display = "block";